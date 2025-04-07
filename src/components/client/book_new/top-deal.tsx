import './book.new.scss'
import React, { useState } from 'react';

const TopDeal = () => {
    // State to track current slide index
    const [currentSlide, setCurrentSlide] = useState(0);

    // Width of each slide group
    const slideWidth = 132;

    // Total number of slides (pagination groups)
    const totalSlides = 6;

    // Handle prev click
    const handlePrevClick = () => {
        if (currentSlide > 0) {
            setCurrentSlide(currentSlide - 1);
        }
    };

    // Handle next click
    const handleNextClick = () => {
        if (currentSlide < totalSlides - 1) {
            setCurrentSlide(currentSlide + 1);
        }
    };

    // Handle pagination dot click
    const handlePaginationClick = (index: number) => {
        setCurrentSlide(index);
    };

    // Determine if prev/next buttons should be disabled
    const isPrevDisabled = currentSlide === 0;
    const isNextDisabled = currentSlide === totalSlides - 1;

    return (
        <div className="sc-34e0efdc-0 dSZwVn" style={{}}>
            <div className="sc-34e0efdc-1 ddClVB">Top Deals</div>
            <div
                style={{
                    display: "flex",
                    flex: "1 1 0%",
                    overflow: "hidden",
                    paddingTop: 12
                }}
            >
                <div className="sc-a007ec24-0 hVGhMI">
                    <span
                        className={`icon icon-prev ${isPrevDisabled ? 'disabled' : ''}`}
                        onClick={handlePrevClick}
                    >
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
                                gap: 8,
                                transform: `translateX(-${currentSlide * slideWidth}px)`,
                                transition: "0.5s ease-in-out"
                            }}
                        >
                            <div
                                className="sc-714f5c73-0 dutDwQ"
                                style={{ display: "-webkit-box", width: 132 }}
                            >
                                <div className="sc-e6fb8ae7-1 kTzRAo">
                                    <div style={{ height: "100%", width: "100%" }}>
                                        <a
                                            className="sc-8b415d9d-1 iRifC product-item"
                                            data-view-id="product_list_item"
                                            data-view-content='{"click_data":{"id":12138656}}'
                                            href="/nghe-thuat-tu-duy-chien-luoc-p12138656.html?itm_campaign=tiki-reco_UNK_DT_UNK_UNK_pdp-hero-sku_UNK_pdp-widget-top-deal-v2-v1_202504071400_MD_batched_PID.12138657&itm_medium=CPC&itm_source=tiki-reco&spid=12138657"
                                        >
                                            <span className="sc-8b415d9d-0 esCPZO">
                                                <div style={{ position: "relative" }}>
                                                    <div className="sc-accfdecb-0 oeQAA thumbnail">
                                                        <div className="image-wrapper">
                                                            <picture className="webpimg-container">
                                                                <source
                                                                    type="image/webp"
                                                                    srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/9e/65/af/b9f24a415536a3db40a81759a8955a89.jpg.webp 1x, https://salt.tikicdn.com/cache/280x280/ts/product/9e/65/af/b9f24a415536a3db40a81759a8955a89.jpg.webp 2x"
                                                                />
                                                                <img
                                                                    srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/9e/65/af/b9f24a415536a3db40a81759a8955a89.jpg 1x, https://salt.tikicdn.com/cache/280x280/ts/product/9e/65/af/b9f24a415536a3db40a81759a8955a89.jpg 2x"
                                                                    alt="Nghệ Thuật Tư Duy Chiến Lược"
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
                                                    <div
                                                        className="sc-3e53096f-0 hiPBCe"
                                                        style={{
                                                            position: "absolute",
                                                            top: 8,
                                                            left: 8,
                                                            zIndex: 2
                                                        }}
                                                    />
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
                                                                    Nghệ Thuật Tư Duy Chiến Lược
                                                                </h3>
                                                                <div className="sc-8b415d9d-4 MtbnO">
                                                                    <div
                                                                        className="sc-980e9960-0 eTeHeN"
                                                                        style={{
                                                                            fontSize: 12,
                                                                            display: "inline-block"
                                                                        }}
                                                                    >
                                                                        <div
                                                                            style={{
                                                                                zIndex: 2,
                                                                                position: "absolute",
                                                                                left: 0,
                                                                                top: 0,
                                                                                bottom: 0,
                                                                                width: "94%",
                                                                                overflow: "hidden"
                                                                            }}
                                                                        >
                                                                            <svg
                                                                                width={12}
                                                                                height={12}
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                style={{ width: 12, height: 12 }}
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
                                                                                style={{ width: 12, height: 12 }}
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
                                                                                style={{ width: 12, height: 12 }}
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
                                                                                style={{ width: 12, height: 12 }}
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
                                                                                style={{ width: 12, height: 12 }}
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
                                                                </div>
                                                            </div>
                                                            <div className="sc-7615e682-0 jVbBhv">
                                                                <div className="price-discount">
                                                                    <div
                                                                        className="price-discount__price"
                                                                        style={{ color: "rgb(39, 39, 42)" }}
                                                                    >
                                                                        147.000<sup>₫</sup>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div
                                                        style={{
                                                            display: "flex",
                                                            flexDirection: "column",
                                                            gap: 8
                                                        }}
                                                    >
                                                        <div
                                                            style={{
                                                                display: "flex",
                                                                flexDirection: "column",
                                                                gap: 6
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="sc-714f5c73-0 dutDwQ"
                                style={{ display: "-webkit-box", width: 132 }}
                            >
                                <div className="sc-e6fb8ae7-1 kTzRAo">
                                    <div style={{ height: "100%", width: "100%" }}>
                                        <a
                                            className="sc-8b415d9d-1 iRifC product-item"
                                            data-view-id="product_list_item"
                                            data-view-content='{"click_data":{"id":272420246}}'
                                            href="/event-planning-to-chuc-su-kien-nang-tam-thuong-hieu-p272420246.html?itm_campaign=tiki-reco_UNK_DT_UNK_UNK_pdp-hero-sku_UNK_pdp-widget-top-deal-v2-v1_202504071400_MD_batched_PID.272420247&itm_medium=CPC&itm_source=tiki-reco&spid=272420247"
                                        >
                                            <span className="sc-8b415d9d-0 esCPZO">
                                                <div style={{ position: "relative" }}>
                                                    <div className="sc-accfdecb-0 oeQAA thumbnail">
                                                        <div className="image-wrapper">
                                                            <picture className="webpimg-container">
                                                                <source
                                                                    type="image/webp"
                                                                    srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/69/6f/e2/3d397ce97da9f99a226bdbb89429746c.png.webp 1x, https://salt.tikicdn.com/cache/280x280/ts/product/69/6f/e2/3d397ce97da9f99a226bdbb89429746c.png.webp 2x"
                                                                />
                                                                <img
                                                                    srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/69/6f/e2/3d397ce97da9f99a226bdbb89429746c.png 1x, https://salt.tikicdn.com/cache/280x280/ts/product/69/6f/e2/3d397ce97da9f99a226bdbb89429746c.png 2x"
                                                                    alt="Event Planning - Tổ Chức Sự Kiện, Nâng Tầm Thương Hiệu"
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
                                                    <div
                                                        className="sc-3e53096f-0 hiPBCe"
                                                        style={{
                                                            position: "absolute",
                                                            top: 8,
                                                            left: 8,
                                                            zIndex: 2
                                                        }}
                                                    />
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
                                                                    Event Planning - Tổ Chức Sự Kiện, Nâng Tầm Thương
                                                                    Hiệu
                                                                </h3>
                                                                <div className="sc-8b415d9d-4 MtbnO">
                                                                    <div
                                                                        className="sc-980e9960-0 eTeHeN"
                                                                        style={{
                                                                            fontSize: 12,
                                                                            display: "inline-block"
                                                                        }}
                                                                    >
                                                                        <div
                                                                            style={{
                                                                                zIndex: 2,
                                                                                position: "absolute",
                                                                                left: 0,
                                                                                top: 0,
                                                                                bottom: 0,
                                                                                width: "80%",
                                                                                overflow: "hidden"
                                                                            }}
                                                                        >
                                                                            <svg
                                                                                width={12}
                                                                                height={12}
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                style={{ width: 12, height: 12 }}
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
                                                                                style={{ width: 12, height: 12 }}
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
                                                                                style={{ width: 12, height: 12 }}
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
                                                                                style={{ width: 12, height: 12 }}
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
                                                                                style={{ width: 12, height: 12 }}
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
                                                                </div>
                                                            </div>
                                                            <div className="sc-7615e682-0 jVbBhv">
                                                                <div className="price-discount">
                                                                    <div
                                                                        className="price-discount__price"
                                                                        style={{ color: "rgb(39, 39, 42)" }}
                                                                    >
                                                                        78.585<sup>₫</sup>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div
                                                        style={{
                                                            display: "flex",
                                                            flexDirection: "column",
                                                            gap: 8
                                                        }}
                                                    >
                                                        <div
                                                            style={{
                                                                display: "flex",
                                                                flexDirection: "column",
                                                                gap: 6
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="sc-714f5c73-0 dutDwQ"
                                style={{ display: "-webkit-box", width: 132 }}
                            >
                                <div className="sc-e6fb8ae7-1 kTzRAo">
                                    <div style={{ height: "100%", width: "100%" }}>
                                        <a
                                            className="sc-8b415d9d-1 iRifC product-item"
                                            data-view-id="product_list_item"
                                            data-view-content='{"click_data":{"id":277361862}}'
                                            href="/ky-thuat-dat-cau-lenh-cho-chatgpt-p277361862.html?itm_campaign=tiki-reco_UNK_DT_UNK_UNK_pdp-hero-sku_UNK_pdp-widget-top-deal-v2-v1_202504071400_MD_batched_PID.277361864&itm_medium=CPC&itm_source=tiki-reco&spid=277361864"
                                        >
                                            <span className="sc-8b415d9d-0 esCPZO">
                                                <div style={{ position: "relative" }}>
                                                    <div className="sc-accfdecb-0 oeQAA thumbnail">
                                                        <div className="image-wrapper">
                                                            <picture className="webpimg-container">
                                                                <source
                                                                    type="image/webp"
                                                                    srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/02/a8/9b/b69a502784eca5a51047e6b3ad5addcc.png.webp 1x, https://salt.tikicdn.com/cache/280x280/ts/product/02/a8/9b/b69a502784eca5a51047e6b3ad5addcc.png.webp 2x"
                                                                />
                                                                <img
                                                                    srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/02/a8/9b/b69a502784eca5a51047e6b3ad5addcc.png 1x, https://salt.tikicdn.com/cache/280x280/ts/product/02/a8/9b/b69a502784eca5a51047e6b3ad5addcc.png 2x"
                                                                    alt="Kỹ thuật đặt câu lệnh cho ChatGPT"
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
                                                    <div
                                                        className="sc-3e53096f-0 hiPBCe"
                                                        style={{
                                                            position: "absolute",
                                                            top: 8,
                                                            left: 8,
                                                            zIndex: 2
                                                        }}
                                                    />
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
                                                                    Kỹ thuật đặt câu lệnh cho ChatGPT
                                                                </h3>
                                                                <div className="sc-8b415d9d-4 MtbnO">
                                                                    <div
                                                                        className="sc-980e9960-0 eTeHeN"
                                                                        style={{
                                                                            fontSize: 12,
                                                                            display: "inline-block"
                                                                        }}
                                                                    >
                                                                        <div
                                                                            style={{
                                                                                zIndex: 2,
                                                                                position: "absolute",
                                                                                left: 0,
                                                                                top: 0,
                                                                                bottom: 0,
                                                                                width: "100%",
                                                                                overflow: "hidden"
                                                                            }}
                                                                        >
                                                                            <svg
                                                                                width={12}
                                                                                height={12}
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                style={{ width: 12, height: 12 }}
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
                                                                                style={{ width: 12, height: 12 }}
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
                                                                                style={{ width: 12, height: 12 }}
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
                                                                                style={{ width: 12, height: 12 }}
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
                                                                                style={{ width: 12, height: 12 }}
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
                                                                </div>
                                                            </div>
                                                            <div className="sc-7615e682-0 jVbBhv">
                                                                <div className="price-discount">
                                                                    <div
                                                                        className="price-discount__price"
                                                                        style={{ color: "rgb(39, 39, 42)" }}
                                                                    >
                                                                        130.000<sup>₫</sup>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div
                                                        style={{
                                                            display: "flex",
                                                            flexDirection: "column",
                                                            gap: 8
                                                        }}
                                                    >
                                                        <div
                                                            style={{
                                                                display: "flex",
                                                                flexDirection: "column",
                                                                gap: 6
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="sc-714f5c73-0 dutDwQ"
                                style={{ display: "-webkit-box", width: 132 }}
                            >
                                <div className="sc-e6fb8ae7-1 kTzRAo">
                                    <div style={{ height: "100%", width: "100%" }}>
                                        <a
                                            className="sc-8b415d9d-1 iRifC product-item"
                                            data-view-id="product_list_item"
                                            data-view-content='{"click_data":{"id":276346703}}'
                                            href="/combo-4-cuon-chatgpt-chatgpt-thuc-chien-ai-5-0-ai-cong-cu-nang-cao-hieu-suat-p276346703.html?itm_campaign=tiki-reco_UNK_DT_UNK_UNK_pdp-hero-sku_UNK_pdp-widget-top-deal-v2-v1_202504071400_MD_batched_PID.277231271&itm_medium=CPC&itm_source=tiki-reco&spid=277231271"
                                        >
                                            <span className="sc-8b415d9d-0 esCPZO">
                                                <div style={{ position: "relative" }}>
                                                    <div className="sc-accfdecb-0 oeQAA thumbnail">
                                                        <div className="image-wrapper">
                                                            <picture className="webpimg-container">
                                                                <source
                                                                    type="image/webp"
                                                                    srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/1d/65/9e/5942aaf6bd80dd5817659d1f11f2c070.jpg.webp 1x, https://salt.tikicdn.com/cache/280x280/ts/product/1d/65/9e/5942aaf6bd80dd5817659d1f11f2c070.jpg.webp 2x"
                                                                />
                                                                <img
                                                                    srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/1d/65/9e/5942aaf6bd80dd5817659d1f11f2c070.jpg 1x, https://salt.tikicdn.com/cache/280x280/ts/product/1d/65/9e/5942aaf6bd80dd5817659d1f11f2c070.jpg 2x"
                                                                    alt="Combo 4 cuốn: ChatGPT + ChatGPT thực chiến + AI 5.0 + AI Công cụ nâng cao hiệu suất"
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
                                                    <div
                                                        className="sc-3e53096f-0 hiPBCe"
                                                        style={{
                                                            position: "absolute",
                                                            top: 8,
                                                            left: 8,
                                                            zIndex: 2
                                                        }}
                                                    />
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
                                                                    Combo 4 cuốn: ChatGPT + ChatGPT thực chiến + AI
                                                                    5.0 + AI Công cụ nâng cao hiệu suất
                                                                </h3>
                                                                <div className="sc-8b415d9d-4 MtbnO">
                                                                    <div
                                                                        className="sc-980e9960-0 eTeHeN"
                                                                        style={{
                                                                            fontSize: 12,
                                                                            display: "inline-block"
                                                                        }}
                                                                    >
                                                                        <div
                                                                            style={{
                                                                                zIndex: 2,
                                                                                position: "absolute",
                                                                                left: 0,
                                                                                top: 0,
                                                                                bottom: 0,
                                                                                width: "94%",
                                                                                overflow: "hidden"
                                                                            }}
                                                                        >
                                                                            <svg
                                                                                width={12}
                                                                                height={12}
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                style={{ width: 12, height: 12 }}
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
                                                                                style={{ width: 12, height: 12 }}
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
                                                                                style={{ width: 12, height: 12 }}
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
                                                                                style={{ width: 12, height: 12 }}
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
                                                                                style={{ width: 12, height: 12 }}
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
                                                                </div>
                                                            </div>
                                                            <div className="sc-7615e682-0 jVbBhv">
                                                                <div className="price-discount">
                                                                    <div
                                                                        className="price-discount__price"
                                                                        style={{ color: "rgb(39, 39, 42)" }}
                                                                    >
                                                                        420.000<sup>₫</sup>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div
                                                        style={{
                                                            display: "flex",
                                                            flexDirection: "column",
                                                            gap: 8
                                                        }}
                                                    >
                                                        <div
                                                            style={{
                                                                display: "flex",
                                                                flexDirection: "column",
                                                                gap: 6
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="sc-714f5c73-0 dutDwQ"
                                style={{ display: "-webkit-box", width: 132 }}
                            >
                                <div className="sc-e6fb8ae7-1 kTzRAo">
                                    <div style={{ height: "100%", width: "100%" }}>
                                        <a
                                            className="sc-8b415d9d-1 iRifC product-item"
                                            data-view-id="product_list_item"
                                            data-view-content='{"click_data":{"id":273536812}}'
                                            href="/nghien-rang-no-luc-vuon-len-dan-dau-p273536812.html?itm_campaign=tiki-reco_UNK_DT_UNK_UNK_pdp-hero-sku_UNK_pdp-widget-top-deal-v2-v1_202504071400_MD_batched_PID.273536813&itm_medium=CPC&itm_source=tiki-reco&spid=273536813"
                                        >
                                            <span className="sc-8b415d9d-0 esCPZO">
                                                <div style={{ position: "relative" }}>
                                                    <div className="sc-accfdecb-0 oeQAA thumbnail">
                                                        <div className="image-wrapper">
                                                            <picture className="webpimg-container">
                                                                <source
                                                                    type="image/webp"
                                                                    srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/dc/6f/3d/cdff47030463e194254dadaec06f8c69.jpg.webp 1x, https://salt.tikicdn.com/cache/280x280/ts/product/dc/6f/3d/cdff47030463e194254dadaec06f8c69.jpg.webp 2x"
                                                                />
                                                                <img
                                                                    srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/dc/6f/3d/cdff47030463e194254dadaec06f8c69.jpg 1x, https://salt.tikicdn.com/cache/280x280/ts/product/dc/6f/3d/cdff47030463e194254dadaec06f8c69.jpg 2x"
                                                                    alt="Nghiến răng nỗ lực, vươn lên dẫn đầu"
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
                                                    <div
                                                        className="sc-3e53096f-0 hiPBCe"
                                                        style={{
                                                            position: "absolute",
                                                            top: 8,
                                                            left: 8,
                                                            zIndex: 2
                                                        }}
                                                    />
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
                                                                    Nghiến răng nỗ lực, vươn lên dẫn đầu
                                                                </h3>
                                                                <div className="sc-8b415d9d-4 MtbnO" />
                                                            </div>
                                                            <div className="sc-7615e682-0 jVbBhv">
                                                                <div className="price-discount">
                                                                    <div
                                                                        className="price-discount__price"
                                                                        style={{ color: "rgb(39, 39, 42)" }}
                                                                    >
                                                                        85.000<sup>₫</sup>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div
                                                        style={{
                                                            display: "flex",
                                                            flexDirection: "column",
                                                            gap: 8
                                                        }}
                                                    >
                                                        <div
                                                            style={{
                                                                display: "flex",
                                                                flexDirection: "column",
                                                                gap: 6
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="sc-714f5c73-0 dutDwQ"
                                style={{ display: "-webkit-box", width: 132 }}
                            >
                                <div className="sc-e6fb8ae7-1 kTzRAo">
                                    <div style={{ height: "100%", width: "100%" }}>
                                        <a
                                            className="sc-8b415d9d-1 iRifC product-item"
                                            data-view-id="product_list_item"
                                            data-view-content='{"click_data":{"id":272000024}}'
                                            href="/mba-bang-hinh-tron-goi-hai-nam-kien-thuc-quan-tri-kinh-doanh-qua-truc-quan-sinh-dong-p272000024.html?itm_campaign=tiki-reco_UNK_DT_UNK_UNK_pdp-hero-sku_UNK_pdp-widget-top-deal-v2-v1_202504071400_MD_batched_PID.272000026&itm_medium=CPC&itm_source=tiki-reco&spid=272000026"
                                        >
                                            <span className="sc-8b415d9d-0 esCPZO">
                                                <div style={{ position: "relative" }}>
                                                    <div className="sc-accfdecb-0 oeQAA thumbnail">
                                                        <div className="image-wrapper">
                                                            <picture className="webpimg-container">
                                                                <source
                                                                    type="image/webp"
                                                                    srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/3e/25/3a/1e6bc9998b75b3345a4c38dd93bbbe16.jpg.webp 1x, https://salt.tikicdn.com/cache/280x280/ts/product/3e/25/3a/1e6bc9998b75b3345a4c38dd93bbbe16.jpg.webp 2x"
                                                                />
                                                                <img
                                                                    srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/3e/25/3a/1e6bc9998b75b3345a4c38dd93bbbe16.jpg 1x, https://salt.tikicdn.com/cache/280x280/ts/product/3e/25/3a/1e6bc9998b75b3345a4c38dd93bbbe16.jpg 2x"
                                                                    alt="MBA bằng hình (Trọn gói hai năm kiến thức quản trị kinh doanh qua trực quan sinh động)"
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
                                                    <div
                                                        className="sc-3e53096f-0 hiPBCe"
                                                        style={{
                                                            position: "absolute",
                                                            top: 8,
                                                            left: 8,
                                                            zIndex: 2
                                                        }}
                                                    />
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
                                                                    MBA bằng hình (Trọn gói hai năm kiến thức quản trị
                                                                    kinh doanh qua trực quan sinh động)
                                                                </h3>
                                                                <div className="sc-8b415d9d-4 MtbnO">
                                                                    <div
                                                                        className="sc-980e9960-0 eTeHeN"
                                                                        style={{
                                                                            fontSize: 12,
                                                                            display: "inline-block"
                                                                        }}
                                                                    >
                                                                        <div
                                                                            style={{
                                                                                zIndex: 2,
                                                                                position: "absolute",
                                                                                left: 0,
                                                                                top: 0,
                                                                                bottom: 0,
                                                                                width: "100%",
                                                                                overflow: "hidden"
                                                                            }}
                                                                        >
                                                                            <svg
                                                                                width={12}
                                                                                height={12}
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                style={{ width: 12, height: 12 }}
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
                                                                                style={{ width: 12, height: 12 }}
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
                                                                                style={{ width: 12, height: 12 }}
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
                                                                                style={{ width: 12, height: 12 }}
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
                                                                                style={{ width: 12, height: 12 }}
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
                                                                </div>
                                                            </div>
                                                            <div className="sc-7615e682-0 jVbBhv">
                                                                <div className="price-discount">
                                                                    <div
                                                                        className="price-discount__price"
                                                                        style={{ color: "rgb(39, 39, 42)" }}
                                                                    >
                                                                        124.000<sup>₫</sup>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div
                                                        style={{
                                                            display: "flex",
                                                            flexDirection: "column",
                                                            gap: 8
                                                        }}
                                                    >
                                                        <div
                                                            style={{
                                                                display: "flex",
                                                                flexDirection: "column",
                                                                gap: 6
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="sc-714f5c73-0 dutDwQ"
                                style={{ display: "-webkit-box", width: 132 }}
                            >
                                <div className="sc-e6fb8ae7-1 kTzRAo">
                                    <div style={{ height: "100%", width: "100%" }}>
                                        <a
                                            className="sc-8b415d9d-1 iRifC product-item"
                                            data-view-id="product_list_item"
                                            data-view-content='{"click_data":{"id":273708802}}'
                                            href="/chat-gpt-trao-luu-hay-tuong-lai-nhan-loai-p273708802.html?itm_campaign=tiki-reco_UNK_DT_UNK_UNK_pdp-hero-sku_UNK_pdp-widget-top-deal-v2-v1_202504071400_MD_batched_PID.273708807&itm_medium=CPC&itm_source=tiki-reco&spid=273708807"
                                        >
                                            <span className="sc-8b415d9d-0 esCPZO">
                                                <div style={{ position: "relative" }}>
                                                    <div className="sc-accfdecb-0 oeQAA thumbnail">
                                                        <div className="image-wrapper">
                                                            <picture className="webpimg-container">
                                                                <source
                                                                    type="image/webp"
                                                                    srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/31/32/e9/dfab9d54556522c45ada916716005f5a.jpg.webp 1x, https://salt.tikicdn.com/cache/280x280/ts/product/31/32/e9/dfab9d54556522c45ada916716005f5a.jpg.webp 2x"
                                                                />
                                                                <img
                                                                    srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/31/32/e9/dfab9d54556522c45ada916716005f5a.jpg 1x, https://salt.tikicdn.com/cache/280x280/ts/product/31/32/e9/dfab9d54556522c45ada916716005f5a.jpg 2x"
                                                                    alt="Chat GPT: Trào lưu hay tương lai nhân loại?"
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
                                                    <div
                                                        className="sc-3e53096f-0 hiPBCe"
                                                        style={{
                                                            position: "absolute",
                                                            top: 8,
                                                            left: 8,
                                                            zIndex: 2
                                                        }}
                                                    />
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
                                                                    Chat GPT: Trào lưu hay tương lai nhân loại?
                                                                </h3>
                                                                <div className="sc-8b415d9d-4 MtbnO" />
                                                            </div>
                                                            <div className="sc-7615e682-0 jVbBhv">
                                                                <div className="price-discount">
                                                                    <div
                                                                        className="price-discount__price"
                                                                        style={{ color: "rgb(39, 39, 42)" }}
                                                                    >
                                                                        96.100<sup>₫</sup>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div
                                                        style={{
                                                            display: "flex",
                                                            flexDirection: "column",
                                                            gap: 8
                                                        }}
                                                    >
                                                        <div
                                                            style={{
                                                                display: "flex",
                                                                flexDirection: "column",
                                                                gap: 6
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="sc-714f5c73-0 dutDwQ"
                                style={{ display: "-webkit-box", width: 132 }}
                            >
                                <div className="sc-e6fb8ae7-1 kTzRAo">
                                    <div style={{ height: "100%", width: "100%" }}>
                                        <a
                                            className="sc-8b415d9d-1 iRifC product-item"
                                            data-view-id="product_list_item"
                                            data-view-content='{"click_data":{"id":272839127}}'
                                            href="/ban-hang-5-0-p272839127.html?itm_campaign=tiki-reco_UNK_DT_UNK_UNK_pdp-hero-sku_UNK_pdp-widget-top-deal-v2-v1_202504071400_MD_batched_PID.272839128&itm_medium=CPC&itm_source=tiki-reco&spid=272839128"
                                        >
                                            <span className="sc-8b415d9d-0 esCPZO">
                                                <div style={{ position: "relative" }}>
                                                    <div className="sc-accfdecb-0 oeQAA thumbnail">
                                                        <div className="image-wrapper">
                                                            <picture className="webpimg-container">
                                                                <source
                                                                    type="image/webp"
                                                                    srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/c5/19/4b/0d561a9b8fba854e54c11b208c6a6995.png.webp 1x, https://salt.tikicdn.com/cache/280x280/ts/product/c5/19/4b/0d561a9b8fba854e54c11b208c6a6995.png.webp 2x"
                                                                />
                                                                <img
                                                                    srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/c5/19/4b/0d561a9b8fba854e54c11b208c6a6995.png 1x, https://salt.tikicdn.com/cache/280x280/ts/product/c5/19/4b/0d561a9b8fba854e54c11b208c6a6995.png 2x"
                                                                    alt="Bán Hàng 5.0"
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
                                                    <div
                                                        className="sc-3e53096f-0 hiPBCe"
                                                        style={{
                                                            position: "absolute",
                                                            top: 8,
                                                            left: 8,
                                                            zIndex: 2
                                                        }}
                                                    />
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
                                                                    Bán Hàng 5.0
                                                                </h3>
                                                                <div className="sc-8b415d9d-4 MtbnO">
                                                                    <div
                                                                        className="sc-980e9960-0 eTeHeN"
                                                                        style={{
                                                                            fontSize: 12,
                                                                            display: "inline-block"
                                                                        }}
                                                                    >
                                                                        <div
                                                                            style={{
                                                                                zIndex: 2,
                                                                                position: "absolute",
                                                                                left: 0,
                                                                                top: 0,
                                                                                bottom: 0,
                                                                                width: "100%",
                                                                                overflow: "hidden"
                                                                            }}
                                                                        >
                                                                            <svg
                                                                                width={12}
                                                                                height={12}
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                style={{ width: 12, height: 12 }}
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
                                                                                style={{ width: 12, height: 12 }}
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
                                                                                style={{ width: 12, height: 12 }}
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
                                                                                style={{ width: 12, height: 12 }}
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
                                                                                style={{ width: 12, height: 12 }}
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
                                                                </div>
                                                            </div>
                                                            <div className="sc-7615e682-0 jVbBhv">
                                                                <div className="price-discount">
                                                                    <div
                                                                        className="price-discount__price"
                                                                        style={{ color: "rgb(39, 39, 42)" }}
                                                                    >
                                                                        83.235<sup>₫</sup>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div
                                                        style={{
                                                            display: "flex",
                                                            flexDirection: "column",
                                                            gap: 8
                                                        }}
                                                    >
                                                        <div
                                                            style={{
                                                                display: "flex",
                                                                flexDirection: "column",
                                                                gap: 6
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="sc-714f5c73-0 dutDwQ"
                                style={{ display: "-webkit-box", width: 132 }}
                            >
                                <div className="sc-e6fb8ae7-1 kTzRAo">
                                    <div style={{ height: "100%", width: "100%" }}>
                                        <a
                                            className="sc-8b415d9d-1 iRifC product-item"
                                            data-view-id="product_list_item"
                                            data-view-content='{"click_data":{"id":275844089}}'
                                            href="/combo-chat-gpt-thuc-chien-ai-5-0-p275844089.html?itm_campaign=tiki-reco_UNK_DT_UNK_UNK_pdp-hero-sku_UNK_pdp-widget-top-deal-v2-v1_202504071400_MD_batched_PID.277480500&itm_medium=CPC&itm_source=tiki-reco&spid=277480500"
                                        >
                                            <span className="sc-8b415d9d-0 esCPZO">
                                                <div style={{ position: "relative" }}>
                                                    <div className="sc-accfdecb-0 oeQAA thumbnail">
                                                        <div className="image-wrapper">
                                                            <picture className="webpimg-container">
                                                                <source
                                                                    type="image/webp"
                                                                    srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/40/20/fb/0a9dd9944688fddef85563aeb14c57bb.jpg.webp 1x, https://salt.tikicdn.com/cache/280x280/ts/product/40/20/fb/0a9dd9944688fddef85563aeb14c57bb.jpg.webp 2x"
                                                                />
                                                                <img
                                                                    srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/40/20/fb/0a9dd9944688fddef85563aeb14c57bb.jpg 1x, https://salt.tikicdn.com/cache/280x280/ts/product/40/20/fb/0a9dd9944688fddef85563aeb14c57bb.jpg 2x"
                                                                    alt="Combo Chat GPT Thực Chiến + AI 5.0"
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
                                                    <div
                                                        className="sc-3e53096f-0 hiPBCe"
                                                        style={{
                                                            position: "absolute",
                                                            top: 8,
                                                            left: 8,
                                                            zIndex: 2
                                                        }}
                                                    />
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
                                                                    Combo Chat GPT Thực Chiến + AI 5.0
                                                                </h3>
                                                                <div className="sc-8b415d9d-4 MtbnO" />
                                                            </div>
                                                            <div className="sc-7615e682-0 jVbBhv">
                                                                <div className="price-discount">
                                                                    <div
                                                                        className="price-discount__price"
                                                                        style={{ color: "rgb(39, 39, 42)" }}
                                                                    >
                                                                        255.200<sup>₫</sup>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div
                                                        style={{
                                                            display: "flex",
                                                            flexDirection: "column",
                                                            gap: 8
                                                        }}
                                                    >
                                                        <div
                                                            style={{
                                                                display: "flex",
                                                                flexDirection: "column",
                                                                gap: 6
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="sc-714f5c73-0 dutDwQ"
                                style={{ display: "-webkit-box", width: 132 }}
                            >
                                <div className="sc-e6fb8ae7-1 kTzRAo">
                                    <div style={{ height: "100%", width: "100%" }}>
                                        <a
                                            className="sc-8b415d9d-1 iRifC product-item"
                                            data-view-id="product_list_item"
                                            data-view-content='{"click_data":{"id":262083113}}'
                                            href="/kols-marketing-p262083113.html?itm_campaign=tiki-reco_UNK_DT_UNK_UNK_pdp-hero-sku_UNK_pdp-widget-top-deal-v2-v1_202504071400_MD_batched_PID.262083114&itm_medium=CPC&itm_source=tiki-reco&spid=262083114"
                                        >
                                            <span className="sc-8b415d9d-0 esCPZO">
                                                <div style={{ position: "relative" }}>
                                                    <div className="sc-accfdecb-0 oeQAA thumbnail">
                                                        <div className="image-wrapper">
                                                            <picture className="webpimg-container">
                                                                <source
                                                                    type="image/webp"
                                                                    srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/31/81/9f/126a8525fdd99aa1f597a838981fa1fb.jpg.webp 1x, https://salt.tikicdn.com/cache/280x280/ts/product/31/81/9f/126a8525fdd99aa1f597a838981fa1fb.jpg.webp 2x"
                                                                />
                                                                <img
                                                                    srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/31/81/9f/126a8525fdd99aa1f597a838981fa1fb.jpg 1x, https://salt.tikicdn.com/cache/280x280/ts/product/31/81/9f/126a8525fdd99aa1f597a838981fa1fb.jpg 2x"
                                                                    alt="KOLs Marketing"
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
                                                    <div
                                                        className="sc-3e53096f-0 hiPBCe"
                                                        style={{
                                                            position: "absolute",
                                                            top: 8,
                                                            left: 8,
                                                            zIndex: 2
                                                        }}
                                                    />
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
                                                                    KOLs Marketing
                                                                </h3>
                                                                <div className="sc-8b415d9d-4 MtbnO">
                                                                    <div
                                                                        className="sc-980e9960-0 eTeHeN"
                                                                        style={{
                                                                            fontSize: 12,
                                                                            display: "inline-block"
                                                                        }}
                                                                    >
                                                                        <div
                                                                            style={{
                                                                                zIndex: 2,
                                                                                position: "absolute",
                                                                                left: 0,
                                                                                top: 0,
                                                                                bottom: 0,
                                                                                width: "100%",
                                                                                overflow: "hidden"
                                                                            }}
                                                                        >
                                                                            <svg
                                                                                width={12}
                                                                                height={12}
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                style={{ width: 12, height: 12 }}
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
                                                                                style={{ width: 12, height: 12 }}
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
                                                                                style={{ width: 12, height: 12 }}
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
                                                                                style={{ width: 12, height: 12 }}
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
                                                                                style={{ width: 12, height: 12 }}
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
                                                                </div>
                                                            </div>
                                                            <div className="sc-7615e682-0 jVbBhv">
                                                                <div className="price-discount">
                                                                    <div
                                                                        className="price-discount__price"
                                                                        style={{ color: "rgb(39, 39, 42)" }}
                                                                    >
                                                                        83.235<sup>₫</sup>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div
                                                        style={{
                                                            display: "flex",
                                                            flexDirection: "column",
                                                            gap: 8
                                                        }}
                                                    >
                                                        <div
                                                            style={{
                                                                display: "flex",
                                                                flexDirection: "column",
                                                                gap: 6
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="sc-714f5c73-0 dutDwQ"
                                style={{ display: "-webkit-box", width: 132 }}
                            >
                                <div className="sc-e6fb8ae7-1 kTzRAo">
                                    <div style={{ height: "100%", width: "100%" }}>
                                        <a
                                            className="sc-8b415d9d-1 iRifC product-item"
                                            data-view-id="product_list_item"
                                            data-view-content='{"click_data":{"id":55506686}}'
                                            href="/tiktok-marketing-p55506686.html?itm_campaign=tiki-reco_UNK_DT_UNK_UNK_pdp-hero-sku_UNK_pdp-widget-top-deal-v2-v1_202504071400_MD_batched_PID.55506687&itm_medium=CPC&itm_source=tiki-reco&spid=55506687"
                                        >
                                            <span className="sc-8b415d9d-0 esCPZO">
                                                <div style={{ position: "relative" }}>
                                                    <div className="sc-accfdecb-0 oeQAA thumbnail">
                                                        <div className="image-wrapper">
                                                            <picture className="webpimg-container">
                                                                <source
                                                                    type="image/webp"
                                                                    srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/b9/ca/7c/deaaa53520d2d993b9436f162b919d30.jpg.webp 1x, https://salt.tikicdn.com/cache/280x280/ts/product/b9/ca/7c/deaaa53520d2d993b9436f162b919d30.jpg.webp 2x"
                                                                />
                                                                <img
                                                                    srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/b9/ca/7c/deaaa53520d2d993b9436f162b919d30.jpg 1x, https://salt.tikicdn.com/cache/280x280/ts/product/b9/ca/7c/deaaa53520d2d993b9436f162b919d30.jpg 2x"
                                                                    alt="Tiktok Marketing"
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
                                                    <div
                                                        className="sc-3e53096f-0 hiPBCe"
                                                        style={{
                                                            position: "absolute",
                                                            top: 8,
                                                            left: 8,
                                                            zIndex: 2
                                                        }}
                                                    />
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
                                                                    Tiktok Marketing
                                                                </h3>
                                                                <div className="sc-8b415d9d-4 MtbnO">
                                                                    <div
                                                                        className="sc-980e9960-0 eTeHeN"
                                                                        style={{
                                                                            fontSize: 12,
                                                                            display: "inline-block"
                                                                        }}
                                                                    >
                                                                        <div
                                                                            style={{
                                                                                zIndex: 2,
                                                                                position: "absolute",
                                                                                left: 0,
                                                                                top: 0,
                                                                                bottom: 0,
                                                                                width: "90%",
                                                                                overflow: "hidden"
                                                                            }}
                                                                        >
                                                                            <svg
                                                                                width={12}
                                                                                height={12}
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                style={{ width: 12, height: 12 }}
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
                                                                                style={{ width: 12, height: 12 }}
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
                                                                                style={{ width: 12, height: 12 }}
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
                                                                                style={{ width: 12, height: 12 }}
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
                                                                                style={{ width: 12, height: 12 }}
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
                                                                </div>
                                                            </div>
                                                            <div className="sc-7615e682-0 jVbBhv">
                                                                <div className="price-discount">
                                                                    <div
                                                                        className="price-discount__price"
                                                                        style={{ color: "rgb(39, 39, 42)" }}
                                                                    >
                                                                        85.100<sup>₫</sup>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div
                                                        style={{
                                                            display: "flex",
                                                            flexDirection: "column",
                                                            gap: 8
                                                        }}
                                                    >
                                                        <div
                                                            style={{
                                                                display: "flex",
                                                                flexDirection: "column",
                                                                gap: 6
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="sc-714f5c73-0 dutDwQ"
                                style={{ display: "-webkit-box", width: 132 }}
                            >
                                <div className="sc-e6fb8ae7-1 kTzRAo">
                                    <div style={{ height: "100%", width: "100%" }}>
                                        <a
                                            className="sc-8b415d9d-1 iRifC product-item"
                                            data-view-id="product_list_item"
                                            data-view-content='{"click_data":{"id":59207488}}'
                                            href="/trai-nghiem-wow-p59207488.html?itm_campaign=tiki-reco_UNK_DT_UNK_UNK_pdp-hero-sku_UNK_pdp-widget-top-deal-v2-v1_202504071400_MD_batched_PID.59207489&itm_medium=CPC&itm_source=tiki-reco&spid=59207489"
                                        >
                                            <span className="sc-8b415d9d-0 esCPZO">
                                                <div style={{ position: "relative" }}>
                                                    <div className="sc-accfdecb-0 oeQAA thumbnail">
                                                        <div className="image-wrapper">
                                                            <picture className="webpimg-container">
                                                                <source
                                                                    type="image/webp"
                                                                    srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/f8/60/d8/2ed580b1e46bee15492e6a41915d6c81.png.webp 1x, https://salt.tikicdn.com/cache/280x280/ts/product/f8/60/d8/2ed580b1e46bee15492e6a41915d6c81.png.webp 2x"
                                                                />
                                                                <img
                                                                    srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/f8/60/d8/2ed580b1e46bee15492e6a41915d6c81.png 1x, https://salt.tikicdn.com/cache/280x280/ts/product/f8/60/d8/2ed580b1e46bee15492e6a41915d6c81.png 2x"
                                                                    alt="Trải Nghiệm WOW "
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
                                                    <div
                                                        className="sc-3e53096f-0 hiPBCe"
                                                        style={{
                                                            position: "absolute",
                                                            top: 8,
                                                            left: 8,
                                                            zIndex: 2
                                                        }}
                                                    />
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
                                                                    Trải Nghiệm WOW{" "}
                                                                </h3>
                                                                <div className="sc-8b415d9d-4 MtbnO">
                                                                    <div
                                                                        className="sc-980e9960-0 eTeHeN"
                                                                        style={{
                                                                            fontSize: 12,
                                                                            display: "inline-block"
                                                                        }}
                                                                    >
                                                                        <div
                                                                            style={{
                                                                                zIndex: 2,
                                                                                position: "absolute",
                                                                                left: 0,
                                                                                top: 0,
                                                                                bottom: 0,
                                                                                width: "92%",
                                                                                overflow: "hidden"
                                                                            }}
                                                                        >
                                                                            <svg
                                                                                width={12}
                                                                                height={12}
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                style={{ width: 12, height: 12 }}
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
                                                                                style={{ width: 12, height: 12 }}
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
                                                                                style={{ width: 12, height: 12 }}
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
                                                                                style={{ width: 12, height: 12 }}
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
                                                                                style={{ width: 12, height: 12 }}
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
                                                                </div>
                                                            </div>
                                                            <div className="sc-7615e682-0 jVbBhv">
                                                                <div className="price-discount">
                                                                    <div
                                                                        className="price-discount__price"
                                                                        style={{ color: "rgb(39, 39, 42)" }}
                                                                    >
                                                                        119.000<sup>₫</sup>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div
                                                        style={{
                                                            display: "flex",
                                                            flexDirection: "column",
                                                            gap: 8
                                                        }}
                                                    >
                                                        <div
                                                            style={{
                                                                display: "flex",
                                                                flexDirection: "column",
                                                                gap: 6
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="sc-714f5c73-0 dutDwQ"
                                style={{ display: "-webkit-box", width: 132 }}
                            >
                                <div className="sc-e6fb8ae7-1 kTzRAo">
                                    <div style={{ height: "100%", width: "100%" }}>
                                        <a
                                            className="sc-8b415d9d-1 iRifC product-item"
                                            data-view-id="product_list_item"
                                            data-view-content='{"click_data":{"id":6761243}}'
                                            href="/kinh-doanh-bang-tien-cua-khach-hang-p6761243.html?itm_campaign=tiki-reco_UNK_DT_UNK_UNK_pdp-hero-sku_UNK_pdp-widget-top-deal-v2-v1_202504071400_MD_batched_PID.58472081&itm_medium=CPC&itm_source=tiki-reco&spid=58472081"
                                        >
                                            <span className="sc-8b415d9d-0 esCPZO">
                                                <div style={{ position: "relative" }}>
                                                    <div className="sc-accfdecb-0 oeQAA thumbnail">
                                                        <div className="image-wrapper">
                                                            <picture className="webpimg-container">
                                                                <source
                                                                    type="image/webp"
                                                                    srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/43/2b/d5/4f45beb87401b66b0371ff5cc2835e06.png.webp 1x, https://salt.tikicdn.com/cache/280x280/ts/product/43/2b/d5/4f45beb87401b66b0371ff5cc2835e06.png.webp 2x"
                                                                />
                                                                <img
                                                                    srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/43/2b/d5/4f45beb87401b66b0371ff5cc2835e06.png 1x, https://salt.tikicdn.com/cache/280x280/ts/product/43/2b/d5/4f45beb87401b66b0371ff5cc2835e06.png 2x"
                                                                    alt="Kinh Doanh Bằng Tiền Của Khách Hàng "
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
                                                    <div
                                                        className="sc-3e53096f-0 hiPBCe"
                                                        style={{
                                                            position: "absolute",
                                                            top: 8,
                                                            left: 8,
                                                            zIndex: 2
                                                        }}
                                                    />
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
                                                                    Kinh Doanh Bằng Tiền Của Khách Hàng{" "}
                                                                </h3>
                                                                <div className="sc-8b415d9d-4 MtbnO">
                                                                    <div
                                                                        className="sc-980e9960-0 eTeHeN"
                                                                        style={{
                                                                            fontSize: 12,
                                                                            display: "inline-block"
                                                                        }}
                                                                    >
                                                                        <div
                                                                            style={{
                                                                                zIndex: 2,
                                                                                position: "absolute",
                                                                                left: 0,
                                                                                top: 0,
                                                                                bottom: 0,
                                                                                width: "90%",
                                                                                overflow: "hidden"
                                                                            }}
                                                                        >
                                                                            <svg
                                                                                width={12}
                                                                                height={12}
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                style={{ width: 12, height: 12 }}
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
                                                                                style={{ width: 12, height: 12 }}
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
                                                                                style={{ width: 12, height: 12 }}
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
                                                                                style={{ width: 12, height: 12 }}
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
                                                                                style={{ width: 12, height: 12 }}
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
                                                                </div>
                                                            </div>
                                                            <div className="sc-7615e682-0 jVbBhv">
                                                                <div className="price-discount">
                                                                    <div
                                                                        className="price-discount__price"
                                                                        style={{ color: "rgb(39, 39, 42)" }}
                                                                    >
                                                                        218.250<sup>₫</sup>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div
                                                        style={{
                                                            display: "flex",
                                                            flexDirection: "column",
                                                            gap: 8
                                                        }}
                                                    >
                                                        <div
                                                            style={{
                                                                display: "flex",
                                                                flexDirection: "column",
                                                                gap: 6
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="sc-714f5c73-0 dutDwQ"
                                style={{ display: "-webkit-box", width: 132 }}
                            >
                                <div className="sc-e6fb8ae7-1 kTzRAo">
                                    <div style={{ height: "100%", width: "100%" }}>
                                        <a
                                            className="sc-8b415d9d-1 iRifC product-item"
                                            data-view-id="product_list_item"
                                            data-view-content='{"click_data":{"id":37134989}}'
                                            href="/ke-hoach-marketing-tren-mot-trang-giay-cuon-sach-hay-va-de-hieu-cho-mot-ke-hoach-marketing-thong-minh-tang-kem-bookmark-tuyet-dep-p37134989.html?itm_campaign=tiki-reco_UNK_DT_UNK_UNK_pdp-hero-sku_UNK_pdp-widget-top-deal-v2-v1_202504071400_MD_batched_PID.59549233&itm_medium=CPC&itm_source=tiki-reco&spid=59549233"
                                        >
                                            <span className="sc-8b415d9d-0 esCPZO">
                                                <div style={{ position: "relative" }}>
                                                    <div className="sc-accfdecb-0 oeQAA thumbnail">
                                                        <div className="image-wrapper">
                                                            <picture className="webpimg-container">
                                                                <source
                                                                    type="image/webp"
                                                                    srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/d8/a1/43/1434ee0fb70ba4b668f2c2a809888b8d.png.webp 1x, https://salt.tikicdn.com/cache/280x280/ts/product/d8/a1/43/1434ee0fb70ba4b668f2c2a809888b8d.png.webp 2x"
                                                                />
                                                                <img
                                                                    srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/d8/a1/43/1434ee0fb70ba4b668f2c2a809888b8d.png 1x, https://salt.tikicdn.com/cache/280x280/ts/product/d8/a1/43/1434ee0fb70ba4b668f2c2a809888b8d.png 2x"
                                                                    alt="Kế Hoạch Marketing Trên Một Trang Giấy  - Cuốn Sách Hay Và Dễ Hiểu Cho Một Kế Hoạch Marketing Thông Minh ( Tặng Kèm Bookmark Tuyệt Đẹp )"
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
                                                    <div
                                                        className="sc-3e53096f-0 hiPBCe"
                                                        style={{
                                                            position: "absolute",
                                                            top: 8,
                                                            left: 8,
                                                            zIndex: 2
                                                        }}
                                                    />
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
                                                                    Kế Hoạch Marketing Trên Một Trang Giấy - Cuốn Sách
                                                                    Hay Và Dễ Hiểu Cho Một Kế Hoạch Marketing Thông
                                                                    Minh ( Tặng Kèm Bookmark Tuyệt Đẹp )
                                                                </h3>
                                                                <div className="sc-8b415d9d-4 MtbnO" />
                                                            </div>
                                                            <div className="sc-7615e682-0 jVbBhv">
                                                                <div className="price-discount">
                                                                    <div
                                                                        className="price-discount__price"
                                                                        style={{ color: "rgb(39, 39, 42)" }}
                                                                    >
                                                                        119.000<sup>₫</sup>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div
                                                        style={{
                                                            display: "flex",
                                                            flexDirection: "column",
                                                            gap: 8
                                                        }}
                                                    >
                                                        <div
                                                            style={{
                                                                display: "flex",
                                                                flexDirection: "column",
                                                                gap: 6
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="sc-714f5c73-0 dutDwQ"
                                style={{ display: "-webkit-box", width: 132 }}
                            >
                                <div className="sc-e6fb8ae7-1 kTzRAo">
                                    <div style={{ height: "100%", width: "100%" }}>
                                        <a
                                            className="sc-8b415d9d-1 iRifC product-item"
                                            data-view-id="product_list_item"
                                            data-view-content='{"click_data":{"id":10005245}}'
                                            href="/dan-ong-sao-hoa-dan-ba-sao-kim-p10005245.html?itm_campaign=tiki-reco_UNK_DT_UNK_UNK_pdp-hero-sku_UNK_pdp-widget-top-deal-v2-v1_202504071400_MD_batched_PID.10005246&itm_medium=CPC&itm_source=tiki-reco&spid=10005246"
                                        >
                                            <span className="sc-8b415d9d-0 esCPZO">
                                                <div style={{ position: "relative" }}>
                                                    <div className="sc-accfdecb-0 oeQAA thumbnail">
                                                        <div className="image-wrapper">
                                                            <picture className="webpimg-container">
                                                                <source
                                                                    type="image/webp"
                                                                    srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/0a/f6/38/bc10734989977da424642a1c4750eee2.jpg.webp 1x, https://salt.tikicdn.com/cache/280x280/ts/product/0a/f6/38/bc10734989977da424642a1c4750eee2.jpg.webp 2x"
                                                                />
                                                                <img
                                                                    srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/0a/f6/38/bc10734989977da424642a1c4750eee2.jpg 1x, https://salt.tikicdn.com/cache/280x280/ts/product/0a/f6/38/bc10734989977da424642a1c4750eee2.jpg 2x"
                                                                    alt="Đàn Ông Sao Hỏa Đàn Bà Sao Kim"
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
                                                    <div
                                                        className="sc-3e53096f-0 hiPBCe"
                                                        style={{
                                                            position: "absolute",
                                                            top: 8,
                                                            left: 8,
                                                            zIndex: 2
                                                        }}
                                                    />
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
                                                                    Đàn Ông Sao Hỏa Đàn Bà Sao Kim
                                                                </h3>
                                                                <div className="sc-8b415d9d-4 MtbnO">
                                                                    <div
                                                                        className="sc-980e9960-0 eTeHeN"
                                                                        style={{
                                                                            fontSize: 12,
                                                                            display: "inline-block"
                                                                        }}
                                                                    >
                                                                        <div
                                                                            style={{
                                                                                zIndex: 2,
                                                                                position: "absolute",
                                                                                left: 0,
                                                                                top: 0,
                                                                                bottom: 0,
                                                                                width: "96%",
                                                                                overflow: "hidden"
                                                                            }}
                                                                        >
                                                                            <svg
                                                                                width={12}
                                                                                height={12}
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                style={{ width: 12, height: 12 }}
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
                                                                                style={{ width: 12, height: 12 }}
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
                                                                                style={{ width: 12, height: 12 }}
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
                                                                                style={{ width: 12, height: 12 }}
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
                                                                                style={{ width: 12, height: 12 }}
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
                                                                </div>
                                                            </div>
                                                            <div className="sc-7615e682-0 jVbBhv">
                                                                <div className="price-discount">
                                                                    <div
                                                                        className="price-discount__price"
                                                                        style={{ color: "rgb(39, 39, 42)" }}
                                                                    >
                                                                        124.000<sup>₫</sup>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div
                                                        style={{
                                                            display: "flex",
                                                            flexDirection: "column",
                                                            gap: 8
                                                        }}
                                                    >
                                                        <div
                                                            style={{
                                                                display: "flex",
                                                                flexDirection: "column",
                                                                gap: 6
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="sc-714f5c73-0 dutDwQ"
                                style={{ display: "-webkit-box", width: 132 }}
                            >
                                <div className="sc-e6fb8ae7-1 kTzRAo">
                                    <div style={{ height: "100%", width: "100%" }}>
                                        <a
                                            className="sc-8b415d9d-1 iRifC product-item"
                                            data-view-id="product_list_item"
                                            data-view-content='{"click_data":{"id":196897386}}'
                                            href="/thao-tung-ky-uc-p196897386.html?itm_campaign=tiki-reco_UNK_DT_UNK_UNK_pdp-hero-sku_UNK_pdp-widget-top-deal-v2-v1_202504071400_MD_batched_PID.196897387&itm_medium=CPC&itm_source=tiki-reco&spid=196897387"
                                        >
                                            <span className="sc-8b415d9d-0 esCPZO">
                                                <div style={{ position: "relative" }}>
                                                    <div className="sc-accfdecb-0 oeQAA thumbnail">
                                                        <div className="image-wrapper">
                                                            <picture className="webpimg-container">
                                                                <source
                                                                    type="image/webp"
                                                                    srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/71/67/98/bc9a98b13e33a24b53e87c64ed59ffb3.jpg.webp 1x, https://salt.tikicdn.com/cache/280x280/ts/product/71/67/98/bc9a98b13e33a24b53e87c64ed59ffb3.jpg.webp 2x"
                                                                />
                                                                <img
                                                                    srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/71/67/98/bc9a98b13e33a24b53e87c64ed59ffb3.jpg 1x, https://salt.tikicdn.com/cache/280x280/ts/product/71/67/98/bc9a98b13e33a24b53e87c64ed59ffb3.jpg 2x"
                                                                    alt="Thao Túng Ký Ức"
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
                                                    <div
                                                        className="sc-3e53096f-0 hiPBCe"
                                                        style={{
                                                            position: "absolute",
                                                            top: 8,
                                                            left: 8,
                                                            zIndex: 2
                                                        }}
                                                    />
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
                                                                    Thao Túng Ký Ức
                                                                </h3>
                                                                <div className="sc-8b415d9d-4 MtbnO">
                                                                    <div
                                                                        className="sc-980e9960-0 eTeHeN"
                                                                        style={{
                                                                            fontSize: 12,
                                                                            display: "inline-block"
                                                                        }}
                                                                    >
                                                                        <div
                                                                            style={{
                                                                                zIndex: 2,
                                                                                position: "absolute",
                                                                                left: 0,
                                                                                top: 0,
                                                                                bottom: 0,
                                                                                width: "100%",
                                                                                overflow: "hidden"
                                                                            }}
                                                                        >
                                                                            <svg
                                                                                width={12}
                                                                                height={12}
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                style={{ width: 12, height: 12 }}
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
                                                                                style={{ width: 12, height: 12 }}
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
                                                                                style={{ width: 12, height: 12 }}
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
                                                                                style={{ width: 12, height: 12 }}
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
                                                                                style={{ width: 12, height: 12 }}
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
                                                                </div>
                                                            </div>
                                                            <div className="sc-7615e682-0 jVbBhv">
                                                                <div className="price-discount">
                                                                    <div
                                                                        className="price-discount__price"
                                                                        style={{ color: "rgb(39, 39, 42)" }}
                                                                    >
                                                                        83.235<sup>₫</sup>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div
                                                        style={{
                                                            display: "flex",
                                                            flexDirection: "column",
                                                            gap: 8
                                                        }}
                                                    >
                                                        <div
                                                            style={{
                                                                display: "flex",
                                                                flexDirection: "column",
                                                                gap: 6
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="sc-714f5c73-0 dutDwQ"
                                style={{ display: "-webkit-box", width: 132 }}
                            >
                                <div className="sc-e6fb8ae7-1 kTzRAo">
                                    <div style={{ height: "100%", width: "100%" }}>
                                        <a
                                            className="sc-8b415d9d-1 iRifC product-item"
                                            data-view-id="product_list_item"
                                            data-view-content='{"click_data":{"id":275034842}}'
                                            href="/aigc-thoi-dai-tri-tue-nhan-tao-co-hoi-va-rui-ro-cua-mot-so-nganh-nghe-trong-tuong-lai-p275034842.html?itm_campaign=tiki-reco_UNK_DT_UNK_UNK_pdp-hero-sku_UNK_pdp-widget-top-deal-v2-v1_202504071400_MD_batched_PID.275034843&itm_medium=CPC&itm_source=tiki-reco&spid=275034843"
                                        >
                                            <span className="sc-8b415d9d-0 esCPZO">
                                                <div style={{ position: "relative" }}>
                                                    <div className="sc-accfdecb-0 oeQAA thumbnail">
                                                        <div className="image-wrapper">
                                                            <picture className="webpimg-container">
                                                                <source
                                                                    type="image/webp"
                                                                    srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/9c/46/f5/1e6cb67ec3fec543c75d70afa0dbd4fb.jpg.webp 1x, https://salt.tikicdn.com/cache/280x280/ts/product/9c/46/f5/1e6cb67ec3fec543c75d70afa0dbd4fb.jpg.webp 2x"
                                                                />
                                                                <img
                                                                    srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/9c/46/f5/1e6cb67ec3fec543c75d70afa0dbd4fb.jpg 1x, https://salt.tikicdn.com/cache/280x280/ts/product/9c/46/f5/1e6cb67ec3fec543c75d70afa0dbd4fb.jpg 2x"
                                                                    alt="AIGC Thời đại trí tuệ nhân tạo: Cơ hội và rủi ro của một số ngành nghề trong tương lai"
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
                                                    <div
                                                        className="sc-3e53096f-0 hiPBCe"
                                                        style={{
                                                            position: "absolute",
                                                            top: 8,
                                                            left: 8,
                                                            zIndex: 2
                                                        }}
                                                    />
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
                                                                    AIGC Thời đại trí tuệ nhân tạo: Cơ hội và rủi ro
                                                                    của một số ngành nghề trong tương lai
                                                                </h3>
                                                                <div className="sc-8b415d9d-4 MtbnO" />
                                                            </div>
                                                            <div className="sc-7615e682-0 jVbBhv">
                                                                <div className="price-discount">
                                                                    <div
                                                                        className="price-discount__price"
                                                                        style={{ color: "rgb(39, 39, 42)" }}
                                                                    >
                                                                        124.000<sup>₫</sup>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div
                                                        style={{
                                                            display: "flex",
                                                            flexDirection: "column",
                                                            gap: 8
                                                        }}
                                                    >
                                                        <div
                                                            style={{
                                                                display: "flex",
                                                                flexDirection: "column",
                                                                gap: 6
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="sc-714f5c73-0 dutDwQ"
                                style={{ display: "-webkit-box", width: 132 }}
                            >
                                <div className="sc-e6fb8ae7-1 kTzRAo">
                                    <div style={{ height: "100%", width: "100%" }}>
                                        <a
                                            className="sc-8b415d9d-1 iRifC product-item"
                                            data-view-id="product_list_item"
                                            data-view-content='{"click_data":{"id":2149533}}'
                                            href="/viec-hom-nay-cho-de-ngay-mai-tai-ban-p2149533.html?itm_campaign=tiki-reco_UNK_DT_UNK_UNK_pdp-hero-sku_UNK_pdp-widget-top-deal-v2-v1_202504071400_MD_batched_PID.204317660&itm_medium=CPC&itm_source=tiki-reco&spid=204317660"
                                        >
                                            <span className="sc-8b415d9d-0 esCPZO">
                                                <div style={{ position: "relative" }}>
                                                    <div className="sc-accfdecb-0 oeQAA thumbnail">
                                                        <div className="image-wrapper">
                                                            <picture className="webpimg-container">
                                                                <source
                                                                    type="image/webp"
                                                                    srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/15/27/8f/090e730c3e7df852cefdb178a956c8ad.jpg.webp 1x, https://salt.tikicdn.com/cache/280x280/ts/product/15/27/8f/090e730c3e7df852cefdb178a956c8ad.jpg.webp 2x"
                                                                />
                                                                <img
                                                                    srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/15/27/8f/090e730c3e7df852cefdb178a956c8ad.jpg 1x, https://salt.tikicdn.com/cache/280x280/ts/product/15/27/8f/090e730c3e7df852cefdb178a956c8ad.jpg 2x"
                                                                    alt="Việc Hôm Nay Chớ Để Ngày Mai (Tái Bản)"
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
                                                    <div
                                                        className="sc-3e53096f-0 hiPBCe"
                                                        style={{
                                                            position: "absolute",
                                                            top: 8,
                                                            left: 8,
                                                            zIndex: 2
                                                        }}
                                                    />
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
                                                                    Việc Hôm Nay Chớ Để Ngày Mai (Tái Bản)
                                                                </h3>
                                                                <div className="sc-8b415d9d-4 MtbnO" />
                                                            </div>
                                                            <div className="sc-7615e682-0 jVbBhv">
                                                                <div className="price-discount">
                                                                    <div
                                                                        className="price-discount__price"
                                                                        style={{ color: "rgb(39, 39, 42)" }}
                                                                    >
                                                                        71.000<sup>₫</sup>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div
                                                        style={{
                                                            display: "flex",
                                                            flexDirection: "column",
                                                            gap: 8
                                                        }}
                                                    >
                                                        <div
                                                            style={{
                                                                display: "flex",
                                                                flexDirection: "column",
                                                                gap: 6
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="sc-714f5c73-0 dutDwQ"
                                style={{ display: "-webkit-box", width: 132 }}
                            >
                                <div className="sc-e6fb8ae7-1 kTzRAo">
                                    <div style={{ height: "100%", width: "100%" }}>
                                        <a
                                            className="sc-8b415d9d-1 iRifC product-item"
                                            data-view-id="product_list_item"
                                            data-view-content='{"click_data":{"id":91947687}}'
                                            href="/canh-tranh-trong-thoi-dai-ai-competing-in-the-age-of-ai-marco-iansiti-karim-r-lakhani-pace-books-p91947687.html?itm_campaign=tiki-reco_UNK_DT_UNK_UNK_pdp-hero-sku_UNK_pdp-widget-top-deal-v2-v1_202504071400_MD_batched_PID.103474876&itm_medium=CPC&itm_source=tiki-reco&spid=103474876"
                                        >
                                            <span className="sc-8b415d9d-0 esCPZO">
                                                <div style={{ position: "relative" }}>
                                                    <div className="sc-accfdecb-0 oeQAA thumbnail">
                                                        <div className="image-wrapper">
                                                            <picture className="webpimg-container">
                                                                <source
                                                                    type="image/webp"
                                                                    srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/e9/eb/9d/ab6cf078a77ed6fbc0257a3a49613fbd.jpg.webp 1x, https://salt.tikicdn.com/cache/280x280/ts/product/e9/eb/9d/ab6cf078a77ed6fbc0257a3a49613fbd.jpg.webp 2x"
                                                                />
                                                                <img
                                                                    srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/e9/eb/9d/ab6cf078a77ed6fbc0257a3a49613fbd.jpg 1x, https://salt.tikicdn.com/cache/280x280/ts/product/e9/eb/9d/ab6cf078a77ed6fbc0257a3a49613fbd.jpg 2x"
                                                                    alt="Cạnh Tranh Trong Thời Đại AI (Competing In The Age Of AI) - Marco Iansiti, Karim R. Lakhani - PACE Books"
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
                                                    <div
                                                        className="sc-3e53096f-0 hiPBCe"
                                                        style={{
                                                            position: "absolute",
                                                            top: 8,
                                                            left: 8,
                                                            zIndex: 2
                                                        }}
                                                    />
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
                                                                    Cạnh Tranh Trong Thời Đại AI (Competing In The Age
                                                                    Of AI) - Marco Iansiti, Karim R. Lakhani - PACE
                                                                    Books
                                                                </h3>
                                                                <div className="sc-8b415d9d-4 MtbnO">
                                                                    <div
                                                                        className="sc-980e9960-0 eTeHeN"
                                                                        style={{
                                                                            fontSize: 12,
                                                                            display: "inline-block"
                                                                        }}
                                                                    >
                                                                        <div
                                                                            style={{
                                                                                zIndex: 2,
                                                                                position: "absolute",
                                                                                left: 0,
                                                                                top: 0,
                                                                                bottom: 0,
                                                                                width: "90%",
                                                                                overflow: "hidden"
                                                                            }}
                                                                        >
                                                                            <svg
                                                                                width={12}
                                                                                height={12}
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                style={{ width: 12, height: 12 }}
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
                                                                                style={{ width: 12, height: 12 }}
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
                                                                                style={{ width: 12, height: 12 }}
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
                                                                                style={{ width: 12, height: 12 }}
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
                                                                                style={{ width: 12, height: 12 }}
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
                                                                </div>
                                                            </div>
                                                            <div className="sc-7615e682-0 jVbBhv">
                                                                <div className="price-discount">
                                                                    <div
                                                                        className="price-discount__price"
                                                                        style={{ color: "rgb(39, 39, 42)" }}
                                                                    >
                                                                        149.340<sup>₫</sup>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div
                                                        style={{
                                                            display: "flex",
                                                            flexDirection: "column",
                                                            gap: 8
                                                        }}
                                                    >
                                                        <div
                                                            style={{
                                                                display: "flex",
                                                                flexDirection: "column",
                                                                gap: 6
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="sc-714f5c73-0 dutDwQ"
                                style={{ display: "-webkit-box", width: 132 }}
                            >
                                <div className="sc-e6fb8ae7-1 kTzRAo">
                                    <div style={{ height: "100%", width: "100%" }}>
                                        <a
                                            className="sc-8b415d9d-1 iRifC product-item"
                                            data-view-id="product_list_item"
                                            data-view-content='{"click_data":{"id":273114488}}'
                                            href="/tu-duy-nguoc-p273114488.html?itm_campaign=tiki-reco_UNK_DT_UNK_UNK_pdp-hero-sku_UNK_pdp-widget-top-deal-v2-v1_202504071400_MD_batched_PID.273114489&itm_medium=CPC&itm_source=tiki-reco&spid=273114489"
                                        >
                                            <span className="sc-8b415d9d-0 esCPZO">
                                                <div style={{ position: "relative" }}>
                                                    <div className="sc-accfdecb-0 oeQAA thumbnail">
                                                        <div className="image-wrapper">
                                                            <picture className="webpimg-container">
                                                                <source
                                                                    type="image/webp"
                                                                    srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/88/4a/5c/7fa530e5e0ffd8bb57b3a044d8c6994b.jpg.webp 1x, https://salt.tikicdn.com/cache/280x280/ts/product/88/4a/5c/7fa530e5e0ffd8bb57b3a044d8c6994b.jpg.webp 2x"
                                                                />
                                                                <img
                                                                    srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/88/4a/5c/7fa530e5e0ffd8bb57b3a044d8c6994b.jpg 1x, https://salt.tikicdn.com/cache/280x280/ts/product/88/4a/5c/7fa530e5e0ffd8bb57b3a044d8c6994b.jpg 2x"
                                                                    alt="Tư Duy Ngược"
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
                                                    <div
                                                        className="sc-3e53096f-0 hiPBCe"
                                                        style={{
                                                            position: "absolute",
                                                            top: 8,
                                                            left: 8,
                                                            zIndex: 2
                                                        }}
                                                    />
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
                                                                    Tư Duy Ngược
                                                                </h3>
                                                                <div className="sc-8b415d9d-4 MtbnO">
                                                                    <div
                                                                        className="sc-980e9960-0 eTeHeN"
                                                                        style={{
                                                                            fontSize: 12,
                                                                            display: "inline-block"
                                                                        }}
                                                                    >
                                                                        <div
                                                                            style={{
                                                                                zIndex: 2,
                                                                                position: "absolute",
                                                                                left: 0,
                                                                                top: 0,
                                                                                bottom: 0,
                                                                                width: "90%",
                                                                                overflow: "hidden"
                                                                            }}
                                                                        >
                                                                            <svg
                                                                                width={12}
                                                                                height={12}
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                style={{ width: 12, height: 12 }}
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
                                                                                style={{ width: 12, height: 12 }}
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
                                                                                style={{ width: 12, height: 12 }}
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
                                                                                style={{ width: 12, height: 12 }}
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
                                                                                style={{ width: 12, height: 12 }}
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
                                                                </div>
                                                            </div>
                                                            <div className="sc-7615e682-0 jVbBhv">
                                                                <div className="price-discount">
                                                                    <div
                                                                        className="price-discount__price"
                                                                        style={{ color: "rgb(39, 39, 42)" }}
                                                                    >
                                                                        110.000<sup>₫</sup>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div
                                                        style={{
                                                            display: "flex",
                                                            flexDirection: "column",
                                                            gap: 8
                                                        }}
                                                    >
                                                        <div
                                                            style={{
                                                                display: "flex",
                                                                flexDirection: "column",
                                                                gap: 6
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="sc-714f5c73-0 dutDwQ"
                                style={{ display: "-webkit-box", width: 132 }}
                            >
                                <div className="sc-e6fb8ae7-1 kTzRAo">
                                    <div style={{ height: "100%", width: "100%" }}>
                                        <a
                                            className="sc-8b415d9d-1 iRifC product-item"
                                            data-view-id="product_list_item"
                                            data-view-content='{"click_data":{"id":100347901}}'
                                            href="/tam-the-1-tai-ban-p100347901.html?itm_campaign=tiki-reco_UNK_DT_UNK_UNK_pdp-hero-sku_UNK_pdp-widget-top-deal-v2-v1_202504071400_MD_batched_PID.100347902&itm_medium=CPC&itm_source=tiki-reco&spid=100347902"
                                        >
                                            <span className="sc-8b415d9d-0 esCPZO">
                                                <div style={{ position: "relative" }}>
                                                    <div className="sc-accfdecb-0 oeQAA thumbnail">
                                                        <div className="image-wrapper">
                                                            <picture className="webpimg-container">
                                                                <source
                                                                    type="image/webp"
                                                                    srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/bc/4b/3b/4338d90c5c309957e957df8467cb21b4.jpg.webp 1x, https://salt.tikicdn.com/cache/280x280/ts/product/bc/4b/3b/4338d90c5c309957e957df8467cb21b4.jpg.webp 2x"
                                                                />
                                                                <img
                                                                    srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/bc/4b/3b/4338d90c5c309957e957df8467cb21b4.jpg 1x, https://salt.tikicdn.com/cache/280x280/ts/product/bc/4b/3b/4338d90c5c309957e957df8467cb21b4.jpg 2x"
                                                                    alt="Tam Thể 1 (Tái Bản)"
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
                                                    <div
                                                        className="sc-3e53096f-0 hiPBCe"
                                                        style={{
                                                            position: "absolute",
                                                            top: 8,
                                                            left: 8,
                                                            zIndex: 2
                                                        }}
                                                    />
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
                                                                    Tam Thể 1 (Tái Bản)
                                                                </h3>
                                                                <div className="sc-8b415d9d-4 MtbnO">
                                                                    <div
                                                                        className="sc-980e9960-0 eTeHeN"
                                                                        style={{
                                                                            fontSize: 12,
                                                                            display: "inline-block"
                                                                        }}
                                                                    >
                                                                        <div
                                                                            style={{
                                                                                zIndex: 2,
                                                                                position: "absolute",
                                                                                left: 0,
                                                                                top: 0,
                                                                                bottom: 0,
                                                                                width: "100%",
                                                                                overflow: "hidden"
                                                                            }}
                                                                        >
                                                                            <svg
                                                                                width={12}
                                                                                height={12}
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                style={{ width: 12, height: 12 }}
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
                                                                                style={{ width: 12, height: 12 }}
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
                                                                                style={{ width: 12, height: 12 }}
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
                                                                                style={{ width: 12, height: 12 }}
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
                                                                                style={{ width: 12, height: 12 }}
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
                                                                </div>
                                                            </div>
                                                            <div className="sc-7615e682-0 jVbBhv">
                                                                <div className="price-discount">
                                                                    <div
                                                                        className="price-discount__price"
                                                                        style={{ color: "rgb(39, 39, 42)" }}
                                                                    >
                                                                        109.000<sup>₫</sup>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div
                                                        style={{
                                                            display: "flex",
                                                            flexDirection: "column",
                                                            gap: 8
                                                        }}
                                                    >
                                                        <div
                                                            style={{
                                                                display: "flex",
                                                                flexDirection: "column",
                                                                gap: 6
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="sc-714f5c73-0 dutDwQ"
                                style={{ display: "-webkit-box", width: 132 }}
                            >
                                <div className="sc-e6fb8ae7-1 kTzRAo">
                                    <div style={{ height: "100%", width: "100%" }}>
                                        <a
                                            className="sc-8b415d9d-1 iRifC product-item"
                                            data-view-id="product_list_item"
                                            data-view-content='{"click_data":{"id":147341449}}'
                                            href="/the-secret-bi-mat-tai-ban-2021-p147341449.html?itm_campaign=tiki-reco_UNK_DT_UNK_UNK_pdp-hero-sku_UNK_pdp-widget-top-deal-v2-v1_202504071400_MD_batched_PID.202062571&itm_medium=CPC&itm_source=tiki-reco&spid=202062571"
                                        >
                                            <span className="sc-8b415d9d-0 esCPZO">
                                                <div style={{ position: "relative" }}>
                                                    <div className="sc-accfdecb-0 oeQAA thumbnail">
                                                        <div className="image-wrapper">
                                                            <picture className="webpimg-container">
                                                                <source
                                                                    type="image/webp"
                                                                    srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/c5/d0/81/03edac5c789f631d06b13adabe89ae48.jpg.webp 1x, https://salt.tikicdn.com/cache/280x280/ts/product/c5/d0/81/03edac5c789f631d06b13adabe89ae48.jpg.webp 2x"
                                                                />
                                                                <img
                                                                    srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/c5/d0/81/03edac5c789f631d06b13adabe89ae48.jpg 1x, https://salt.tikicdn.com/cache/280x280/ts/product/c5/d0/81/03edac5c789f631d06b13adabe89ae48.jpg 2x"
                                                                    alt="The Secret - Bí Mật (Tái Bản 2021)"
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
                                                    <div
                                                        className="sc-3e53096f-0 hiPBCe"
                                                        style={{
                                                            position: "absolute",
                                                            top: 8,
                                                            left: 8,
                                                            zIndex: 2
                                                        }}
                                                    />
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
                                                                    The Secret - Bí Mật (Tái Bản 2021)
                                                                </h3>
                                                                <div className="sc-8b415d9d-4 MtbnO" />
                                                            </div>
                                                            <div className="sc-7615e682-0 jVbBhv">
                                                                <div className="price-discount">
                                                                    <div
                                                                        className="price-discount__price"
                                                                        style={{ color: "rgb(39, 39, 42)" }}
                                                                    >
                                                                        216.795<sup>₫</sup>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div
                                                        style={{
                                                            display: "flex",
                                                            flexDirection: "column",
                                                            gap: 8
                                                        }}
                                                    >
                                                        <div
                                                            style={{
                                                                display: "flex",
                                                                flexDirection: "column",
                                                                gap: 6
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
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
                            {Array.from({ length: totalSlides }).map((_, index) => (
                                <div
                                    key={index}
                                    onClick={() => handlePaginationClick(index)}
                                    style={{
                                        width: currentSlide === index ? 24 : 16,
                                        height: 2,
                                        background: currentSlide === index ? "rgb(10, 104, 255)" : "rgba(0, 0, 0, 0.05)",
                                        borderRadius: 4,
                                        cursor: "pointer",
                                        transition: "all 0.3s ease"
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                    <span
                        className={`icon icon-next ${isNextDisabled ? 'disabled' : ''}`}
                        onClick={handleNextClick}
                    >
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

    );
}

export default TopDeal