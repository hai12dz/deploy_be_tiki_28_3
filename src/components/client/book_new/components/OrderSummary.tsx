import React from 'react';
import CarouselProduct from '../carousel.product';

interface OrderSummaryProps {
    currentBook: IBookTable;
    currentQuantity: number;
    onChangeQuantity: (type: 'increase' | 'decrease') => void;
    onChangeInput: (value: string) => void;
    onAddToCart: (isBuyNow?: boolean) => void;
    formatPrice: (price: number) => string;
    calculatedPrice: number;  // This now represents price × quantity
}

const OrderSummary: React.FC<OrderSummaryProps> = ({
    currentBook,
    currentQuantity,
    onChangeQuantity,
    onChangeInput,
    onAddToCart,
    formatPrice,
    calculatedPrice
}) => {
    return (
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
                        style={{ display: "flex", gap: 0, alignItems: "center", height: 65 }}
                        className="sc-524d1555-0 vIHcS"
                    >
                        <div
                            style={{ display: "flex", gap: 8, alignItems: "center", height: 65 }}
                        >
                            <a href={`/cua-hang/${currentBook?.supplier?.name?.toLowerCase() || ''}?source_screen=product_detail&source_engine=organic`}>
                                <picture className="webpimg-container">
                                    <source
                                        type="image/webp"
                                        srcSet={currentBook?.supplier?.logo ? `/images/${currentBook.supplier.logo}` : "https://vcdn.tikicdn.com/cache/w100/ts/seller/9d/00/50/8ca75b7295f82088f132d799e61efa18.jpg.webp"}
                                    />
                                    <img
                                        src={currentBook?.supplier?.logo ? `/images/${currentBook.supplier.logo}` : "https://vcdn.tikicdn.com/cache/w100/ts/seller/9d/00/50/8ca75b7295f82088f132d799e61efa18.jpg"}
                                        className="sc-900210d0-0 hFEtiz logo"
                                        width={40}
                                        height={40}
                                        alt={currentBook?.supplier?.name || "Supplier"}
                                        style={{
                                            borderRadius: "50%",
                                            minWidth: 40,
                                            width: 40,
                                            height: 40,
                                            opacity: 1
                                        }}
                                    />
                                </picture>
                            </a>
                            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                                <span className="seller-name">
                                    <div className="sc-71dfba1f-0 kjrAcw">
                                        <a href={`/cua-hang/${currentBook?.supplier?.name?.toLowerCase() || ''}?t=product&category_id=8322&parent_id=2&source_screen=product_detail&source_engine=organic`}>
                                            <span>{currentBook?.supplier?.name || ''}</span>
                                        </a>
                                    </div>
                                </span>
                                <div className="sc-98fe21e0-0 gjnreP">
                                    <div className="item review">
                                        <div className="title">
                                            <span>{'4.8'}</span>
                                            <img
                                                alt="star-icon"
                                                src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                width={16}
                                                height={16}
                                            />
                                        </div>
                                        <div className="sub-title">({'1.1k+'} đánh giá)</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="sc-707f326b-0 eLvPkD">
                            <img
                                alt="chat-icon"
                                src="https://salt.tikicdn.com/ts/upload/8b/82/74/cf2c041938ace329ab11fbc38da3275b.png"
                                height={20}
                                width={20}
                            />
                        </div>
                    </div>
                    <div style={{ borderTop: "none" }} className="sc-10adedb6-0 gnrEVG">
                        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                            <div className="sc-43079b3d-0 ejSfqq">
                                <p className="label">Số Lượng</p>
                                <div className="group-input">
                                    <button
                                        className={currentQuantity <= 1 ? "disable" : ""}
                                        onClick={() => currentQuantity > 1 && onChangeQuantity('decrease')}
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
                                        onChange={(e) => onChangeInput(e.target.value)}
                                    />
                                    <button onClick={() => onChangeQuantity('increase')}>
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
                                    {formatPrice(calculatedPrice)}<sup>₫</sup>
                                </div>
                            </div>
                        </div>
                        <div className="group-button">
                            <button
                                className="sc-9e5b140a-0 hDQYRF"
                                onClick={() => onAddToCart(true)}
                            >
                                <span>Mua ngay</span>
                            </button>
                            <button
                                type="button"
                                data-view-id="pdp_add_to_cart_button"
                                className="sc-9e5b140a-1 dtpKzE"
                                onClick={() => onAddToCart()}
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
                >
                    <span className="sc-f93de155-0 fvuIJS">
                        So sánh 1 nhà bán khác (Giá từ {formatPrice(currentBook?.price || 919000)} ₫)
                    </span>
                </a>
                <div>
                    <div className="sc-a007ec24-0 hVLBTd">
                        <span className="icon icon-prev">
                            <svg
                                width={20}
                                height={20}
                                viewBox="0 0 18 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M12.0899 14.5899C11.7645 14.9153 11.2368 14.9153 10.9114 14.5899L5.91139 9.58991C5.58596 9.26447 5.58596 8.73683 5.91139 8.4114L10.9114 3.41139C11.2368 3.08596 11.7645 3.08596 12.0899 3.41139C12.4153 3.73683 12.4153 4.26447 12.0899 4.58991L7.67916 9.00065L12.0899 13.4114C12.4153 13.7368 12.4153 14.2645 12.0899 14.5899Z"
                                    fill="#0A68FF"
                                />
                            </svg>
                        </span>
                        <div className="content">
                            <span
                                className="slider"
                                style={{
                                    gap: 0,
                                    transform: "translateX(-720px)",
                                    transition: "0.5s ease-in-out"
                                }}
                            >
                                <CarouselProduct />
                            </span>
                            <div
                                className="pagination"
                                style={{
                                    width: "100%",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    gap: 4,
                                    marginTop: 8
                                }}
                            >
                                <div
                                    style={{
                                        width: 16,
                                        height: 2,
                                        background: "rgba(0, 0, 0, 0.05)",
                                        borderRadius: 4
                                    }}
                                />
                                <div
                                    style={{
                                        width: 24,
                                        height: 2,
                                        background: "rgb(10, 104, 255)",
                                        borderRadius: 4
                                    }}
                                />
                                <div
                                    style={{
                                        width: 16,
                                        height: 2,
                                        background: "rgba(0, 0, 0, 0.05)",
                                        borderRadius: 4
                                    }}
                                />
                                <div
                                    style={{
                                        width: 16,
                                        height: 2,
                                        background: "rgba(0, 0, 0, 0.05)",
                                        borderRadius: 4
                                    }}
                                />
                                <div
                                    style={{
                                        width: 16,
                                        height: 2,
                                        background: "rgba(0, 0, 0, 0.05)",
                                        borderRadius: 4
                                    }}
                                />
                            </div>
                        </div>
                        <span className="icon icon-next">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 18 18"
                                fill="none"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M5.91107 3.41107C6.23651 3.08563 6.76414 3.08563 7.08958 3.41107L12.0896 8.41107C12.415 8.73651 12.415 9.26415 12.0896 9.58958L7.08958 14.5896C6.76414 14.915 6.23651 14.915 5.91107 14.5896C5.58563 14.2641 5.58563 13.7365 5.91107 13.4111L10.3218 9.00033L5.91107 4.58958C5.58563 4.26414 5.58563 3.73651 5.91107 3.41107Z"
                                    fill="#0A68FF"
                                />
                            </svg>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderSummary;
