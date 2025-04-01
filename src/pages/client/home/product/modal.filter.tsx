import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Button, Checkbox, Col, Divider, Form, InputNumber, Modal, Row } from 'antd';
import { filterBookWithFullInfoAPI, getFullCategories } from '@/services/api';
import './modal.filter.scss';
import MyComponent from './footer.modal.filter';

interface IProps {
    isModalOpen: boolean;
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    queryFiler: string;
    setQueryFilter: React.Dispatch<React.SetStateAction<string>>;
    listBrand: IBrands[];
    listSupplier: ISupplier[];
    pageSize: number;
    setListBook: React.Dispatch<React.SetStateAction<IBookTable[]>>;
    setTotal: React.Dispatch<React.SetStateAction<number>>;
    listFullCategory: ICategory[];
    selectedBrands?: string[];
    selectedSuppliers?: string[];
    setParentSelectedBrands?: React.Dispatch<React.SetStateAction<string[]>>;
    setParentSelectedSuppliers?: React.Dispatch<React.SetStateAction<string[]>>;
    setParentTempSelectedBrands?: React.Dispatch<React.SetStateAction<string[]>>;
    setParentTempSelectedSuppliers?: React.Dispatch<React.SetStateAction<string[]>>;
    fastDeliveryChecked?: boolean;
    cheapPriceChecked?: boolean;
    freeShipChecked?: boolean;
    fourStarsChecked?: boolean;
    setFastDeliveryChecked?: React.Dispatch<React.SetStateAction<boolean>>;
    setCheapPriceChecked?: React.Dispatch<React.SetStateAction<boolean>>;
    setFreeShipChecked?: React.Dispatch<React.SetStateAction<boolean>>;
    setFourStarsChecked?: React.Dispatch<React.SetStateAction<boolean>>;
}

