import { useCurrentApp } from '@/components/context/app.context';
import { App, Breadcrumb, Col, Popover, Row, Space } from 'antd';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './book.new.scss';
import SameProduct from './same.product';
import TopDeal from './top-deal';
import InfoBook from './info.book';
import SeeMore from './see.more';
import Evaluation from './evaluation';
import CarouselProduct from './carousel.product';
import RecentlyViewedProducts from '@/pages/client/home/product.seen';
import ProductSeenRecently from './product.seen.recently';
import RelatedBrand from './brand.relate';
import ExploreMore from './explore.more';
import SlideDetail from './slide.detail';
import FooterWeb from '@/pages/client/home/footer';
import ChangeAddress from './change.address';
import Breadcrumbs from './components/BreadCrumb';
import ProductGallery from './components/ProductGallery';

interface IProps {
    currentBook: IBookTable | null;
}

const BookNew = (props: IProps) => {
    const { currentBook } = props;
    const [currentQuantity, setCurrentQuantity] = useState<number>(1);
    const { setCarts, user } = useCurrentApp();
    const { message } = App.useApp();
    const navigate = useNavigate();
    const [showAddressModal, setShowAddressModal] = useState<boolean>(false);
    const [deliveryAddress, setDeliveryAddress] = useState<string>("Giao đến Q. Hoàn Kiếm, P. Hàng Trống, Hà Nội");
    const [popoverVisible, setPopoverVisible] = useState<boolean>(false);

    const handleChangeQuantity = (type: 'increase' | 'decrease') => {
        if (type === 'decrease') {
            if (currentQuantity - 1 <= 0) return;
            setCurrentQuantity(currentQuantity - 1);
        }
        if (type === 'increase' && currentBook) {
            if (currentQuantity === +currentBook.quantity) return; // max
            setCurrentQuantity(currentQuantity + 1);
        }
    };

    const handleChangeInput = (value: string) => {
        if (!isNaN(+value)) {
            if (+value > 0 && currentBook && +value < +currentBook.quantity) {
                setCurrentQuantity(+value);
            }
        }
    };

    const handleAddToCart = (isBuyNow = false) => {
        if (!user) {
            message.error("Bạn cần đăng nhập để thực hiện tính năng này.")
            return;
        }
        //update localStorage
        const cartStorage = localStorage.getItem("carts");
        if (cartStorage && currentBook) {
            //update
            const carts = JSON.parse(cartStorage) as ICart[];

            //check exist
            let isExistIndex = carts.findIndex(c => c._id === currentBook?.id);
            if (isExistIndex > -1) {
                carts[isExistIndex].quantity =
                    carts[isExistIndex].quantity + currentQuantity;
            } else {
                carts.push({
                    quantity: currentQuantity,
                    _id: currentBook.id,
                    detail: currentBook
                })
            }

            localStorage.setItem("carts", JSON.stringify(carts));

            //sync React Context
            setCarts(carts);
        } else {
            //create
            const data = [{
                _id: currentBook?.id!,
                quantity: currentQuantity,
                detail: currentBook!
            }]
            localStorage.setItem("carts", JSON.stringify(data))

            //sync React Context
            setCarts(data);
        }

        if (isBuyNow) {
            navigate("/order")
        } else
            message.success("Thêm sản phẩm vào giỏ hàng thành công.")
    };

    const formatPrice = (price: number) => {
        // Format price as integer with thousands separator but no decimal places
        return Math.floor(price).toLocaleString('vi-VN').split(',')[0];
    };

    const calculateDiscountedPrice = () => {
        if (!currentBook) return 0;
        const originalPrice = Number(currentBook.price || 0);
        const discountPercent = Number(currentBook.promotion || 0);
        return originalPrice - (originalPrice * discountPercent / 100);
    };

    const handleAddressSelect = (address: string) => {
        setDeliveryAddress(`Giao đến ${address}`);
    };

    const originalPrice = currentBook ? Number(currentBook.price || 0) : 0;
    const discountedPrice = calculateDiscountedPrice();

    const priceInfoContent = (
        <div className="price-info-popup" style={{ width: '320px' }}>
            <Row gutter={[0, 8]}>
                <Col span={24}>
                    <Space direction="vertical" style={{ width: '100%' }}>
                        <Row justify="space-between">
                            <Col>Giá gốc</Col>
                            <Col>{originalPrice.toLocaleString()}đ</Col>
                        </Row>
                        <Row justify="space-between">
                            <Col>Giá bán</Col>
                            <Col>{discountedPrice.toLocaleString()}đ</Col>
                        </Row>
                        <Row>
                            <Col className="discount-info">Giá đã giảm trực tiếp từ nhà bán</Col>
                        </Row>
                    </Space>
                </Col>
            </Row>
        </div>
    );

    if (!currentBook) {
        return <div>Loading...</div>;
    }

    return (
        <>

            <main>
                <div className="sc-9b2f7535-0 edZgU">
                    <Breadcrumbs currentBook={currentBook} />
                    <div className="sc-iBYQkv fGViSL">
                        <div className="sc-gKPRtg esmbwu">
                            <div className="sc-iBYQkv fGViSL">
                                <div className="sc-aa5e895f-0 joJPdR">
                                    <ProductGallery currentBook={currentBook} />
                                    <div className="sc-21093861-0 gTCFtt">
                                        <div className="sc-40058dbe-0 bXjfwR">
                                            <div style={{ gap: 16 }} className="sc-34e0efdc-0 dSZwVn">
                                                <div className="sc-e6fb8ae7-3 kLhGA-D">
                                                    <div
                                                        style={{
                                                            display: "flex",
                                                            flexDirection: "column",
                                                            gap: 6
                                                        }}
                                                    >
                                                        <div className="sc-f71dfc2-0 bIhKUr">
                                                            <div className="sc-182247c9-0 eRYSas">
                                                                <picture className="webpimg-container">
                                                                    <source
                                                                        type="image/webp"
                                                                        srcSet="https://salt.tikicdn.com/ts/ta/b1/3f/4e/cc3d0a2dd751a7b06dd97d868d6afa56.png"
                                                                    />
                                                                    <img
                                                                        srcSet="https://salt.tikicdn.com/ts/ta/b1/3f/4e/cc3d0a2dd751a7b06dd97d868d6afa56.png"
                                                                        width={114}
                                                                        height={20}
                                                                        alt="return_policy"
                                                                        style={{ width: 114, height: 20, opacity: 1 }}
                                                                        className="sc-7bce5df0-0 fvWcVx"
                                                                    />
                                                                </picture>
                                                                <picture className="webpimg-container">
                                                                    <source
                                                                        type="image/webp"
                                                                        srcSet="https://salt.tikicdn.com/ts/upload/d7/56/04/b93b8c666e13f49971483596ef14800f.png"
                                                                    />
                                                                    <img
                                                                        srcSet="https://salt.tikicdn.com/ts/upload/d7/56/04/b93b8c666e13f49971483596ef14800f.png"
                                                                        width={89}
                                                                        height={20}
                                                                        alt="is_authentic"
                                                                        style={{ width: 89, height: 20, opacity: 1 }}
                                                                        className="sc-7bce5df0-0 fvWcVx"
                                                                    />
                                                                </picture>
                                                                <span className="brand-and-author no-after">
                                                                    <h6>
                                                                        Tác giả:{" "}
                                                                        <a
                                                                            data-view-id="pdp_details_view_author"
                                                                            data-view-index={0}
                                                                            href="#"
                                                                        >
                                                                            {currentBook.author}
                                                                        </a>
                                                                    </h6>
                                                                </span>
                                                            </div>
                                                            <h1 className="sc-c0f8c612-0 dEurho">
                                                                {currentBook.mainText}
                                                            </h1>
                                                            <div className="sc-1a46a934-0 fHEkTS">
                                                                <div style={{ display: "flex" }}>
                                                                    <div className="sc-1a46a934-1 dCjKzJ">
                                                                        <div
                                                                            style={{
                                                                                marginRight: 4,
                                                                                fontSize: 14,
                                                                                lineHeight: "150%",
                                                                                fontWeight: 500
                                                                            }}
                                                                        >
                                                                            {'4.7'}
                                                                        </div>
                                                                        <div style={{ display: "flex" }}>
                                                                            <div style={{ position: "relative" }}>
                                                                                <div
                                                                                    style={{
                                                                                        display: "flex",
                                                                                        alignItems: "center"
                                                                                    }}
                                                                                >
                                                                                    <svg
                                                                                        stroke="currentColor"
                                                                                        fill="currentColor"
                                                                                        strokeWidth={0}
                                                                                        viewBox="0 0 24 24"
                                                                                        color="#c7c7c7"
                                                                                        style={{ color: "#c7c7c7" }}
                                                                                        height={16}
                                                                                        width={16}
                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                    >
                                                                                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                                                                                    </svg>
                                                                                    <svg
                                                                                        stroke="currentColor"
                                                                                        fill="currentColor"
                                                                                        strokeWidth={0}
                                                                                        viewBox="0 0 24 24"
                                                                                        color="#c7c7c7"
                                                                                        style={{ color: "#c7c7c7" }}
                                                                                        height={16}
                                                                                        width={16}
                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                    >
                                                                                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                                                                                    </svg>
                                                                                    <svg
                                                                                        stroke="currentColor"
                                                                                        fill="currentColor"
                                                                                        strokeWidth={0}
                                                                                        viewBox="0 0 24 24"
                                                                                        color="#c7c7c7"
                                                                                        style={{ color: "#c7c7c7" }}
                                                                                        height={16}
                                                                                        width={16}
                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                    >
                                                                                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                                                                                    </svg>
                                                                                    <svg
                                                                                        stroke="currentColor"
                                                                                        fill="currentColor"
                                                                                        strokeWidth={0}
                                                                                        viewBox="0 0 24 24"
                                                                                        color="#c7c7c7"
                                                                                        style={{ color: "#c7c7c7" }}
                                                                                        height={16}
                                                                                        width={16}
                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                    >
                                                                                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                                                                                    </svg>
                                                                                    <svg
                                                                                        stroke="currentColor"
                                                                                        fill="currentColor"
                                                                                        strokeWidth={0}
                                                                                        viewBox="0 0 24 24"
                                                                                        color="#c7c7c7"
                                                                                        style={{ color: "#c7c7c7" }}
                                                                                        height={16}
                                                                                        width={16}
                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                    >
                                                                                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                                                                                    </svg>
                                                                                </div>
                                                                                <div
                                                                                    style={{
                                                                                        width: "94%",
                                                                                        whiteSpace: "nowrap",
                                                                                        position: "absolute",
                                                                                        left: 0,
                                                                                        top: 0,
                                                                                        overflow: "hidden"
                                                                                    }}
                                                                                >
                                                                                    <svg
                                                                                        stroke="currentColor"
                                                                                        fill="currentColor"
                                                                                        strokeWidth={0}
                                                                                        viewBox="0 0 24 24"
                                                                                        color="#FFC400"
                                                                                        style={{ color: "#FFC400" }}
                                                                                        height={16}
                                                                                        width={16}
                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                    >
                                                                                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                                                                                    </svg>
                                                                                    <svg
                                                                                        stroke="currentColor"
                                                                                        fill="currentColor"
                                                                                        strokeWidth={0}
                                                                                        viewBox="0 0 24 24"
                                                                                        color="#FFC400"
                                                                                        style={{ color: "#FFC400" }}
                                                                                        height={16}
                                                                                        width={16}
                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                    >
                                                                                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                                                                                    </svg>
                                                                                    <svg
                                                                                        stroke="currentColor"
                                                                                        fill="currentColor"
                                                                                        strokeWidth={0}
                                                                                        viewBox="0 0 24 24"
                                                                                        color="#FFC400"
                                                                                        style={{ color: "#FFC400" }}
                                                                                        height={16}
                                                                                        width={16}
                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                    >
                                                                                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                                                                                    </svg>
                                                                                    <svg
                                                                                        stroke="currentColor"
                                                                                        fill="currentColor"
                                                                                        strokeWidth={0}
                                                                                        viewBox="0 0 24 24"
                                                                                        color="#FFC400"
                                                                                        style={{ color: "#FFC400" }}
                                                                                        height={16}
                                                                                        width={16}
                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                    >
                                                                                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                                                                                    </svg>
                                                                                    <svg
                                                                                        stroke="currentColor"
                                                                                        fill="currentColor"
                                                                                        strokeWidth={0}
                                                                                        viewBox="0 0 24 24"
                                                                                        color="#FFC400"
                                                                                        style={{ color: "#FFC400" }}
                                                                                        height={16}
                                                                                        width={16}
                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                    >
                                                                                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                                                                                    </svg>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <a
                                                                            className="number"
                                                                            data-view-id="pdp_main_view_review"
                                                                        >
                                                                            ({currentBook.sold || '101'})
                                                                        </a>
                                                                        <div className="sc-1a46a934-2 eIEoTE" />
                                                                    </div>
                                                                    <div
                                                                        data-view-id="pdp_quantity_sold"
                                                                        className="sc-1a46a934-3 geGARt"
                                                                    >
                                                                        Đã bán {currentBook.sold || '2k'}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div
                                                            style={{
                                                                display: "flex",
                                                                flexDirection: "column",
                                                                gap: 2
                                                            }}
                                                        >
                                                            <div className="sc-4ade12da-0 enfFJg">
                                                                <div className="product-price">
                                                                    <div
                                                                        className="product-price__current-price"
                                                                        style={{ color: "#27272A" }}
                                                                    >
                                                                        {formatPrice(calculateDiscountedPrice())}<sup>₫</sup>
                                                                    </div>
                                                                    {currentBook.promotion > 0 && (
                                                                        <div className="product-price__discount-rate">
                                                                            -{currentBook.promotion}%
                                                                        </div>
                                                                    )}
                                                                    <div className="product-price__original-price"><del>{currentBook.price}</del><sup>₫</sup></div>

                                                                    <Popover
                                                                        content={priceInfoContent}
                                                                        title={
                                                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                                                <span>Chi tiết giá</span>
                                                                                <img
                                                                                    srcSet="https://salt.tikicdn.com/ts/upload/bb/a8/96/96edf0241aac5851f4913ef242a5abb4.png"
                                                                                    width="16"
                                                                                    height="16"
                                                                                    alt="close-icon"
                                                                                    className="sc-900210d0-0 hFEtiz"
                                                                                    style={{ width: '16px', height: '16px', opacity: 1, cursor: 'pointer' }}
                                                                                    onClick={() => setPopoverVisible(false)}
                                                                                />
                                                                            </div>
                                                                        }
                                                                        trigger="click"
                                                                        placement="rightTop"
                                                                        open={popoverVisible}
                                                                        onOpenChange={setPopoverVisible}
                                                                    >
                                                                        <div style={{ cursor: 'pointer' }}>
                                                                            <img
                                                                                srcSet="https://salt.tikicdn.com/ts/ta/c1/c0/8f/1c42c78c42d4355130fa4a4ef9036892.png"
                                                                                width="16"
                                                                                height="16"
                                                                                alt="info-icon"
                                                                                className="sc-900210d0-0 hFEtiz"
                                                                                style={{ width: '16px', height: '16px', opacity: 1 }}
                                                                            />
                                                                        </div>
                                                                    </Popover>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                            {/* <div style={{ height: 118, background: "white" }} /> */}

                                            <div className="sc-34e0efdc-0 dSZwVn"><div className="sc-34e0efdc-1 ddClVB">Thông tin vận chuyển</div><div className="sc-34e0efdc-2 kAFhAU"><div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', gap: '4px', fontSize: '14px', fontWeight: 400, lineHeight: '150%', flex: '1 1 0%', minHeight: '21px' }}><div className="sc-abbfadd6-0 bXxUQh">{deliveryAddress}</div><span style={{ color: 'rgb(10, 104, 255)', padding: '5px', border: '1px solid transparent' }} onClick={() => setShowAddressModal(true)}>Đổi</span></div></div><div className="sc-34e0efdc-2 kAFhAU"><div className="sc-6f43b531-0 nTUKM shipping-info"><div className="shipping-info__item"><div className="shipping-info__item__header"><div className="shipping-info__item__header__logo" style={{ width: '32px' }}><img src="https://salt.tikicdn.com/ts/upload/6b/59/d9/783a8f53f8c251dbe5f644df40c21c15.png" alt="" height={16} width={32} /></div><div className="shipping-info__item__header__highlight">Giao đúng sáng mai</div></div><div className="shipping-info__item__fee"><div className="shipping-info__item__fee_name"><span style={{ color: '#27272A' }}>8h - 12h, 05/04: <span style={{ color: '#00AB56' }}>Miễn phí</span><span style={{ color: '#808089' }}>&nbsp;<del>16.500<sup><small>₫</small></sup></del></span></span></div></div></div></div></div><div className="sc-34e0efdc-2 kAFhAU" style={{ borderBottom: 'none', padding: '4px 0px' }}><div className="sc-d0c6782c-0 CXJre"><div className="sc-d0c6782c-1 fliQTf  "><div style={{ flexWrap: 'wrap' }}><picture className="webpimg-container"><source type="image/webp" srcSet="https://salt.tikicdn.com/ts/upload/67/bc/b6/7aed838df704ad50927e343895885e73.png" /><img srcSet="https://salt.tikicdn.com/ts/upload/67/bc/b6/7aed838df704ad50927e343895885e73.png" width={18} height={18} alt="freeship-icon" className="sc-900210d0-0 hFEtiz badge" style={{ width: '18px', height: '18px', opacity: 1 }} /></picture><div className="sc-d0c6782c-2 gEwNBn">Freeship 10k đơn từ 45k, Freeship 25k đơn từ 100k</div><div className="popup-wrapper"><div aria-describedby="popup-2" className="sc-f6599889-0 cxMdsy"><picture className="webpimg-container"><source type="image/webp" srcSet="https://salt.tikicdn.com/ts/ta/c1/c0/8f/1c42c78c42d4355130fa4a4ef9036892.png" /><img srcSet="https://salt.tikicdn.com/ts/ta/c1/c0/8f/1c42c78c42d4355130fa4a4ef9036892.png" width={16} height={16} alt="info-icon" className="sc-900210d0-0 hFEtiz" style={{ width: '16px', height: '16px', opacity: 1 }} /></picture></div><div className="popup-content" style={{ width: '350px' }}>
                                                <p className="popup-title">Khuyến mãi vận chuyển</p>

                                                <div className="popup-category">Sản phẩm thông thường</div>
                                                <ul>
                                                    <li>Giảm 100% tối đa 10k cho đơn 45k</li>
                                                    <li>Giảm 100% tối đa 25k cho đơn 100k</li>
                                                </ul>

                                                <div className="popup-category" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                                    Sản phẩm có nhãn
                                                    <img
                                                        src="https://salt.tikicdn.com/ts/upload/f7/85/80/51da5722c3cfa1d6d93644188d07c51a.png"
                                                        alt="FREESHIP XTRA"
                                                        className="freeship-img"
                                                    />
                                                </div>
                                                <ul>
                                                    <li>Giảm 100% tối đa 15k cho đơn 45k</li>
                                                    <li>Giảm 100% tối đa 70k cho đơn 100k</li>
                                                    <li>Giảm 100% tối đa 100k cho đơn 500k</li>
                                                </ul>

                                                <button className="popup-button">Đã hiểu</button>
                                            </div></div></div></div></div></div></div>


                                            <div className="sc-34e0efdc-0 dSZwVn"><div className="sc-34e0efdc-1 ddClVB">Ưu đãi khác</div><div className="sc-34e0efdc-2 kAFhAU"><div data-view-id="pdp_main_discount_coupon" id="ma-giam-gia" className="sc-34e0efdc-3 jcYGog"><span>1 Mã Giảm Giá</span><div style={{ display: 'flex', flexWrap: 'wrap' }}><div className="sc-14beda0e-0 VYYrY">Giảm 5%</div></div></div><img src="https://salt.tikicdn.com/ts/upload/16/42/c1/23a144e53aadf0357f6cd2c98b525902.png" width={24} height={24} alt="right-icon" style={{ margin: 'auto 0px auto auto', cursor: 'pointer' }} /></div></div>

                                            <div className="sc-34e0efdc-0 dSZwVn"><div className="sc-34e0efdc-1 ddClVB"><div className="wrapper"><div className="sc-34e0efdc-1 ddClVB">Mua 3 Giảm 5%</div><a href="/tuyen-chon/combo/65505"><span className="see-all">Xem Thêm</span></a></div></div><div className="sc-34e0efdc-2 kAFhAU"><div className="sc-5c89cbc0-0 iLtPWi"><div className="sc-5c89cbc0-2 hwHOlY"><div className="rule-item"><picture className="webpimg-container"><source type="image/webp" srcSet="https://salt.tikicdn.com/ts/upload/3a/55/26/05fd7f65057093e9b1ef287f8d46674d.png" /><img srcSet="https://salt.tikicdn.com/ts/upload/3a/55/26/05fd7f65057093e9b1ef287f8d46674d.png" width={16} height={16} alt="deal-icon" className="sc-900210d0-0 hFEtiz" style={{ cursor: 'pointer', width: '16px', height: '16px', opacity: 1 }} /></picture><span>Mua 3 giảm 5%</span></div></div><div className="sc-5c89cbc0-1 fAcMPt"><picture className="webpimg-container"><source type="image/webp" srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/17/4a/65/b4765d60127ee4cccf8fd551633fafd4.png.webp" /><img srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/17/4a/65/b4765d60127ee4cccf8fd551633fafd4.png" alt="Chat GPT Thực Chiến" className="sc-900210d0-0 hFEtiz" style={{ display: 'block', height: '76px', width: 'auto', objectFit: 'contain', cursor: 'pointer', opacity: 1 }} /></picture><picture className="webpimg-container"><source type="image/webp" srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/0a/f6/38/bc10734989977da424642a1c4750eee2.jpg.webp" /><img srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/0a/f6/38/bc10734989977da424642a1c4750eee2.jpg" alt="Đàn Ông Sao Hỏa Đàn Bà Sao Kim" className="sc-900210d0-0 hFEtiz" style={{ display: 'block', height: '76px', width: 'auto', objectFit: 'contain', cursor: 'pointer', opacity: 1 }} /></picture><picture className="webpimg-container"><source type="image/webp" srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/34/73/6b/2582628bf067160b459d9b3f425050a9.jpg.webp" /><img srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/34/73/6b/2582628bf067160b459d9b3f425050a9.jpg" alt="Deep Work - Làm Ra Làm, Chơi Ra Chơi (Tái Bản)" className="sc-900210d0-0 hFEtiz" style={{ display: 'block', height: '76px', width: 'auto', objectFit: 'contain', cursor: 'pointer', opacity: 1 }} /></picture><picture className="webpimg-container"><source type="image/webp" srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/3c/77/83/8d5e04adcd94d8a916cc35a58b84d1ec.jpg.webp" /><img srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/3c/77/83/8d5e04adcd94d8a916cc35a58b84d1ec.jpg" alt="Sobotta Atlas Giải Phẫu Người" className="sc-900210d0-0 hFEtiz" style={{ display: 'block', height: '76px', width: 'auto', objectFit: 'contain', cursor: 'pointer', opacity: 1 }} /></picture></div></div></div></div>


                                            <div className="sc-34e0efdc-0 dSZwVn">
                                                <div className="sc-34e0efdc-1 ddClVB">Dịch vụ bổ sung</div>
                                                <div
                                                    data-view-id="pdp_installment_button"
                                                    style={{ cursor: "pointer" }}
                                                    className="sc-34e0efdc-2 kAFhAU"
                                                >
                                                    <picture
                                                        className="webpimg-container"
                                                        style={{
                                                            border: "1px solid rgba(0, 0, 0, 0.05)",
                                                            borderRadius: "35%",
                                                            overflow: "hidden"
                                                        }}
                                                    >
                                                        <source
                                                            type="image/webp"
                                                            srcSet="https://salt.tikicdn.com/ts/upload/73/4d/f7/f86e767bffc14aa3d6abed348630100b.png"
                                                        />
                                                        <img
                                                            srcSet="https://salt.tikicdn.com/ts/upload/73/4d/f7/f86e767bffc14aa3d6abed348630100b.png"
                                                            alt="compensation-icon"
                                                            height={40}
                                                            width={40}
                                                            style={{ width: 40, height: 40, opacity: 1 }}
                                                            className="sc-7bce5df0-0 fvWcVx"
                                                        />
                                                    </picture>
                                                    <div className="sc-34e0efdc-3 jcYGog benefit-item">
                                                        <div>Ưu đãi đến 600k với thẻ TikiCard</div>
                                                        <div
                                                            style={{
                                                                color: "#0A68FF",
                                                                fontWeight: 400,
                                                                cursor: "pointer"
                                                            }}
                                                        >
                                                            Đăng ký
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    data-view-id="pdp_installment_button"
                                                    style={{ cursor: "pointer" }}
                                                    className="sc-34e0efdc-2 kAFhAU"
                                                >
                                                    <picture
                                                        className="webpimg-container"
                                                        style={{
                                                            border: "1px solid rgba(0, 0, 0, 0.05)",
                                                            borderRadius: "35%",
                                                            overflow: "hidden"
                                                        }}
                                                    >
                                                        <source
                                                            type="image/webp"
                                                            srcSet="https://salt.tikicdn.com/ts/upload/2a/27/6a/7bbba1f6c93a1a42a3c314e7b5825f4c.png"
                                                        />
                                                        <img
                                                            srcSet="https://salt.tikicdn.com/ts/upload/2a/27/6a/7bbba1f6c93a1a42a3c314e7b5825f4c.png"
                                                            alt="compensation-icon"
                                                            height={40}
                                                            width={40}
                                                            style={{ width: 40, height: 40, opacity: 1 }}
                                                            className="sc-7bce5df0-0 fvWcVx"
                                                        />
                                                    </picture>
                                                    <div className="sc-34e0efdc-3 jcYGog benefit-item">
                                                        <div>Mua trước trả sau</div>
                                                        <div
                                                            style={{
                                                                color: "#0A68FF",
                                                                fontWeight: 400,
                                                                cursor: "pointer"
                                                            }}
                                                        >
                                                            Đăng ký
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <SameProduct />
                                            <TopDeal />
                                            <InfoBook />
                                            <SeeMore />

                                        </div>
                                    </div>
                                </div>

                                <Evaluation />
                            </div>
                            <div className="sc-98168149-0 ftPStD">
                                <div
                                    style={{
                                        position: "sticky",
                                        top: 12,
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "stretch",
                                        gap: 12
                                    }}
                                >
                                    <div
                                        style={{ gap: 16, overflow: "initial" }}
                                        className="sc-34e0efdc-0 dSZwVn"
                                    >
                                        <div
                                            style={{
                                                display: "flex",
                                                gap: 0,
                                                alignItems: "center",
                                                height: 65
                                            }}
                                            className="sc-524d1555-0 vIHcS"
                                        >
                                            <div
                                                style={{
                                                    display: "flex",
                                                    gap: 8,
                                                    alignItems: "center",
                                                    height: 65
                                                }}
                                            >
                                                <div
                                                    style={{ display: "flex", flexDirection: "column", gap: 0 }}
                                                >
                                                    <span className="seller-name">{currentBook.supplier?.name}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            style={{ borderTop: "none" }}
                                            className="sc-10adedb6-0 gnrEVG"
                                        >
                                            <div
                                                style={{ display: "flex", flexDirection: "column", gap: 8 }}
                                            >
                                                <div className="sc-43079b3d-0 ejSfqq">
                                                    <p className="label">Số Lượng</p>
                                                    <div className="group-input">
                                                        <button
                                                            className={currentQuantity <= 1 ? "disable" : ""}
                                                            onClick={() => handleChangeQuantity('decrease')}
                                                        >
                                                            <img
                                                                src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/icons-remove.svg"
                                                                alt="remove-icon"
                                                                width={20}
                                                                height={20}
                                                            />
                                                        </button>
                                                        <input
                                                            type="text"
                                                            className="input"
                                                            value={currentQuantity}
                                                            onChange={(e) => handleChangeInput(e.target.value)}
                                                        />
                                                        <button
                                                            className={currentQuantity >= Number(currentBook.quantity) ? "disable" : ""}
                                                            onClick={() => handleChangeQuantity('increase')}
                                                        >
                                                            <img
                                                                src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/icons-add.svg"
                                                                alt="add-icon"
                                                                width={20}
                                                                height={20}
                                                            />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="sc-31ecf63b-2 fzqGUN">
                                                <div className="sc-31ecf63b-0 dqQfZn">Tạm tính</div>
                                                <div
                                                    style={{ display: "flex", alignItems: "center", gap: 8 }}
                                                    className="sc-31ecf63b-1 fgrIVW"
                                                >
                                                    <div>
                                                        {formatPrice(calculateDiscountedPrice() * currentQuantity)}<sup>₫</sup>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="group-button">
                                                <button
                                                    className="sc-9e5b140a-0 hDQYRF"
                                                    onClick={() => handleAddToCart(true)}
                                                >
                                                    <span>Mua ngay</span>
                                                </button>
                                                <button
                                                    type="button"
                                                    data-view-id="pdp_add_to_cart_button"
                                                    className="sc-9e5b140a-1 dtpKzE"
                                                    onClick={() => handleAddToCart(false)}
                                                >
                                                    Thêm vào giỏ
                                                </button>
                                                <button type="button" className="sc-9e5b140a-1 dtpKzE">
                                                    <div>Mua trước trả sau</div>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <a
                                        style={{ textAlign: "center" }}
                                        href="#"
                                    >
                                        <span className="sc-f93de155-0 fvuIJS">
                                            So sánh giá từ các nhà bán khác
                                        </span>



                                    </a>
                                    <CarouselProduct />

                                </div>
                            </div>
                        </div>
                        <ProductSeenRecently />
                        <RelatedBrand />
                        <ExploreMore />
                        <SlideDetail />
                    </div>
                </div>
            </main>
            <FooterWeb />
            {showAddressModal && (
                <ChangeAddress
                    onClose={() => setShowAddressModal(false)}
                    onSelectAddress={handleAddressSelect}
                />
            )}
        </>

    );
}

export default BookNew;