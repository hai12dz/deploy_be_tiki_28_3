import React, { useState, useEffect } from 'react';
import './filter.modal.new.scss';

interface FilterNewProductModalProps {
    isModalOpen: boolean;
    setIsModalOpen: (isOpen: boolean) => void;
    queryFiler?: string;
    setQueryFilter?: (query: string) => void;
    listBrand: IBrands[];
    listSupplier: ISupplier[];
    pageSize: number;
    setListBook: (books: IBookTable[]) => void;
    setTotal: (total: number) => void;
    listFullCategory: ICategory[];
    selectedBrands: string[];
    selectedSuppliers: string[];
    setParentSelectedBrands: (brands: string[]) => void;
    setParentSelectedSuppliers: (suppliers: string[]) => void;
    setParentTempSelectedBrands: (brands: string[]) => void;
    setParentTempSelectedSuppliers: (suppliers: string[]) => void;
}

const FilterNewProductModal: React.FC<FilterNewProductModalProps> = ({
    isModalOpen,
    setIsModalOpen,
    queryFiler,
    setQueryFilter,
    listBrand,
    listSupplier,
    pageSize,
    setListBook,
    setTotal,
    listFullCategory,
    selectedBrands,
    selectedSuppliers,
    setParentSelectedBrands,
    setParentSelectedSuppliers,
    setParentTempSelectedBrands,
    setParentTempSelectedSuppliers
}) => {
    const [tempSelectedBrands, setTempSelectedBrands] = useState<string[]>([]);
    const [tempSelectedSuppliers, setTempSelectedSuppliers] = useState<string[]>([]);
    const [fastDeliveryChecked, setFastDeliveryChecked] = useState<boolean>(false);
    const [cheapPriceChecked, setCheapPriceChecked] = useState<boolean>(false);
    const [freeShipChecked, setFreeShipChecked] = useState<boolean>(false);
    const [fourStarsChecked, setFourStarsChecked] = useState<boolean>(false);
    const [fiveStarsChecked, setFiveStarsChecked] = useState<boolean>(false);
    const [threeStarsChecked, setThreeStarsChecked] = useState<boolean>(false);
    const [priceRange, setPriceRange] = useState<{ min: string, max: string }>({ min: '', max: '' });

    // Initialize temp selections when modal opens
    useEffect(() => {
        if (isModalOpen) {
            setTempSelectedBrands([...selectedBrands]);
            setTempSelectedSuppliers([...selectedSuppliers]);
        }
    }, [isModalOpen, selectedBrands, selectedSuppliers]);

    const handleClose = () => {
        setIsModalOpen(false);
    };

    const handleBrandToggle = (brand: string) => {
        setTempSelectedBrands(prev =>
            prev.includes(brand)
                ? prev.filter(b => b !== brand)
                : [...prev, brand]
        );
    };

    const handleSupplierToggle = (supplier: string) => {
        setTempSelectedSuppliers(prev =>
            prev.includes(supplier)
                ? prev.filter(s => s !== supplier)
                : [...prev, supplier]
        );
    };

    const handleRatingToggle = (rating: number) => {
        if (rating === 5) {
            setFiveStarsChecked(!fiveStarsChecked);
            if (fiveStarsChecked) {
                setFourStarsChecked(false);
                setThreeStarsChecked(false);
            }
        } else if (rating === 4) {
            setFourStarsChecked(!fourStarsChecked);
            if (fourStarsChecked) {
                setFiveStarsChecked(false);
                setThreeStarsChecked(false);
            }
        } else if (rating === 3) {
            setThreeStarsChecked(!threeStarsChecked);
            if (threeStarsChecked) {
                setFiveStarsChecked(false);
                setFourStarsChecked(false);
            }
        }
    };

    const handlePriceRangeChange = (e: React.ChangeEvent<HTMLInputElement>, type: 'min' | 'max') => {
        const value = e.target.value.replace(/\D/g, ''); // Remove non-digits
        setPriceRange(prev => ({
            ...prev,
            [type]: value
        }));
    };

    const handleApplyFilters = () => {
        // Update parent component state
        setParentSelectedBrands(tempSelectedBrands);
        setParentSelectedSuppliers(tempSelectedSuppliers);
        setParentTempSelectedBrands(tempSelectedBrands);
        setParentTempSelectedSuppliers(tempSelectedSuppliers);

        // Build query string for API
        let query = '';

        // Add rating filter
        if (fiveStarsChecked) {
            query += '&minRating=5';
        } else if (fourStarsChecked) {
            query += '&minRating=4';
        } else if (threeStarsChecked) {
            query += '&minRating=3';
        }

        // Add service filters
        if (fastDeliveryChecked) {
            query += '&fastDelivery=true';
        }
        if (cheapPriceChecked) {
            query += '&cheapPrice=true';
        }
        if (freeShipChecked) {
            query += '&freeShipping=true';
        }

        // Add price range filter
        if (priceRange.min && priceRange.max) {
            query += `&price_gte=${priceRange.min}&price_lte=${priceRange.max}`;
        } else if (priceRange.min) {
            query += `&price_gte=${priceRange.min}`;
        } else if (priceRange.max) {
            query += `&price_lte=${priceRange.max}`;
        }

        // Update query filter if the function is provided
        if (setQueryFilter) {
            setQueryFilter(query);
        }

        setIsModalOpen(false);
    };

    const handleResetFilters = () => {
        // Clear all filters
        setTempSelectedBrands([]);
        setTempSelectedSuppliers([]);
        setFastDeliveryChecked(false);
        setCheapPriceChecked(false);
        setFreeShipChecked(false);
        setFourStarsChecked(false);
        setFiveStarsChecked(false);
        setThreeStarsChecked(false);
        setPriceRange({ min: '', max: '' });
    };

    if (!isModalOpen) return null;

    return (
        <div className="sc-add2a4bc-2 fgRNmz">
            <div className="sc-add2a4bc-3 boGFxq">
                <div className="btn-close" onClick={handleClose}>
                    <img src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/close.svg" alt="Close" />
                </div>
                <div className="title">Tất cả bộ lọc</div>
            </div>
            <div className="sc-add2a4bc-4 kXxzcv">
                <div className="top-filter" />
                <div
                    data-view-id="search_filter_container"
                    data-view-content='{"click_data":{"trace_id":"3i46AbE15RkJfGR1"}}'
                    className="sc-6a0d1b22-0 bUkXlp"
                >
                    <h4 className="title">Dịch vụ</h4>
                    <div className="sc-6a0d1b22-1 kvcRVh">
                        <div
                            data-view-index={0}
                            data-view-id="search_filter_item"
                            data-view-label="Giao siêu tốc 2H"
                        >
                            <div className="sc-aaa42ade-0 hxysjC" onClick={() => setFastDeliveryChecked(!fastDeliveryChecked)}>
                                <div className="sc-eca64225-3 Ywrhm" style={{ marginRight: 8 }}>
                                    <span className="box">
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
                                </div>
                                <img
                                    src="https://salt.tikicdn.com/ts/tka/a8/31/b6/802e2c99dcce64c67aa2648edb15dd25.png"
                                    alt="Giao siêu tốc 2H"
                                    className="sc-aaa42ade-1 vQcnP"
                                    style={{ height: 17 }}
                                />
                                <div className="sc-aaa42ade-2 hCmoWw">
                                    <span>Giao siêu tốc 2H</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    data-view-id="search_filter_container"
                    data-view-content='{"click_data":{"trace_id":"3i46AbE15RkJfGR1"}}'
                    className="sc-6a0d1b22-0 bUkXlp"
                >
                    <h4 className="title">Ưu đãi</h4>
                    <div className="sc-6a0d1b22-1 kvcRVh">
                        <div
                            data-view-index={0}
                            data-view-id="search_filter_item"
                            data-view-label="Siêu rẻ"
                        >
                            <div className="sc-aaa42ade-0 hxysjC" onClick={() => setCheapPriceChecked(!cheapPriceChecked)}>
                                <div className="sc-eca64225-3 Ywrhm" style={{ marginRight: 8 }}>
                                    <span className="box">
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
                                </div>
                                <img
                                    src="https://salt.tikicdn.com/ts/upload/b5/aa/48/2305c5e08e536cfb840043df12818146.png"
                                    alt="Siêu rẻ"
                                    className="sc-aaa42ade-1 vQcnP"
                                    style={{ height: 16 }}
                                />
                                <div className="sc-aaa42ade-2 hCmoWw">
                                    <span>Siêu rẻ</span>
                                </div>
                            </div>
                        </div>
                        <div
                            data-view-index={0}
                            data-view-id="search_filter_item"
                            data-view-label=""
                        >
                            <div className="sc-aaa42ade-0 hxysjC" onClick={() => setFreeShipChecked(!freeShipChecked)}>
                                <div className="sc-eca64225-3 Ywrhm" style={{ marginRight: 8 }}>
                                    <span className="box">
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
                                </div>
                                <img
                                    src="https://salt.tikicdn.com/ts/upload/2f/20/77/0f96cfafdf7855d5e7fe076dd4f34ce0.png"
                                    alt="FREESHIP XTRA"
                                    className="sc-aaa42ade-1 vQcnP"
                                    style={{ height: 16 }}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Rating section */}
                <div
                    data-view-id="search_filter_container"
                    data-view-label="Đánh giá"
                    className="sc-63e2c595-0 hQRBhv"
                >
                    <h4 className="title">Đánh giá</h4>
                    <div className="sc-63e2c595-1 dzxWIG">
                        <div className="item" onClick={() => handleRatingToggle(5)}>
                            <div className="sc-aaa42ade-0 hxysjC">
                                <div className="sc-eca64225-3 Ywrhm" style={{ marginRight: 8 }}>
                                    <span className="box">
                                        <img
                                            className={`icon-check-on ${fiveStarsChecked ? 'visible' : ''}`}
                                            src="https://salt.tikicdn.com/ts/upload/3a/f3/e4/b9e681d6b71abcc05f6c00399361bb81.png"
                                            alt="active-checkbox"
                                        />
                                        <img
                                            className={`icon-check-off ${!fiveStarsChecked ? 'visible' : ''}`}
                                            src="https://salt.tikicdn.com/ts/upload/03/a5/2f/df8fb591920f048e53c88e18c84dd7d4.png"
                                            alt="default-checkbox"
                                        />
                                        <img
                                            className="icon-check-hover"
                                            src="https://salt.tikicdn.com/ts/upload/d2/16/38/c83c70851f66b169788bda4732b496a1.png"
                                            alt="hovered-checkbox"
                                        />
                                    </span>
                                </div>
                                <div className="sc-3064fef6-0 gXyJLZ" style={{ marginRight: 8, transform: "translateY(-1px)" }}>
                                    {/* Star rating UI remains the same */}
                                </div>
                                <div className="sc-aaa42ade-2 hCmoWw">
                                    <span>từ 5 sao</span>
                                </div>
                            </div>
                        </div>

                        <div className="item" onClick={() => handleRatingToggle(4)}>
                            <div className="sc-aaa42ade-0 hxysjC">
                                <div className="sc-eca64225-3 Ywrhm" style={{ marginRight: 8 }}>
                                    <span className="box">
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
                                </div>
                                <div className="sc-3064fef6-0 gXyJLZ" style={{ marginRight: 8, transform: "translateY(-1px)" }}>
                                    {/* Star rating UI remains the same */}
                                </div>
                                <div className="sc-aaa42ade-2 hCmoWw">
                                    <span>từ 4 sao</span>
                                </div>
                            </div>
                        </div>

                        <div className="item" onClick={() => handleRatingToggle(3)}>
                            <div className="sc-aaa42ade-0 hxysjC">
                                <div className="sc-eca64225-3 Ywrhm" style={{ marginRight: 8 }}>
                                    <span className="box">
                                        <img
                                            className={`icon-check-on ${threeStarsChecked ? 'visible' : ''}`}
                                            src="https://salt.tikicdn.com/ts/upload/3a/f3/e4/b9e681d6b71abcc05f6c00399361bb81.png"
                                            alt="active-checkbox"
                                        />
                                        <img
                                            className={`icon-check-off ${!threeStarsChecked ? 'visible' : ''}`}
                                            src="https://salt.tikicdn.com/ts/upload/03/a5/2f/df8fb591920f048e53c88e18c84dd7d4.png"
                                            alt="default-checkbox"
                                        />
                                        <img
                                            className="icon-check-hover"
                                            src="https://salt.tikicdn.com/ts/upload/d2/16/38/c83c70851f66b169788bda4732b496a1.png"
                                            alt="hovered-checkbox"
                                        />
                                    </span>
                                </div>
                                <div className="sc-3064fef6-0 gXyJLZ" style={{ marginRight: 8, transform: "translateY(-1px)" }}>
                                    {/* Star rating UI remains the same */}
                                </div>
                                <div className="sc-aaa42ade-2 hCmoWw">
                                    <span>từ 3 sao</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Price range section */}
                <div className="sc-63e2c595-0 hQRBhv">
                    <h4 className="title">Giá</h4>
                    <div className="sc-63e2c595-3 ikRKtr">
                        <div className="group">
                            <input
                                pattern="[0-9]*"
                                placeholder="Từ"
                                value={priceRange.min}
                                onChange={(e) => handlePriceRangeChange(e, 'min')}
                            />
                            <span>₫</span>
                        </div>
                        <span>-</span>
                        <div className="group">
                            <input
                                pattern="[0-9]*"
                                placeholder="Đến"
                                value={priceRange.max}
                                onChange={(e) => handlePriceRangeChange(e, 'max')}
                            />
                            <span>₫</span>
                        </div>
                        {priceRange.min && priceRange.max && parseInt(priceRange.min) > parseInt(priceRange.max) && (
                            <p>Giá trị đầu phải nhỏ hơn hoặc bằng giá trị sau</p>
                        )}
                    </div>
                </div>

                {/* Brand section */}
                <div className="sc-63e2c595-0 hQRBhv">
                    <h4 className="title">Thương hiệu</h4>
                    <div className="sc-63e2c595-1 dzxWIG list">
                        {listBrand.map((brand, index) => (
                            <label
                                key={brand.id || index}
                                className={`item ${index > 5 ? 'hide' : ''} item--brand`}
                                onClick={() => handleBrandToggle(brand.name)}
                            >
                                <div className="sc-aaa42ade-0 hxysjC lines">
                                    <div className="sc-eca64225-3 Ywrhm" style={{ marginRight: 8 }}>
                                        <span className="box">
                                            <img
                                                className={`icon-check-on ${tempSelectedBrands.includes(brand.name) ? 'visible' : ''}`}
                                                src="https://salt.tikicdn.com/ts/upload/3a/f3/e4/b9e681d6b71abcc05f6c00399361bb81.png"
                                                alt="active-checkbox"
                                            />
                                            <img
                                                className={`icon-check-off ${!tempSelectedBrands.includes(brand.name) ? 'visible' : ''}`}
                                                src="https://salt.tikicdn.com/ts/upload/03/a5/2f/df8fb591920f048e53c88e18c84dd7d4.png"
                                                alt="default-checkbox"
                                            />
                                            <img
                                                className="icon-check-hover"
                                                src="https://salt.tikicdn.com/ts/upload/d2/16/38/c83c70851f66b169788bda4732b496a1.png"
                                                alt="hovered-checkbox"
                                            />
                                        </span>
                                    </div>
                                    <div className="sc-aaa42ade-2 hCmoWw">
                                        <span>{brand.name}</span>
                                    </div>
                                </div>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Supplier section */}
                <div className="sc-63e2c595-0 hQRBhv">
                    <h4 className="title">Nhà cung cấp</h4>
                    <div className="sc-63e2c595-1 dzxWIG list">
                        {listSupplier.map((supplier, index) => (
                            <label
                                key={supplier.id || index}
                                className={`item ${index > 5 ? 'hide' : ''} item--seller`}
                                onClick={() => handleSupplierToggle(supplier.name)}
                            >
                                <div className="sc-aaa42ade-0 hxysjC lines">
                                    <div className="sc-eca64225-3 Ywrhm" style={{ marginRight: 8 }}>
                                        <span className="box">
                                            <img
                                                className={`icon-check-on ${tempSelectedSuppliers.includes(supplier.name) ? 'visible' : ''}`}
                                                src="https://salt.tikicdn.com/ts/upload/3a/f3/e4/b9e681d6b71abcc05f6c00399361bb81.png"
                                                alt="active-checkbox"
                                            />
                                            <img
                                                className={`icon-check-off ${!tempSelectedSuppliers.includes(supplier.name) ? 'visible' : ''}`}
                                                src="https://salt.tikicdn.com/ts/upload/03/a5/2f/df8fb591920f048e53c88e18c84dd7d4.png"
                                                alt="default-checkbox"
                                            />
                                            <img
                                                className="icon-check-hover"
                                                src="https://salt.tikicdn.com/ts/upload/d2/16/38/c83c70851f66b169788bda4732b496a1.png"
                                                alt="hovered-checkbox"
                                            />
                                        </span>
                                    </div>
                                    <div className="sc-aaa42ade-2 hCmoWw">
                                        <span>{supplier.name}</span>
                                    </div>
                                </div>
                            </label>
                        ))}
                    </div>
                </div>
            </div>
            <div className="sc-add2a4bc-5 bubSYk">
                <div className="sc-add2a4bc-6 cBZRwi" onClick={handleResetFilters}>Xoá tất cả</div>
                <div className="sc-add2a4bc-6 UkSzZ" onClick={handleApplyFilters}>Xem kết quả</div>
            </div>
        </div>
    );
};

export default FilterNewProductModal;