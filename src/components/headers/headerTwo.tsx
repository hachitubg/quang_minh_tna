import { Link } from "react-router-dom"
import TopHeaderOne from "./topHeaderOne"
import Navbar from "./navbar"
import SearchPopup from "./searchPopup"
import useSticky from "@/hooks/useSticky"
import ExtraInfoOffcanvas from "./extraInfoOffcanvas"
import { companyInfo } from "@/config/companyInfo"

const HeaderTwo = () => {
    const [isSticky] = useSticky()
    return (
        <header className="header-section-2">
            <TopHeaderOne className="top-style-2" wrapperClass="style-2" />
            <div id="header-sticky" className={`header-2 ${isSticky ? 'sticky' : ''}`}>
                <div className="main-logo">
                    <Link to="/">
                        <img src={companyInfo.logo} alt={`${companyInfo.shortName} - Logo`} style={{ maxHeight: '100px' }} />
                    </Link>
                </div>
                <div className="container-fluid">
                    <div className="mega-menu-wrapper">
                        <div className="header-main">
                            <div className="logo d-none">
                                <Link to="/" className="header-logo">
                                    <img height={80} width={150} src="/img_quangminh/logo_quang_minh_tna.png" alt="logo-img" />
                                </Link>
                            </div>
                            <div className="header-left">
                                <div className="mean__menu-wrapper d-lg-block d-none">
                                    <div className="main-menu">
                                        <nav id="mobile-menu">
                                            <Navbar />
                                        </nav>
                                    </div>
                                </div>
                            </div>
                            <div className="header-right d-flex justify-content-end align-items-center">
                                <SearchPopup />
                                <div className="header-button">
                                    <Link to="/ho-tro-khach-hang" className="theme-btn">
                                        <span>
                                            Hỗ trợ khách hàng
                                            <i className="fa-solid fa-arrow-right-long" />
                                        </span>
                                    </Link>
                                </div>
                                <div className="header__hamburger d-lg-none my-auto">
                                    <ExtraInfoOffcanvas />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

    )
}

export default HeaderTwo