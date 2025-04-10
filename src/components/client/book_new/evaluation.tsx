import './evaluation.scss'
import { useState } from 'react';
import OverViewJudge from './overview.judge';

const Evaluation = () => {
    // Initial image URLs as constants for reference
    const initialTopIconSrc = "https://salt.tikicdn.com/ts/ta/6a/2c/6e/125f814f740ad14defbb98b7b49dfa49.png";
    const activeTopIconSrc = "https://salt.tikicdn.com/ts/ta/0e/f6/e0/12bcf4aedaa439a9a680059afd56c68d.png";
    const initialBottomIconSrc = "https://salt.tikicdn.com/ts/ta/95/ae/66/2957a823955457b65f6f9150e41b5cb0.png";
    const activeBottomIconSrc = "https://salt.tikicdn.com/ts/ta/fd/63/9b/cbd8432f2fde557145ba2bc6f0428430.png";

    // State to track which icon versions we're showing
    const [topIconSrc, setTopIconSrc] = useState(initialTopIconSrc);
    const [bottomIconSrc, setBottomIconSrc] = useState(initialBottomIconSrc);

    // Event handlers for icon clicks - now toggling between states
    const handleTopIconClick = () => {
        setTopIconSrc(topIconSrc === initialTopIconSrc ? activeTopIconSrc : initialTopIconSrc);
    };

    const handleBottomIconClick = () => {
        setBottomIconSrc(bottomIconSrc === initialBottomIconSrc ? activeBottomIconSrc : initialBottomIconSrc);
    };

    return (
        <div id="customer-review-widget-id">
            <div className="sc-34e0efdc-0 dSZwVn">
                <div className="sc-34e0efdc-1 ddClVB">Khách hàng đánh giá</div>
                <div className="sc-4b1322bd-0 btfjhU customer-reviews">
                    <div className="customer-reviews__inner">
                        <OverViewJudge
                            topIconSrc={topIconSrc}
                            bottomIconSrc={bottomIconSrc}
                            handleTopIconClick={handleTopIconClick}
                            handleBottomIconClick={handleBottomIconClick}
                        />
                        <div className="sc-4b1322bd-4 VLKeD filter-review">
                            <div className="filter-review__label">Lọc theo</div>
                            <div className="filter-review__inner">
                                <div
                                    data-view-id="pdp_review_filter_item"
                                    data-view-index={0}
                                    className="filter-review__item "
                                >
                                    <span className="filter-review__check">
                                        <img src="https://salt.tikicdn.com/ts/upload/68/59/32/9589577c7e094d3dccbe57dd0af2bbb8.png" />
                                    </span>
                                    <span className="filter-review__text">Mới nhất</span>
                                </div>
                                <div
                                    data-view-id="pdp_review_filter_item"
                                    data-view-index={1}
                                    className="filter-review__item "
                                >
                                    <span className="filter-review__check">
                                        <img src="https://salt.tikicdn.com/ts/upload/68/59/32/9589577c7e094d3dccbe57dd0af2bbb8.png" />
                                    </span>
                                    <span className="filter-review__text">Có hình ảnh</span>
                                </div>
                                <div
                                    data-view-id="pdp_review_filter_item"
                                    data-view-index={2}
                                    className="filter-review__item "
                                >
                                    <span className="filter-review__check">
                                        <img src="https://salt.tikicdn.com/ts/upload/68/59/32/9589577c7e094d3dccbe57dd0af2bbb8.png" />
                                    </span>
                                    <span className="filter-review__text">Đã mua hàng</span>
                                </div>
                                <div
                                    data-view-id="pdp_review_filter_item"
                                    data-view-index={3}
                                    className="filter-review__item  "
                                >
                                    <span className="filter-review__check">
                                        <img src="https://salt.tikicdn.com/ts/upload/68/59/32/9589577c7e094d3dccbe57dd0af2bbb8.png" />
                                    </span>
                                    <span className="filter-review__text">5 sao</span>
                                </div>
                                <div
                                    data-view-id="pdp_review_filter_item"
                                    data-view-index={4}
                                    className="filter-review__item  "
                                >
                                    <span className="filter-review__check">
                                        <img src="https://salt.tikicdn.com/ts/upload/68/59/32/9589577c7e094d3dccbe57dd0af2bbb8.png" />
                                    </span>
                                    <span className="filter-review__text">4 sao</span>
                                </div>
                                <div
                                    data-view-id="pdp_review_filter_item"
                                    data-view-index={5}
                                    className="filter-review__item  "
                                >
                                    <span className="filter-review__check">
                                        <img src="https://salt.tikicdn.com/ts/upload/68/59/32/9589577c7e094d3dccbe57dd0af2bbb8.png" />
                                    </span>
                                    <span className="filter-review__text">3 sao</span>
                                </div>
                                <div
                                    data-view-id="pdp_review_filter_item"
                                    data-view-index={6}
                                    className="filter-review__item  "
                                >
                                    <span className="filter-review__check">
                                        <img src="https://salt.tikicdn.com/ts/upload/68/59/32/9589577c7e094d3dccbe57dd0af2bbb8.png" />
                                    </span>
                                    <span className="filter-review__text">2 sao</span>
                                </div>
                                <div
                                    data-view-id="pdp_review_filter_item"
                                    data-view-index={7}
                                    className="filter-review__item  "
                                >
                                    <span className="filter-review__check">
                                        <img src="https://salt.tikicdn.com/ts/upload/68/59/32/9589577c7e094d3dccbe57dd0af2bbb8.png" />
                                    </span>
                                    <span className="filter-review__text">1 sao</span>
                                </div>
                            </div>
                        </div>
                        <div />
                        <div className="sc-4b1322bd-5 hcsJQG review-comment">
                            <div className="review-comment__user">
                                <div className="review-comment__user-inner">
                                    <div className="review-comment__user-avatar">
                                        <div
                                            className="sc-9162b613-0 erIzSq has-character"
                                            style={{
                                                backgroundImage:
                                                    'url("https%3A%2F%2Fsalt.tikicdn.com%2Fcache%2F512x512%2Fts%2Favatar%2F81%2F27%2F84%2F1ff8a5d17a5880e6ff6777d10af6463d.png")'
                                            }}
                                        >
                                            <img
                                                src="https://salt.tikicdn.com/cache/512x512/ts/avatar/81/27/84/1ff8a5d17a5880e6ff6777d10af6463d.png"
                                                alt="Nguyễn  Tấn Phát"
                                            />
                                            <span>TP</span>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="review-comment__user-name">Nguyễn Tấn Phát</div>
                                        <div className="review-comment__user-date">
                                            Đã tham gia 12 năm
                                        </div>
                                    </div>
                                </div>
                                <div className="review-comment__user-info">
                                    <div>
                                        <img
                                            src="https://salt.tikicdn.com/ts/upload/c6/67/f1/444fc9e1869b5d4398cdec3682af7f14.png"
                                            alt="review-count"
                                        />
                                        Đã viết
                                    </div>
                                    <span>42 Đánh giá</span>
                                </div>
                                <div
                                    style={{ border: "0.5px solid rgb(235, 235, 240)", marginTop: 9 }}
                                />
                                <div className="review-comment__user-info">
                                    <div>
                                        <img
                                            src="https://salt.tikicdn.com/ts/upload/cc/86/cd/1d5ac6d4e00abbf6aa4e4636489c9d80.png"
                                            alt="liked-count"
                                        />
                                        Đã nhận
                                    </div>
                                    <span>20 Lượt cảm ơn</span>
                                </div>
                            </div>
                            <div style={{ flexGrow: 1 }}>
                                <div className="review-comment__rating-title">
                                    <div
                                        className="sc-a236768f-0 fFhahK review-comment__rating"
                                        style={{ whiteSpace: "nowrap" }}
                                    >
                                        <span>
                                            <img
                                                alt="star-icon"
                                                src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                width={20}
                                                height={20}
                                            />
                                        </span>
                                        <span>
                                            <img
                                                alt="star-icon"
                                                src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                width={20}
                                                height={20}
                                            />
                                        </span>
                                        <span>
                                            <img
                                                alt="star-icon"
                                                src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                width={20}
                                                height={20}
                                            />
                                        </span>
                                        <span>
                                            <img
                                                alt="star-icon"
                                                src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                width={20}
                                                height={20}
                                            />
                                        </span>
                                        <span>
                                            <img
                                                alt="star-icon"
                                                src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                width={20}
                                                height={20}
                                            />
                                        </span>
                                        <div style={{ width: "100%" }}>
                                            <span>
                                                <img
                                                    alt="star-icon"
                                                    src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                    width={20}
                                                    height={20}
                                                />
                                            </span>
                                            <span>
                                                <img
                                                    alt="star-icon"
                                                    src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                    width={20}
                                                    height={20}
                                                />
                                            </span>
                                            <span>
                                                <img
                                                    alt="star-icon"
                                                    src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                    width={20}
                                                    height={20}
                                                />
                                            </span>
                                            <span>
                                                <img
                                                    alt="star-icon"
                                                    src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                    width={20}
                                                    height={20}
                                                />
                                            </span>
                                            <span>
                                                <img
                                                    alt="star-icon"
                                                    src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                    width={20}
                                                    height={20}
                                                />
                                            </span>
                                        </div>
                                    </div>
                                    <div className="review-comment__title">Cực kì hài lòng</div>
                                </div>
                                <div className="review-comment__seller-name-attributes">
                                    <div className="review-comment__seller-name">
                                        <span className="review-comment__check-icon" />
                                        Đã mua hàng
                                    </div>
                                </div>
                                <div className="review-comment__content">
                                    <div>
                                        <span>
                                            {" "}
                                            Mình cho 5 sao cách đóng gói và vận chuyển của Tiki nhé. Mình
                                            luôn có thiện cảm với Dịch vụ và Thái độ của Tiki khi mua
                                            hàng. Mình sẽ không đánh giá sách vì mỗi người một quan điểm.
                                            Tiki tiếp tục vững...{" "}
                                        </span>
                                        <span className="show-more-content">Xem thêm</span>
                                    </div>
                                </div>
                                <div className="review-comment__created-date">
                                    <span>Đánh giá vào 5 tháng trước</span>
                                    <span className="review-comment__time-line">Đã dùng 1 ngày</span>
                                </div>
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center"
                                    }}
                                >
                                    <div style={{ display: "flex", alignItems: "center" }}>
                                        <span
                                            data-view-id="pdp_product_review_like_buton"
                                            className="review-comment__thank "
                                        >
                                            <img
                                                src="https://salt.tikicdn.com/ts/upload/10/9f/8b/54e5f6b084fb9e3445036b4646bc48b5.png"
                                                width={24}
                                                height={24}
                                            />
                                            <span>3</span>
                                        </span>
                                        <span
                                            data-view-id="pdp_product_review_reply_button"
                                            className="review-comment__reply"
                                        >
                                            <img
                                                src="https://salt.tikicdn.com/ts/upload/82/f0/7f/7353641630f811453e875bb5450065d8.png"
                                                width={24}
                                                height={24}
                                            />
                                            1
                                        </span>
                                    </div>
                                    <span
                                        data-view-id="pdp_product_review_reply_button"
                                        className="review-comment__reply"
                                    >
                                        <img
                                            src="https://salt.tikicdn.com/ts/upload/3f/fa/d4/7057dfb58b682b1b0a2b9683228863ee.png"
                                            width={24}
                                            height={24}
                                        />
                                        Chia sẻ
                                    </span>
                                </div>
                                <div className="review-comment__sub-comments">
                                    <div className="sc-4b1322bd-6 koMmsD review-sub-comment">
                                        <div className="review-sub-comment__inner">
                                            <div className="review-sub-comment__avatar-thumb">
                                                <div
                                                    className="sc-9162b613-0 erIzSq"
                                                    style={{
                                                        backgroundImage:
                                                            'url("https%3A%2F%2Fvcdn.tikicdn.com%2Fts%2Fseller%2Fd1%2F3f%2Fae%2F13ce3d83ab6b6c5e77e6377ad61dc4a5.jpg")'
                                                    }}
                                                >
                                                    <img
                                                        src="https://vcdn.tikicdn.com/ts/seller/d1/3f/ae/13ce3d83ab6b6c5e77e6377ad61dc4a5.jpg"
                                                        alt="Tiki Trading"
                                                    />
                                                </div>
                                            </div>
                                            <div style={{ display: "flex", flexDirection: "column" }}>
                                                <div className="review-sub-comment__avatar">
                                                    <div className="review-sub-comment__avatar-name">
                                                        Tiki Trading
                                                    </div>
                                                    <span className="review-sub-comment__check-icon" />
                                                    <div className="review-sub-comment__avatar-date">
                                                        5 tháng trước
                                                    </div>
                                                </div>
                                                <div className="review-sub-comment__content">
                                                    Cảm ơn anh Phát đã tin tưởng Tiki và cho Tiki 5⭐️! Thật
                                                    tuyệt vời khi Tiki có một khách hàng là anh ❤️
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    );
}

export default Evaluation;