import { Link } from "react-router-dom"
import { companyInfo } from "@/config/companyInfo"

const TopHeaderOne = ({ wrapperClass, className }: { wrapperClass?: string, className?: string }) => {
    return (
        <div className={`header-top-section fix ${className}`}>
            <div className="container-fluid">
                <div className={`header-top-wrapper ${wrapperClass}`}>
                    <ul className="contact-list">
                        <li>
                            <i className="far fa-envelope" />
                            <Link to={`mailto:${companyInfo.contact.email}`} className="link">{companyInfo.contact.emailDisplay}</Link>
                        </li>
                        <li>
                            <i className="fa-solid fa-phone-volume" />
                            <Link to={companyInfo.contact.phoneLink}>{companyInfo.contact.phoneDisplay}</Link>
                        </li>
                    </ul>
                    <div className="top-right">
                        <div className="social-icon d-flex align-items-center">
                            <span>Theo dõi:</span>
                            {companyInfo.social.zalo && (
                                <a href={companyInfo.social.zalo} target="_blank" rel="noopener noreferrer" title="Zalo">
                                    <i className="fa-solid fa-phone" />
                                </a>
                            )}
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
        </div>
    )
}

export default TopHeaderOne