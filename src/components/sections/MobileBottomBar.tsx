import { Link } from "react-router-dom"
import { companyInfo } from "@/config/companyInfo"

const items = [
  {
    label: "Gọi tổng đài",
    href: companyInfo.contact.phoneLink,
    icon: "fa-solid fa-phone",
    external: false,
  },
  {
    label: "Gửi hỗ trợ",
    to: "/ho-tro-khach-hang",
    icon: "fa-solid fa-headset",
  },
  {
    label: "Liên hệ",
    href: companyInfo.social.zalo,
    icon: "fa-solid fa-comment-dots",
    external: true,
  },
]

const MobileBottomBar = () => {
  return (
    <div className="mobile-bottom-bar">
      <div className="mobile-bottom-bar__inner">
        {items.map((item, index) => (
          <div key={index} className="mobile-bottom-bar__item">
            {"to" in item && item.to ? (
              <Link to={item.to} className="mobile-bottom-bar__btn">
                <i className={item.icon} />
                <span>{item.label}</span>
              </Link>
            ) : (
              <a
                href={"href" in item ? item.href : "#"}
                className="mobile-bottom-bar__btn"
                target={"external" in item && item.external ? "_blank" : undefined}
                rel={"external" in item && item.external ? "noopener noreferrer" : undefined}
              >
                <i className={item.icon} />
                <span>{item.label}</span>
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default MobileBottomBar
