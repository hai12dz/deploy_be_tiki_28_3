import React from 'react';
import CarouselProduct from '../carousel.product';

interface OrderSummaryProps {
    currentBook: IBookTable;
    currentQuantity: number;
    onChangeQuantity: (type: 'increase' | 'decrease') => void;
    onChangeInput: (value: string) => void;
    onAddToCart: (isBuyNow?: boolean) => void;
    formatPrice: (price: number) => string;
    calculatedPrice: number;
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
                                        onClick={() => onChangeQuantity('decrease')}
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
                                    <button
                                        className={currentQuantity >= Number(currentBook.quantity) ? "disable" : ""}
                                        onClick={() => onChangeQuantity('increase')}
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
                                    {formatPrice(calculatedPrice * currentQuantity)}<sup>₫</sup>
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
                                onClick={() => onAddToCart(false)}
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
    );
};

export default OrderSummary;
