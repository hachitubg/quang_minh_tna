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
                                <img src="/img/choose/01.png" alt="img" />
                            </div>
                        </div>
                        <div className="col-lg-6 mt-4 mt-lg-0">
                            <div className="choose-content">
                                <SectionTitle>
                                    <SectionTitle.SubTitle>TẠI SAO CHỌN CHÚNG TÔI</SectionTitle.SubTitle>
                                    <SectionTitle.Title>Công nghệ lõi <br />& lợi ích nano</SectionTitle.Title>
                                </SectionTitle>
                                <p className="mt-3 mt-md-0 wow slideUp" data-delay=".5">
                                    Dây chuyền công nghệ châu Âu kết hợp hệ thống nghiền nano hiện đại.
                                    Nguyên liệu mịn đồng đều, tăng khả năng phân tán, nâng cao hiệu quả hấp thu.
                                </p>
                                <div className="choose-list-area">
                                    <ul className="choose-list wow slideUp" data-delay=".7">
                                        <li>
                                            <i className="fa-solid fa-check" />
                                            Nghiên cứu – phát triển công thức
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-check" />
                                            Gia công trọn gói từ A–Z
                                        </li>
                                    </ul>
                                    <ul className="choose-list wow slideUp" data-delay=".9">
                                        <li>
                                            <i className="fa-solid fa-check" />
                                            Chất lượng đồng đều giữa các lô hàng
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-check" />
                                            Hỗ trợ pháp lý & thiết kế bao bì
                                        </li>
                                    </ul>
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