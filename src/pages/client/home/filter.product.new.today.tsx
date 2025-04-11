import { useEffect, useState, useRef } from "react";
import { getBooksAPI, getBrandsAPI, getSuppliersAPI } from "@/services/api";
import { useFilterContext } from "@/context/FilterContext";
import ReactDOM from 'react-dom';

interface NewFilterTodayProps {
    onListBookChange?: (books: IBookTable[]) => void;
    isLoading?: boolean;
    setIsLoading?: (loading: boolean) => void;
}

const NewFilterToday: React.FC<NewFilterTodayProps> = ({
    onListBookChange,
    isLoading,
    setIsLoading
}) => {
    // State for dynamic data
    const [listBrands, setListBrands] = useState<IBrands[]>([]);
    const [listSuppliers, setListSuppliers] = useState<ISupplier[]>([]);
    const [sortMenuVisible, setSortMenuVisible] = useState(false);
    const [brandModalVisible, setBrandModalVisible] = useState(false);
    const [supplierModalVisible, setSupplierModalVisible] = useState(false);
    const [tempSelectedBrands, setTempSelectedBrands] = useState<string[]>([]);
    const [tempSelectedSuppliers, setTempSelectedSuppliers] = useState<string[]>([]);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);

    // Refs for handling dropdown positioning and scrolling
    const sortButtonRef = useRef<HTMLDivElement>(null);
    const brandButtonRef = useRef<HTMLButtonElement>(null);
    const supplierButtonRef = useRef<HTMLButtonElement>(null);
    const modalRef = useRef<HTMLDivElement>(null);
    const brandContainerRef = useRef<HTMLDivElement>(null);
    const supplierContainerRef = useRef<HTMLDivElement>(null);
    const sectionRef = useRef<HTMLDivElement>(null);
    const optionsRef = useRef<HTMLDivElement>(null);

    // Get filter context values
    const {
        selectedBrands, setSelectedBrands,
        selectedSuppliers, setSelectedSuppliers,
        fastDeliveryChecked, setFastDeliveryChecked,
        cheapPriceChecked, setCheapPriceChecked,
        freeShipChecked, setFreeShipChecked,
        fourStarsChecked, setFourStarsChecked,
        selectedSort, setSelectedSort,
        pageSize, setPageSize,
        minPrice, maxPrice
    } = useFilterContext();

    // Sort options
    const sortOptions = ['Phổ biến', 'Bán chạy', 'Hàng mới', 'Giá thấp đến cao', 'Giá cao đến thấp'];

    // Fetch data on component mount
    useEffect(() => {
        fetchBrands();
        fetchSuppliers();
    }, []);

    // Apply filters when they change
    useEffect(() => {
        applyFilters();
    }, [
        selectedBrands,
        selectedSuppliers,
        fastDeliveryChecked,
        cheapPriceChecked,
        freeShipChecked,
        fourStarsChecked,
        selectedSort
    ]);

    // Fetch brands from API
    const fetchBrands = async () => {
        try {
            const response = await getBrandsAPI();
            if (response && response.data) {
                setListBrands(response.data);
            }
        } catch (error) {
            console.error("Error fetching brands:", error);
        }
    };

    // Fetch suppliers from API
    const fetchSuppliers = async () => {
        try {
            const response = await getSuppliersAPI();
            if (response && response.data) {
                setListSuppliers(response.data);
            }
        } catch (error) {
            console.error("Error fetching suppliers:", error);
        }
    };

    // Apply filters and fetch books
    const applyFilters = async () => {
        if (setIsLoading) setIsLoading(true);

        try {
            let query = `pageSize=${pageSize || 10}`;

            // Add sort parameter if selected
            if (selectedSort) {
                const sortCode = getSortCode(selectedSort);
                query += `&sort=${sortCode}`;
            }

            // Add brand filters
            if (selectedBrands.length > 0) {
                query += `&brands=${selectedBrands.join(',')}`;
            }

            // Add supplier filters
            if (selectedSuppliers.length > 0) {
                query += `&suppliers=${selectedSuppliers.join(',')}`;
            }

            // Add other filters
            if (fastDeliveryChecked) query += `&fastDelivery=true`;
            if (cheapPriceChecked) query += `&cheapPrice=true`;
            if (freeShipChecked) query += `&freeShipping=true`;
            if (fourStarsChecked) query += `&minRating=4`;

            // Price range filters
            if (minPrice) query += `&priceBottom=${minPrice}`;
            if (maxPrice) query += `&priceTop=${maxPrice}`;

            const response = await getBooksAPI(query);

            if (response && response.data && response.data.items) {
                // Update parent component with books
                if (onListBookChange) {
                    onListBookChange(response.data.items);
                }
            }
        } catch (error) {
            console.error("Error applying filters:", error);
        } finally {
            if (setIsLoading) setIsLoading(false);
        }
    };

    // Convert sort text to API parameter
    const getSortCode = (sortText: string) => {
        switch (sortText) {
            case 'Phổ biến': return 'popular';
            case 'Bán chạy': return 'bestselling';
            case 'Hàng mới': return 'newest';
            case 'Giá thấp đến cao': return 'price-asc';
            case 'Giá cao đến thấp': return 'price-desc';
            default: return 'popular';
        }
    };

    // Handlers for brand modal
    const handleBrandButtonClick = () => {
        setTempSelectedBrands([...selectedBrands]);
        setBrandModalVisible(!brandModalVisible);
        setSupplierModalVisible(false);
        setSortMenuVisible(false);
    };

    const handleBrandSelect = (brand: string) => {
        setTempSelectedBrands(prevBrands =>
            prevBrands.includes(brand)
                ? prevBrands.filter(b => b !== brand)
                : [...prevBrands, brand]
        );
    };

    const applyBrandSelection = () => {
        setSelectedBrands(tempSelectedBrands);
        setBrandModalVisible(false);
    };

    // Handlers for supplier modal
    const handleSupplierButtonClick = () => {
        setTempSelectedSuppliers([...selectedSuppliers]);
        setSupplierModalVisible(!supplierModalVisible);
        setBrandModalVisible(false);
        setSortMenuVisible(false);
    };

    const handleSupplierSelect = (supplier: string) => {
        setTempSelectedSuppliers(prevSuppliers =>
            prevSuppliers.includes(supplier)
                ? prevSuppliers.filter(s => s !== supplier)
                : [...prevSuppliers, supplier]
        );
    };

    const applySupplierSelection = () => {
        setSelectedSuppliers(tempSelectedSuppliers);
        setSupplierModalVisible(false);
    };

    // Handler for sort selection
    const handleSortClick = () => {
        setSortMenuVisible(!sortMenuVisible);
        setBrandModalVisible(false);
        setSupplierModalVisible(false);
    };

    const handleSortSelect = (option: string) => {
        setSelectedSort(option);
        setSortMenuVisible(false);
    };

    // Toggle filter checkboxes with proper visual feedback
    const toggleFastDelivery = () => {
        setFastDeliveryChecked(!fastDeliveryChecked);
    };

    const toggleCheapPrice = () => {
        setCheapPriceChecked(!cheapPriceChecked);
    };

    const toggleFreeShip = () => {
        setFreeShipChecked(!freeShipChecked);
    };

    const toggleFourStars = () => {
        setFourStarsChecked(!fourStarsChecked);
    };

    // Helper to render a limited number of items in UI
    const getDisplayItems = (items: string[], count: number = 4) => {
        return items.slice(0, count);
    };

    // Helper to format supplier names
    const formatSupplierName = (name: string) => {
        if (name.length > 20) {
            return name.substring(0, 19) + '…';
        }
        return name;
    };

    // Click outside handler for modals
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            // Check for brand modal
            if (brandModalVisible &&
                brandButtonRef.current &&
                !brandButtonRef.current.contains(event.target as Node) &&
                modalRef.current &&
                !modalRef.current.contains(event.target as Node)) {
                setBrandModalVisible(false);
            }

            // Check for supplier modal
            if (supplierModalVisible &&
                supplierButtonRef.current &&
                !supplierButtonRef.current.contains(event.target as Node) &&
                modalRef.current &&
                !modalRef.current.contains(event.target as Node)) {
                setSupplierModalVisible(false);
            }

            // Check for sort menu
            if (sortMenuVisible &&
                sortButtonRef.current &&
                !sortButtonRef.current.contains(event.target as Node)) {
                setSortMenuVisible(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [brandModalVisible, supplierModalVisible, sortMenuVisible]);

    // Horizontal scrolling handlers for filter sections
    const handleScroll = (direction: 'left' | 'right') => {
        if (sectionRef.current && optionsRef.current) {
            const containerWidth = sectionRef.current.offsetWidth;
            const contentWidth = optionsRef.current.scrollWidth;
            const maxScroll = contentWidth - containerWidth;

            let newPosition = direction === 'left'
                ? Math.max(0, scrollPosition - 200)
                : Math.min(maxScroll, scrollPosition + 200);

            setScrollPosition(newPosition);
            optionsRef.current.style.transform = `translateX(-${newPosition}px)`;

            // Show/hide scroll arrows
            setShowLeftArrow(newPosition > 0);
        }
    };

    // Render brand selection modal
    const renderBrandModal = () => {
        if (!brandModalVisible || !brandButtonRef.current) return null;

        const buttonRect = brandButtonRef.current.getBoundingClientRect();

        return ReactDOM.createPortal(
            <div
                ref={modalRef}
                className="brand-selection-modal"
                style={{
                    position: 'absolute',
                    top: `${buttonRect.bottom + window.scrollY + 10}px`,
                    left: `${buttonRect.left + window.scrollX - 200}px`,
                    zIndex: 1000,
                    background: 'white',
                    border: '1px solid #ddd',
                    borderRadius: '8px',
                    padding: '16px',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                    width: '300px'
                }}
            >
                <div className="brand-selection-content">
                    <div className="brand-selection-options" style={{ maxHeight: '300px', overflowY: 'auto' }}>
                        {listBrands.map((brand, index) => (
                            <div
                                key={index}
                                style={{
                                    padding: '8px 12px',
                                    cursor: 'pointer',
                                    backgroundColor: tempSelectedBrands.includes(brand.name) ? '#f0f8ff' : 'white',
                                    margin: '4px 0',
                                    borderRadius: '4px',
                                    display: 'flex',
                                    alignItems: 'center'
                                }}
                                onClick={() => handleBrandSelect(brand.name)}
                            >
                                <div style={{ marginRight: '8px' }}>
                                    <input
                                        type="checkbox"
                                        checked={tempSelectedBrands.includes(brand.name)}
                                        readOnly
                                    />
                                </div>
                                <div>{brand.name}</div>
                            </div>
                        ))}
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '16px' }}>
                        <button
                            onClick={() => setTempSelectedBrands([])}
                            style={{ padding: '8px 16px', border: '1px solid #ddd', borderRadius: '4px', background: 'white' }}
                        >
                            Xóa lọc
                        </button>
                        <button
                            onClick={applyBrandSelection}
                            style={{ padding: '8px 16px', background: '#0060ff', color: 'white', border: 'none', borderRadius: '4px' }}
                        >
                            Xem kết quả
                        </button>
                    </div>
                </div>
            </div>,
            document.body
        );
    };

    // Render supplier selection modal
    const renderSupplierModal = () => {
        if (!supplierModalVisible || !supplierButtonRef.current) return null;

        const buttonRect = supplierButtonRef.current.getBoundingClientRect();

        return ReactDOM.createPortal(
            <div
                ref={modalRef}
                className="supplier-selection-modal"
                style={{
                    position: 'absolute',
                    top: `${buttonRect.bottom + window.scrollY + 10}px`,
                    left: `${buttonRect.left + window.scrollX - 200}px`,
                    zIndex: 1000,
                    background: 'white',
                    border: '1px solid #ddd',
                    borderRadius: '8px',
                    padding: '16px',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                    width: '300px'
                }}
            >
                <div className="supplier-selection-content">
                    <div className="supplier-selection-options" style={{ maxHeight: '300px', overflowY: 'auto' }}>
                        {listSuppliers.map((supplier, index) => (
                            <div
                                key={index}
                                style={{
                                    padding: '8px 12px',
                                    cursor: 'pointer',
                                    backgroundColor: tempSelectedSuppliers.includes(supplier.name) ? '#f0f8ff' : 'white',
                                    margin: '4px 0',
                                    borderRadius: '4px',
                                    display: 'flex',
                                    alignItems: 'center'
                                }}
                                onClick={() => handleSupplierSelect(supplier.name)}
                            >
                                <div style={{ marginRight: '8px' }}>
                                    <input
                                        type="checkbox"
                                        checked={tempSelectedSuppliers.includes(supplier.name)}
                                        readOnly
                                    />
                                </div>
                                <div>{supplier.name}</div>
                            </div>
                        ))}
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '16px' }}>
                        <button
                            onClick={() => setTempSelectedSuppliers([])}
                            style={{ padding: '8px 16px', border: '1px solid #ddd', borderRadius: '4px', background: 'white' }}
                        >
                            Xóa lọc
                        </button>
                        <button
                            onClick={applySupplierSelection}
                            style={{ padding: '8px 16px', background: '#0060ff', color: 'white', border: 'none', borderRadius: '4px' }}
                        >
                            Xem kết quả
                        </button>
                    </div>
                </div>
            </div>,
            document.body
        );
    };

    // Render sort dropdown
    const renderSortDropdown = () => {
        if (!sortMenuVisible || !sortButtonRef.current) return null;

        const buttonRect = sortButtonRef.current.getBoundingClientRect();

        return ReactDOM.createPortal(
            <div
                className="sort-menu"
                style={{
                    position: 'absolute',
                    top: `${buttonRect.bottom + window.scrollY}px`,
                    right: `${window.innerWidth - buttonRect.right}px`,
                    zIndex: 1000,
                    background: 'white',
                    border: '1px solid #ddd',
                    borderRadius: '8px',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                    width: '200px'
                }}
            >
                {sortOptions.map((option, index) => (
                    <div
                        key={index}
                        style={{
                            padding: '12px 16px',
                            cursor: 'pointer',
                            backgroundColor: selectedSort === option ? '#f0f8ff' : 'white',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}
                        onClick={() => handleSortSelect(option)}
                    >
                        {option}
                        {selectedSort === option && (
                            <img
                                src="https://salt.tikicdn.com/ts/upload/0a/3f/8c/35f5967924f138b30c5840d3907ba081.png"
                                alt="selected"
                                width="16"
                                height="16"
                            />
                        )}
                    </div>
                ))}
            </div>,
            document.body
        );
    };

    return (
        <div className="sc-dc63c727-0 eBNJvi">
            <div className="sc-dc63c727-1 bHGEYe">Tất cả sản phẩm</div>
            <div className="sc-92fcafd8-0 fLLNCa">
                <div className="sc-7361b68-0 jPfQtU">
                    <div className="sc-22175ea6-0 bolcif">
                        <div className="sc-22175ea6-1 kwosOp">
                            <div
                                className="sc-22175ea6-2 jHfdYL"
                                ref={optionsRef}
                                style={{ transform: `translateX(-${scrollPosition}px)` }}
                            >
                                <div>
                                    <div className="sc-22175ea6-3 jycPXl">Thương hiệu</div>
                                    <div className="sc-22175ea6-4 cOBCCm" ref={brandContainerRef}>
                                        {/* Display up to 4 brand options */}
                                        {getDisplayItems(listBrands.map(brand => brand.name)).map((brand, index) => (
                                            <button
                                                key={index}
                                                className={`sc-bd134f7-0 sc-bd134f7-1 weoZA hapXaW filter-child ${selectedBrands.includes(brand) ? 'selected' : ''}`}
                                                style={{ marginRight: index < 3 ? "8px" : "0px" }}
                                                onClick={() => {
                                                    const newSelectedBrands = selectedBrands.includes(brand)
                                                        ? selectedBrands.filter(b => b !== brand)
                                                        : [...selectedBrands, brand];
                                                    setSelectedBrands(newSelectedBrands);
                                                }}
                                            >
                                                <div className="sc-bd134f7-2 jaczNN">{brand}</div>
                                            </button>
                                        ))}
                                        {/* Brand dropdown button */}
                                        <button
                                            ref={brandButtonRef}
                                            className="sc-a287ca93-0 sc-a287ca93-1 iNPxYw dyvIJm filter-child filter-dropdown"
                                            onClick={handleBrandButtonClick}
                                            aria-describedby="brand-dropdown"
                                        >
                                            <img
                                                src="https://frontend.tikicdn.com/_desktop-next/static/img/catalog/arrow.svg"
                                                alt="arrow"
                                                className="sc-7361b68-2 esqRqh"
                                            />
                                        </button>
                                    </div>
                                </div>
                                <div
                                    className="sc-7361b68-1 bBHRSE"
                                    style={{
                                        marginLeft: "16px",
                                        marginRight: "16px",
                                        alignSelf: "flex-end",
                                    }}
                                />
                                <div>
                                    <div className="sc-22175ea6-3 jycPXl">Nhà cung cấp</div>
                                    <div className="sc-22175ea6-4 cOBCCm" ref={supplierContainerRef}>
                                        {/* Display up to 4 supplier options */}
                                        {getDisplayItems(listSuppliers.map(supplier => supplier.name)).map((supplier, index) => (
                                            <button
                                                key={index}
                                                className={`sc-bd134f7-0 sc-bd134f7-1 weoZA hapXaW filter-child ${selectedSuppliers.includes(supplier) ? 'selected' : ''}`}
                                                style={{ marginRight: index < 3 ? "8px" : "0px" }}
                                                onClick={() => {
                                                    const newSelectedSuppliers = selectedSuppliers.includes(supplier)
                                                        ? selectedSuppliers.filter(s => s !== supplier)
                                                        : [...selectedSuppliers, supplier];
                                                    setSelectedSuppliers(newSelectedSuppliers);
                                                }}
                                            >
                                                <div className="sc-bd134f7-2 jaczNN">{formatSupplierName(supplier)}</div>
                                            </button>
                                        ))}
                                        {/* Supplier dropdown button */}
                                        <button
                                            ref={supplierButtonRef}
                                            className="sc-a287ca93-0 sc-a287ca93-1 iNPxYw dyvIJm filter-child filter-dropdown"
                                            onClick={handleSupplierButtonClick}
                                            aria-describedby="supplier-dropdown"
                                        >
                                            <img
                                                src="https://frontend.tikicdn.com/_desktop-next/static/img/catalog/arrow.svg"
                                                alt="arrow"
                                                className="sc-7361b68-2 esqRqh"
                                            />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Right arrow button - for scrolling right */}
                            <div
                                className="sc-52fbe9f3-0 cZbPqU"
                                style={{
                                    position: "absolute",
                                    right: "0px",
                                    bottom: "0px",
                                    display: optionsRef.current && optionsRef.current.scrollWidth > optionsRef.current.offsetWidth ? "block" : "none",
                                }}
                                onClick={() => handleScroll('right')}
                            >
                                <div className="sc-52fbe9f3-1 iFTBpb arrow-icon-wrapper">
                                    <img
                                        src="https://frontend.tikicdn.com/_desktop-next/static/img/catalog/arrow.svg"
                                        alt="arrow"
                                        className="sc-7361b68-2 esqRqh"
                                        style={{ transform: "rotate(-90deg)" }}
                                    />
                                </div>
                            </div>

                            {/* Left arrow button - for scrolling left */}
                            <div
                                className="sc-52fbe9f3-0 fFSVOV"
                                style={{
                                    position: "absolute",
                                    left: "0px",
                                    bottom: "0px",
                                    display: showLeftArrow ? "block" : "none",
                                }}
                                onClick={() => handleScroll('left')}
                            >
                                <div className="sc-52fbe9f3-1 iFTBpb arrow-icon-wrapper">
                                    <img
                                        src="https://frontend.tikicdn.com/_desktop-next/static/img/catalog/arrow.svg"
                                        alt="arrow"
                                        className="sc-7361b68-2 esqRqh"
                                        style={{ transform: "rotate(90deg)" }}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Reset filters button */}
                        <div style={{ marginLeft: "auto", display: "flex", flexShrink: 0 }}>
                            <div
                                className="sc-7361b68-1 bBHRSE"
                                style={{
                                    marginLeft: "16px",
                                    marginRight: "16px",
                                    alignSelf: "flex-end",
                                }}
                            />
                            <button
                                className="sc-a04c7302-0 grYDwO"
                                onClick={() => {
                                    // Reset all filters
                                    setSelectedBrands([]);
                                    setSelectedSuppliers([]);
                                    setFastDeliveryChecked(false);
                                    setCheapPriceChecked(false);
                                    setFreeShipChecked(false);
                                    setFourStarsChecked(false);
                                }}
                            >
                                <img
                                    src="https://salt.tikicdn.com/ts/upload/3f/23/35/2d29fcaea0d10cbb85ce5b0d4cd20add.png"
                                    alt="filters"
                                    className="sc-a04c7302-1 dGFmnx"
                                />
                                <div>Tất cả</div>
                            </button>
                        </div>
                    </div>

                    <div className="sc-2da8e6fd-0 ceYFfu">
                        <div className="sc-2da8e6fd-1 hSNPhu" ref={sectionRef}>
                            <div
                                className="sc-2da8e6fd-2 gKaIac"
                                style={{ transform: "translateX(0px)" }}
                            >
                                {/* Fast delivery filter */}
                                <div className="sc-aaa42ade-0 hxysjC filter-child2">
                                    <div
                                        className="sc-eca64225-3 Ywrhm"
                                        style={{ marginRight: "8px" }}
                                        onClick={toggleFastDelivery}
                                    >
                                        <span className="box">
                                            <img
                                                className="icon-check-on"
                                                src="https://salt.tikicdn.com/ts/upload/3a/f3/e4/b9e681d6b71abcc05f6c00399361bb81.png"
                                                alt="active-checkbox"
                                                style={{ display: fastDeliveryChecked ? 'inline' : 'none' }}
                                            />
                                            <img
                                                className="icon-check-off"
                                                src="https://salt.tikicdn.com/ts/upload/03/a5/2f/df8fb591920f048e53c88e18c84dd7d4.png"
                                                alt="default-checkbox"
                                                style={{ display: !fastDeliveryChecked ? 'inline' : 'none' }}
                                            />
                                            <img
                                                className="icon-check-hover"
                                                src="https://salt.tikicdn.com/ts/upload/d2/16/38/c83c70851f66b169788bda4732b496a1.png"
                                                alt="hovered-checkbox"
                                            />
                                        </span>
                                    </div>
                                    <img
                                        src="https://salt.tikicdn.com/ts/tka/a8/31/b6/802e2c99dcce64c67aa2648edb15dd25.png"
                                        alt="Giao siêu tốc 2H"
                                        className="sc-aaa42ade-1 vQcnP"
                                        style={{ height: "17px" }}
                                        onClick={toggleFastDelivery}
                                    />
                                    <div
                                        className="sc-aaa42ade-2 hCmoWw"
                                        onClick={toggleFastDelivery}
                                    >
                                        <span>Giao siêu tốc 2H</span>
                                    </div>
                                </div>
                                <div
                                    className="sc-7361b68-1 bBHRSE"
                                    style={{
                                        height: "24px",
                                        marginLeft: "16px",
                                        marginRight: "16px",
                                    }}
                                />

                                {/* Cheap price filter */}
                                <div className="sc-aaa42ade-0 hxysjC filter-child2">
                                    <div
                                        className="sc-eca64225-3 Ywrhm"
                                        style={{ marginRight: "8px" }}
                                        onClick={toggleCheapPrice}
                                    >
                                        <span className="box">
                                            <img
                                                className="icon-check-on"
                                                src="https://salt.tikicdn.com/ts/upload/3a/f3/e4/b9e681d6b71abcc05f6c00399361bb81.png"
                                                alt="active-checkbox"
                                                style={{ display: cheapPriceChecked ? 'inline' : 'none' }}
                                            />
                                            <img
                                                className="icon-check-off"
                                                src="https://salt.tikicdn.com/ts/upload/03/a5/2f/df8fb591920f048e53c88e18c84dd7d4.png"
                                                alt="default-checkbox"
                                                style={{ display: !cheapPriceChecked ? 'inline' : 'none' }}
                                            />
                                            <img
                                                className="icon-check-hover"
                                                src="https://salt.tikicdn.com/ts/upload/d2/16/38/c83c70851f66b169788bda4732b496a1.png"
                                                alt="hovered-checkbox"
                                            />
                                        </span>
                                    </div>
                                    <img
                                        src="https://salt.tikicdn.com/ts/upload/b5/aa/48/2305c5e08e536cfb840043df12818146.png"
                                        alt="Siêu rẻ"
                                        className="sc-aaa42ade-1 vQcnP"
                                        style={{ height: "16px" }}
                                        onClick={toggleCheapPrice}
                                    />
                                    <div
                                        className="sc-aaa42ade-2 hCmoWw"
                                        onClick={toggleCheapPrice}
                                    >
                                        <span>Siêu rẻ</span>
                                    </div>
                                </div>
                                <div
                                    className="sc-7361b68-1 bBHRSE"
                                    style={{
                                        height: "24px",
                                        marginLeft: "16px",
                                        marginRight: "16px",
                                    }}
                                />

                                {/* Free shipping filter */}
                                <div className="sc-aaa42ade-0 hxysjC filter-child2">
                                    <div
                                        className="sc-eca64225-3 Ywrhm"
                                        style={{ marginRight: "8px" }}
                                        onClick={toggleFreeShip}
                                    >
                                        <span className="box">
                                            <img
                                                className="icon-check-on"
                                                src="https://salt.tikicdn.com/ts/upload/3a/f3/e4/b9e681d6b71abcc05f6c00399361bb81.png"
                                                alt="active-checkbox"
                                                style={{ display: freeShipChecked ? 'inline' : 'none' }}
                                            />
                                            <img
                                                className="icon-check-off"
                                                src="https://salt.tikicdn.com/ts/upload/03/a5/2f/df8fb591920f048e53c88e18c84dd7d4.png"
                                                alt="default-checkbox"
                                                style={{ display: !freeShipChecked ? 'inline' : 'none' }}
                                            />
                                            <img
                                                className="icon-check-hover"
                                                src="https://salt.tikicdn.com/ts/upload/d2/16/38/c83c70851f66b169788bda4732b496a1.png"
                                                alt="hovered-checkbox"
                                            />
                                        </span>
                                    </div>
                                    <img
                                        src="https://salt.tikicdn.com/ts/upload/2f/20/77/0f96cfafdf7855d5e7fe076dd4f34ce0.png"
                                        alt=""
                                        className="sc-aaa42ade-1 vQcnP"
                                        style={{ height: "16px" }}
                                        onClick={toggleFreeShip}
                                    />
                                </div>
                                <div
                                    className="sc-7361b68-1 bBHRSE"
                                    style={{
                                        height: "24px",
                                        marginLeft: "16px",
                                        marginRight: "16px",
                                    }}
                                />

                                {/* 4 star rating filter */}
                                <div className="sc-aaa42ade-0 hxysjC filter-child2">
                                    <div
                                        className="sc-eca64225-3 Ywrhm"
                                        style={{ marginRight: "8px" }}
                                        onClick={toggleFourStars}
                                    >
                                        <span className="box">
                                            <img
                                                className="icon-check-on"
                                                src="https://salt.tikicdn.com/ts/upload/3a/f3/e4/b9e681d6b71abcc05f6c00399361bb81.png"
                                                alt="active-checkbox"
                                                style={{ display: fourStarsChecked ? 'inline' : 'none' }}
                                            />
                                            <img
                                                className="icon-check-off"
                                                src="https://salt.tikicdn.com/ts/upload/03/a5/2f/df8fb591920f048e53c88e18c84dd7d4.png"
                                                alt="default-checkbox"
                                                style={{ display: !fourStarsChecked ? 'inline' : 'none' }}
                                            />
                                            <img
                                                className="icon-check-hover"
                                                src="https://salt.tikicdn.com/ts/upload/d2/16/38/c83c70851f66b169788bda4732b496a1.png"
                                                alt="hovered-checkbox"
                                            />
                                        </span>
                                    </div>
                                    <div
                                        className="sc-3064fef6-0 gXyJLZ"
                                        style={{ marginRight: "8px", transform: "translateY(-1px)" }}
                                        onClick={toggleFourStars}
                                    >
                                        <div
                                            style={{
                                                zIndex: 2,
                                                position: "absolute",
                                                left: "0px",
                                                top: "0px",
                                                bottom: "0px",
                                                width: "80%",
                                                overflow: "hidden",
                                                display: "flex",
                                                alignItems: "center"
                                            }}
                                        >
                                            {/* Yellow stars */}
                                            {[...Array(5)].map((_, index) => (
                                                <svg
                                                    key={index}
                                                    width={12}
                                                    height={12}
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    style={{ width: "12px", height: "12px" }}
                                                >
                                                    <g clipPath="url(#a)">
                                                        <path
                                                            d="M6.448 2.029a.5.5 0 0 0-.896 0L4.287 4.59l-2.828.41a.5.5 0 0 0-.277.854l2.046 1.994-.483 2.816a.5.5 0 0 0 .726.528L6 9.863l2.53 1.33a.5.5 0 0 0 .725-.527l-.483-2.817 2.046-1.994a.5.5 0 0 0-.277-.853L7.713 4.59 6.448 2.029Z"
                                                            fill="#FFC400"
                                                        />
                                                    </g>
                                                    <defs>
                                                        <clipPath id={`clip${index}`}>
                                                            <path
                                                                fill="#fff"
                                                                transform="translate(1 1.5)"
                                                                d="M0 0h10v10H0z"
                                                            />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            ))}
                                        </div>
                                        {/* Gray star outlines */}
                                        {[...Array(5)].map((_, index) => (
                                            <svg
                                                key={index}
                                                width={12}
                                                height={12}
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <g clipPath={`url(#grayClip${index})`}>
                                                    <path
                                                        d="M6.448 2.029a.5.5 0 0 0-.896 0L4.287 4.59l-2.828.41a.5.5 0 0 0-.277.854l2.046 1.994-.483 2.816a.5.5 0 0 0 .726.528L6 9.863l2.53 1.33a.5.5 0 0 0 .725-.527l-.483-2.817 2.046-1.994a.5.5 0 0 0-.277-.853L7.713 4.59 6.448 2.029Z"
                                                        fill="#DDDDE3"
                                                    />
                                                </g>
                                                <defs>
                                                    <clipPath id={`grayClip${index}`}>
                                                        <path
                                                            fill="#fff"
                                                            transform="translate(1 1.5)"
                                                            d="M0 0h10v10H0z"
                                                        />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        ))}
                                    </div>
                                    <div
                                        className="sc-aaa42ade-2 hCmoWw"
                                        onClick={toggleFourStars}
                                    >
                                        <span>từ 4 sao</span>
                                    </div>
                                </div>
                            </div>

                            {/* Arrow control buttons for second row */}
                            <div
                                className="sc-52fbe9f3-0 cZbPqU sc-2da8e6fd-3 eogXNM"
                                style={{
                                    position: "absolute",
                                    right: "0px",
                                    bottom: "0px",
                                    display: "none",
                                }}
                            >
                                <div className="sc-52fbe9f3-1 iFTBpb arrow-icon-wrapper">
                                    <img
                                        src="https://frontend.tikicdn.com/_desktop-next/static/img/catalog/arrow.svg"
                                        alt="arrow"
                                        className="sc-7361b68-2 esqRqh"
                                        style={{ transform: "rotate(-90deg)" }}
                                    />
                                </div>
                            </div>
                            <div
                                className="sc-52fbe9f3-0 fFSVOV sc-2da8e6fd-3 eogXNM"
                                style={{
                                    position: "absolute",
                                    left: "0px",
                                    bottom: "0px",
                                    display: "none",
                                }}
                            >
                                <div className="sc-52fbe9f3-1 iFTBpb arrow-icon-wrapper">
                                    <img
                                        src="https://frontend.tikicdn.com/_desktop-next/static/img/catalog/arrow.svg"
                                        alt="arrow"
                                        className="sc-7361b68-2 esqRqh"
                                        style={{ transform: "rotate(90deg)" }}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Sort dropdown */}
                        <div style={{ marginLeft: "auto", display: "flex", flexShrink: 0 }}>
                            <div style={{ marginLeft: "16px" }} />
                            <div className="sc-169acb76-0 jwzuoe">
                                <div className="sc-169acb76-1 cyJqQu">Sắp xếp</div>
                                <div
                                    ref={sortButtonRef}
                                    className="sc-169acb76-2 keUrBT"
                                    onClick={handleSortClick}
                                >
                                    <div style={{ marginRight: "8px" }}>{selectedSort || 'Phổ biến'}</div>
                                    <img
                                        src="https://frontend.tikicdn.com/_desktop-next/static/img/catalog/arrow.svg"
                                        alt="arrow"
                                        className="sc-7361b68-2 esqRqh"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Render modals */}
            {renderBrandModal()}
            {renderSupplierModal()}
            {renderSortDropdown()}
        </div>
    );
};

// Default props
NewFilterToday.defaultProps = {
    onListBookChange: undefined,
    isLoading: false,
    setIsLoading: undefined
};

export default NewFilterToday;