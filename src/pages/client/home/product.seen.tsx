import { useEffect, useState } from 'react';
import { fetchViewedProductsAPI } from '@/services/api';
import './product.seen.scss';

const RecentlyViewedProducts = () => {
    const [listBookViewed, setListBookViewed] = useState<IBookTable[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        fetchViewedProducts();
    }, []);

    const fetchViewedProducts = async () => {
        setIsLoading(true);
        const viewedProducts = JSON.parse(localStorage.getItem("viewedProducts") || "[]");

        if (viewedProducts.length > 0) {
            try {
                const response = await fetchViewedProductsAPI(viewedProducts);
                if (response.data) {
                    setListBookViewed(response.data);
                }
            } catch (error) {
                console.error("Lỗi khi fetch sản phẩm đã xem:", error);
            }
        }
        setIsLoading(false);
    };

    // Don't render if no viewed products
    if (!isLoading && listBookViewed.length === 0) {
        return null;
    }

    return (
        <div
            data-view-id="product_list_recently_view_container"
            className="sc-9c7f2812-0 fMrUyv"
        >
            <h2 className="sc-9ee36b14-0 hPpiPH">Sản phẩm đã xem</h2>
            <div className="slider-container">
                <div className="sc-6bdcb3d5-0 iWkFxH">
                    <div className="slick-slider slick-initialized" dir="ltr">
                        <a
                            data-role="none"
                            className="slick-arrow slick-prev slick-disabled"
                            style={{ display: "block" }}
                        >
                            <span className="icon">
                                <svg
                                    width="8"
                                    height="14"
                                    viewBox="0 0 8 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M7 1L1 7L7 13"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </span>
                        </a>
                        <div className="slick-list">
                            <div
                                className="slick-track"
                                style={{
                                    width: listBookViewed.length * 234,
                                    opacity: 1,
                                    transform: "translate3d(0px, 0px, 0px)"
                                }}
                            >
                                {listBookViewed.map((book, index) => (
                                    <div
                                        key={book.id}
                                        data-index={index}
                                        className={`slick-slide ${index === 0 ? 'slick-active slick-current' : 'slick-active'}`}
                                        tabIndex={-1}
                                        aria-hidden="false"
                                        style={{ outline: "none", width: 234 }}
                                    >
                                        <div>
                                            <div
                                                title={book.mainText}
                                                rel=""
                                                className="sc-662de19e-0 faZNQQ"
                                            >
                                                <a
                                                    href={`/book/${book.id}`}
                                                    data-view-id="product_list_recently_view_item"
                                                    style={{ width: "100%", height: "100%" }}
                                                >
                                                    <div className="sc-662de19e-6 beJRlS">
                                                        <div className="sc-662de19e-7 dWgHEM">
                                                            <picture className="webpimg-container">
                                                                <source
                                                                    type="image/webp"
                                                                    srcSet={book.thumbnail}
                                                                />
                                                                <img
                                                                    style={{ width: '226px', height: '226px', objectFit: 'contain' }}
                                                                    alt={book.mainText}
                                                                    src={book.thumbnail}
                                                                    className="sc-82b4dcf2-0 ldcZGa"
                                                                />
                                                            </picture>
                                                        </div>
                                                    </div>
                                                    <div className="info">
                                                        <p className={book.promotion ? "price has-discount" : "price"}>
                                                            <span>
                                                                {new Intl.NumberFormat("vi-VN", {
                                                                    style: "decimal",
                                                                    maximumFractionDigits: 0
                                                                }).format(book.price)} <sup> ₫</sup>
                                                            </span>
                                                            {book.promotion > 0 && (
                                                                <span className="percent">-{book.promotion}%</span>
                                                            )}
                                                        </p>
                                                        <div
                                                            className="title"
                                                            style={{ maxHeight: 32 }}
                                                        >
                                                            <h3>{book.mainText}</h3>
                                                        </div>
                                                        <div className="bottom" style={{ flex: "none" }}>
                                                            <div className="sc-662de19e-2 kEvUyF">
                                                                <div style={{ display: "flex", alignItems: "center" }}>
                                                                    <div className="full-rating">
                                                                        <div
                                                                            className="total"
                                                                            style={{
                                                                                display: "flex",
                                                                                alignItems: "center"
                                                                            }}
                                                                        >
                                                                            <span
                                                                                style={{
                                                                                    fontWeight: 400,
                                                                                    fontSize: 12,
                                                                                    lineHeight: 16,
                                                                                    color: "rgb(128, 128, 137)"
                                                                                }}
                                                                            >
                                                                                5
                                                                            </span>
                                                                            <svg
                                                                                stroke="currentColor"
                                                                                fill="currentColor"
                                                                                strokeWidth={0}
                                                                                viewBox="0 0 24 24"
                                                                                color="#fdd836"
                                                                                height={14}
                                                                                width={14}
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                style={{ color: "rgb(253, 216, 54)", marginLeft: 2 }}
                                                                            >
                                                                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                                            </svg>
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        style={{
                                                                            width: 1,
                                                                            height: 12,
                                                                            backgroundColor: "rgb(199, 199, 199)",
                                                                            margin: "0 6px"
                                                                        }}
                                                                    />
                                                                    <div data-view-id="pdp_quantity_sold">
                                                                        Đã bán {book.sold > 1000 ? '1000+' : book.sold}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <a
                            data-role="none"
                            className="slick-arrow slick-next"
                            style={{ display: "block" }}
                        >
                            <span className="icon">
                                <svg
                                    width="8"
                                    height="14"
                                    viewBox="0 0 8 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M7 1L1 7L7 13"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecentlyViewedProducts;
