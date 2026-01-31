import { Link } from "react-router-dom"
import ExtraInfoOffcanvas from "./extraInfoOffcanvas"
import Navbar from "./navbar"
import SearchPopup from "./searchPopup"
import TopHeaderOne from "./topHeaderOne"
import useSticky from "@/hooks/useSticky"
import { companyInfo } from "@/config/companyInfo"

const HeaderOne = () => {
    const [isSticky] = useSticky()
    return (
        <header>
            <TopHeaderOne />
            <div id="header-sticky" className={`header-1 ${isSticky ? 'sticky' : ''} `}>
                <div className="container-fluid">
                    <div className="mega-menu-wrapper">
                        <div className="header-main style-2">
                            <div className="header-left">
                                <div className="logo">
                                    <Link to="/" className="header-logo">
                                        <img src={companyInfo.logo} alt={`${companyInfo.shortName} - Logo`} style={{ maxHeight: '50px' }} />
                                    </Link>
                                </div>
                            </div>
                            <div className="header-right d-flex justify-content-end align-items-center">
                                <div className="mean__menu-wrapper d-lg-block d-none">
                                    <div className="main-menu">
                                        <nav id="mobile-menu">
                                            <Navbar />
                                        </nav>
                                    </div>
                                </div>
                                <SearchPopup />
                                <div className="header-button">
                                    <Link to="/ho-tro-khach-hang" className="theme-btn">
                                        <span>
                                            Hỗ trợ khách hàng {' '}
                                            <i className="fa-solid fa-arrow-right-long" />
                                        </span>
                                    </Link>
                                </div>
                                <div className="header__hamburger d-xl-block my-auto">
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

export default HeaderOne