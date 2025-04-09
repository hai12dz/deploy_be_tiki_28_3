import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getBooksAPI } from '@/services/api';



const SameProductApp = () => {
    const [books, setBooks] = useState<IBookTable[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [pagination, setPagination] = useState({
        current: 1,
        pageSize: 8,
        totalPages: 1
    });

    useEffect(() => {
        fetchBooks();
    }, [pagination.current]);

    const fetchBooks = async () => {
        try {
            setLoading(true);
            const query = `current=${pagination.current}&pageSize=${pagination.pageSize}`;
            const res = await getBooksAPI(query);

            // Based on your axios customization, res is already the data portion
            // of the response, not the full axios response
            if (res && res.data) {
                setBooks(res.data.items || []);
                setPagination(prev => ({
                    ...prev,
                    totalPages: res.data!.meta.totalPages
                }));
            }
        } catch (error) {
            console.error("Failed to fetch books:", error);
        } finally {
            setLoading(false);
        }
    };

    const handlePrevPage = () => {
        if (pagination.current > 1) {
            setPagination(prev => ({
                ...prev,
                current: prev.current - 1
            }));
        }
    };

    const handleNextPage = () => {
        if (pagination.current < pagination.totalPages) {
            setPagination(prev => ({
                ...prev,
                current: prev.current + 1
            }));
        }
    };

    return (
        <div className="sc-714f5c73-0 dutDwQ" style={{ display: "-webkit-box", width: 552 }}>
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(calc(25% - 8px), 1fr))",
                    gridTemplateRows: "repeat(2, 1fr)",
                    gridAutoFlow: "row",
                    gap: 8
                }}
            >
                {loading ? (
                    <div>Loading...</div>
                ) : (
                    books.map((book) => (
                        <div key={book.id} className="sc-e6fb8ae7-1 kTzRAo">
                            <div style={{ height: "100%", width: "100%" }}>
                                <div style={{ height: "100%", width: "100%" }}>
                                    <a
                                        className="sc-8b415d9d-1 iRifC product-item"
                                        data-view-id="product_list_item"
                                        data-view-content={`{"click_data":{"id":${book.id}}}`}
                                        href={`/books/${book.id}`}
                                        rel="nofollow"
                                        style={{ height: "100%" }}
                                    >
                                        <span className="sc-8b415d9d-0 esCPZO">
                                            <div style={{ position: "relative" }}>
                                                <div className="sc-accfdecb-0 oeQAA thumbnail">
                                                    <div className="image-wrapper">
                                                        <picture className="webpimg-container">
                                                            <source
                                                                type="image/webp"
                                                                srcSet={`${book.thumbnail} 1x, ${book.thumbnail} 2x`}
                                                            />
                                                            <img
                                                                srcSet={`${book.thumbnail} 1x, ${book.thumbnail} 2x`}
                                                                alt={book.mainText}
                                                                className="sc-900210d0-0 hFEtiz"
                                                                style={{
                                                                    width: "100%",
                                                                    aspectRatio: "1 / 1",
                                                                    height: "100%",
                                                                    opacity: 1
                                                                }}
                                                            />
                                                        </picture>
                                                    </div>
                                                </div>
                                                {book.promotion > 0 && (
                                                    <p
                                                        className="ads-badge"
                                                        style={{
                                                            display: "inline-block",
                                                            height: 20,
                                                            margin: 0,
                                                            padding: "2px 4px",
                                                            background: "var(--alias-themeVariant, #F5F5FA)",
                                                            borderRadius: 4,
                                                            color: "rgb(39, 39, 42)",
                                                            fontSize: 10,
                                                            fontWeight: 700,
                                                            lineHeight: "150%",
                                                            textTransform: "uppercase",
                                                            border: "1px solid rgb(255, 255, 255)",
                                                            zIndex: 2,
                                                            whiteSpace: "nowrap",
                                                            position: "absolute",
                                                            top: 8,
                                                            right: 8
                                                        }}
                                                    >
                                                        {book.promotion}% OFF
                                                    </p>
                                                )}
                                            </div>
                                            <div className="sc-8b415d9d-6 ePleYc product-card-content">
                                                <div className="info">
                                                    <div
                                                        style={{
                                                            display: "flex",
                                                            flexDirection: "column",
                                                            gap: 4
                                                        }}
                                                    >
                                                        <div
                                                            className="name-wrapper"
                                                            style={{
                                                                display: "flex",
                                                                flexDirection: "column",
                                                                gap: 4,
                                                                height: 58
                                                            }}
                                                        >
                                                            <h3 className="sc-8b415d9d-5 izNpeL">
                                                                {book.mainText}
                                                            </h3>
                                                            <div className="sc-8b415d9d-4 MtbnO">
                                                                <div
                                                                    className="sc-980e9960-0 eTeHeN"
                                                                    style={{
                                                                        fontSize: 12,
                                                                        display: "inline-block"
                                                                    }}
                                                                >
                                                                    {/* Star ratings would go here */}
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="sc-7615e682-0 jVbBhv">
                                                            <div className="price-discount">
                                                                <div
                                                                    className="price-discount__price"
                                                                    style={{ color: "rgb(39, 39, 42)" }}
                                                                >
                                                                    {book.price.toLocaleString()}<sup>₫</sup>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {/* Pagination controls */}
            <div style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: 20
            }}>
                <button
                    onClick={handlePrevPage}
                    disabled={pagination.current <= 1}
                    style={{
                        padding: "8px 16px",
                        borderRadius: "4px",
                        backgroundColor: pagination.current <= 1 ? "#ccc" : "#007bff",
                        color: "white",
                        border: "none",
                        cursor: pagination.current <= 1 ? "not-allowed" : "pointer"
                    }}
                >
                    Previous
                </button>
                <div style={{ display: "flex", alignItems: "center" }}>
                    Page {pagination.current} of {pagination.totalPages}
                </div>
                <button
                    onClick={handleNextPage}
                    disabled={pagination.current >= pagination.totalPages}
                    style={{
                        padding: "8px 16px",
                        borderRadius: "4px",
                        backgroundColor: pagination.current >= pagination.totalPages ? "#ccc" : "#007bff",
                        color: "white",
                        border: "none",
                        cursor: pagination.current >= pagination.totalPages ? "not-allowed" : "pointer"
                    }}
                >
                    Next
                </button>
            </div>
        </div>
    );
}

export default SameProductApp;