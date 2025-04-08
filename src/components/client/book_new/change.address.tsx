import './change.address.scss'

interface ChangeAddressProps {
    onClose: () => void;
}

const ChangeAddress = ({ onClose }: ChangeAddressProps) => {
    return (
        <div className="ReactModalPortal">
            <div
                className="ReactModal__Overlay ReactModal__Overlay--after-open"
                style={{
                    position: "fixed",
                    inset: 0,
                    background: "rgba(0, 0, 0, 0.53)",
                    overflowY: "scroll",
                    zIndex: 1000
                }}
            >
                <div
                    className="ReactModal__Content ReactModal__Content--after-open"
                    tabIndex={-1}
                    role="dialog"
                    aria-modal="true"
                    style={{
                        position: "relative",
                        inset: 0,
                        border: "none",
                        background: "rgb(255, 255, 255)",
                        overflow: "unset",
                        borderRadius: 4,
                        outline: "none",
                        padding: 0,
                        width: 600,
                        margin: "0px auto"
                    }}
                >
                    <div className="sc-583a1fc3-0 ljjQmk">
                        <a className="sc-583a1fc3-1 jeHpbA" onClick={onClose}>
                            <span className="tikicon icon-circle-close" />
                        </a>
                        <div className="sc-583a1fc3-3 fdmRhD">
                            <p className="title">Địa chỉ giao hàng</p>
                        </div>
                        <div className="sc-583a1fc3-4 hQVbFq">
                            <p className="description">
                                Hãy chọn địa chỉ nhận hàng để được dự báo thời gian giao hàng cùng
                                phí đóng gói, vận chuyển một cách chính xác nhất.
                            </p>
                            <div data-view-id="header_location_picker_item" data-view-index={0}>
                                <button className="sc-57c4f16b-0 jYahB">
                                    <span className="tikicon icon-radio-button-on" />
                                    <span className="text">
                                        Phường Hàng Trống, Quận Hoàn Kiếm, Hà Nội
                                    </span>
                                </button>
                            </div>
                            <div data-view-id="header_location_picker_item" data-view-index={1}>
                                <button className="sc-57c4f16b-0 jYahB">
                                    <span className="tikicon icon-radio-button-off" />
                                    <span className="text">Chọn khu vực giao hàng khác</span>
                                </button>
                            </div>
                        </div>
                        <div className="sc-583a1fc3-5 FgPq">
                            <button
                                data-view-id="header_location_picker_save"
                                className="sc-583a1fc3-6 gbyUFB"
                                onClick={onClose}
                            >
                                GIAO ĐẾN ĐỊA CHỈ NÀY
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ChangeAddress;