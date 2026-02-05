import type { FC } from "react"
import { NanoIcon } from "@/lib/icons"
import SectionTitle from "../ui/sectionTitle"
import { offerItems } from "@/db/homePageData"

const pngIcons: Record<number, { green: string; white: string }> = {
    1: { green: "/img_quangminh/icon/phanbonhat_green.png", white: "/img_quangminh/icon/phanbonhat_white.png" },
    2: { green: "/img_quangminh/icon/phanbonbot_green.png", white: "/img_quangminh/icon/phanbonbot_white.png" },
    3: { green: "/img_quangminh/icon/phanbonnuoc_green.png", white: "/img_quangminh/icon/phanbonnuoc_white.png" },
    4: { green: "/img_quangminh/icon/phanbonhuuco_green.png", white: "/img_quangminh/icon/phanbonhuuco_white.png" },
    5: { green: "/img_quangminh/icon/thuocbvtv_green.png", white: "/img_quangminh/icon/thuocbvtv_white.png" },
    6: { green: "/img_quangminh/icon/nano_green.png", white: "/img_quangminh/icon/nano_white.png" },
}
const svgIconMap: Record<number, FC> = { 6: NanoIcon }

const scrollToContact = () => {
    const el = document.getElementById("lien-he")
    el?.scrollIntoView({ behavior: "smooth", block: "start" })
}

const Offer = () => {
    return (
        <section className="offer-section fix section-bg-2 section-padding">
            <div className="line-shape">
                <img src="/img/team/line-shape.png" alt="shape-img" />
            </div>
            <div className="mask-shape">
                <img src="/img/team/mask-shape.png" alt="shape-img" />
            </div>
            <div className="container">
                <SectionTitle className="text-center">
                    <SectionTitle.SubTitle className="text-white">Sản phẩm đa dạng</SectionTitle.SubTitle>
                    <SectionTitle.Title className="text-white">Phân bón & thuốc BVTV <br />theo công nghệ nano</SectionTitle.Title>
                </SectionTitle>
                <div className="row">
                    {offerItems.map((item) => (
                        <div
                            key={item.id}
                            className={`col-xl-2 col-lg-4 col-md-4 col-sm-6 wow slideUp `}
                            data-delay={item.delay}
                        >
                            <button
                                type="button"
                                className={`offer-items offer-items--clickable ${item.isActive ? 'active' : ''}`}
                                onClick={scrollToContact}
                                aria-label={`${item.title} - Chuyển đến phần liên hệ`}
                            >
                                <div className="shape-top">
                                    <img src="/img/shape/offer-top.png" alt="shape-img" />
                                </div>
                                <div className="shape-bottom">
                                    <img src="/img/shape/offer-bottom.png" alt="shape-img" />
                                </div>
                                <div className={`icon ${pngIcons[item.id as number] ? "icon--png" : ""}`}>
                                    {pngIcons[item.id as number] ? (
                                        <>
                                            <img src={pngIcons[item.id as number].green} alt="" className="icon-default" aria-hidden />
                                            <img src={pngIcons[item.id as number].white} alt="" className="icon-hover" aria-hidden />
                                        </>
                                    ) : (() => {
                                        const Icon = svgIconMap[item.id as number]
                                        return Icon ? <Icon /> : null
                                    })()}
                                </div>
                                <div className="content">
                                    <h5>{item.title}</h5>
                                </div>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    )
}

export default Offer