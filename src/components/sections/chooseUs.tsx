import SectionTitle from "../ui/sectionTitle"

const ChooseUs = () => {
    return (
        <section className="choose-us-section fix section-padding">
            <div className="choose-shape">
                <img src="/img/choose/shape.png" alt="shape-img" />
            </div>
            <div className="bottom-shape">
                <img src="/img/choose/bottom-shape.png" alt="shape-img" />
            </div>
            <div className="arrow-shape-1 bounce-x">
                <img src="/img/choose/arrow-shape-1.png" alt="shape-img" />
            </div>
            <div className="circle-shape">
                <img src="/img/choose/circle.png" alt="shape-img" />
            </div>
            <div className="line-shape">
                <img src="/img/choose/line-shape.png" alt="shape-img" />
            </div>
            <div className="container">
                <div className="choose-us-wrapper">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="choose-us-image wow slideUp" data-delay=".4">
                                <img src="/img_quangminh/nongdan.png" alt="img" />
                            </div>
                        </div>
                        <div className="col-lg-6 mt-4 mt-lg-0">
                            <div className="choose-content">
                                <SectionTitle>
                                    <SectionTitle.SubTitle>TẠI SAO CHỌN CHÚNG TÔI</SectionTitle.SubTitle>
                                    <SectionTitle.Title>Công nghệ lõi <br />& lợi ích nano</SectionTitle.Title>
                                </SectionTitle>
                                <p className="mt-3 mt-md-0 wow slideUp" data-delay=".5">
                                    Quang Minh TNA ứng dụng công nghệ châu Âu kết hợp hệ thống nghiền nano tiên tiến, mang lại hiệu quả vượt trội cho sản phẩm phân bón và thuốc bảo vệ thực vật.
                                </p>
                                
                                <div className="choose-features-section">
                                    <div className="feature-group wow slideUp" data-delay=".5">
                                        <h4 className="feature-title">Công nghệ lõi</h4>
                                        <ul className="choose-list">
                                            <li>
                                                <i className="fa-solid fa-check" />
                                                Dây chuyền công nghệ châu Âu
                                            </li>
                                            <li>
                                                <i className="fa-solid fa-check" />
                                                Hệ thống nghiền nano hiện đại
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="feature-group wow slideUp" data-delay=".7">
                                        <h4 className="feature-title">Lợi ích công nghệ nano</h4>
                                        <ul className="choose-list">
                                            <li>
                                                <i className="fa-solid fa-check" />
                                                Nguyên liệu được xử lý mịn, đồng đều
                                            </li>
                                            <li>
                                                <i className="fa-solid fa-check" />
                                                Tăng khả năng phân tán
                                            </li>
                                            <li>
                                                <i className="fa-solid fa-check" />
                                                Nâng cao hiệu quả hấp thu của cây trồng
                                            </li>
                                            <li>
                                                <i className="fa-solid fa-check" />
                                                Giảm sai số phối trộn
                                            </li>
                                            <li>
                                                <i className="fa-solid fa-check" />
                                                Đảm bảo hàm lượng hoạt chất ổn định
                                            </li>
                                            <li>
                                                <i className="fa-solid fa-check" />
                                                Giữ chất lượng đồng đều giữa các lô hàng
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="feature-group wow slideUp" data-delay=".9">
                                        <h4 className="feature-title">Các tiêu chí kỹ thuật được kiểm soát chặt</h4>
                                        <ul className="choose-list">
                                            <li>
                                                <i className="fa-solid fa-check" />
                                                Độ phân tán
                                            </li>
                                            <li>
                                                <i className="fa-solid fa-check" />
                                                Độ bám dính
                                            </li>
                                            <li>
                                                <i className="fa-solid fa-check" />
                                                Hàm lượng hoạt chất
                                            </li>
                                            <li>
                                                <i className="fa-solid fa-check" />
                                                Tính an toàn sản phẩm
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="progress-wrap">
                                    <div className="pro-items wow slideUp" data-delay=".5">
                                        <div className="pro-head">
                                            <h6 className="title">
                                                Chất lượng ổn định
                                            </h6>
                                            <span className="point">
                                                100%
                                            </span>
                                        </div>
                                        <div className="progress">
                                            <div className="progress-value" />
                                        </div>
                                    </div>
                                    <div className="pro-items wow slideUp" data-delay=".7">
                                        <div className="pro-head">
                                            <h6 className="title">
                                                Giao hàng đúng tiến độ
                                            </h6>
                                            <span className="point">
                                                98%
                                            </span>
                                        </div>
                                        <div className="progress">
                                            <div className="progress-value style-two" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default ChooseUs