import { getBooksAPI } from "@/services/api";
import { ReloadOutlined, StarFilled } from "@ant-design/icons";
import { Button, Rate, Row, Col, Tag, Divider } from "antd";
import { useEffect, useMemo, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import 'styles/product.scss';

// Add props interface
interface ProductProps {
    listBook?: IBookTable[];
    isLoading?: boolean;
    setIsLoading?: (loading: boolean) => void;
}

const CustomStar = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="12"
        fill="currentColor"
        viewBox="0 0 12 12"
    >
        <path d="M6.448 2.029a.5.5 0 0 0-.896 0L4.287 4.59l-2.828.41a.5.5 0 0 0-.277.854l2.046 1.994-.483 2.816a.5.5 0 0 0 .726.528L6 9.863l2.53 1.33a.5.5 0 0 0 .725-.527l-.483-2.817 2.046-1.994a.5.5 0 0 0-.277-.853L7.713 4.59 6.448 2.029Z" />
    </svg>
);

const Product: React.FC<ProductProps> = ({ listBook: propListBook }) => {
    const [searchTerm, setSearchTerm] = useOutletContext() as any;
    const navigate = useNavigate();

    // Use local state as a fallback if props are not provided
    const [localListBook, setLocalListBook] = useState<IBookTable[]>([]);
    const [pageSize, setPageSize] = useState<number>(10);
    const [total, setTotal] = useState<number>(0);
    const [current, setCurrent] = useState<number>(1);

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [filter, setFilter] = useState<string>("");
    const [sortQuery, setSortQuery] = useState<string>("sort=-sold");
    const [showMobileFilter, setShowMobileFilter] = useState<boolean>(false);
    const [nameCategory, setNameCategory] = useState<{ [key: string]: string[] }>({});
    const [listBrand, setListBrand] = useState<IBrands[]>([])
    const [listSupplier, setListSupplier] = useState<ISupplier[]>([])
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [queryFiler, setQueryFilter] = useState<string>("")
    const [category, setCategory] = useState<string>("")
    const [listFullCategory, setListFullCategory] = useState<ICategory[]>([])

    // Change these from string to arrays
    const [brand, setBrand] = useState<string[]>([]);
    const [supplier, setSupplier] = useState<string[]>([]);

    // Add state for filters
    const [freeShipping, setFreeShipping] = useState(false);
    const [cheapPrice, setCheapPrice] = useState(false);
    const [fastDelivery, setFastDelivery] = useState(false);
    const [minRating, setMinRating] = useState(0);

    // Use prop books if available, otherwise use local state
    const listBook = propListBook || localListBook;

    const filteredBooks = useMemo(() => {
        return listBook.filter((book) =>
            book.mainText.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [searchTerm, listBook]);

    const fetchBook = async () => {
        setIsLoading(true);

        // Build query params to match the backend API structure
        let query = new URLSearchParams();

        // Base pagination params
        query.append('current', current.toString());
        query.append('pageSize', pageSize.toString());

        // Search by text
        if (searchTerm) {
            query.append('mainText', searchTerm);
        }

        // Category filter
        if (filter) {
            query.append('filter', filter);
        }

        // Sort parameter (previously sortQuery)
        if (sortQuery) {
            // Extract actual sort value from sortQuery (e.g., "sort=-sold" → "-sold")
            const sortValue = sortQuery.replace('sort=', '');
            query.append('sort', sortValue);
        }

        // Brand filter - using the array of brand IDs/names
        if (brand && brand.length > 0) {
            query.append('brands', brand.join(','));
        }

        // Supplier filter - using the array of supplier IDs/names
        if (supplier && supplier.length > 0) {
            query.append('suppliers', supplier.join(','));
        }

        // Rating filter
        if (minRating > 0) {
            query.append('minRating', minRating.toString());
        }

        // Shipping and price filters from state variables
        if (freeShipping) {
            query.append('freeShipping', 'true');
        }

        if (cheapPrice) {
            query.append('cheapPrice', 'true');
        }

        if (fastDelivery) {
            query.append('fastDelivery', 'true');
        }

        // Convert URLSearchParams to string
        const queryString = query.toString();
        console.log("Fetching with query:", queryString);

        try {
            const res = await getBooksAPI(queryString);
            if (res && res.data) {
                // Get the new items from the API
                const items = res.data.items || [];

                // If we're loading more (pageSize > 10), append the items instead of replacing
                if (pageSize > 10) {
                    setLocalListBook(prevItems => {
                        // Create a new array with unique books by ID
                        const allItems = [...prevItems, ...items];
                        const uniqueItems = Array.from(
                            new Map(allItems.map(item => [item.id, item])).values()
                        );
                        return uniqueItems;
                    });
                } else {
                    // Initial load - just set the items
                    setLocalListBook(items);
                }

                // Set total from meta or use a placeholder value if not available
                const totalItems = res.data.meta?.totalItems || items.length + 10;
                console.log(`API Response - Items count: ${items.length}, Total items: ${totalItems}`);

                // Always ensure total is greater than current items to allow "View More"
                setTotal(Math.max(totalItems, items.length + 10));
            }
        } catch (error) {
            console.error("Error fetching books:", error);
        } finally {
            setIsLoading(false);
        }
    };

    // Only fetch books if we're not receiving them from props
    useEffect(() => {
        if (!propListBook) {
            fetchBook();
        }
    }, [
        propListBook,
        current,
        pageSize,
        filter,
        sortQuery,
        searchTerm,
        brand, // Brand changes trigger API call
        supplier, // Supplier changes trigger API call
        freeShipping, // Checkbox states trigger API call
        cheapPrice,
        fastDelivery,
        minRating
    ]);

    const addViewedProduct = (productId: string) => {
        const viewedProducts = JSON.parse(localStorage.getItem("viewedProducts") || "[]").map(Number);

        // Nếu sản phẩm chưa có trong danh sách thì thêm vào
        if (!viewedProducts.includes(productId)) {
            viewedProducts.push(productId);
        }

        // Giữ tối đa 10 sản phẩm gần nhất
        if (viewedProducts.length > 10) {
            viewedProducts.shift(); // Xóa sản phẩm cũ nhất
        }

        localStorage.setItem("viewedProducts", JSON.stringify(viewedProducts));
    };

    return (
        <>
            {!isLoading && (
                <div className="product-container">
                    <Row className="customize-row" > {/* Điều chỉnh gutter */}
                        {filteredBooks?.length > 0 ? (
                            filteredBooks.map((item, index) => (
                                <Col
                                    xs={24}
                                    sm={12}
                                    md={8}
                                    lg={6}
                                    xl={6}
                                    key={`book-${index}`}
                                >
                                    <div
                                        onClick={() => {
                                            navigate(`/book/${item.id}`);
                                            addViewedProduct(item.id);
                                        }}
                                        className="column top-deal-column"
                                    >
                                        <div className="wrapper">
                                            {/* Thumbnail */}
                                            <div className="thumbnail">
                                                <img
                                                    src={item.thumbnail}

                                                    alt="thumbnail book"
                                                />
                                                {/* Badge */}
                                                <div className="badge-container">
                                                    <picture className="webpimg-container">
                                                        <source
                                                            type="image/webp"
                                                            srcSet="https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png"
                                                        />
                                                        <img
                                                            src="https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png"
                                                            alt="product_image_badge"
                                                            className="product-badge"
                                                        />
                                                    </picture>
                                                </div>
                                                <div className="left-badge">25.3</div>
                                                {/* Badge "AD" */}
                                                <p className="ads-badge">AD</p>
                                            </div>

                                            {/* Price and Promotion */}
                                            <div className="price-section">
                                                <div className="price">
                                                    {new Intl.NumberFormat("vi-VN", {
                                                        style: "currency",
                                                        currency: "VND",
                                                    }).format(item?.price ?? 0)}
                                                </div>
                                                <div className="discount">
                                                    {item.promotion && (
                                                        <span className="promotion-tag">-{item.promotion}%</span>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="author" title={item.author}>
                                                <span>{item.author}</span>
                                            </div>
                                            {/* Text */}
                                            <div className="text" title={item.mainText}>
                                                <span>{item.mainText}</span>
                                            </div>

                                            {/* Rating - đặt ngay sau text, không có spacer */}
                                            <div className="rating">
                                                <Rate
                                                    className="rate"
                                                    value={5}
                                                    disabled
                                                    style={{ fontSize: 12, lineHeight: '13.8px' }} // Thêm lineHeight: '13.8px'
                                                    character={<CustomStar />}
                                                />
                                                <span>Đã bán {item?.sold ?? 0}</span>
                                            </div>

                                            {/* Spacer - sẽ đẩy divider xuống cuối */}
                                            <div style={{ flex: '1' }}></div>

                                            {/* Divider */}
                                            <Divider className="divider" style={{ margin: '0' }} />

                                            <div className="delivery">
                                                <img

                                                    src="https://salt.tikicdn.com/ts/tka/a8/31/b6/802e2c99dcce64c67aa2648edb15dd25.png"
                                                    alt="Giao siêu tốc 2H"
                                                    className="service-icon"
                                                />
                                                <span className="service-text"> Giao siêu tốc 2H </span>

                                            </div>

                                        </div>

                                    </div>



                                </Col>
                            ))
                        ) : (
                            <div
                                style={{
                                    width: "100%",
                                    textAlign: "center",
                                    padding: "50px 0",
                                    fontSize: "18px",
                                    color: "#666",
                                    border: "1px dashed #ddd",
                                    borderRadius: "8px",
                                    margin: "20px 0",
                                }}
                            >
                                <div style={{ marginBottom: "15px" }}>
                                    <ReloadOutlined style={{ fontSize: "32px", color: "#999" }} />
                                </div>
                                <p>Chúng tôi không có sản phẩm phù hợp</p>
                                <Button
                                    type="primary"
                                    onClick={() => {
                                        setSearchTerm("");
                                        setCategory("");
                                        setBrand([]); // Reset brand filter to empty array
                                        setSupplier([]); // Reset supplier filter to empty array
                                        fetchBook();
                                    }}
                                    icon={<ReloadOutlined />}
                                >
                                    Xem tất cả sản phẩm
                                </Button>
                            </div>
                        )}
                    </Row>

                    {/* Debug info to see values */}
                    <div style={{ padding: '10px', fontSize: '12px', color: '#999' }}>
                        Debug: Current Items: {filteredBooks?.length || 0}, Total Items: {total || 0}
                    </div>

                    {/* Show View More button regardless of total, as long as we have items */}
                    {filteredBooks?.length > 0 && (
                        <div className="view-more-container">
                            <div
                                data-view-id="category_infinity_view.more"
                                className="view-more-button"
                                onClick={() => {
                                    console.log("View More clicked - increasing page size");
                                    setPageSize(prevPageSize => {
                                        const newSize = prevPageSize + 10;
                                        console.log(`Increasing page size from ${prevPageSize} to ${newSize}`);
                                        return newSize;
                                    });
                                    fetchBook();
                                }}
                            >
                                {isLoading ? (
                                    <div className="loading-dots">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                ) : (
                                    "Xem thêm"
                                )}
                            </div>
                        </div>
                    )}
                </div>
            )}
        </>
    );
};

// Set default props
Product.defaultProps = {
    listBook: undefined
};

export default Product;