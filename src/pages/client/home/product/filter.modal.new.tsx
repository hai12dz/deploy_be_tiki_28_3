import React, { useState, useEffect } from 'react';
import './filter.modal.new.scss';
import { filterBookWithFullInfoAPI } from '@/services/api';
import { Form, InputNumber, Row, Col, Divider, Button } from 'antd';

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
    fastDeliveryChecked?: boolean;
    cheapPriceChecked?: boolean;
    freeShipChecked?: boolean;
    fourStarsChecked?: boolean;
    setFastDeliveryChecked?: (checked: boolean) => void;
    setCheapPriceChecked?: (checked: boolean) => void;
    setFreeShipChecked?: (checked: boolean) => void;
    setFourStarsChecked?: (checked: boolean) => void;
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
    setParentTempSelectedSuppliers,
    fastDeliveryChecked = false,
    cheapPriceChecked = false,
    freeShipChecked = false,
    fourStarsChecked = false,
    setFastDeliveryChecked,
    setCheapPriceChecked,
    setFreeShipChecked,
    setFourStarsChecked
}) => {
    const [brand, setBrand] = useState<string>('');
    const [supplier, setSupplier] = useState<string>('');
    const [showFullBrandList, setShowFullBrandList] = useState(false);
    const [showFullSupplierList, setShowFullSupplierList] = useState(false);
    const [tempSelectedBrands, setTempSelectedBrands] = useState<string[]>([]);
    const [tempSelectedSuppliers, setTempSelectedSuppliers] = useState<string[]>([]);
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [category, setCategory] = useState<string>('');
    const [selectedServices, setSelectedServices] = useState<string[]>([]);
    const [selectedPromotions, setSelectedPromotions] = useState<string[]>([]);
    const [selectedRatings, setSelectedRatings] = useState<string[]>([]);
    const [localFastDeliveryChecked, setLocalFastDeliveryChecked] = useState<boolean>(fastDeliveryChecked);
    const [localCheapPriceChecked, setLocalCheapPriceChecked] = useState<boolean>(cheapPriceChecked);
    const [localFreeShipChecked, setLocalFreeShipChecked] = useState<boolean>(freeShipChecked);
    const [localFourStarsChecked, setLocalFourStarsChecked] = useState<boolean>(fourStarsChecked);
    const [minPrice, setMinPrice] = useState<string>('');
    const [maxPrice, setMaxPrice] = useState<string>('');
    const [priceError, setPriceError] = useState<string>('');

    const [form] = Form.useForm();

    useEffect(() => {
        if (isModalOpen) {
            setTempSelectedBrands([...selectedBrands]);
            setBrand(selectedBrands.join(','));

            const resolvedSuppliers = selectedSuppliers.map(supplier => {
                if (supplier.endsWith('...')) {
                    const fullSupplier = listSupplier.find(s =>
                        s.name.startsWith(supplier.slice(0, -3))
                    )?.name;
                    return fullSupplier || supplier;
                }
                return supplier;
            });

            setTempSelectedSuppliers(resolvedSuppliers);
            setSupplier(resolvedSuppliers.join(','));

            setLocalFastDeliveryChecked(fastDeliveryChecked);
            setLocalCheapPriceChecked(cheapPriceChecked);
            setLocalFreeShipChecked(freeShipChecked);
            setLocalFourStarsChecked(fourStarsChecked);

            setSelectedServices(prev => {
                const newServices = [...prev].filter(s => s !== 'Giao siêu tốc 2H');
                if (fastDeliveryChecked) {
                    newServices.push('Giao siêu tốc 2H');
                }
                return newServices;
            });

            setSelectedPromotions(prev => {
                let newPromotions = [...prev].filter(p => p !== 'Siêu rẻ' && p !== 'FREESHIP XTRA');
                if (cheapPriceChecked) {
                    newPromotions.push('Siêu rẻ');
                }
                if (freeShipChecked) {
                    newPromotions.push('FREESHIP XTRA');
                }
                return newPromotions;
            });

            setSelectedRatings(prev => {
                let newRatings = [...prev].filter(r => r !== '4 sao' && r !== '5 sao' && r !== '3 sao');
                if (fourStarsChecked) {
                    newRatings.push('4 sao');
                }
                return newRatings;
            });
        }
    }, [isModalOpen, selectedBrands, selectedSuppliers, listSupplier, fastDeliveryChecked, cheapPriceChecked, freeShipChecked, fourStarsChecked]);

    const handleClose = () => {
        form.resetFields();
        setIsModalOpen(false);
    };

    const handleBackdropClick = (e: React.MouseEvent) => {
        // Only close if clicking directly on the backdrop, not on the modal content
        if (e.target === e.currentTarget) {
            handleClose();
        }
    };

    const onChangeCheckBox = (type: 'brand' | 'supplier' | 'category' | 'service' | 'promotion' | 'rating', name: string) => {
        if (type === 'brand') {
            setTempSelectedBrands((prev) => {
                const updatedBrands = prev.includes(name) ? prev.filter((item) => item !== name) : [...prev, name];
                setBrand(updatedBrands.join(','));
                return updatedBrands;
            });
        } else if (type === 'supplier') {
            setTempSelectedSuppliers((prev) => {
                const updatedSuppliers = prev.includes(name) ? prev.filter((item) => item !== name) : [...prev, name];
                setSupplier(updatedSuppliers.join(','));
                return updatedSuppliers;
            });
        } else if (type === 'category') {
            setSelectedCategories((prev) => {
                const updatedCategories = prev.includes(name) ? prev.filter((item) => item !== name) : [...prev, name];
                setCategory(updatedCategories.join(','));
                return updatedCategories;
            });
        } else if (type === 'service') {
            setSelectedServices((prev) => {
                const updatedServices = prev.includes(name) ? prev.filter((item) => item !== name) : [...prev, name];
                if (name === 'Giao siêu tốc 2H') {
                    setLocalFastDeliveryChecked(!prev.includes(name));
                }
                return updatedServices;
            });
        } else if (type === 'promotion') {
            setSelectedPromotions((prev) => {
                const updatedPromotions = prev.includes(name) ? prev.filter((item) => item !== name) : [...prev, name];
                if (name === 'Siêu rẻ') {
                    setLocalCheapPriceChecked(!prev.includes(name));
                }
                if (name === 'FREESHIP XTRA') {
                    setLocalFreeShipChecked(!prev.includes(name));
                }
                return updatedPromotions;
            });
        } else if (type === 'rating') {
            setSelectedRatings((prev) => {
                const updatedRatings = prev.includes(name) ? prev.filter((item) => item !== name) : [...prev, name];
                if (name === '4 sao') {
                    setLocalFourStarsChecked(!prev.includes(name));
                }
                return updatedRatings;
            });
        }
    };

    const validatePriceRange = () => {
        if (minPrice && maxPrice && parseInt(minPrice) > parseInt(maxPrice)) {
            setPriceError('Giá trị đầu phải nhỏ hơn hoặc bằng giá trị sau');
        } else {
            setPriceError('');
        }
    };

    const setPriceRange = (min: number, max: number) => {
        setMinPrice(min.toString());
        setMaxPrice(max.toString());
        setPriceError('');
        form.setFieldsValue({ minPrice: min, maxPrice: max });
    };

    const handlePriceChange = (type: 'min' | 'max', value: string) => {
        const numericValue = value.replace(/[^0-9]/g, '');

        if (type === 'min') {
            setMinPrice(numericValue);
            form.setFieldsValue({ minPrice: numericValue ? parseInt(numericValue) : undefined });
        } else {
            setMaxPrice(numericValue);
            form.setFieldsValue({ maxPrice: numericValue ? parseInt(numericValue) : undefined });
        }
    };

    const clearPriceInputs = () => {
        setMinPrice('');
        setMaxPrice('');
        setPriceError('');
        form.setFieldsValue({ minPrice: undefined, maxPrice: undefined });
    };

    const handleApplyFilters = async () => {
        try {
            const values = await form.validateFields();

            if (setFastDeliveryChecked) setFastDeliveryChecked(localFastDeliveryChecked);
            if (setCheapPriceChecked) setCheapPriceChecked(localCheapPriceChecked);
            if (setFreeShipChecked) setFreeShipChecked(localFreeShipChecked);
            if (setFourStarsChecked) setFourStarsChecked(localFourStarsChecked);

            setParentSelectedBrands(tempSelectedBrands);
            setParentSelectedSuppliers(tempSelectedSuppliers);
            setParentTempSelectedBrands(tempSelectedBrands);
            setParentTempSelectedSuppliers(tempSelectedSuppliers);

            let query = `current=1&pageSize=${pageSize}`;

            if (brand) query += `&brand=${brand}`;
            if (category) query += `&nameCategory=${category}`;
            if (supplier) query += `&supplier=${supplier}`;

            const minPrice = values.minPrice;
            const maxPrice = values.maxPrice;
            if (minPrice !== undefined) query += `&priceBottom=${minPrice}`;
            if (maxPrice !== undefined) query += `&priceTop=${maxPrice}`;

            if (localFastDeliveryChecked) {
                query += '&fastDelivery=true';
            }

            if (localCheapPriceChecked) {
                query += '&cheapPrice=true';
            }
            if (localFreeShipChecked) {
                query += '&freeShipping=true';
            }

            if (selectedRatings.includes('5 sao')) {
                query += '&minRating=5';
            } else if (selectedRatings.includes('4 sao') || localFourStarsChecked) {
                query += '&minRating=4';
            } else if (selectedRatings.includes('3 sao')) {
                query += '&minRating=3';
            }

            const res = await filterBookWithFullInfoAPI(query);
            setTotal(res.data!.meta.totalItems);
            setListBook(res.data?.items || []);
        } catch (error) {
            console.error("Error applying filters:", error);
        }

        setIsModalOpen(false);
    };

    const handleResetFilters = () => {
        form.resetFields();
        setTempSelectedBrands([]);
        setTempSelectedSuppliers([]);
        setSelectedCategories([]);
        setSelectedServices([]);
        setSelectedPromotions([]);
        setSelectedRatings([]);
        setLocalFastDeliveryChecked(false);
        setLocalCheapPriceChecked(false);
        setLocalFreeShipChecked(false);
        setLocalFourStarsChecked(false);
        setBrand('');
        setSupplier('');
        setCategory('');
    };

    if (!isModalOpen) return null;

    return (
        <>
            <div className="modal-backdrop" onClick={handleBackdropClick}></div>
            <div className="sc-add2a4bc-2 fgRNmz filter-modal-container">
                <div className="sc-add2a4bc-3 boGFxq">
                    <div className="btn-close" onClick={handleClose}>
                        <img src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/close.svg" alt="Close" />
                    </div>
                    <div className="title">Tất cả bộ lọc</div>
                </div>

                <div className="sc-add2a4bc-4 kXxzcv">
                    <div className="modal-content">
                        {/* Dịch vụ (Service) Section */}
                        <div data-view-id="search_filter_container" className="sc-6a0d1b22-0 bUkXlp">
                            <h4 className="title">Dịch vụ</h4>
                            <div className="sc-6a0d1b22-1 kvcRVh">
                                <div data-view-index="0" data-view-id="search_filter_item" data-view-label="Giao siêu tốc 2H">
                                    <div className="sc-aaa42ade-0 hxysjC" onClick={() => onChangeCheckBox('service', 'Giao siêu tốc 2H')}>
                                        <div className="sc-eca64225-3 Ywrhm" style={{ marginRight: "8px" }}>
                                            <span className="box">
                                                <img
                                                    className={`icon-check-on ${selectedServices.includes('Giao siêu tốc 2H') || localFastDeliveryChecked ? 'visible' : ''}`}
                                                    src="https://salt.tikicdn.com/ts/upload/3a/f3/e4/b9e681d6b71abcc05f6c00399361bb81.png"
                                                    alt="active-checkbox"
                                                />
                                                <img
                                                    className={`icon-check-off ${!(selectedServices.includes('Giao siêu tốc 2H') || localFastDeliveryChecked) ? 'visible' : ''}`}
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
                                            style={{ height: "16px" }}
                                        />
                                        <div className="sc-aaa42ade-2 hCmoWw">
                                            <span>Giao siêu tốc 2H</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Divider />

                        {/* Ưu đãi (Promotions) Section */}
                        <div data-view-id="search_filter_container" className="sc-6a0d1b22-0 bUkXlp">
                            <h4 className="title">Ưu đãi</h4>
                            <div className="sc-6a0d1b22-1 kvcRVh">
                                <div data-view-index="0" data-view-id="search_filter_item" data-view-label="Siêu rẻ">
                                    <div className="sc-aaa42ade-0 hxysjC" onClick={() => onChangeCheckBox('promotion', 'Siêu rẻ')}>
                                        <div className="sc-eca64225-3 Ywrhm" style={{ marginRight: "8px" }}>
                                            <span className="box">
                                                <img
                                                    className={`icon-check-on ${selectedPromotions.includes('Siêu rẻ') || localCheapPriceChecked ? 'visible' : ''}`}
                                                    src="https://salt.tikicdn.com/ts/upload/3a/f3/e4/b9e681d6b71abcc05f6c00399361bb81.png"
                                                    alt="active-checkbox"
                                                />
                                                <img
                                                    className={`icon-check-off ${!(selectedPromotions.includes('Siêu rẻ') || localCheapPriceChecked) ? 'visible' : ''}`}
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
                                            style={{ height: "16px" }}
                                        />
                                        <div className="sc-aaa42ade-2 hCmoWw">
                                            <span>Siêu rẻ</span>
                                        </div>
                                    </div>
                                </div>
                                <div data-view-index="0" data-view-id="search_filter_item" data-view-label="">
                                    <div className="sc-aaa42ade-0 hxysjC" onClick={() => onChangeCheckBox('promotion', 'FREESHIP XTRA')}>
                                        <div className="sc-eca64225-3 Ywrhm" style={{ marginRight: "8px" }}>
                                            <span className="box">
                                                <img
                                                    className={`icon-check-on ${selectedPromotions.includes('FREESHIP XTRA') || localFreeShipChecked ? 'visible' : ''}`}
                                                    src="https://salt.tikicdn.com/ts/upload/3a/f3/e4/b9e681d6b71abcc05f6c00399361bb81.png"
                                                    alt="active-checkbox"
                                                />
                                                <img
                                                    className={`icon-check-off ${!(selectedPromotions.includes('FREESHIP XTRA') || localFreeShipChecked) ? 'visible' : ''}`}
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
                                            alt=""
                                            className="sc-aaa42ade-1 vQcnP"
                                            style={{ height: "16px" }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Divider />

                        {/* Đánh giá (Ratings) Section */}
                        <div data-view-id="search_filter_container" className="sc-6a0d1b22-0 bUkXlp">
                            <h4 className="title">Đánh giá</h4>
                            <div className="sc-6a0d1b22-1 kvcRVh">
                                <div data-view-index="0" data-view-id="search_filter_item" data-view-label="5 sao">
                                    <div className="sc-aaa42ade-0 hxysjC" onClick={() => onChangeCheckBox('rating', '5 sao')}>
                                        <div className="sc-eca64225-3 Ywrhm" style={{ marginRight: "8px" }}>
                                            <span className="box">
                                                <img
                                                    className={`icon-check-on ${selectedRatings.includes('5 sao') ? 'visible' : ''}`}
                                                    src="https://salt.tikicdn.com/ts/upload/3a/f3/e4/b9e681d6b71abcc05f6c00399361bb81.png"
                                                    alt="active-checkbox"
                                                />
                                                <img
                                                    className={`icon-check-off ${!selectedRatings.includes('5 sao') ? 'visible' : ''}`}
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
                                            <div className="rating-stars">
                                                {[...Array(5)].map((_, index) => (
                                                    <svg
                                                        key={index}
                                                        width="12"
                                                        height="12"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <g clipPath="url(#a)">
                                                            <path
                                                                d="M6.448 2.029a.5.5 0 0 0-.896 0L4.287 4.59l-2.828.41a.5.5 0 0 0-.277.854l2.046 1.994-.483 2.816a.5.5 0 0 0 .726.528L6 9.863l2.53 1.33a.5.5 0 0 0 .725-.527l-.483-2.817 2.046-1.994a.5.5 0 0 0-.277-.853L7.713 4.59 6.448 2.029Z"
                                                                fill={index < 5 ? "#FFC400" : "#DDDDDD"}
                                                            ></path>
                                                        </g>
                                                        <defs>
                                                            <clipPath id="a">
                                                                <path
                                                                    fill="#fff"
                                                                    transform="translate(1 1.5)"
                                                                    d="M0 0h10v10H0z"
                                                                ></path>
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                ))}
                                                <span>từ 5 sao</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div data-view-index="0" data-view-id="search_filter_item" data-view-label="4 sao">
                                    <div className="sc-aaa42ade-0 hxysjC" onClick={() => onChangeCheckBox('rating', '4 sao')}>
                                        <div className="sc-eca64225-3 Ywrhm" style={{ marginRight: "8px" }}>
                                            <span className="box">
                                                <img
                                                    className={`icon-check-on ${selectedRatings.includes('4 sao') || localFourStarsChecked ? 'visible' : ''}`}
                                                    src="https://salt.tikicdn.com/ts/upload/3a/f3/e4/b9e681d6b71abcc05f6c00399361bb81.png"
                                                    alt="active-checkbox"
                                                />
                                                <img
                                                    className={`icon-check-off ${!(selectedRatings.includes('4 sao') || localFourStarsChecked) ? 'visible' : ''}`}
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
                                            <div className="rating-stars">
                                                {[...Array(5)].map((_, index) => (
                                                    <svg
                                                        key={index}
                                                        width="12"
                                                        height="12"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <g clipPath="url(#a)">
                                                            <path
                                                                d="M6.448 2.029a.5.5 0 0 0-.896 0L4.287 4.59l-2.828.41a.5.5 0 0 0-.277.854l2.046 1.994-.483 2.816a.5.5 0 0 0 .726.528L6 9.863l2.53 1.33a.5.5 0 0 0 .725-.527l-.483-2.817 2.046-1.994a.5.5 0 0 0-.277-.853L7.713 4.59 6.448 2.029Z"
                                                                fill={index < 4 ? "#FFC400" : "#DDDDDD"}
                                                            ></path>
                                                        </g>
                                                        <defs>
                                                            <clipPath id="a">
                                                                <path
                                                                    fill="#fff"
                                                                    transform="translate(1 1.5)"
                                                                    d="M0 0h10v10H0z"
                                                                ></path>
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                ))}
                                                <span>từ 4 sao</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div data-view-index="0" data-view-id="search_filter_item" data-view-label="3 sao">
                                    <div className="sc-aaa42ade-0 hxysjC" onClick={() => onChangeCheckBox('rating', '3 sao')}>
                                        <div className="sc-eca64225-3 Ywrhm" style={{ marginRight: "8px" }}>
                                            <span className="box">
                                                <img
                                                    className={`icon-check-on ${selectedRatings.includes('3 sao') ? 'visible' : ''}`}
                                                    src="https://salt.tikicdn.com/ts/upload/3a/f3/e4/b9e681d6b71abcc05f6c00399361bb81.png"
                                                    alt="active-checkbox"
                                                />
                                                <img
                                                    className={`icon-check-off ${!selectedRatings.includes('3 sao') ? 'visible' : ''}`}
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
                                            <div className="rating-stars">
                                                {[...Array(5)].map((_, index) => (
                                                    <svg
                                                        key={index}
                                                        width="12"
                                                        height="12"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <g clipPath="url(#a)">
                                                            <path
                                                                d="M6.448 2.029a.5.5 0 0 0-.896 0L4.287 4.59l-2.828.41a.5.5 0 0 0-.277.854l2.046 1.994-.483 2.816a.5.5 0 0 0 .726.528L6 9.863l2.53 1.33a.5.5 0 0 0 .725-.527l-.483-2.817 2.046-1.994a.5.5 0 0 0-.277-.853L7.713 4.59 6.448 2.029Z"
                                                                fill={index < 3 ? "#FFC400" : "#DDDDDD"}
                                                            ></path>
                                                        </g>
                                                        <defs>
                                                            <clipPath id="a">
                                                                <path
                                                                    fill="#fff"
                                                                    transform="translate(1 1.5)"
                                                                    d="M0 0h10v10H0z"
                                                                ></path>
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                ))}
                                                <span>từ 3 sao</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Divider />

                        {/* Rest of the sections (Price, Categories, Brands, Suppliers) remain unchanged */}
                        <h3>Giá</h3>
                        <div className="price-wrapper">
                            <div className="price-buttons-container">
                                <Button className="price-button" type="text" onClick={() => setPriceRange(0, 60000)}>
                                    Dưới 60.000
                                </Button>
                                <Button className="price-button" type="text" onClick={() => setPriceRange(60000, 140000)}>
                                    60.000 - 140.000
                                </Button>
                                <Button className="price-button" type="text" onClick={() => setPriceRange(140000, 280000)}>
                                    140.000 - 280.000
                                </Button>
                                <Button className="price-button" type="text" onClick={() => setPriceRange(280000, 10000000)}>
                                    Trên 280.000
                                </Button>
                            </div>
                            <Form form={form} name="control-hooks" onFinish={handleApplyFilters} className="filter-form">
                                <div className="price-range-container">Tự nhập khoảng giá</div>
                                <div className="sc-63e2c595-3 ikRKtr">
                                    <div className="price-input-container">
                                        <div className="group">
                                            <input
                                                pattern="[0-9]*"
                                                placeholder="Từ"
                                                value={minPrice}
                                                onChange={(e) => handlePriceChange('min', e.target.value)}
                                                onBlur={validatePriceRange}
                                            />
                                            <span>₫</span>
                                            {minPrice && (
                                                <img
                                                    src="https://salt.tikicdn.com/ts/upload/1f/f9/28/fae2aa73d63bd27bd330055c37a74e90.png"
                                                    onClick={() => handlePriceChange('min', '')}
                                                    alt="clear"
                                                />
                                            )}
                                        </div>
                                        <span className="separator">-</span>
                                        <div className="group">
                                            <input
                                                pattern="[0-9]*"
                                                placeholder="Đến"
                                                value={maxPrice}
                                                onChange={(e) => handlePriceChange('max', e.target.value)}
                                                onBlur={validatePriceRange}
                                            />
                                            <span>₫</span>
                                            {maxPrice && (
                                                <img
                                                    src="https://salt.tikicdn.com/ts/upload/1f/f9/28/fae2aa73d63bd27bd330055c37a74e90.png"
                                                    onClick={() => handlePriceChange('max', '')}
                                                    alt="clear"
                                                />
                                            )}
                                        </div>
                                        <div className="btn-delete" onClick={clearPriceInputs}>Xoá</div>
                                    </div>
                                    {priceError && <p className="price-error">{priceError}</p>}
                                </div>
                                <Form.Item name="minPrice" hidden>
                                    <InputNumber />
                                </Form.Item>
                                <Form.Item name="maxPrice" hidden>
                                    <InputNumber />
                                </Form.Item>
                            </Form>
                        </div>
                        <Divider />
                        <h3>Thể loại</h3>
                        <Row gutter={[16, 8]}>
                            {listFullCategory.slice(0, showFullBrandList ? undefined : 4).map((item, index) => (
                                <Col key={index} span={12}>
                                    <div className="custom-checkbox" onClick={() => onChangeCheckBox('category', item.name)}>
                                        <span className="checkbox-box">
                                            <img
                                                className={`icon-check-on ${selectedCategories.includes(item.name) ? 'visible' : ''}`}
                                                src="https://salt.tikicdn.com/ts/upload/3a/f3/e4/b9e681d6b71abcc05f6c00399361bb81.png"
                                                alt="active-checkbox"
                                            />
                                            <img
                                                className={`icon-check-off ${!selectedCategories.includes(item.name) ? 'visible' : ''}`}
                                                src="https://salt.tikicdn.com/ts/upload/03/a5/2f/df8fb591920f048e53c88e18c84dd7d4.png"
                                                alt="default-checkbox"
                                            />
                                            <img
                                                className="icon-check-hover"
                                                src="https://salt.tikicdn.com/ts/upload/d2/16/38/c83c70851f66b169788bda4732b496a1.png"
                                                alt="hovered-checkbox"
                                            />
                                        </span>
                                        <span className="checkbox-text">{item.name}</span>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                        {listFullCategory.length > 4 && (
                            <p
                                onClick={() => setShowFullBrandList(!showFullBrandList)}
                                className="show-more-less"
                            >
                                {showFullBrandList ? 'Thu gọn' : 'Xem thêm'}
                            </p>
                        )}
                        <Divider />
                        <h3>Thương hiệu</h3>
                        <Row gutter={[16, 8]}>
                            {listBrand.slice(0, showFullBrandList ? undefined : 5).map((item, index) => (
                                <Col key={index} span={12}>
                                    <div className="custom-checkbox" onClick={() => onChangeCheckBox('brand', item.name)}>
                                        <span className="checkbox-box">
                                            <img
                                                className={`icon-check-on ${tempSelectedBrands.includes(item.name) ? 'visible' : ''}`}
                                                src="https://salt.tikicdn.com/ts/upload/3a/f3/e4/b9e681d6b71abcc05f6c00399361bb81.png"
                                                alt="active-checkbox"
                                            />
                                            <img
                                                className={`icon-check-off ${!tempSelectedBrands.includes(item.name) ? 'visible' : ''}`}
                                                src="https://salt.tikicdn.com/ts/upload/03/a5/2f/df8fb591920f048e53c88e18c84dd7d4.png"
                                                alt="default-checkbox"
                                            />
                                            <img
                                                className="icon-check-hover"
                                                src="https://salt.tikicdn.com/ts/upload/d2/16/38/c83c70851f66b169788bda4732b496a1.png"
                                                alt="hovered-checkbox"
                                            />
                                        </span>
                                        <span className="checkbox-text">{item.name}</span>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                        {listBrand.length > 5 && (
                            <p
                                onClick={() => setShowFullBrandList(!showFullBrandList)}
                                className="show-more-less"
                            >
                                {showFullBrandList ? 'Thu gọn' : 'Xem thêm'}
                            </p>
                        )}
                        <Divider style={{ marginBottom: '12px' }} />
                        <h3>Nhà cung cấp</h3>
                        <Row gutter={[16, 8]} style={{ marginBottom: 0 }}>
                            {listSupplier.slice(0, showFullSupplierList ? undefined : 5).map((item, index) => (
                                <Col key={index} span={12}>
                                    <div className="custom-checkbox" onClick={() => onChangeCheckBox('supplier', item.name)}>
                                        <span className="checkbox-box">
                                            <img
                                                className={`icon-check-on ${tempSelectedSuppliers.includes(item.name) ? 'visible' : ''}`}
                                                src="https://salt.tikicdn.com/ts/upload/3a/f3/e4/b9e681d6b71abcc05f6c00399361bb81.png"
                                                alt="active-checkbox"
                                            />
                                            <img
                                                className={`icon-check-off ${!tempSelectedSuppliers.includes(item.name) ? 'visible' : ''}`}
                                                src="https://salt.tikicdn.com/ts/upload/03/a5/2f/df8fb591920f048e53c88e18c84dd7d4.png"
                                                alt="default-checkbox"
                                            />
                                            <img
                                                className="icon-check-hover"
                                                src="https://salt.tikicdn.com/ts/upload/d2/16/38/c83c70851f66b169788bda4732b496a1.png"
                                                alt="hovered-checkbox"
                                            />
                                        </span>
                                        <span className="checkbox-text">{item.name}</span>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                        {listSupplier.length > 5 && (
                            <p
                                onClick={() => setShowFullSupplierList(!showFullSupplierList)}
                                className="show-more-less"
                                style={{ marginBottom: 0 }}
                            >
                                {showFullSupplierList ? 'Thu gọn' : 'Xem thêm'}
                            </p>
                        )}
                    </div>
                </div>

                <div className="sc-add2a4bc-5 bubSYk">
                    <div className="sc-add2a4bc-6 cBZRwi" onClick={handleResetFilters}>Xoá tất cả</div>
                    <div className="sc-add2a4bc-6 UkSzZ" onClick={handleApplyFilters}>Xem kết quả</div>
                </div>
            </div>
        </>
    );
};

export default FilterNewProductModal;