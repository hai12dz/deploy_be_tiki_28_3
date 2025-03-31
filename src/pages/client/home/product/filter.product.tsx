import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './filter.product.scss';
import FilterProduct from './modal.filter';
import { useOutletContext } from 'react-router-dom';
import { getBooksAPI, getBrandsAPI, getFullCategories, getSuppliersAPI } from '@/services/api';
import { set } from 'lodash';

const ProductFilter: React.FC = () => {
    const [brandExpanded, setBrandExpanded] = useState(false);
    const [supplierExpanded, setSupplierExpanded] = useState(false);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [sortMenuVisible, setSortMenuVisible] = useState(false);
    const [selectedSort, setSelectedSort] = useState('Phổ biến');
    const sortOptions = ['Phổ biến', 'Bán chạy', 'Hàng mới', 'Giá thấp đến cao', 'Giá cao đến thấp'];
    const sortButtonRef = useRef<HTMLButtonElement>(null);
    const sortMenuRef = useRef<HTMLDivElement>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [queryFiler, setQueryFilter] = useState<string>("")
    const [category, setCategory] = useState<string>("")
    const [listBrand, setListBrand] = useState<IBrands[]>([])
    const [listSupplier, setListSupplier] = useState<ISupplier[]>([])
    const [listBook, setListBook] = useState<IBookTable[]>([]);
    const [pageSize, setPageSize] = useState<number>(10);
    const [total, setTotal] = useState<number>(0);
    const [listFullCategory, setListFullCategory] = useState<ICategory[]>([])
    const containerRef = useRef<HTMLDivElement>(null);
    const expandButtonRef = useRef<HTMLButtonElement>(null);
    const modalRef = useRef<HTMLDivElement>(null);
    const [current, setCurrent] = useState<number>(1);
    const [filter, setFilter] = useState<string>("");
    const [sortQuery, setSortQuery] = useState<string>("sort=-sold");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [searchTerm, setSearchTerm] = useOutletContext() as any;
    const [followSupplier, setFollowSupplier] = useState<boolean>(false);
    const [fastDeliveryChecked, setFastDeliveryChecked] = useState(false);
    const [cheapPriceChecked, setCheapPriceChecked] = useState(false);
    const [freeShipChecked, setFreeShipChecked] = useState(false);
    const [fourStarsChecked, setFourStarsChecked] = useState(false);

    const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
    const [selectedSuppliers, setSelectedSuppliers] = useState<string[]>([]);
    const [tempSelectedBrands, setTempSelectedBrands] = useState<string[]>([]);
    const [tempSelectedSuppliers, setTempSelectedSuppliers] = useState<string[]>([]);

    useEffect(() => {
        fetchBrand();
        fetchSupplier();
        fetchFullCategories();
    }, []);

    useEffect(() => {
        fetchBook();
    }, [current, pageSize, filter, sortQuery]);

    const fetchBook = async () => {
        setIsLoading(true)
        let query = `current=${current}&pageSize=${pageSize}`;
        if (filter) {
            query += `&${filter}`;
        }
        if (sortQuery) {
            query += `&${sortQuery}`;
        }

        if (searchTerm) {
            query += `&mainText=/${searchTerm}/i`;
        }

        const res = await getBooksAPI(query);
        if (res && res.data) {
            setListBook(res.data.items);
            setTotal(res.data.meta.totalItems)
        }
        setIsLoading(false)
    }

    const fetchBrand = async () => {
        const res = await getBrandsAPI();
        setListBrand(res.data!)
    }

    const fetchSupplier = async () => {
        const res = await getSuppliersAPI();
        setListSupplier(res.data!)
    }

    const fetchFullCategories = async () => {
        const res = await getFullCategories()
        setListFullCategory(res.data!)
    }

    const brands = ["Deli", "Thiên Long", "MAGIX", "Hồng Hà"];
    const brandsFull = ["Deli", "Thiên Long", "MAGIX", "Hồng Hà"];

    const suppliers = ["Nhà Sách Vĩnh Thụy", "Bamboo Books", "HỆ THỐNG NHÀ SÁCH AB..."];
    const suppliersFull = ["Nhà Sách Vĩnh Thụy", "Bamboo Books", "HỆ THỐNG NHÀ SÁCH AB...", "info book"];

    const allBrands = [
        "Deli", "Thiên Long", "MAGIX", "Hồng Hà",
        "K&B Handmade", "KLONG", "Pentel", "Stacom",
        "Stabilo", "LAMY", "Plus", "Uyên Loan", "Campus",
        "Baoke", "Enter", "Fahasa", "PROLEA PL", "Bavico",
        "Flexoffice", "Việt Net", "Văn Lang", "The Sun",
        "Artline", "Casio", "Mont Marte", "DAICAT",
        "Kai Nguyên", "PILOT", "Uncle Bills", "Elephant"
    ];

    const allSuppliers = [
        "Nhà Sách Vĩnh Thụy", "Bamboo Books", "HỆ THỐNG NHÀ SÁCH ABC", "info book",
        "Nhà sách Fahasa", "Nhà Sách Trẻ Online", "VBooks", "Tiki Trading",
        "Bảo Châu Books", "FishingBook", "NHBook", "Alpha Books Official",
        "Gooda Official", "SÁCH ĐẠI NAM", "AHABOOKS", "Times Books",
        "Nhà sách Hà Nội Books", "NewShop Official", "Sống Official", "Phương Đông Books", "Sống Official", "Sống Official", "Sống Official", "Sống Official", "Sống Official", "Sống Official", "Sống Official", "Sống Official", "Sống Official"
    ];

    const isSupplierSelected = (supplier: string) => {
        if (supplier.endsWith('...')) {
            const baseText = supplier.slice(0, -3);
            return selectedSuppliers.some(s => s.startsWith(baseText));
        }
        return selectedSuppliers.includes(supplier);
    };

    const handleBrandToggle = () => {
        if (!brandExpanded) {
            setTempSelectedBrands([...selectedBrands]);
        }
        setBrandExpanded(prev => !prev);
    };

    const handleBrandSelect = (brand: string) => {
        if (!brandExpanded) {
            setSelectedBrands(prev =>
                prev.includes(brand)
                    ? prev.filter(b => b !== brand)
                    : [...prev, brand]
            );
        }
    };

    const handleResetBrands = () => {
        setTempSelectedBrands([]);
    };

    const handleSupplierToggle = () => {
        setBrandExpanded(false);

        if (!supplierExpanded) {
            setSupplierExpanded(true);
            setTempSelectedSuppliers([...selectedSuppliers]);
            return;
        }

        if (supplierExpanded && !followSupplier) {
            setFollowSupplier(true);
            setTempSelectedSuppliers([...selectedSuppliers]);
            return;
        }

        if (followSupplier) {
            setFollowSupplier(false);
            return;
        }
    };

    const handleSupplierSelect = (supplier: string) => {
        if (!supplierExpanded) {
            const actualSupplier = supplier.endsWith('...')
                ? allSuppliers.find(s => s.startsWith(supplier.slice(0, -3))) || supplier
                : supplier;

            setSelectedSuppliers(prev =>
                prev.includes(actualSupplier)
                    ? prev.filter(s => s !== actualSupplier)
                    : [...prev, actualSupplier]
            );
        }
    };

    const handleResetSuppliers = () => {
        setTempSelectedSuppliers([]);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (
            modalRef.current &&
            !modalRef.current.contains(event.target as Node) &&
            expandButtonRef.current &&
            !expandButtonRef.current.contains(event.target as Node) &&
            !(event.target as HTMLElement).closest('.arrow-button')
        ) {
            setBrandExpanded(false);
            setFollowSupplier(false);
        }
    };

    useEffect(() => {
        if (brandExpanded || supplierExpanded) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [brandExpanded, supplierExpanded]);

    const renderBrandModal = () => {
        if (!brandExpanded || !expandButtonRef.current) {
            return null;
        }

        const buttonRect = expandButtonRef.current.getBoundingClientRect();

        return ReactDOM.createPortal(
            <div
                ref={modalRef}
                className="brand-selection-modal brand-modal-portal"
                style={{
                    top: `${buttonRect.bottom + window.scrollY + 10}px`,
                    left: `${buttonRect.left + window.scrollX - 200}px`,
                }}
            >
                <div className="brand-selection-content">
                    <div className="brand-selection-options">
                        {allBrands.map((brand, index) => (
                            <button
                                key={index}
                                className={`brand-selection-chip ${tempSelectedBrands.includes(brand) ? 'selected' : ''}`}
                                onClick={() => {
                                    setTempSelectedBrands(prev =>
                                        prev.includes(brand)
                                            ? prev.filter(b => b !== brand)
                                            : [...prev, brand]
                                    );
                                }}
                            >
                                {brand}
                            </button>
                        ))}
                    </div>
                    <div className="brand-selection-actions">
                        <button className="reset-button" onClick={handleResetBrands}>
                            Xóa lọc
                        </button>
                        <button className="apply-button" onClick={() => {
                            setSelectedBrands(tempSelectedBrands);
                            handleBrandToggle();
                        }}>
                            Xem kết quả
                        </button>
                    </div>
                </div>
            </div>,
            document.body
        );
    };

    const renderSupplierModal = () => {
        if (!supplierExpanded || !expandButtonRef.current) {
            return null;
        }

        const buttonRect = expandButtonRef.current.getBoundingClientRect();

        return ReactDOM.createPortal(
            <div
                ref={modalRef}
                className="supplier-selection-modal supplier-modal-portal"
                style={{
                    top: `${buttonRect.bottom + window.scrollY + 10}px`,
                    left: `${buttonRect.left + window.scrollX + 470}px`,
                }}
            >
                <div className="supplier-selection-content supplier-content-scroll">
                    <div className="supplier-selection-options">
                        {allSuppliers.map((supplier, index) => (
                            <button
                                key={index}
                                className={`supplier-selection-chip ${tempSelectedSuppliers.includes(supplier) ? 'selected' : ''}`}
                                onClick={() => {
                                    setTempSelectedSuppliers(prev =>
                                        prev.includes(supplier)
                                            ? prev.filter(s => s !== supplier)
                                            : [...prev, supplier]
                                    );
                                }}
                            >
                                {supplier}
                            </button>
                        ))}
                    </div>
                    <div className="supplier-selection-actions">
                        <button className="reset-button" onClick={handleResetSuppliers}>
                            Xóa lọc
                        </button>
                        <button className="apply-button" onClick={() => {
                            setSelectedSuppliers(tempSelectedSuppliers);
                            handleSupplierToggle();
                        }}>
                            Xem kết quả
                        </button>
                    </div>
                </div>
            </div>,
            document.body
        );
    };

    const handleLeftArrowClick = () => {
        setSupplierExpanded(false);
        setShowLeftArrow(false);
        setBrandExpanded(false);
    };

    useEffect(() => {
        if (containerRef.current) {
            if (supplierExpanded) {
                containerRef.current.style.transform = 'translateX(-82px)';
                containerRef.current.classList.add('translated');
                setShowLeftArrow(true);
            } else {
                containerRef.current.style.transform = 'translateX(0)';
                containerRef.current.classList.remove('translated');
                setShowLeftArrow(false);
            }
        }
    }, [supplierExpanded]);

    const toggleSortMenu = () => {
        setSortMenuVisible((prev) => !prev);
    };

    const handleSortSelect = (option: string) => {
        setSelectedSort(option);
        setSortMenuVisible(false);
    };

    const handleClickOutsideSortMenu = (event: MouseEvent) => {
        if (
            sortMenuRef.current &&
            !sortMenuRef.current.contains(event.target as Node) &&
            sortButtonRef.current &&
            !sortButtonRef.current.contains(event.target as Node)
        ) {
            setSortMenuVisible(false);
        }
    };

    useEffect(() => {
        if (sortMenuVisible) {
            document.addEventListener('mousedown', handleClickOutsideSortMenu);
        } else {
            document.removeEventListener('mousedown', handleClickOutsideSortMenu);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutsideSortMenu);
        };
    }, [sortMenuVisible]);

    const renderSortDropdown = () => {
        if (!sortMenuVisible || !sortButtonRef.current) return null;

        const buttonRect = sortButtonRef.current.getBoundingClientRect();

        return ReactDOM.createPortal(
            <div
                ref={sortMenuRef}
                className="sort-menu visible sort-menu-portal"
                style={{
                    top: `${buttonRect.bottom + window.scrollY}px`,
                    right: '70px',
                }}
            >
                {sortOptions.map((option, index) => (
                    <div
                        key={index}
                        className={`sort-item ${selectedSort === option ? 'selected' : ''}`}
                        onClick={() => handleSortSelect(option)}
                    >
                        {option}
                        {selectedSort === option && (
                            <img
                                src="https://salt.tikicdn.com/ts/upload/0a/3f/8c/35f5967924f138b30c5840d3907ba081.png"
                                alt="selected"
                            />
                        )}
                    </div>
                ))}
            </div>,
            document.body
        );
    };

    return (
        <div className="product-filter-container">
            {showLeftArrow && (
                <div onClick={handleLeftArrowClick} className="left-arrow-button arrow-icon-wrapper">
                    <div className="isolated-img-container">
                        <img
                            src="https://frontend.tikicdn.com/_desktop-next/static/img/catalog/arrow.svg"
                            alt="arrow"
                            className="left-arrow-icon"
                        />
                    </div>
                </div>
            )}

            <div className="filter-sections-wrapper">
                <div className="filter-sections" ref={containerRef}>
                    <div className="filter-section-groups">
                        <div className="filter-sections-brand">
                            <div className="filter-section">
                                <div className="section-label">Thương hiệu</div>
                                <div className="filter-options-wrapper">
                                    <div className="brand-options-container">
                                        <div className="filter-options">
                                            {(brandExpanded ? brandsFull : brands).map((brand, index) => (
                                                <button
                                                    key={index}
                                                    className={`option-chip ${selectedBrands.includes(brand) ? 'selected' : ''}`}
                                                    onClick={() => handleBrandSelect(brand)}
                                                >
                                                    {brand}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                    <button ref={expandButtonRef} className="expand-button" onClick={handleBrandToggle}>
                                        <div>
                                            <img
                                                src="https://frontend.tikicdn.com/_desktop-next/static/img/catalog/arrow.svg"
                                                alt="arrow"
                                                className="arrow-icon-brand"
                                            />
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="vertical-divider"></div>

                        <div className="filter-sections-supplier">
                            <div className="filter-section">
                                <div className="section-label">Nhà cung cấp</div>
                                <div className="filter-options-wrapper">
                                    <div className="supplier-options-container">
                                        <div className="filter-options">
                                            {(supplierExpanded ? suppliersFull : suppliers).map((supplier, index) => (
                                                <button
                                                    key={index}
                                                    className={`option-chip ${isSupplierSelected(supplier) ? 'selected' : ''}`}
                                                    onClick={() => handleSupplierSelect(supplier)}
                                                >
                                                    {supplier}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                    <div onClick={handleSupplierToggle} className="gradient-wrapper">
                                        <img
                                            src="https://frontend.tikicdn.com/_desktop-next/static/img/catalog/arrow.svg"
                                            alt="arrow"
                                            className={`arrow-icon-supplier ${supplierExpanded ? 'rotated' : ''}`}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section-header-divider"></div>

                <div className="filter-header">
                    <div
                        onClick={() => { setIsModalOpen(true) }}
                        className="filter-button">
                        {(selectedBrands.length > 0 || selectedSuppliers.length > 0) && (
                            <div className="icon-click"></div>
                        )}
                        <img
                            src="https://salt.tikicdn.com/ts/upload/3f/23/35/2d29fcaea0d10cbb85ce5b0d4cd20add.png"
                            alt="filters"
                            className="filter-icon"
                        />
                        <span>Tất cả</span>
                    </div>
                </div>
            </div>

            <div className="filter-options-row">
                <label className="option">
                    <span
                        className="box"
                        onClick={() => setFastDeliveryChecked(!fastDeliveryChecked)}
                    >
                        <img
                            className={`icon-check-on ${fastDeliveryChecked ? 'visible' : ''}`}
                            src="https://salt.tikicdn.com/ts/upload/3a/f3/e4/b9e681d6b71abcc05f6c00399361bb81.png"
                            alt="active-checkbox"
                        />
                        <img
                            className={`icon-check-off ${!fastDeliveryChecked ? 'visible' : ''}`}
                            src="https://salt.tikicdn.com/ts/upload/03/a5/2f/df8fb591920f048e53c88e18c84dd7d4.png"
                            alt="default-checkbox"
                        />
                        <img
                            className="icon-check-hover"
                            src="https://salt.tikicdn.com/ts/upload/d2/16/38/c83c70851f66b169788bda4732b496a1.png"
                            alt="hovered-checkbox"
                        />
                    </span>
                    <div
                        className="option-content"
                        onClick={() => setFastDeliveryChecked(!fastDeliveryChecked)}
                    >
                        <img
                            src="https://salt.tikicdn.com/ts/tka/a8/31/b6/802e2c99dcce64c67aa2648edb15dd25.png"
                            alt="Giao siêu tốc 2H"
                            className="now-tag"
                        />
                        <span className="option-text">Giao siêu tốc 2H</span>
                    </div>
                </label>

                <label className="option">
                    <span
                        className="box"
                        onClick={() => setCheapPriceChecked(!cheapPriceChecked)}
                    >
                        <img
                            className={`icon-check-on ${cheapPriceChecked ? 'visible' : ''}`}
                            src="https://salt.tikicdn.com/ts/upload/3a/f3/e4/b9e681d6b71abcc05f6c00399361bb81.png"
                            alt="active-checkbox"
                        />
                        <img
                            className={`icon-check-off ${!cheapPriceChecked ? 'visible' : ''}`}
                            src="https://salt.tikicdn.com/ts/upload/03/a5/2f/df8fb591920f048e53c88e18c84dd7d4.png"
                            alt="default-checkbox"
                        />
                        <img
                            className="icon-check-hover"
                            src="https://salt.tikicdn.com/ts/upload/d2/16/38/c83c70851f66b169788bda4732b496a1.png"
                            alt="hovered-checkbox"
                        />
                    </span>
                    <div
                        className="option-content"
                        onClick={() => setCheapPriceChecked(!cheapPriceChecked)}
                    >
                        <img
                            src="https://salt.tikicdn.com/ts/upload/b5/aa/48/2305c5e08e536cfb840043df12818146.png"
                            alt="Siêu rẻ"
                            className="deal-tag"
                        />
                        <span className="option-text">Siêu rẻ</span>
                    </div>
                </label>

                <label className="option">
                    <span
                        className="box"
                        onClick={() => setFreeShipChecked(!freeShipChecked)}
                    >
                        <img
                            className={`icon-check-on ${freeShipChecked ? 'visible' : ''}`}
                            src="https://salt.tikicdn.com/ts/upload/3a/f3/e4/b9e681d6b71abcc05f6c00399361bb81.png"
                            alt="active-checkbox"
                        />
                        <img
                            className={`icon-check-off ${!freeShipChecked ? 'visible' : ''}`}
                            src="https://salt.tikicdn.com/ts/upload/03/a5/2f/df8fb591920f048e53c88e18c84dd7d4.png"
                            alt="default-checkbox"
                        />
                        <img
                            className="icon-check-hover"
                            src="https://salt.tikicdn.com/ts/upload/d2/16/38/c83c70851f66b169788bda4732b496a1.png"
                            alt="hovered-checkbox"
                        />
                    </span>
                    <div
                        className="option-content"
                        onClick={() => setFreeShipChecked(!freeShipChecked)}
                    >
                        <img
                            src="https://salt.tikicdn.com/ts/upload/2f/20/77/0f96cfafdf7855d5e7fe076dd4f34ce0.png"
                            alt="FREESHIP XTRA"
                            className="freeship-tag"
                        />
                    </div>
                </label>

                <label className="option">
                    <span
                        className="box"
                        onClick={() => setFourStarsChecked(!fourStarsChecked)}
                    >
                        <img
                            className={`icon-check-on ${fourStarsChecked ? 'visible' : ''}`}
                            src="https://salt.tikicdn.com/ts/upload/3a/f3/e4/b9e681d6b71abcc05f6c00399361bb81.png"
                            alt="active-checkbox"
                        />
                        <img
                            className={`icon-check-off ${!fourStarsChecked ? 'visible' : ''}`}
                            src="https://salt.tikicdn.com/ts/upload/03/a5/2f/df8fb591920f048e53c88e18c84dd7d4.png"
                            alt="default-checkbox"
                        />
                        <img
                            className="icon-check-hover"
                            src="https://salt.tikicdn.com/ts/upload/d2/16/38/c83c70851f66b169788bda4732b496a1.png"
                            alt="hovered-checkbox"
                        />
                    </span>
                    <div
                        className="option-content"
                        onClick={() => setFourStarsChecked(!fourStarsChecked)}
                    >
                        <div className="star-rating">
                            {[...Array(4)].map((_, index) => (
                                <svg key={index} width="14" height="14" viewBox="0 0 24 24" fill="#FFC400">
                                    <path d="M12 17.8L5.8 21.2L7.3 14.3L2 9.6L9.2 8.7L12 2.5L14.8 8.7L22 9.6L16.7 14.3L18.2 21.2L12 17.8Z" />
                                </svg>
                            ))}
                        </div>
                        <span className="option-text">từ 4 sao</span>
                    </div>
                </label>

                <div className="sort">
                    <span className="sort-label">Sắp xếp</span>
                    <button ref={sortButtonRef} className="sort-button" onClick={toggleSortMenu}>
                        <span>{selectedSort}</span>
                        <img
                            src="https://frontend.tikicdn.com/_desktop-next/static/img/catalog/arrow.svg"
                            alt="arrow"
                            className="arrow-icon-brand"
                        />
                    </button>
                    {renderSortDropdown()}
                </div>
            </div>

            {brandExpanded && renderBrandModal()}
            {followSupplier && renderSupplierModal()}

            <FilterProduct
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
                queryFiler={queryFiler}
                setQueryFilter={setQueryFilter}
                listBrand={listBrand}
                listSupplier={listSupplier}
                pageSize={pageSize}
                setListBook={setListBook}
                setTotal={setTotal}
                listFullCategory={listFullCategory}
                selectedBrands={selectedBrands}
                selectedSuppliers={selectedSuppliers}
            />
        </div>
    );
};

export default ProductFilter;