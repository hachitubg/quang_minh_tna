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
                                    Nền tảng sản xuất phân bón và thuốc bảo vệ thực vật ứng dụng công nghệ nano.
                                    Đầu tư bài bản theo định hướng sản xuất khép kín – chủ động kiểm soát chất lượng, tiến độ và chi phí ngay từ gốc.
                                </p>
                                <p className="mt-3 mt-md-0 wow slideUp" data-delay=".5">
                                    Được thành lập vào năm 2010, là một công ty sản xuất phân bón và thuốc bảo vệ thực vật ứng dụng công nghệ nano.
                                    Sản phẩm đa dạng, đáp ứng đa dạng nhu cầu thị trường.
                                </p>
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
                </div>
            </div>
        </section>

    )
}

export default AboutTwo