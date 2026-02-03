import { Link } from "react-router-dom"

const HomeContactOne = () => {
    return (
        <div id="lien-he" className="contact-section-21 section-padding section-bg">
            <div className="contact-image-2">
                <img src="/img_quangminh/4.jpg" alt="img" />
            </div>
            <div className="contact-wrapper-21">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6" />
                        <div className="col-xl-6 col-lg-8">
                            <div className="contact-content">
                                <div className="section-title">
                                    <span className="wow slideUp" style={{ visibility: 'visible' }}>Liên hệ ngay</span>
                                    <h2 className="wow slideUp" data-delay=".3" style={{ visibility: 'visible', animationDelay: '0.3s' }}>Hỗ trợ khách hàng <br /> & đối tác</h2>
                                </div>
                                <form action="#" id="contact-form" method="POST" className="mt-4 mt-md-0">
                                    <div className="row g-4">
                                        <div className="col-lg-6 wow slideUp" data-delay=".3" style={{ visibility: 'visible', animationDelay: '0.3s' }}>
                                            <div className="form-clt">
                                                <input type="text" name="name" id="name" placeholder="Họ và tên" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 wow slideUp" data-delay=".5" style={{ visibility: 'visible', animationDelay: '0.5s' }}>
                                            <div className="form-clt">
                                                <input type="text" name="email" id="email" placeholder="Email" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 wow slideUp" data-delay=".3" style={{ visibility: 'visible', animationDelay: '0.3s' }}>
                                            <div className="form-clt">
                                                <input type="text" name="phone" id="phone" placeholder="Số điện thoại" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 wow slideUp" data-delay=".5" style={{ visibility: 'visible', animationDelay: '0.5s' }}>
                                            <div className="form-clt">
                                                <input type="text" name="subject" id="subject" placeholder="Chủ đề" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 wow slideUp" data-delay=".3" style={{ visibility: 'visible', animationDelay: '0.3s' }}>
                                            <div className="form-clt">
                                                <textarea name="message" id="message" placeholder="Nội dung yêu cầu hỗ trợ" defaultValue={""} />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 wow slideUp" data-delay=".5" style={{ visibility: 'visible', animationDelay: '0.5s' }}>
                                            <Link to="/ho-tro-khach-hang" className="theme-btn">
                                                Gửi yêu cầu <i className="far fa-long-arrow-right" />
                                            </Link>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default HomeContactOne