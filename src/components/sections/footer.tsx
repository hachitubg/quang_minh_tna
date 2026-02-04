import { SuCallMessage, SuEmail, SuLocation } from "@/lib/icons";
import { Link } from "react-router-dom";
import { companyInfo } from "@/config/companyInfo";

const contactInfo = [
    {
        icon: <SuCallMessage />,
        label: "Hotline",
        value: companyInfo.contact.phoneDisplay,
        link: companyInfo.contact.phoneLink,
    },
    {
        icon: <SuEmail />,
        label: "Email",
        value: companyInfo.contact.emailDisplay,
        link: `mailto:${companyInfo.contact.email}`,
    },
    {
        icon: <SuLocation />,
        label: "Địa chỉ",
        value: companyInfo.contact.address,
    },
];

const quickLinks = [
    { text: "Trang chủ", link: "/" },
    { text: "Giới thiệu", link: "/gioi-thieu" },
    { text: "Hỗ trợ khách hàng", link: "/ho-tro-khach-hang" },
    { text: "Liên hệ", link: "/lien-he" },
];

const certificateLink = { text: "Giấy tờ chứng nhận của nhà máy", link: "/gioi-thieu#phap-ly" };

const Footer = () => {
    return (
        <footer className="footer-section footer-bg">
            <div className="container">
                <div className="contact-info-area">
                    {contactInfo.map((info, index) => (
                        <div
                            key={index}
                            className="contact-info-items wow slideUp"
                            data-delay={`${0.3 + index * 0.2}`}
                        >
                            <div className="icon">{info.icon}</div>
                            <div className="content">
                                <p>{info.label}</p>
                                <h3 style={{ fontSize: '16px' }}>
                                    {info.link ? (
                                        <Link to={info.link}>{info.value}</Link>
                                    ) : (
                                        info.value
                                    )}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="footer-widgets-wrapper">
                <div className="shape-1">
                    <img src="/img/footer-shape-1.png" alt="shape-img" />
                </div>
                <div className="container">
                    <div className="row">
                        <div
                            className="col-xl-3 col-lg-4 col-md-6 wow slideUp"
                            data-delay=".3"
                        >
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                    <Link to="/">
                                        <img src={companyInfo.logo} alt={`${companyInfo.shortName} - Logo`} style={{ maxHeight: '130px' }} />
                                    </Link>
                                </div>
                                <div className="footer-content">
                                    <p>{companyInfo.slogan}</p>
                                    <div className="social-icon d-flex align-items-center">
                                        <a href={companyInfo.social.zalo} target="_blank" rel="noopener noreferrer" title="Zalo">
                                            <i className="fa-solid fa-phone" />
                                        </a>
                                        <a href={companyInfo.social.facebook} target="_blank" rel="noopener noreferrer" title="Facebook">
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                        <a href={companyInfo.social.tiktok} target="_blank" rel="noopener noreferrer" title="TikTok">
                                            <i className="fa-brands fa-tiktok" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-xl-2 col-lg-4 col-md-6 ps-lg-5 wow slideUp"
                            data-delay=".5"
                        >
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                    <h3>Liên kết</h3>
                                </div>
                                <ul className="list-area">
                                    {quickLinks.map((link, index) => (
                                        <li key={index}>
                                            <Link to={link.link}>
                                                <i className="fa-solid fa-chevron-right" />
                                                {link.text}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div
                            className="col-xl-3 col-lg-4 col-md-6 ps-lg-5 wow slideUp"
                            data-delay=".5"
                        >
                            <div className="single-footer-widget style-margin">
                                <div className="widget-head">
                                    <h3>Chứng nhận</h3>
                                </div>
                                <ul className="list-area">
                                    <li>
                                        <Link to={certificateLink.link}>
                                            <i className="fa-solid fa-chevron-right" />
                                            {certificateLink.text}
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div
                            className="col-xl-4 col-lg-4 col-md-6 wow slideUp"
                            data-delay=".7"
                        >
                            <div className="single-footer-widget style-margin">
                                <div className="widget-head">
                                    <h3>Về chúng tôi</h3>
                                </div>
                                <div className="footer-content">
                                    <p>Nhà máy phân bón & thuốc BVTV công nghệ nano. Đối tác của hơn 20 thương hiệu toàn quốc.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom style-2">
                <div className="container">
                    <div className="footer-wrapper d-flex align-items-center justify-content-between">
                        <p className="wow slideLeft color-2" data-delay=".3">
                            © {new Date().getFullYear()} {companyInfo.name}. All rights reserved.
                        </p>
                        <ul className="footer-menu wow slideRight" data-delay=".5">
                            <li>
                                <Link to="/lien-he">Liên hệ</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <Link to="#" id="scrollUp" className="scroll-icon">
                    <i className="fa fa-arrow-up" />
                </Link>
            </div>
        </footer>
    );
};

export default Footer;