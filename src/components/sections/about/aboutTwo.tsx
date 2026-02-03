import SectionTitle from "@/components/ui/sectionTitle"
import { Link } from "react-router-dom"

const AboutTwo = () => {
    return (
        <section id="about" className="about-section section-padding fix bg-cover" style={{ backgroundImage: 'url("/img/service/service-bg-2.jpg")' }}>
            <div className="container">
                <div className="about-wrapper style-2">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="about-image-items">
                                <div className="circle-shape">
                                    <img src="/img/about/circle.png" alt="shape-img" />
                                </div>
                                <div className="counter-shape float-bob-y">
                                    <div className="icon">
                                        <img src="/img/about/icon-1.svg" alt="icon-img" />
                                    </div>
                                    <div className="content">
                                        <h3><span className="count">20</span>+</h3>
                                        <p>Thương hiệu đối tác</p>
                                    </div>
                                </div>
                                <div className="about-image-1 bg-cover wow slideLeft" data-delay=".3" style={{ backgroundImage: 'url("/img/about/03.png")' }}>
                                    <div className="about-image-2 wow slideUp" data-delay=".5">
                                        <img src="/img/about/04.jpg" alt="about-img" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mt-4 mt-lg-0">
                            <div className="about-content">
                                <SectionTitle>
                                    <SectionTitle.SubTitle>Về chúng tôi</SectionTitle.SubTitle>
                                    <SectionTitle.Title>Giới thiệu Nhà máy <span>Quang Minh TNA</span></SectionTitle.Title>
                                </SectionTitle>
                                <p className="mt-3 mt-md-0 wow slideUp" data-delay=".5">
                                    Nhà máy Quang Minh TNA là nền tảng sản xuất phân bón và thuốc bảo vệ thực vật ứng dụng công nghệ nano, được đầu tư bài bản theo định hướng sản xuất khép kín – chủ động kiểm soát chất lượng, tiến độ và chi phí ngay từ gốc.
                                </p>
                                <p className="mt-3 mt-md-0 wow slideUp" data-delay=".5">
                                    Quang Minh TNA tập trung vào gia công trọn gói cho doanh nghiệp phát triển thương hiệu riêng, từ nghiên cứu công thức đến sản xuất, pháp lý và hỗ trợ ra thị trường.
                                </p>
                                <p className="mt-3 mt-md-0 wow slideUp" data-delay=".5">
                                    Nhà máy vận hành trên dây chuyền công nghệ châu Âu kết hợp hệ thống nghiền nano, giúp nguyên liệu được xử lý mịn và đồng đều, tăng khả năng phân tán, nâng cao hiệu quả hấp thu và đảm bảo chất lượng ổn định giữa các lô hàng.
                                </p>
                                <p className="mt-3 mt-md-0 wow slideUp" data-delay=".5">
                                    Hiện Quang Minh TNA đang là đối tác sản xuất chiến lược của hơn 20 thương hiệu trên toàn quốc.
                                </p>
                                <div className="about-author">
                                    <div className="about-button wow slideUp" data-delay=".5">
                                        <Link to="/gioi-thieu" className="theme-btn">
                                            Xem thêm
                                            <i className="fa-solid fa-arrow-right-long" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-12">
                            <div className="row about-features-fullwidth">
                                <div className="col-12 col-md-4 mb-3 mb-md-0">
                                    <div className="about-icon-items">
                                        <div className="icon-items wow slideUp" data-delay=".9">
                                            <div className="icon">
                                                <img src="/img/about/icon-5.svg" alt="icon-img" />
                                            </div>
                                            <div className="content">
                                                <h4>Dây chuyền châu Âu</h4>
                                                <p>Hệ thống nghiền nano hiện đại, chất lượng ổn định</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-4 mb-3 mb-md-0">
                                    <div className="about-icon-items">
                                        <div className="icon-items wow slideUp" data-delay=".7">
                                            <div className="icon">
                                                <img src="/img/about/icon-4.svg" alt="icon-img" />
                                            </div>
                                            <div className="content">
                                                <h4>Công nghệ nano</h4>
                                                <p>Nguyên liệu mịn đồng đều, tăng hiệu quả hấp thu</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-4 mb-3 mb-md-0">
                                    <div className="about-icon-items">
                                        <div className="icon-items wow slideUp" data-delay=".7">
                                            <div className="icon">
                                                <img src="/img/about/icon-1.svg" alt="icon-img" />
                                            </div>
                                            <div className="content">
                                                <h4>Gia công nhanh chóng</h4>
                                                <p>Hoàn thành gia công nhanh chóng, đảm bảo tiêu chuẩn quốc tế, không làm chậm tiến độ sản xuất</p>
                                            </div>
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

export default AboutTwo