const FilterProduct: React.FC<IProps> = ({
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
    selectedBrands: initialSelectedBrands = [],
    selectedSuppliers: initialSelectedSuppliers = [],
    fastDeliveryChecked = false,
    cheapPriceChecked = false,
    freeShipChecked = false,
    fourStarsChecked = false,
    setParentSelectedBrands,
    setParentSelectedSuppliers,
    setParentTempSelectedBrands,
    setParentTempSelectedSuppliers,
    setFastDeliveryChecked,
    setCheapPriceChecked,
    setFreeShipChecked,
    setFourStarsChecked
}) => {
    const [brand, setBrand] = useState<string>('');
    const [supplier, setSupplier] = useState<string>('');
    const [showFullBrandList, setShowFullBrandList] = useState(false);
    const [showFullSupplierList, setShowFullSupplierList] = useState(false);
    const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
    const [selectedSuppliers, setSelectedSuppliers] = useState<string[]>([]);
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [category, setCategory] = useState<string>('');
    const [selectedServices, setSelectedServices] = useState<string[]>([]);
    const [selectedPromotions, setSelectedPromotions] = useState<string[]>([]);
    const [selectedRatings, setSelectedRatings] = useState<string[]>([]);

    const [form] = Form.useForm();

    useEffect(() => {
        if (isModalOpen) {
            setSelectedBrands(initialSelectedBrands);
            setBrand(initialSelectedBrands.join(','));

            const resolvedSuppliers = initialSelectedSuppliers.map(supplier => {
                if (supplier.endsWith('...')) {
                    const fullSupplier = listSupplier.find(s =>
                        s.name.startsWith(supplier.slice(0, -3))
                    )?.name;
                    return fullSupplier || supplier;
                }
                return supplier;
            });

            setSelectedSuppliers(resolvedSuppliers);
            setSupplier(resolvedSuppliers.join(','));

            setSelectedServices(prevServices => {
                const newServices = [...prevServices];
                if (fastDeliveryChecked && !newServices.includes('Giao siêu tốc 2H')) {
                    newServices.push('Giao siêu tốc 2H');
                } else if (!fastDeliveryChecked) {
                    return newServices.filter(s => s !== 'Giao siêu tốc 2H');
                }
                return newServices;
            });

            setSelectedPromotions(prevPromotions => {
                let newPromotions = [...prevPromotions];
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

            setSelectedRatings(prevRatings => {
                let newRatings = [...prevRatings];
                if (fourStarsChecked && !newRatings.includes('4 sao')) {
                    newRatings.push('4 sao');
                } else if (!fourStarsChecked) {
                    newRatings = newRatings.filter(r => r !== '4 sao');
                }
                return newRatings;
            });
        }
    }, [isModalOpen, initialSelectedBrands, initialSelectedSuppliers, listSupplier, fastDeliveryChecked, cheapPriceChecked, freeShipChecked, fourStarsChecked]);

    const handleOk = async (values: any) => {
        if (setParentSelectedBrands) {
            setParentSelectedBrands(selectedBrands);
        }
        if (setParentSelectedSuppliers) {
            setParentSelectedSuppliers(selectedSuppliers);
        }
        if (setParentTempSelectedBrands) {
            setParentTempSelectedBrands(selectedBrands);
        }
        if (setParentTempSelectedSuppliers) {
            setParentTempSelectedSuppliers(selectedSuppliers);
        }

        handleCancel();
        let query = `current=1&pageSize=${pageSize}`;

        if (brand) query += `&brand=${brand}`;
        if (category) query += `&nameCategory=${category}`;
        if (supplier) query += `&supplier=${supplier}`;

        const minPrice = values.minPrice;
        const maxPrice = values.maxPrice;
        if (minPrice !== undefined) query += `&priceBottom=${minPrice}`;
        if (maxPrice !== undefined) query += `&priceTop=${maxPrice}`;

        const res = await filterBookWithFullInfoAPI(query);
        setTotal(res.data!.meta.totalItems);
        setListBook(res.data?.items || []);
    };

    const handleCancel = () => {
        form.resetFields();
        setSelectedBrands([]);
        setSelectedSuppliers([]);
        setIsModalOpen(false);
    };

    const setPriceRange = (min: number, max: number) => {
        form.setFieldsValue({ minPrice: min, maxPrice: max });
    };

    const onChangeCheckBox = (type: 'brand' | 'supplier' | 'category' | 'service' | 'promotion' | 'rating', name: string) => {
        if (type === 'brand') {
            setSelectedBrands((prev) => {
                const updatedBrands = prev.includes(name) ? prev.filter((item) => item !== name) : [...prev, name];
                setBrand(updatedBrands.join(','));
                return updatedBrands;
            });
        } else if (type === 'supplier') {
            setSelectedSuppliers((prev) => {
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
                if (name === 'Giao siêu tốc 2H' && setFastDeliveryChecked) {
                    setFastDeliveryChecked(!prev.includes(name));
                }
                return updatedServices;
            });
        } else if (type === 'promotion') {
            setSelectedPromotions((prev) => {
                const updatedPromotions = prev.includes(name) ? prev.filter((item) => item !== name) : [...prev, name];
                if (name === 'Siêu rẻ' && setCheapPriceChecked) {
                    setCheapPriceChecked(!prev.includes(name));
                }
                if (name === 'FREESHIP XTRA' && setFreeShipChecked) {
                    setFreeShipChecked(!prev.includes(name));
                }
                return updatedPromotions;
            });
        } else if (type === 'rating') {
            setSelectedRatings((prev) => {
                const updatedRatings = prev.includes(name) ? prev.filter((item) => item !== name) : [...prev, name];
                if (name === '4 sao' && setFourStarsChecked) {
                    setFourStarsChecked(!prev.includes(name));
                }
                return updatedRatings;
            });
        }
    };

    const modalContent = (
        <div className="filter-modal-container">
            <Modal
                title="Tất cả bộ lọc"
                open={isModalOpen}
                onOk={async () => {
                    try {
                        const values = await form.validateFields();
                        handleOk(values);
                    } catch (error) {
                        console.error('Validation failed:', error);
                    }
                }}
                onCancel={handleCancel}
                footer={null}
                className="modal-wrapper"
            >
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
                        <Form form={form} name="control-hooks" onFinish={handleOk} className="filter-form">
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
                        {(showFullBrandList ? listFullCategory : listFullCategory.slice(0, 4)).map((items, index) => (
                            <Col key={index} span={12}>
                                <Checkbox onChange={() => onChangeCheckBox('category', items.name)} checked={selectedCategories.includes(items.name)}>
                                    {items.name}
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
                    <Divider />
                    <h3>Thương hiệu</h3>
                    <Row gutter={[16, 8]}>
                        {(showFullBrandList ? listBrand : listBrand.slice(0, 5)).map((items, index) => (
                            <Col key={index} span={12}>
                                <Checkbox onChange={() => onChangeCheckBox('brand', items.name)} checked={selectedBrands.includes(items.name)}>
                                    {items.name}
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
                    <Divider />
                    <h3>Nhà cung cấp</h3>
                    <Row gutter={[16, 8]}>
                        {(showFullSupplierList ? listSupplier : listSupplier.slice(0, 5)).map((items, index) => (
                            <Col key={index} span={12}>
                                <Checkbox onChange={() => onChangeCheckBox('supplier', items.name)} checked={selectedSuppliers.includes(items.name)}>
                                    {items.name}
                                </Checkbox>
                            </Col>
                        ))}
                    </Row>
                    {listSupplier.length > 5 && (
                        <p
                            onClick={() => setShowFullSupplierList(!showFullSupplierList)}
                            className="show-more-less"
                        >
                            {showFullSupplierList ? 'Thu gọn' : 'Xem thêm'}
                        </p>
                    )}
                </div>
                <MyComponent />
            </Modal>
        </div>
    );

    return isModalOpen ? ReactDOM.createPortal(modalContent, document.body) : null;
};

export default FilterProduct;
