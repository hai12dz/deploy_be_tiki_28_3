import { useEffect, useState } from "react";
import { getFullCategories, getBooksAPI } from "@/services/api";
import MyCarousel from "./slide/carousel";
import ProductFilter from "./product/filter.product";

// Add a proper interface for the component props
interface TikiBookstoreProps {
    onListBookChange: (books: IBookTable[]) => void;
    isLoading: boolean;
    setIsLoading: (loading: boolean) => void;
}

const TikiBookstore: React.FC<TikiBookstoreProps> = ({ onListBookChange, isLoading, setIsLoading }) => {
    const [listFullCategory, setListFullCategory] = useState<ICategory[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    useEffect(() => {
        fetchFullCategories();
    }, []);

    const fetchFullCategories = async () => {
        const res = await getFullCategories();
        setListFullCategory(res.data!);
    };

    const handleCategoryClick = async (categoryId: string) => {
        try {
            // If clicking the same category again, do nothing
            if (selectedCategory === categoryId) return;

            setIsLoading(true);
            setSelectedCategory(categoryId);

            // Get the category name from the list using ID
            const selectedCategoryObj = listFullCategory.find(cat => cat.id === categoryId);

            // Build query with filter parameter instead of category
            // The backend expects 'filter' parameter with category name, not ID
            let query = `filter=${selectedCategoryObj?.name || ''}`;

            const res = await getBooksAPI(query);
            if (res && res.data) {
                // Simply pass the books to the parent component
                const books = res.data.items || [];
                onListBookChange(books);
            }
        } catch (error) {
            console.error("Error fetching books by category:", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="sc-dfad4f1d-3 TjGns">
            <div className="sc-4b956788-0 dUZwur">
                <h2>Nhà Sách Tiki</h2>
            </div>

            <MyCarousel />
            <div className="sc-9f1e84db-0 hzwFlv">
                <div className="sc-9f1e84db-2 cASiea">Khám phá theo danh mục</div>
                <div className="sc-9f1e84db-1 iNVZwz">
                    {listFullCategory.map((item, index) => (
                        <div
                            key={index}
                            onClick={() => handleCategoryClick(item.id)}
                            style={{ cursor: 'pointer' }}
                            className={`sc-9f1e84db-3 jhfSVS ${selectedCategory === item.id ? 'selected-category' : ''}`}
                        >
                            <div className="sc-9f1e84db-4 bxgzHY">
                                <img src={item.url} width="88" height="88" alt={item.name} />
                            </div>
                            <div className="sc-9f1e84db-5 cZlEPY">{item.name}</div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="sc-dc63c727-0 eBNJvi">
                <div className="sc-dc63c727-1 bHGEYe">Tất cả sản phẩm</div>
                <div className="sc-92fcafd8-0 fLLNCa">
                    <div className="sc-7361b68-0 jPfQtU">
                        <div className="sc-22175ea6-0 bolcif">
                            <div className="sc-22175ea6-1 kwosOp">
                                <div
                                    className="sc-22175ea6-2 jHfdYL"
                                    style={{ transform: "translateX(0px)" }}
                                >
                                    <div>
                                        <div className="sc-22175ea6-3 jycPXl">Thương hiệu</div>
                                        <div className="sc-22175ea6-4 cOBCCm">
                                            <button
                                                className="sc-bd134f7-0 sc-bd134f7-1 weoZA hapXaW filter-child"
                                                style={{ marginRight: "8px" }}
                                            >
                                                <div className="sc-bd134f7-2 jaczNN">Deli</div>
                                            </button>
                                            <button
                                                className="sc-bd134f7-0 sc-bd134f7-1 weoZA hapXaW filter-child"
                                                style={{ marginRight: "8px" }}
                                            >
                                                <div className="sc-bd134f7-2 jaczNN">Thiên Long</div>
                                            </button>
                                            <button
                                                className="sc-bd134f7-0 sc-bd134f7-1 weoZA hapXaW filter-child"
                                                style={{ marginRight: "8px" }}
                                            >
                                                <div className="sc-bd134f7-2 jaczNN">MAGIX</div>
                                            </button>
                                            <button
                                                className="sc-bd134f7-0 sc-bd134f7-1 weoZA hapXaW filter-child"
                                                style={{ marginRight: "0px" }}
                                            >
                                                <div className="sc-bd134f7-2 jaczNN">Hồng Hà</div>
                                            </button>
                                            <button
                                                className="sc-a287ca93-0 sc-a287ca93-1 iNPxYw dyvIJm filter-child filter-dropdown"
                                                aria-describedby="popup-4"
                                            >
                                                <img
                                                    src="https://frontend.tikicdn.com/_desktop-next/static/img/catalog/arrow.svg"
                                                    alt="arrow"
                                                    className="sc-7361b68-2 esqRqh"
                                                />
                                            </button>
                                        </div>
                                    </div>
                                    <div
                                        className="sc-7361b68-1 bBHRSE"
                                        style={{
                                            marginLeft: "16px",
                                            marginRight: "16px",
                                            alignSelf: "flex-end",
                                        }}
                                    />
                                    <div>
                                        <div className="sc-22175ea6-3 jycPXl">Nhà cung cấp</div>
                                        <div className="sc-22175ea6-4 cOBCCm">
                                            <button
                                                className="sc-bd134f7-0 sc-bd134f7-1 weoZA hapXaW filter-child"
                                                style={{ marginRight: "8px" }}
                                            >
                                                <div className="sc-bd134f7-2 jaczNN">Nhà Sách Vĩnh Thụy</div>
                                            </button>
                                            <button
                                                className="sc-bd134f7-0 sc-bd134f7-1 weoZA hapXaW filter-child"
                                                style={{ marginRight: "8px" }}
                                            >
                                                <div className="sc-bd134f7-2 jaczNN">Bamboo Books</div>
                                            </button>
                                            <button
                                                className="sc-bd134f7-0 sc-bd134f7-1 weoZA hapXaW filter-child"
                                                style={{ marginRight: "8px" }}
                                            >
                                                <div className="sc-bd134f7-2 jaczNN">
                                                    HỆ THỐNG NHÀ SÁCH AB…
                                                </div>
                                            </button>
                                            <button
                                                className="sc-bd134f7-0 sc-bd134f7-1 weoZA hapXaW filter-child"
                                                style={{ marginRight: "0px" }}
                                            >
                                                <div className="sc-bd134f7-2 jaczNN">info book</div>
                                            </button>
                                            <button
                                                className="sc-a287ca93-0 sc-a287ca93-1 iNPxYw dyvIJm filter-child filter-dropdown"
                                                aria-describedby="popup-5"
                                            >
                                                <img
                                                    src="https://frontend.tikicdn.com/_desktop-next/static/img/catalog/arrow.svg"
                                                    alt="arrow"
                                                    className="sc-7361b68-2 esqRqh"
                                                />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="sc-52fbe9f3-0 cZbPqU"
                                    style={{
                                        position: "absolute",
                                        right: "0px",
                                        bottom: "0px",
                                        display: "block",
                                    }}
                                >
                                    <div className="sc-52fbe9f3-1 iFTBpb arrow-icon-wrapper">
                                        <img
                                            src="https://frontend.tikicdn.com/_desktop-next/static/img/catalog/arrow.svg"
                                            alt="arrow"
                                            className="sc-7361b68-2 esqRqh"
                                            style={{ transform: "rotate(-90deg)" }}
                                        />
                                    </div>
                                </div>
                                <div
                                    className="sc-52fbe9f3-0 fFSVOV"
                                    style={{
                                        position: "absolute",
                                        left: "0px",
                                        bottom: "0px",
                                        display: "none",
                                    }}
                                >
                                    <div className="sc-52fbe9f3-1 iFTBpb arrow-icon-wrapper">
                                        <img
                                            src="https://frontend.tikicdn.com/_desktop-next/static/img/catalog/arrow.svg"
                                            alt="arrow"
                                            className="sc-7361b68-2 esqRqh"
                                            style={{ transform: "rotate(90deg)" }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div style={{ marginLeft: "auto", display: "flex", flexShrink: 0 }}>
                                <div
                                    className="sc-7361b68-1 bBHRSE"
                                    style={{
                                        marginLeft: "16px",
                                        marginRight: "16px",
                                        alignSelf: "flex-end",
                                    }}
                                />
                                <button className="sc-a04c7302-0 grYDwO">
                                    <img
                                        src="https://salt.tikicdn.com/ts/upload/3f/23/35/2d29fcaea0d10cbb85ce5b0d4cd20add.png"
                                        alt="filters"
                                        className="sc-a04c7302-1 dGFmnx"
                                    />
                                    <div>Tất cả</div>
                                </button>
                            </div>
                        </div>
                        <div className="sc-2da8e6fd-0 ceYFfu">
                            <div className="sc-2da8e6fd-1 hSNPhu">
                                <div
                                    className="sc-2da8e6fd-2 gKaIac"
                                    style={{ transform: "translateX(0px)" }}
                                >
                                    <div className="sc-aaa42ade-0 hxysjC filter-child2">
                                        <div
                                            className="sc-eca64225-3 Ywrhm"
                                            style={{ marginRight: "8px" }}
                                        >
                                            <span className="box">
                                                <img
                                                    className="icon-check-on"
                                                    src="https://salt.tikicdn.com/ts/upload/3a/f3/e4/b9e681d6b71abcc05f6c00399361bb81.png"
                                                    alt="active-checkbox"
                                                />
                                                <img
                                                    className="icon-check-off"
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
                                            style={{ height: "17px" }}
                                        />
                                        <div className="sc-aaa42ade-2 hCmoWw">
                                            <span>Giao siêu tốc 2H</span>
                                        </div>
                                    </div>
                                    <div
                                        className="sc-7361b68-1 bBHRSE"
                                        style={{
                                            height: "24px",
                                            marginLeft: "16px",
                                            marginRight: "16px",
                                        }}
                                    />
                                    <div className="sc-aaa42ade-0 hxysjC filter-child2">
                                        <div
                                            className="sc-eca64225-3 Ywrhm"
                                            style={{ marginRight: "8px" }}
                                        >
                                            <span className="box">
                                                <img
                                                    className="icon-check-on"
                                                    src="https://salt.tikicdn.com/ts/upload/3a/f3/e4/b9e681d6b71abcc05f6c00399361bb81.png"
                                                    alt="active-checkbox"
                                                />
                                                <img
                                                    className="icon-check-off"
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
                                    <div
                                        className="sc-7361b68-1 bBHRSE"
                                        style={{
                                            height: "24px",
                                            marginLeft: "16px",
                                            marginRight: "16px",
                                        }}
                                    />
                                    <div className="sc-aaa42ade-0 hxysjC filter-child2">
                                        <div
                                            className="sc-eca64225-3 Ywrhm"
                                            style={{ marginRight: "8px" }}
                                        >
                                            <span className="box">
                                                <img
                                                    className="icon-check-on"
                                                    src="https://salt.tikicdn.com/ts/upload/3a/f3/e4/b9e681d6b71abcc05f6c00399361bb81.png"
                                                    alt="active-checkbox"
                                                />
                                                <img
                                                    className="icon-check-off"
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
                                    <div
                                        className="sc-7361b68-1 bBHRSE"
                                        style={{
                                            height: "24px",
                                            marginLeft: "16px",
                                            marginRight: "16px",
                                        }}
                                    />
                                    <div className="sc-aaa42ade-0 hxysjC filter-child2">
                                        <div
                                            className="sc-eca64225-3 Ywrhm"
                                            style={{ marginRight: "8px" }}
                                        >
                                            <span className="box">
                                                <img
                                                    className="icon-check-on"
                                                    src="https://salt.tikicdn.com/ts/upload/3a/f3/e4/b9e681d6b71abcc05f6c00399361bb81.png"
                                                    alt="active-checkbox"
                                                />
                                                <img
                                                    className="icon-check-off"
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
                                        <div
                                            className="sc-3064fef6-0 gXyJLZ"
                                            style={{ marginRight: "8px", transform: "translateY(-1px)" }}
                                        >
                                            <div
                                                style={{
                                                    zIndex: 2,
                                                    position: "absolute",
                                                    left: "0px",
                                                    top: "0px",
                                                    bottom: "0px",
                                                    width: "80%",
                                                    overflow: "hidden",
                                                }}
                                            >
                                                <svg
                                                    width={12}
                                                    height={12}
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    style={{ width: "12px", height: "12px" }}
                                                >
                                                    <g clipPath="url(#a)">
                                                        <path
                                                            d="M6.448 2.029a.5.5 0 0 0-.896 0L4.287 4.59l-2.828.41a.5.5 0 0 0-.277.854l2.046 1.994-.483 2.816a.5.5 0 0 0 .726.528L6 9.863l2.53 1.33a.5.5 0 0 0 .725-.527l-.483-2.817 2.046-1.994a.5.5 0 0 0-.277-.853L7.713 4.59 6.448 2.029Z"
                                                            fill="#FFC400"
                                                        />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="a">
                                                            <path
                                                                fill="#fff"
                                                                transform="translate(1 1.5)"
                                                                d="M0 0h10v10H0z"
                                                            />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                                <svg
                                                    width={12}
                                                    height={12}
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    style={{ width: "12px", height: "12px" }}
                                                >
                                                    <g clipPath="url(#a)">
                                                        <path
                                                            d="M6.448 2.029a.5.5 0 0 0-.896 0L4.287 4.59l-2.828.41a.5.5 0 0 0-.277.854l2.046 1.994-.483 2.816a.5.5 0 0 0 .726.528L6 9.863l2.53 1.33a.5.5 0 0 0 .725-.527l-.483-2.817 2.046-1.994a.5.5 0 0 0-.277-.853L7.713 4.59 6.448 2.029Z"
                                                            fill="#FFC400"
                                                        />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="a">
                                                            <path
                                                                fill="#fff"
                                                                transform="translate(1 1.5)"
                                                                d="M0 0h10v10H0z"
                                                            />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                                <svg
                                                    width={12}
                                                    height={12}
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    style={{ width: "12px", height: "12px" }}
                                                >
                                                    <g clipPath="url(#a)">
                                                        <path
                                                            d="M6.448 2.029a.5.5 0 0 0-.896 0L4.287 4.59l-2.828.41a.5.5 0 0 0-.277.854l2.046 1.994-.483 2.816a.5.5 0 0 0 .726.528L6 9.863l2.53 1.33a.5.5 0 0 0 .725-.527l-.483-2.817 2.046-1.994a.5.5 0 0 0-.277-.853L7.713 4.59 6.448 2.029Z"
                                                            fill="#FFC400"
                                                        />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="a">
                                                            <path
                                                                fill="#fff"
                                                                transform="translate(1 1.5)"
                                                                d="M0 0h10v10H0z"
                                                            />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                                <svg
                                                    width={12}
                                                    height={12}
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    style={{ width: "12px", height: "12px" }}
                                                >
                                                    <g clipPath="url(#a)">
                                                        <path
                                                            d="M6.448 2.029a.5.5 0 0 0-.896 0L4.287 4.59l-2.828.41a.5.5 0 0 0-.277.854l2.046 1.994-.483 2.816a.5.5 0 0 0 .726.528L6 9.863l2.53 1.33a.5.5 0 0 0 .725-.527l-.483-2.817 2.046-1.994a.5.5 0 0 0-.277-.853L7.713 4.59 6.448 2.029Z"
                                                            fill="#FFC400"
                                                        />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="a">
                                                            <path
                                                                fill="#fff"
                                                                transform="translate(1 1.5)"
                                                                d="M0 0h10v10H0z"
                                                            />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                                <svg
                                                    width={12}
                                                    height={12}
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    style={{ width: "12px", height: "12px" }}
                                                >
                                                    <g clipPath="url(#a)">
                                                        <path
                                                            d="M6.448 2.029a.5.5 0 0 0-.896 0L4.287 4.59l-2.828.41a.5.5 0 0 0-.277.854l2.046 1.994-.483 2.816a.5.5 0 0 0 .726.528L6 9.863l2.53 1.33a.5.5 0 0 0 .725-.527l-.483-2.817 2.046-1.994a.5.5 0 0 0-.277-.853L7.713 4.59 6.448 2.029Z"
                                                            fill="#FFC400"
                                                        />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="a">
                                                            <path
                                                                fill="#fff"
                                                                transform="translate(1 1.5)"
                                                                d="M0 0h10v10H0z"
                                                            />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </div>
                                            <svg
                                                width={12}
                                                height={12}
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <g clipPath="url(#a)">
                                                    <path
                                                        d="M6.448 2.029a.5.5 0 0 0-.896 0L4.287 4.59l-2.828.41a.5.5 0 0 0-.277.854l2.046 1.994-.483 2.816a.5.5 0 0 0 .726.528L6 9.863l2.53 1.33a.5.5 0 0 0 .725-.527l-.483-2.817 2.046-1.994a.5.5 0 0 0-.277-.853L7.713 4.59 6.448 2.029Z"
                                                        fill="#DDDDE3"
                                                    />
                                                </g>
                                                <defs>
                                                    <clipPath id="a">
                                                        <path
                                                            fill="#fff"
                                                            transform="translate(1 1.5)"
                                                            d="M0 0h10v10H0z"
                                                        />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                            <svg
                                                width={12}
                                                height={12}
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <g clipPath="url(#a)">
                                                    <path
                                                        d="M6.448 2.029a.5.5 0 0 0-.896 0L4.287 4.59l-2.828.41a.5.5 0 0 0-.277.854l2.046 1.994-.483 2.816a.5.5 0 0 0 .726.528L6 9.863l2.53 1.33a.5.5 0 0 0 .725-.527l-.483-2.817 2.046-1.994a.5.5 0 0 0-.277-.853L7.713 4.59 6.448 2.029Z"
                                                        fill="#DDDDE3"
                                                    />
                                                </g>
                                                <defs>
                                                    <clipPath id="a">
                                                        <path
                                                            fill="#fff"
                                                            transform="translate(1 1.5)"
                                                            d="M0 0h10v10H0z"
                                                        />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                            <svg
                                                width={12}
                                                height={12}
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <g clipPath="url(#a)">
                                                    <path
                                                        d="M6.448 2.029a.5.5 0 0 0-.896 0L4.287 4.59l-2.828.41a.5.5 0 0 0-.277.854l2.046 1.994-.483 2.816a.5.5 0 0 0 .726.528L6 9.863l2.53 1.33a.5.5 0 0 0 .725-.527l-.483-2.817 2.046-1.994a.5.5 0 0 0-.277-.853L7.713 4.59 6.448 2.029Z"
                                                        fill="#DDDDE3"
                                                    />
                                                </g>
                                                <defs>
                                                    <clipPath id="a">
                                                        <path
                                                            fill="#fff"
                                                            transform="translate(1 1.5)"
                                                            d="M0 0h10v10H0z"
                                                        />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                            <svg
                                                width={12}
                                                height={12}
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <g clipPath="url(#a)">
                                                    <path
                                                        d="M6.448 2.029a.5.5 0 0 0-.896 0L4.287 4.59l-2.828.41a.5.5 0 0 0-.277.854l2.046 1.994-.483 2.816a.5.5 0 0 0 .726.528L6 9.863l2.53 1.33a.5.5 0 0 0 .725-.527l-.483-2.817 2.046-1.994a.5.5 0 0 0-.277-.853L7.713 4.59 6.448 2.029Z"
                                                        fill="#DDDDE3"
                                                    />
                                                </g>
                                                <defs>
                                                    <clipPath id="a">
                                                        <path
                                                            fill="#fff"
                                                            transform="translate(1 1.5)"
                                                            d="M0 0h10v10H0z"
                                                        />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                            <svg
                                                width={12}
                                                height={12}
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <g clipPath="url(#a)">
                                                    <path
                                                        d="M6.448 2.029a.5.5 0 0 0-.896 0L4.287 4.59l-2.828.41a.5.5 0 0 0-.277.854l2.046 1.994-.483 2.816a.5.5 0 0 0 .726.528L6 9.863l2.53 1.33a.5.5 0 0 0 .725-.527l-.483-2.817 2.046-1.994a.5.5 0 0 0-.277-.853L7.713 4.59 6.448 2.029Z"
                                                        fill="#DDDDE3"
                                                    />
                                                </g>
                                                <defs>
                                                    <clipPath id="a">
                                                        <path
                                                            fill="#fff"
                                                            transform="translate(1 1.5)"
                                                            d="M0 0h10v10H0z"
                                                        />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div className="sc-aaa42ade-2 hCmoWw">
                                            <span>từ 4 sao</span>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="sc-52fbe9f3-0 cZbPqU sc-2da8e6fd-3 eogXNM"
                                    style={{
                                        position: "absolute",
                                        right: "0px",
                                        bottom: "0px",
                                        display: "none",
                                    }}
                                >
                                    <div className="sc-52fbe9f3-1 iFTBpb arrow-icon-wrapper">
                                        <img
                                            src="https://frontend.tikicdn.com/_desktop-next/static/img/catalog/arrow.svg"
                                            alt="arrow"
                                            className="sc-7361b68-2 esqRqh"
                                            style={{ transform: "rotate(-90deg)" }}
                                        />
                                    </div>
                                </div>
                                <div
                                    className="sc-52fbe9f3-0 fFSVOV sc-2da8e6fd-3 eogXNM"
                                    style={{
                                        position: "absolute",
                                        left: "0px",
                                        bottom: "0px",
                                        display: "none",
                                    }}
                                >
                                    <div className="sc-52fbe9f3-1 iFTBpb arrow-icon-wrapper">
                                        <img
                                            src="https://frontend.tikicdn.com/_desktop-next/static/img/catalog/arrow.svg"
                                            alt="arrow"
                                            className="sc-7361b68-2 esqRqh"
                                            style={{ transform: "rotate(90deg)" }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div style={{ marginLeft: "auto", display: "flex", flexShrink: 0 }}>
                                <div style={{ marginLeft: "16px" }} />
                                <div className="sc-169acb76-0 jwzuoe">
                                    <div className="sc-169acb76-1 cyJqQu">Sắp xếp</div>
                                    <div aria-describedby="popup-6" className="sc-169acb76-2 keUrBT">
                                        <div style={{ marginRight: "8px" }}>Phổ biến</div>
                                        <img
                                            src="https://frontend.tikicdn.com/_desktop-next/static/img/catalog/arrow.svg"
                                            alt="arrow"
                                            className="sc-7361b68-2 esqRqh"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default TikiBookstore;