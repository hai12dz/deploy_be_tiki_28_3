import { useFilterContext } from "@/context/FilterContext";
import { getBooksAPI } from "@/services/api";
import { ReloadOutlined, StarFilled } from "@ant-design/icons";
import { Button, Rate, Row, Col, Tag, Divider, message } from "antd"; // Add message from antd
import { useEffect, useMemo, useState, useRef } from "react";
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
    const { isLoading, setIsLoading, selectedBrands, selectedSuppliers,
        fastDeliveryChecked, cheapPriceChecked, freeShipChecked, fourStarsChecked, selectedSort,
        pageSize: contextPageSize, setPageSize: setContextPageSize
    } = useFilterContext();
    const [searchTerm, setSearchTerm] = useOutletContext() as any;
    const navigate = useNavigate();

    // Use local state as a fallback if props are not provided
    const [localListBook, setLocalListBook] = useState<IBookTable[]>([]);
    const [total, setTotal] = useState<number>(0);
    const [current, setCurrent] = useState<number>(1);

    const [filter, setFilter] = useState<string>("");
    const [sortQuery, setSortQuery] = useState<string>("sort=-sold");
    const [showMobileFilter, setShowMobileFilter] = useState<boolean>(false);
    const [nameCategory, setNameCategory] = useState<{ [key: string]: string[] }>({});
    const [listBrand, setListBrand] = useState<IBrands[]>([]);
    const [listSupplier, setListSupplier] = useState<ISupplier[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [queryFiler, setQueryFilter] = useState<string>("");
    const [category, setCategory] = useState<string>("");
    const [listFullCategory, setListFullCategory] = useState<ICategory[]>([]);

    // Change these from string to arrays
    const [brand, setBrand] = useState<string[]>([]);
    const [supplier, setSupplier] = useState<string[]>([]);

    // Add state for filters
    const [freeShipping, setFreeShipping] = useState(false);
    const [cheapPrice, setCheapPrice] = useState(false);
    const [fastDelivery, setFastDelivery] = useState(false);
    const [minRating, setMinRating] = useState(0);

    const [previousItemCount, setPreviousItemCount] = useState<number>(0);
    const [hasMoreItems, setHasMoreItems] = useState<boolean>(true);

    // Track if a fetch is in progress to prevent duplicate calls
    const [isFetching, setIsFetching] = useState<boolean>(false);

    // Use a ref to store and compare pageSize values explicitly
    const pageSizeRef = useRef<number>(10);

    // Replace items comparison state with more robust tracking
    const [itemIds, setItemIds] = useState<Set<string>>(new Set());

    // Add a ref to track if we've initialized the item IDs from the initial load
    const initializedRef = useRef<boolean>(false);

    // Use prop books if available, otherwise use local state
    const listBook = propListBook || localListBook;

    const filteredBooks = useMemo(() => {
        return listBook.filter((book) =>
            book.mainText.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [searchTerm, listBook]);

    const fetchBook = async (requestPageSize?: number) => {
        // If already fetching, don't start another fetch
        if (isFetching) return;

        setIsFetching(true);
        setIsLoading(true);

        // Use the explicitly passed pageSize, or the one from context
        const currentPageSize = requestPageSize || contextPageSize || 10;
        console.log(`Fetching with pageSize: ${currentPageSize}, Previous pageSize: ${pageSizeRef.current}`);

        // Build query params using context variables
        let query = new URLSearchParams();

        // Base pagination params - use the currentPageSize
        query.append('current', current.toString());
        query.append('pageSize', currentPageSize.toString());

        // Search by text
        if (searchTerm) {
            query.append('mainText', searchTerm);
        }

        // Category filter
        if (filter) {
            query.append('filter', filter);
        }

        // Sort parameter based on selectedSort from context
        if (selectedSort) {
            const sortCode = getSortCode(selectedSort);
            query.append('sort', sortCode);
        } else {
            query.append('sort', 'popular');
        }

        // Brand filter from context
        if (selectedBrands && selectedBrands.length > 0) {
            query.append('brands', selectedBrands.join(','));
        }

        // Supplier filter from context
        if (selectedSuppliers && selectedSuppliers.length > 0) {
            query.append('suppliers', selectedSuppliers.join(','));
        }

        // Add checkbox filters from context
        if (fourStarsChecked) {
            query.append('minRating', '4');
        }

        if (freeShipChecked) {
            query.append('freeShipping', 'true');
        }

        if (cheapPriceChecked) {
            query.append('cheapPrice', 'true');
        }

        if (fastDeliveryChecked) {
            query.append('fastDelivery', 'true');
        }

        // Convert URLSearchParams to string
        const queryString = query.toString();
        console.log("Fetching with query:", queryString);

        try {
            // Clear any existing messages to prevent duplicates
            message.destroy();

            // IMPORTANT: Store the current item IDs before fetching
            // But only consider it if we've already initialized
            const isInitialized = initializedRef.current;
            const prevItemIds = new Set([...itemIds]);
            const prevItemCount = prevItemIds.size;

            console.log(`Before fetch: initialized=${isInitialized}, prevItemCount=${prevItemCount}`);

            const res = await getBooksAPI(queryString);
            if (res && res.data) {
                // Get the new items from the API
                const items = res.data.items || [];

                // Store all item IDs from this response for comparison
                const responseItemIds = new Set(items.map(item => item.id));
                console.log(`Response returned ${items.length} items with ${responseItemIds.size} unique IDs`);

                // Track if we requested more items (increased pageSize)
                const requestedMoreItems = currentPageSize > pageSizeRef.current;

                if (requestedMoreItems && isInitialized) {
                    // We're loading MORE items after initial load

                    // Create sets for tracking
                    const newItemIds = new Set([...prevItemIds]);
                    const existingItems = [...localListBook];

                    // Count how many new items we're adding
                    let newItemsCount = 0;

                    // Process new items from response
                    items.forEach(item => {
                        if (!prevItemIds.has(item.id)) {
                            newItemsCount++;
                            newItemIds.add(item.id);
                            existingItems.push(item);
                        }
                    });

                    console.log(`Found ${newItemsCount} new items to add`);

                    // Update state with new items
                    setItemIds(newItemIds);
                    setLocalListBook(existingItems);

                    // If we didn't add any new items, show message and hide button
                    if (newItemsCount === 0) {
                        console.log("No new items found, hiding 'View More' button");
                        message.info('Không còn sản phẩm để hiển thị');
                        setHasMoreItems(false);
                    }
                } else {
                    // Initial load - replace all items
                    console.log("Initial load or filter change - replacing all items");
                    initializedRef.current = true;

                    // Store IDs from initial response
                    setItemIds(responseItemIds);
                    setLocalListBook(items);

                    // For initial load, show "View More" button if there are items
                    setHasMoreItems(items.length > 0);

                    // Special case: Check if items received equals pageSize
                    // If we got fewer items than requested, there are no more to load
                    if (items.length < currentPageSize) {
                        console.log("Received fewer items than requested pageSize, no more to load");
                        setHasMoreItems(false);
                    }
                }

                // Update pageSize reference for next comparison
                pageSizeRef.current = currentPageSize;

                // Set total from meta
                if (res.data.meta && res.data.meta.totalItems) {
                    setTotal(res.data.meta.totalItems);

                    // Additional check: if we've loaded all items based on total, hide button
                    if (responseItemIds.size >= res.data.meta.totalItems) {
                        console.log("All items loaded based on totalItems");
                        setHasMoreItems(false);
                    }
                }
            }
        } catch (error) {
            console.error("Error fetching books:", error);
            message.error('Đã xảy ra lỗi khi tải sách');
            setHasMoreItems(false);
        } finally {
            setIsLoading(false);
            setIsFetching(false);
        }
    };

    // Helper function to get consistent sort code
    const getSortCode = (sortText: string): string => {
        switch (sortText) {
            case 'Phổ biến':
                return 'popular';
            case 'Bán chạy':
                return 'bestselling';
            case 'Hàng mới':
                return 'newest';
            case 'Giá thấp đến cao':
                return 'price-asc';
            case 'Giá cao đến thấp':
                return 'price-desc';
            default:
                return 'popular'; // Default to popular
        }
    };

    // Only fetch books if we're not receiving them from props
    useEffect(() => {
        if (!propListBook && !isFetching) {
            fetchBook();
        }
    }, [
        propListBook,
        current,
        selectedSort,
        fastDeliveryChecked,
        cheapPriceChecked,
        freeShipChecked,
        fourStarsChecked,
        selectedBrands,
        selectedSuppliers,
        searchTerm
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

                    {/* Show View More button only if we have items and hasMoreItems is true */}
                    {filteredBooks?.length > 0 && hasMoreItems && !isFetching && (
                        <div className="view-more-container">
                            <div
                                data-view-id="category_infinity_view.more"
                                className="view-more-button"
                                onClick={() => {
                                    // Clear any existing messages first
                                    message.destroy();

                                    // Calculate new page size - explicitly use pageSizeRef for better consistency
                                    const newSize = pageSizeRef.current + 10;
                                    console.log(`View More clicked - increasing pageSize from ${pageSizeRef.current} to ${newSize}`);

                                    // Update context pageSize first
                                    if (setContextPageSize) {
                                        setContextPageSize(newSize);
                                    }

                                    // Fetch with new size immediately - this is critical!
                                    fetchBook(newSize);
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

                    {/* Show a message when there are no more items to load */}
                    {filteredBooks?.length > 0 && !hasMoreItems && !isLoading && (
                        <div className="no-more-items-message">
                            Đã hiển thị tất cả sản phẩm
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