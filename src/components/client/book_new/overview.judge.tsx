// Define interface for the component props
interface OverViewJudgeProps {
    topIconSrc: string;
    bottomIconSrc: string;
    handleTopIconClick: () => void;
    handleBottomIconClick: () => void;
}

const OverViewJudge = ({ topIconSrc, bottomIconSrc, handleTopIconClick, handleBottomIconClick }: OverViewJudgeProps) => {
    return (
        <>
            <div className="customer-reviews__top">
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 2fr",
                        width: "100%",
                        paddingBottom: 16
                    }}
                >
                    <div className="sc-4b1322bd-1 cDJOxJ review-rating">
                        <div className="review-rating__heading">Tổng quan</div>
                        <div className="review-rating__inner">
                            <div className="review-rating__summary">
                                <div className="review-rating__point">4.7</div>
                                <div className="review-rating__stars">
                                    <div
                                        className="sc-a236768f-0 fFhahK"
                                        style={{ whiteSpace: "nowrap" }}
                                    >
                                        <span>
                                            <img
                                                alt="star-icon"
                                                src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                width={24}
                                                height={24}
                                            />
                                        </span>
                                        <span>
                                            <img
                                                alt="star-icon"
                                                src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                width={24}
                                                height={24}
                                            />
                                        </span>
                                        <span>
                                            <img
                                                alt="star-icon"
                                                src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                width={24}
                                                height={24}
                                            />
                                        </span>
                                        <span>
                                            <img
                                                alt="star-icon"
                                                src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                width={24}
                                                height={24}
                                            />
                                        </span>
                                        <span>
                                            <img
                                                alt="star-icon"
                                                src="https://salt.tikicdn.com/ts/upload/7b/fe/fc/3da9d35ef717692a4b3b345f44e55caf.png"
                                                width={24}
                                                height={24}
                                            />
                                        </span>
                                        <div style={{ width: "94%" }}>
                                            <span>
                                                <img
                                                    alt="star-icon"
                                                    src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                    width={24}
                                                    height={24}
                                                />
                                            </span>
                                            <span>
                                                <img
                                                    alt="star-icon"
                                                    src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                    width={24}
                                                    height={24}
                                                />
                                            </span>
                                            <span>
                                                <img
                                                    alt="star-icon"
                                                    src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                    width={24}
                                                    height={24}
                                                />
                                            </span>
                                            <span>
                                                <img
                                                    alt="star-icon"
                                                    src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                    width={24}
                                                    height={24}
                                                />
                                            </span>
                                            <span>
                                                <img
                                                    alt="star-icon"
                                                    src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                    width={24}
                                                    height={24}
                                                />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="review-rating__total">(114 đánh giá)</div>
                            <div className="review-rating__detail">
                                <div className="review-rating__level">
                                    <div
                                        className="sc-a236768f-0 fFhahK"
                                        style={{ whiteSpace: "nowrap" }}
                                    >
                                        <span>
                                            <img
                                                alt="star-icon"
                                                src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                width={14}
                                                height={14}
                                            />
                                        </span>
                                        <span>
                                            <img
                                                alt="star-icon"
                                                src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                width={14}
                                                height={14}
                                            />
                                        </span>
                                        <span>
                                            <img
                                                alt="star-icon"
                                                src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                width={14}
                                                height={14}
                                            />
                                        </span>
                                        <span>
                                            <img
                                                alt="star-icon"
                                                src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                width={14}
                                                height={14}
                                            />
                                        </span>
                                        <span>
                                            <img
                                                alt="star-icon"
                                                src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                width={14}
                                                height={14}
                                            />
                                        </span>
                                        <div style={{ width: "100%" }}>
                                            <span>
                                                <img
                                                    alt="star-icon"
                                                    src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                    width={14}
                                                    height={14}
                                                />
                                            </span>
                                            <span>
                                                <img
                                                    alt="star-icon"
                                                    src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                    width={14}
                                                    height={14}
                                                />
                                            </span>
                                            <span>
                                                <img
                                                    alt="star-icon"
                                                    src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                    width={14}
                                                    height={14}
                                                />
                                            </span>
                                            <span>
                                                <img
                                                    alt="star-icon"
                                                    src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                    width={14}
                                                    height={14}
                                                />
                                            </span>
                                            <span>
                                                <img
                                                    alt="star-icon"
                                                    src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                    width={14}
                                                    height={14}
                                                />
                                            </span>
                                        </div>
                                    </div>
                                    <div className="sc-4b1322bd-2 qmgSA">
                                        <div style={{ width: "84%" }} />
                                    </div>
                                    <div className="review-rating__number">95</div>
                                </div>
                                <div className="review-rating__level">
                                    <div
                                        className="sc-a236768f-0 fFhahK"
                                        style={{ whiteSpace: "nowrap" }}
                                    >
                                        <span>
                                            <img
                                                alt="star-icon"
                                                src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                width={14}
                                                height={14}
                                            />
                                        </span>
                                        <span>
                                            <img
                                                alt="star-icon"
                                                src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                width={14}
                                                height={14}
                                            />
                                        </span>
                                        <span>
                                            <img
                                                alt="star-icon"
                                                src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                width={14}
                                                height={14}
                                            />
                                        </span>
                                        <span>
                                            <img
                                                alt="star-icon"
                                                src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                width={14}
                                                height={14}
                                            />
                                        </span>
                                        <span>
                                            <img
                                                alt="star-icon"
                                                src="https://salt.tikicdn.com/ts/upload/50/f9/af/0d540e678d0d639d4eba86c1cdd38556.png"
                                                width={14}
                                                height={14}
                                            />
                                        </span>
                                        <div style={{ width: "80%" }}>
                                            <span>
                                                <img
                                                    alt="star-icon"
                                                    src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                    width={14}
                                                    height={14}
                                                />
                                            </span>
                                            <span>
                                                <img
                                                    alt="star-icon"
                                                    src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                    width={14}
                                                    height={14}
                                                />
                                            </span>
                                            <span>
                                                <img
                                                    alt="star-icon"
                                                    src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                    width={14}
                                                    height={14}
                                                />
                                            </span>
                                            <span>
                                                <img
                                                    alt="star-icon"
                                                    src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                    width={14}
                                                    height={14}
                                                />
                                            </span>
                                            <span>
                                                <img
                                                    alt="star-icon"
                                                    src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                    width={14}
                                                    height={14}
                                                />
                                            </span>
                                        </div>
                                    </div>
                                    <div className="sc-4b1322bd-2 qmgSA">
                                        <div style={{ width: "12%" }} />
                                    </div>
                                    <div className="review-rating__number">13</div>
                                </div>
                                <div className="review-rating__level">
                                    <div
                                        className="sc-a236768f-0 fFhahK"
                                        style={{ whiteSpace: "nowrap" }}
                                    >
                                        <span>
                                            <img
                                                alt="star-icon"
                                                src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                width={14}
                                                height={14}
                                            />
                                        </span>
                                        <span>
                                            <img
                                                alt="star-icon"
                                                src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                width={14}
                                                height={14}
                                            />
                                        </span>
                                        <span>
                                            <img
                                                alt="star-icon"
                                                src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                width={14}
                                                height={14}
                                            />
                                        </span>
                                        <span>
                                            <img
                                                alt="star-icon"
                                                src="https://salt.tikicdn.com/ts/upload/50/f9/af/0d540e678d0d639d4eba86c1cdd38556.png"
                                                width={14}
                                                height={14}
                                            />
                                        </span>
                                        <span>
                                            <img
                                                alt="star-icon"
                                                src="https://salt.tikicdn.com/ts/upload/50/f9/af/0d540e678d0d639d4eba86c1cdd38556.png"
                                                width={14}
                                                height={14}
                                            />
                                        </span>
                                        <div style={{ width: "60%" }}>
                                            <span>
                                                <img
                                                    alt="star-icon"
                                                    src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                    width={14}
                                                    height={14}
                                                />
                                            </span>
                                            <span>
                                                <img
                                                    alt="star-icon"
                                                    src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                    width={14}
                                                    height={14}
                                                />
                                            </span>
                                            <span>
                                                <img
                                                    alt="star-icon"
                                                    src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                    width={14}
                                                    height={14}
                                                />
                                            </span>
                                            <span>
                                                <img
                                                    alt="star-icon"
                                                    src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                    width={14}
                                                    height={14}
                                                />
                                            </span>
                                            <span>
                                                <img
                                                    alt="star-icon"
                                                    src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                    width={14}
                                                    height={14}
                                                />
                                            </span>
                                        </div>
                                    </div>
                                    <div className="sc-4b1322bd-2 qmgSA">
                                        <div style={{ width: "2%" }} />
                                    </div>
                                    <div className="review-rating__number">3</div>
                                </div>
                                <div className="review-rating__level">
                                    <div
                                        className="sc-a236768f-0 fFhahK"
                                        style={{ whiteSpace: "nowrap" }}
                                    >
                                        <span>
                                            <img
                                                alt="star-icon"
                                                src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                width={14}
                                                height={14}
                                            />
                                        </span>
                                        <span>
                                            <img
                                                alt="star-icon"
                                                src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                width={14}
                                                height={14}
                                            />
                                        </span>
                                        <span>
                                            <img
                                                alt="star-icon"
                                                src="https://salt.tikicdn.com/ts/upload/50/f9/af/0d540e678d0d639d4eba86c1cdd38556.png"
                                                width={14}
                                                height={14}
                                            />
                                        </span>
                                        <span>
                                            <img
                                                alt="star-icon"
                                                src="https://salt.tikicdn.com/ts/upload/50/f9/af/0d540e678d0d639d4eba86c1cdd38556.png"
                                                width={14}
                                                height={14}
                                            />
                                        </span>
                                        <span>
                                            <img
                                                alt="star-icon"
                                                src="https://salt.tikicdn.com/ts/upload/50/f9/af/0d540e678d0d639d4eba86c1cdd38556.png"
                                                width={14}
                                                height={14}
                                            />
                                        </span>
                                        <div style={{ width: "40%" }}>
                                            <span>
                                                <img
                                                    alt="star-icon"
                                                    src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                    width={14}
                                                    height={14}
                                                />
                                            </span>
                                            <span>
                                                <img
                                                    alt="star-icon"
                                                    src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                    width={14}
                                                    height={14}
                                                />
                                            </span>
                                            <span>
                                                <img
                                                    alt="star-icon"
                                                    src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                    width={14}
                                                    height={14}
                                                />
                                            </span>
                                            <span>
                                                <img
                                                    alt="star-icon"
                                                    src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                    width={14}
                                                    height={14}
                                                />
                                            </span>
                                            <span>
                                                <img
                                                    alt="star-icon"
                                                    src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                    width={14}
                                                    height={14}
                                                />
                                            </span>
                                        </div>
                                    </div>
                                    <div className="sc-4b1322bd-2 qmgSA">
                                        <div style={{ width: "1%" }} />
                                    </div>
                                    <div className="review-rating__number">1</div>
                                </div>
                                <div className="review-rating__level">
                                    <div
                                        className="sc-a236768f-0 fFhahK"
                                        style={{ whiteSpace: "nowrap" }}
                                    >
                                        <span>
                                            <img
                                                alt="star-icon"
                                                src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                width={14}
                                                height={14}
                                            />
                                        </span>
                                        <span>
                                            <img
                                                alt="star-icon"
                                                src="https://salt.tikicdn.com/ts/upload/50/f9/af/0d540e678d0d639d4eba86c1cdd38556.png"
                                                width={14}
                                                height={14}
                                            />
                                        </span>
                                        <span>
                                            <img
                                                alt="star-icon"
                                                src="https://salt.tikicdn.com/ts/upload/50/f9/af/0d540e678d0d639d4eba86c1cdd38556.png"
                                                width={14}
                                                height={14}
                                            />
                                        </span>
                                        <span>
                                            <img
                                                alt="star-icon"
                                                src="https://salt.tikicdn.com/ts/upload/50/f9/af/0d540e678d0d639d4eba86c1cdd38556.png"
                                                width={14}
                                                height={14}
                                            />
                                        </span>
                                        <span>
                                            <img
                                                alt="star-icon"
                                                src="https://salt.tikicdn.com/ts/upload/50/f9/af/0d540e678d0d639d4eba86c1cdd38556.png"
                                                width={14}
                                                height={14}
                                            />
                                        </span>
                                        <div style={{ width: "20%" }}>
                                            <span>
                                                <img
                                                    alt="star-icon"
                                                    src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                    width={14}
                                                    height={14}
                                                />
                                            </span>
                                            <span>
                                                <img
                                                    alt="star-icon"
                                                    src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                    width={14}
                                                    height={14}
                                                />
                                            </span>
                                            <span>
                                                <img
                                                    alt="star-icon"
                                                    src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                    width={14}
                                                    height={14}
                                                />
                                            </span>
                                            <span>
                                                <img
                                                    alt="star-icon"
                                                    src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                    width={14}
                                                    height={14}
                                                />
                                            </span>
                                            <span>
                                                <img
                                                    alt="star-icon"
                                                    src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                    width={14}
                                                    height={14}
                                                />
                                            </span>
                                        </div>
                                    </div>
                                    <div className="sc-4b1322bd-2 qmgSA">
                                        <div style={{ width: "1%" }} />
                                    </div>
                                    <div className="review-rating__number">2</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="ai-summary" className="sc-4b1322bd-9 kLEOsJ">
                        <div id="ai-chat" className="disclaimer">
                            <img
                                alt="icon"
                                src="https://salt.tikicdn.com/ts/ta/d3/d4/1c/1d4ee6bf8bc9c5795529ac50a6b439dd.png"
                                width={24}
                                height={24}
                            />
                            <div>
                                <span>Trợ lý AI</span> tổng hợp
                            </div>
                            <div style={{ marginLeft: 4 }}>từ các đánh giá mới nhất</div>
                        </div>
                        <div className="section-item">
                            <div className="title">
                                <span className="text-bold">Về sản phẩm:</span>{" "}
                                <span className="text-lighter">
                                    (15 tích cực, 6 tiêu cực)
                                </span>
                            </div>
                            <div className="flex text">
                                <img
                                    alt="icon"
                                    src="https://salt.tikicdn.com/ts/ta/6e/32/bd/0e629541310a1a8132b6ef8666827ba9.png"
                                    width={16}
                                    height={16}
                                />
                                <div>Nội dung bổ ích, dễ hiểu, thực tế.</div>
                            </div>
                            <div className="flex text">
                                <img
                                    alt="icon"
                                    src="https://salt.tikicdn.com/ts/ta/6e/32/bd/0e629541310a1a8132b6ef8666827ba9.png"
                                    width={16}
                                    height={16}
                                />
                                <div>Sách in đẹp, giấy tốt, trình bày rõ ràng.</div>
                            </div>
                            <div className="flex text">
                                <img
                                    alt="icon"
                                    src="https://salt.tikicdn.com/ts/ta/6e/32/bd/0e629541310a1a8132b6ef8666827ba9.png"
                                    width={16}
                                    height={16}
                                />
                                <div>Giá tốt, đúng chất thực chiến.</div>
                            </div>
                            <div className="flex text">
                                <img
                                    alt="icon"
                                    src="https://salt.tikicdn.com/ts/ta/28/aa/3f/b21c8fac9240dd055b363255cc1fc72e.png"
                                    width={16}
                                    height={16}
                                />
                                <div>Nội dung cơ bản, lỗi thời, có thể tìm trên mạng.</div>
                            </div>
                        </div>
                        <div className="section-item">
                            <div className="title">
                                <span className="text-bold">Về dịch vụ:</span>{" "}
                                <span className="text-lighter">(8 tích cực, 1 tiêu cực)</span>
                            </div>
                            <div className="flex text">
                                <img
                                    alt="icon"
                                    src="https://salt.tikicdn.com/ts/ta/6e/32/bd/0e629541310a1a8132b6ef8666827ba9.png"
                                    width={16}
                                    height={16}
                                />
                                <div>Giao hàng nhanh, đóng gói cẩn thận.</div>
                            </div>
                            <div className="flex text">
                                <img
                                    alt="icon"
                                    src="https://salt.tikicdn.com/ts/ta/6e/32/bd/0e629541310a1a8132b6ef8666827ba9.png"
                                    width={16}
                                    height={16}
                                />
                                <div>Nhân viên chuyên nghiệp, thái độ tốt.</div>
                            </div>
                            <div className="flex text">
                                <img
                                    alt="icon"
                                    src="https://salt.tikicdn.com/ts/ta/6e/32/bd/0e629541310a1a8132b6ef8666827ba9.png"
                                    width={16}
                                    height={16}
                                />
                                <div>Hỗ trợ khách hàng tốt sau bán hàng.</div>
                            </div>
                            <div className="flex text">
                                <img
                                    alt="icon"
                                    src="https://salt.tikicdn.com/ts/ta/28/aa/3f/b21c8fac9240dd055b363255cc1fc72e.png"
                                    width={16}
                                    height={16}
                                />
                                <div>Đơn hàng không đóng hộp giấy, sách bị rách.</div>
                            </div>
                        </div>
                        <div className="flex flex-between">
                            <div className=" flex flex-between wrapper-icon">
                                <img
                                    alt="icon"
                                    src={topIconSrc}
                                    width={32}
                                    height={32}
                                    onClick={handleTopIconClick}
                                    style={{ cursor: 'pointer' }}
                                />
                                <img
                                    alt="icon"
                                    src={bottomIconSrc}
                                    width={32}
                                    height={32}
                                    onClick={handleBottomIconClick}
                                    style={{ cursor: 'pointer' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="customer-reviews__top">
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1fr",
                        borderTop: "1px solid rgb(242, 242, 242)",
                        width: "100%",
                        paddingTop: 16
                    }}
                >
                    <div className="sc-4b1322bd-3 ehtKLX review-images">
                        <div className="review-images__heading">Tất cả hình ảnh (12)</div>
                        <div className="review-images__inner">
                            <div
                                className="review-images__item"
                                data-view-id="pdp_product_review_view_photo"
                            >
                                <div
                                    className="review-images__img"
                                    style={{
                                        backgroundImage:
                                            'url("https://salt.tikicdn.com/cache/w200/ts/review/96/ec/ac/6fd26e3626e2a8ae2ccd3f47d1b5d4c5.jpg")'
                                    }}
                                />
                            </div>
                            <div
                                className="review-images__item"
                                data-view-id="pdp_product_review_view_photo"
                            >
                                <div
                                    className="review-images__img"
                                    style={{
                                        backgroundImage:
                                            'url("https://salt.tikicdn.com/cache/w200/ts/review/bd/9b/1f/83ce09241eebc24dc5257610fdb8f228.jpg")'
                                    }}
                                />
                            </div>
                            <div
                                className="review-images__item"
                                data-view-id="pdp_product_review_view_photo"
                            >
                                <div
                                    className="review-images__img"
                                    style={{
                                        backgroundImage:
                                            'url("https://salt.tikicdn.com/cache/w200/ts/review/f3/92/48/bab2bfb4a63c3777d42f5490a5103755.jpg")'
                                    }}
                                />
                            </div>
                            <div
                                className="review-images__item"
                                data-view-id="pdp_product_review_view_photo"
                            >
                                <div
                                    className="review-images__img"
                                    style={{
                                        backgroundImage:
                                            'url("https://salt.tikicdn.com/cache/w200/ts/review/d8/49/94/3d0786393508fa23b3665adebc087505.jpg")'
                                    }}
                                />
                            </div>
                            <div
                                className="review-images__item"
                                data-view-id="pdp_product_review_view_photo"
                            >
                                <div
                                    className="review-images__img"
                                    style={{
                                        backgroundImage:
                                            'url("https://salt.tikicdn.com/cache/w200/ts/review/5b/eb/70/4f58048b64b74b1500d44c7e06b68e58.jpg")'
                                    }}
                                />
                            </div>
                            <div
                                className="review-images__item"
                                data-view-id="pdp_product_review_view_photo"
                            >
                                <div
                                    className="review-images__img"
                                    style={{
                                        backgroundImage:
                                            'url("https://salt.tikicdn.com/cache/w200/ts/review/22/f6/c4/2e493a234563cab1e69ddd9cec34c1a2.jpg")'
                                    }}
                                />
                            </div>
                            <div
                                className="review-images__item"
                                data-view-id="pdp_product_review_view_photo"
                            >
                                <div
                                    className="review-images__img"
                                    style={{
                                        backgroundImage:
                                            'url("https://salt.tikicdn.com/cache/w200/ts/review/45/f5/6a/fea2df82075993cb2429c644ea252440.jpg")'
                                    }}
                                />
                            </div>
                            <div
                                className="review-images__item"
                                data-view-id="pdp_product_review_view_photo"
                            >
                                <div
                                    className="review-images__img"
                                    style={{
                                        backgroundImage:
                                            'url("https://salt.tikicdn.com/cache/w200/ts/review/7b/eb/b3/402e031c84d2ed32d42b320c596d899a.jpg")'
                                    }}
                                />
                            </div>
                            <div
                                className="review-images__item"
                                data-view-id="pdp_product_review_view_photo"
                            >
                                <div
                                    className="review-images__img"
                                    style={{
                                        backgroundImage:
                                            'url("https://salt.tikicdn.com/cache/w200/ts/review/20/9c/83/da0dadbea04ccae4a292fb377473a918.jpg")'
                                    }}
                                />
                            </div>
                            <div
                                className="review-images__item"
                                data-view-id="pdp_product_review_view_photo"
                            >
                                <div
                                    className="review-images__img"
                                    style={{
                                        backgroundImage:
                                            'url("https://salt.tikicdn.com/cache/w200/ts/review/11/52/59/991f9869e85237beccc6938c1b0184c0.jpg")'
                                    }}
                                />
                            </div>
                            <div
                                className="review-images__item"
                                data-view-id="pdp_product_review_view_photo"
                            >
                                <div
                                    className="review-images__img"
                                    style={{
                                        backgroundImage:
                                            'url("https://salt.tikicdn.com/cache/w200/ts/review/0e/10/b3/b07821d9e67d9651b2adad23e7ccea24.jpg")'
                                    }}
                                />
                            </div>
                            <div
                                className="review-images__item"
                                data-view-id="pdp_product_review_view_photo"
                            >
                                <div
                                    className="review-images__img"
                                    style={{
                                        backgroundImage:
                                            'url("https://salt.tikicdn.com/cache/w200/ts/review/9e/41/59/e0163523f6bdce653465a7c7bc94c1c6.jpg")'
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default OverViewJudge;