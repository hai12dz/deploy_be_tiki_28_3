import React, { useState, useEffect } from 'react';
import './filter.modal.new.scss';
import { filterBookWithFullInfoAPI } from '@/services/api';
import { Form, InputNumber, Checkbox, Row, Col, Divider, Button } from 'antd';

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
    const [fastDeliveryChecked, setFastDeliveryChecked] = useState<boolean>(false);
    const [cheapPriceChecked, setCheapPriceChecked] = useState<boolean>(false);
    const [freeShipChecked, setFreeShipChecked] = useState<boolean>(false);
    const [fourStarsChecked, setFourStarsChecked] = useState<boolean>(false);

    const [form] = Form.useForm();

    // Initialize temp selections when modal opens
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

            setSelectedServices(prev => {
                const newServices = [...prev];
                if (fastDeliveryChecked && !newServices.includes('Giao siêu tốc 2H')) {
                    newServices.push('Giao siêu tốc 2H');
                } else if (!fastDeliveryChecked) {
                    return newServices.filter(s => s !== 'Giao siêu tốc 2H');
                }
                return newServices;
            });

            setSelectedPromotions(prev => {
                let newPromotions = [...prev];
                if (cheapPriceChecked && !newPromotions.includes('Siêu rẻ')) {
                    newPromotions.push('Siêu rẻ');
                } else if (!cheapPriceChecked) {
                    newPromotions = newPromotions.filter(p => p !== 'Siêu rẻ');
                }
                if (freeShipChecked && !newPromotions.includes('FREESHIP XTRA')) {
                    newPromotions.push('FREESHIP XTRA');
                } else if (!freeShipChecked) {
                    newPromotions = newPromotions.filter(p => p !== 'FREESHIP XTRA');
                }
                return newPromotions;
            });

            setSelectedRatings(prev => {
                let newRatings = [...prev];
                if (fourStarsChecked && !newRatings.includes('4 sao')) {
                    newRatings.push('4 sao');
                } else if (!fourStarsChecked) {
                    newRatings = newRatings.filter(r => r !== '4 sao');
                }
                return newRatings;
            });
        }
    }, [isModalOpen, selectedBrands, selectedSuppliers, listSupplier, fastDeliveryChecked, cheapPriceChecked, freeShipChecked, fourStarsChecked]);

    const handleClose = () => {
        form.resetFields();
        setIsModalOpen(false);
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
                    setFastDeliveryChecked(!prev.includes(name));
                }
                return updatedServices;
            });
        } else if (type === 'promotion') {
            setSelectedPromotions((prev) => {
                const updatedPromotions = prev.includes(name) ? prev.filter((item) => item !== name) : [...prev, name];
                if (name === 'Siêu rẻ') {
                    setCheapPriceChecked(!prev.includes(name));
                }
                if (name === 'FREESHIP XTRA') {
                    setFreeShipChecked(!prev.includes(name));
                }
                return updatedPromotions;
            });
        } else if (type === 'rating') {
            setSelectedRatings((prev) => {
                const updatedRatings = prev.includes(name) ? prev.filter((item) => item !== name) : [...prev, name];
                if (name === '4 sao') {
                    setFourStarsChecked(!prev.includes(name));
                }
                return updatedRatings;
            });
        }
    };

    const setPriceRange = (min: number, max: number) => {
        form.setFieldsValue({ minPrice: min, maxPrice: max });
    };

    const handleApplyFilters = async () => {
        try {
            const values = await form.validateFields();

            // Update parent component state
            setParentSelectedBrands(tempSelectedBrands);
            setParentSelectedSuppliers(tempSelectedSuppliers);
            setParentTempSelectedBrands(tempSelectedBrands);
            setParentTempSelectedSuppliers(tempSelectedSuppliers);

            // Build query string for API
            let query = `current=1&pageSize=${pageSize}`;

            if (brand) query += `&brand=${brand}`;
            if (category) query += `&nameCategory=${category}`;
            if (supplier) query += `&supplier=${supplier}`;

            const minPrice = values.minPrice;
            const maxPrice = values.maxPrice;
            if (minPrice !== undefined) query += `&priceBottom=${minPrice}`;
            if (maxPrice !== undefined) query += `&priceTop=${maxPrice}`;

            // Add service filters
            if (fastDeliveryChecked) {
                query += '&fastDelivery=true';
            }

            // Add promotion filters
            if (cheapPriceChecked) {
                query += '&cheapPrice=true';
            }
            if (freeShipChecked) {
                query += '&freeShipping=true';
            }

            // Add rating filter
            if (selectedRatings.includes('5 sao')) {
                query += '&minRating=5';
            } else if (selectedRatings.includes('4 sao')) {
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
        setFastDeliveryChecked(false);
        setCheapPriceChecked(false);
        setFreeShipChecked(false);
        setFourStarsChecked(false);
        setBrand('');
        setSupplier('');
        setCategory('');
    };

    if (!isModalOpen) return null;

    return (
        <div className="sc-add2a4bc-2 fgRNmz filter-modal-container">
            {/* Header - Keep unchanged */}
            <div className="sc-add2a4bc-3 boGFxq">
                <div className="btn-close" onClick={handleClose}>
                    <img src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/close.svg" alt="Close" />
                </div>
                <div className="title">Tất cả bộ lọc</div>
            </div>

            {/* Content - Replaced with structure from modal.filter.tsx */}
            <div className="sc-add2a4bc-4 kXxzcv">
                <div className="modal-content">
                    <Divider />
                    <h3>Dịch vụ</h3>
                    <Row gutter={[16, 8]} className="modal-service-section">
                        <Col span={12}>
                            <Checkbox
                                onChange={() => onChangeCheckBox('service', 'Giao siêu tốc 2H')}
                                checked={selectedServices.includes('Giao siêu tốc 2H')}
                            >
                                <img
                                    src="https://salt.tikicdn.com/ts/tka/a8/31/b6/802e2c99dcce64c67aa2648edb15dd25.png"
                                    alt="Giao siêu tốc 2H"
                                    className="service-icon"
                                />
                                <span className="service-text"> Giao siêu tốc 2H </span>
                            </Checkbox>
                        </Col>
                    </Row>
                    <Divider />
                    <h3>Ưu đãi</h3>
                    <Row gutter={[16, 8]} className="modal-promotion-section">
                        <Col span={12}>
                            <Checkbox
                                onChange={() => onChangeCheckBox('promotion', 'Siêu rẻ')}
                                checked={selectedPromotions.includes('Siêu rẻ')}
                            >
                                <img
                                    src="https://salt.tikicdn.com/ts/upload/b5/aa/48/2305c5e08e536cfb840043df12818146.png"
                                    alt="Siêu rẻ"
                                    className="promotion-icon"
                                />
                                <span className="promotion-text">  Siêu rẻ </span>

                            </Checkbox>
                        </Col>
                        <Col span={12}>
                            <Checkbox
                                onChange={() => onChangeCheckBox('promotion', 'FREESHIP XTRA')}
                                checked={selectedPromotions.includes('FREESHIP XTRA')}
                            >
                                <img
                                    src="https://salt.tikicdn.com/ts/upload/2f/20/77/0f96cfafdf7855d5e7fe076dd4f34ce0.png"
                                    alt="FREESHIP XTRA"
                                    className="promotion-icon"
                                />
                            </Checkbox>
                        </Col>
                    </Row>
                    <Divider />
                    <h3>Đánh giá</h3>
                    <Row gutter={[16, 8]} className="modal-rating-section">
                        <Col span={12}>
                            <Checkbox
                                onChange={() => onChangeCheckBox('rating', '5 sao')}
                                checked={selectedRatings.includes('5 sao')}
                            >
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
                                                    fill="#FFC400"
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
                                    từ 5 sao
                                </div>
                            </Checkbox>
                        </Col>
                        <Col span={12}>
                            <Checkbox
                                onChange={() => onChangeCheckBox('rating', '4 sao')}
                                checked={selectedRatings.includes('4 sao')}
                            >
                                <div className="rating-stars">
                                    {[...Array(4)].map((_, index) => (
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
                                                    fill="#FFC400"
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
                                    từ 4 sao
                                </div>
                            </Checkbox>
                        </Col>
                        <Col span={12}>
                            <Checkbox
                                onChange={() => onChangeCheckBox('rating', '3 sao')}
                                checked={selectedRatings.includes('3 sao')}
                            >
                                <div className="rating-stars">
                                    {[...Array(3)].map((_, index) => (
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
                                                    fill="#FFC400"
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
                                    từ 3 sao
                                </div>
                            </Checkbox>
                        </Col>
                    </Row>
                    <Divider />
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
                            <Row gutter={16} align="middle">
                                <Col span={10}>
                                    <Form.Item name="minPrice">
                                        <InputNumber
                                            placeholder="Từ"
                                            addonAfter="₫"
                                            controls={false}
                                            className="full-width-input"
                                            formatter={(value) => (value ? value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') : '')}
                                            parser={(value) => value?.replace(/\./g, '') || ''}
                                        />
                                    </Form.Item>
                                </Col>
                                <Col span={4} className="price-separator">
                                    <span>-</span>
                                </Col>
                                <Col span={10}>
                                    <Form.Item name="maxPrice">
                                        <InputNumber
                                            placeholder="Đến"
                                            addonAfter="₫"
                                            controls={false}
                                            className="full-width-input"
                                            formatter={(value) => (value ? value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') : '')}
                                            parser={(value) => value?.replace(/\./g, '') || ''}
                                        />
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                    <Divider />
                    <h3>Thể loại</h3>
                    <Row gutter={[16, 8]}>
                        {listFullCategory.slice(0, showFullBrandList ? undefined : 4).map((item, index) => (
                            <Col key={index} span={12}>
                                <Checkbox
                                    onChange={() => onChangeCheckBox('category', item.name)}
                                    checked={selectedCategories.includes(item.name)}
                                >
                                    {item.name}
                                </Checkbox>
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
                                <Checkbox
                                    onChange={() => onChangeCheckBox('brand', item.name)}
                                    checked={tempSelectedBrands.includes(item.name)}
                                >
                                    {item.name}
                                </Checkbox>
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
                                <Checkbox
                                    onChange={() => onChangeCheckBox('supplier', item.name)}
                                    checked={tempSelectedSuppliers.includes(item.name)}
                                >
                                    {item.name}
                                </Checkbox>
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

            {/* Footer - Keep unchanged */}
            <div className="sc-add2a4bc-5 bubSYk">
                <div className="sc-add2a4bc-6 cBZRwi" onClick={handleResetFilters}>Xoá tất cả</div>
                <div className="sc-add2a4bc-6 UkSzZ" onClick={handleApplyFilters}>Xem kết quả</div>
            </div>
        </div>
    );
};

export default FilterNewProductModal;