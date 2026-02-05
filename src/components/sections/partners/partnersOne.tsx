import { partnetsOneData } from "@/db/partnersOneData"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import "swiper/css"

const PartnersOne = ({ className }: { className?: string }) => {
    return (
        <div className={`brand-section fix section-padding ${className ?? ""}`}>
            <div className="container">
                <div className="brand-wrapper brand-wrapper--partners">
                    <h6 className="brand-wrapper__title wow slideUp" data-delay=".3">
                        Các thương hiệu hợp tác
                    </h6>
                    <Swiper
                        breakpoints={{
                            1199: { slidesPerView: 5 },
                            991: { slidesPerView: 4 },
                            767: { slidesPerView: 3 },
                            575: { slidesPerView: 2 },
                            0: { slidesPerView: 1 },
                        }}
                        spaceBetween={40}
                        speed={1200}
                        centeredSlides
                        loop
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay]}
                        className="brand-wrapper__slider"
                    >
                        {partnetsOneData.map(({ id, img, name }) => (
                            <SwiperSlide key={id}>
                                <div className="brand-image">
                                    <img src={img} alt={`Logo ${name}`} loading="lazy" />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default PartnersOne