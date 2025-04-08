import { useState } from 'react';
import './change.address.scss';

interface ChangeAddressProps {
    onClose: () => void;
}

const ChangeAddress = ({ onClose }: ChangeAddressProps) => {
    const [selectedOption, setSelectedOption] = useState<number>(0);
    const [province, setProvince] = useState<string | null>(null);
    const [district, setDistrict] = useState<string | null>(null);
    const [ward, setWard] = useState<string | null>(null);

    const handleRadioSelect = (option: number) => {
        setSelectedOption(option);
        if (option === 0) {
            setProvince(null);
            setDistrict(null);
            setWard(null);
        }
    };

    const provinces = ["Hà Nội", "Đà Nẵng", "Hồ Chí Minh"];
    const districts = province === "Đà Nẵng" ? ["Huyện Hòa Vang", "Quận Hải Châu"] : [];
    const wards = district === "Huyện Hòa Vang" ? ["Xã Hòa Châu", "Xã Hòa Tiến"] : [];

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
                                <button
                                    className="sc-57c4f16b-0 jYahB"
                                    onClick={() => handleRadioSelect(0)}
                                >
                                    <span className={`tikicon ${selectedOption === 0 ? "icon-radio-button-on" : "icon-radio-button-off"}`} />
                                    <span className="text">
                                        Phường Hàng Trống, Quận Hoàn Kiếm, Hà Nội
                                    </span>
                                </button>
                            </div>
                            <div data-view-id="header_location_picker_item" data-view-index={1}>
                                <button
                                    className="sc-57c4f16b-0 jYahB"
                                    onClick={() => handleRadioSelect(1)}
                                >
                                    <span className={`tikicon ${selectedOption === 1 ? "icon-radio-button-on" : "icon-radio-button-off"}`} />
                                    <span className="text">Chọn khu vực giao hàng khác</span>
                                </button>
                            </div>

                            {selectedOption === 1 && (
                                <div className="sc-583a1fc3-7 ertnQD">
                                    <div className="row">
                                        <p className="location-type">Tỉnh/Thành phố</p>
                                        <div className="css-1tskbye-container">
                                            <div className="css-bg1rzq-control">
                                                <div className="css-1hwfws3">
                                                    <div className="css-dvua67-singleValue">Đà Nẵng</div>
                                                    <div className="css-1g6gooi">
                                                        <div className="" style={{ display: "inline-block" }}>
                                                            <input
                                                                autoCapitalize="none"
                                                                autoComplete="off"
                                                                autoCorrect="off"
                                                                id="react-select-17-input"
                                                                spellCheck="false"
                                                                tabIndex={0}
                                                                type="text"
                                                                aria-autocomplete="list"
                                                                defaultValue=""
                                                                style={{
                                                                    boxSizing: "content-box",
                                                                    width: 2,
                                                                    background: "0px center",
                                                                    border: 0,
                                                                    fontSize: "inherit",
                                                                    opacity: 1,
                                                                    outline: 0,
                                                                    padding: 0,
                                                                    color: "inherit"
                                                                }}
                                                            />
                                                            <div
                                                                style={{
                                                                    position: "absolute",
                                                                    top: 0,
                                                                    left: 0,
                                                                    visibility: "hidden",
                                                                    height: 0,
                                                                    overflow: "scroll",
                                                                    whiteSpace: "pre",
                                                                    fontSize: 13,
                                                                    fontFamily: "Inter, Helvetica, Arial, sans-serif",
                                                                    fontWeight: 400,
                                                                    fontStyle: "normal",
                                                                    letterSpacing: "normal",
                                                                    textTransform: "none"
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="css-1wy0on6">
                                                    <span className="css-bgvzuu-indicatorSeparator" />
                                                    <div aria-hidden="true" className="css-16pqwjk-indicatorContainer">
                                                        <svg
                                                            height={20}
                                                            width={20}
                                                            viewBox="0 0 20 20"
                                                            aria-hidden="true"
                                                            focusable="false"
                                                            className="css-19bqh2r"
                                                        >
                                                            <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="row">
                                        <p className="location-type">Quận/Huyện</p>
                                        <div className="css-1tskbye-container">
                                            <div className="css-bg1rzq-control">
                                                <div className="css-1hwfws3">
                                                    <div className="css-dvua67-singleValue">Đà Nẵng</div>
                                                    <div className="css-1g6gooi">
                                                        <div className="" style={{ display: "inline-block" }}>
                                                            <input
                                                                autoCapitalize="none"
                                                                autoComplete="off"
                                                                autoCorrect="off"
                                                                id="react-select-17-input"
                                                                spellCheck="false"
                                                                tabIndex={0}
                                                                type="text"
                                                                aria-autocomplete="list"
                                                                defaultValue=""
                                                                style={{
                                                                    boxSizing: "content-box",
                                                                    width: 2,
                                                                    background: "0px center",
                                                                    border: 0,
                                                                    fontSize: "inherit",
                                                                    opacity: 1,
                                                                    outline: 0,
                                                                    padding: 0,
                                                                    color: "inherit"
                                                                }}
                                                            />
                                                            <div
                                                                style={{
                                                                    position: "absolute",
                                                                    top: 0,
                                                                    left: 0,
                                                                    visibility: "hidden",
                                                                    height: 0,
                                                                    overflow: "scroll",
                                                                    whiteSpace: "pre",
                                                                    fontSize: 13,
                                                                    fontFamily: "Inter, Helvetica, Arial, sans-serif",
                                                                    fontWeight: 400,
                                                                    fontStyle: "normal",
                                                                    letterSpacing: "normal",
                                                                    textTransform: "none"
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="css-1wy0on6">
                                                    <span className="css-bgvzuu-indicatorSeparator" />
                                                    <div aria-hidden="true" className="css-16pqwjk-indicatorContainer">
                                                        <svg
                                                            height={20}
                                                            width={20}
                                                            viewBox="0 0 20 20"
                                                            aria-hidden="true"
                                                            focusable="false"
                                                            className="css-19bqh2r"
                                                        >
                                                            <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="row">
                                        <p className="location-type">Phường/Xã</p>
                                        <div className="css-1tskbye-container">
                                            <div className="css-bg1rzq-control">
                                                <div className="css-1hwfws3">
                                                    <div className="css-dvua67-singleValue">Đà Nẵng</div>
                                                    <div className="css-1g6gooi">
                                                        <div className="" style={{ display: "inline-block" }}>
                                                            <input
                                                                autoCapitalize="none"
                                                                autoComplete="off"
                                                                autoCorrect="off"
                                                                id="react-select-17-input"
                                                                spellCheck="false"
                                                                tabIndex={0}
                                                                type="text"
                                                                aria-autocomplete="list"
                                                                defaultValue=""
                                                                style={{
                                                                    boxSizing: "content-box",
                                                                    width: 2,
                                                                    background: "0px center",
                                                                    border: 0,
                                                                    fontSize: "inherit",
                                                                    opacity: 1,
                                                                    outline: 0,
                                                                    padding: 0,
                                                                    color: "inherit"
                                                                }}
                                                            />
                                                            <div
                                                                style={{
                                                                    position: "absolute",
                                                                    top: 0,
                                                                    left: 0,
                                                                    visibility: "hidden",
                                                                    height: 0,
                                                                    overflow: "scroll",
                                                                    whiteSpace: "pre",
                                                                    fontSize: 13,
                                                                    fontFamily: "Inter, Helvetica, Arial, sans-serif",
                                                                    fontWeight: 400,
                                                                    fontStyle: "normal",
                                                                    letterSpacing: "normal",
                                                                    textTransform: "none"
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="css-1wy0on6">
                                                    <span className="css-bgvzuu-indicatorSeparator" />
                                                    <div aria-hidden="true" className="css-16pqwjk-indicatorContainer">
                                                        <svg
                                                            height={20}
                                                            width={20}
                                                            viewBox="0 0 20 20"
                                                            aria-hidden="true"
                                                            focusable="false"
                                                            className="css-19bqh2r"
                                                        >
                                                            <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            )}
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
};

export default ChangeAddress;