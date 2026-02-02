import { useState } from 'react';
import { Link } from 'react-router-dom';
import { companyInfo } from '@/config/companyInfo';
import MobileMenuList from './mobileNavBar';

const ExtraInfoOffcanvas = () => {
    const [isInfoOpen, setInfoOpen] = useState(false);

    const toggleOffcanvas = () => {
        setInfoOpen(!isInfoOpen);
    };

    return (
        <>
            <div className="sidebar__toggle" onClick={toggleOffcanvas}>
                <i className="fas fa-bars" />
            </div>
            <div className="fix-area">
                <div className={`offcanvas__info ${isInfoOpen ? 'info-open' : ''}`}>
                    <div className="offcanvas__wrapper">
                        <div className="offcanvas__content">
                            <div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
                                <div className="offcanvas__logo">
                                    <Link to="/">
                                        <img height={80} width={150} src="/img_quangminh/logo_quang_minh_tna.png" alt="logo-img" />
                                    </Link>
                                </div>
                                <div className="offcanvas__close">
                                    <button onClick={toggleOffcanvas}>
                                        <i className="fas fa-times" />
                                    </button>
                                </div>
                            </div>
                            <MobileMenuList/>
                            <p className="text d-none d-lg-block">
                                {companyInfo.slogan}
                            </p>
                            <div className="mobile-menu fix mb-3" />
                            <div className="offcanvas__contact">
                                <div className="social-icon d-flex align-items-center">
                                    <a href={companyInfo.social.zalo} target="_blank" rel="noopener noreferrer" title="Zalo"><i className="fa-solid fa-phone" /></a>
                                    <a href={companyInfo.social.facebook} target="_blank" rel="noopener noreferrer" title="Facebook"><i className="fab fa-facebook-f" /></a>
                                    <a href={companyInfo.social.tiktok} target="_blank" rel="noopener noreferrer" title="TikTok"><i className="fa-brands fa-tiktok" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`offcanvas__overlay ${isInfoOpen ? 'overlay-open' : ''}`} onClick={toggleOffcanvas} />
        </>
    );
};

export default ExtraInfoOffcanvas;