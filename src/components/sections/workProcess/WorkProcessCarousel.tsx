import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import { Autoplay, Pagination } from "swiper/modules"
import SectionTitle from "@/components/ui/sectionTitle"
import { Link } from "react-router-dom"

export type ProcessItem = {
  id: number
  icon: string
  title: string
  description: string
  style?: string
}

const STEP_IMAGES = [
  "/img_quangminh/may nghien nano.jpg",
  "/img_quangminh/may nghien nano 2.jpg",
  "/img_quangminh/may nghien nano.jpg",
  "/img_quangminh/may nghien nano 2.jpg",
  "/img_quangminh/may nghien nano.jpg",
  "/img_quangminh/may nghien nano 2.jpg",
  "/img_quangminh/may nghien nano.jpg",
]

export type WorkProcessCarouselProps = {
  data: ProcessItem[]
  subTitle?: string
  title?: string
}

const WorkProcessCarousel = ({
  data,
  subTitle = "Quy trình gia công",
  title = "7 bước gia công trọn gói",
}: WorkProcessCarouselProps) => {
  return (
    <section id="quy-trinh-7-buoc" className="work-process-carousel project-section section-padding pt-0 fix">
      <div className="container">
        <SectionTitle className="text-center">
          <SectionTitle.SubTitle>{subTitle}</SectionTitle.SubTitle>
          <SectionTitle.Title>{title}</SectionTitle.Title>
        </SectionTitle>
      </div>
      <Swiper
        className="work-process-swiper"
        spaceBetween={30}
        speed={800}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          el: ".work-process-dot",
          clickable: true,
        }}
        breakpoints={{
          1199: { slidesPerView: 3 },
          991: { slidesPerView: 2 },
          767: { slidesPerView: 2 },
          575: { slidesPerView: 1 },
          0: { slidesPerView: 1 },
        }}
        modules={[Autoplay, Pagination]}
      >
        {data.map((step, index) => (
          <SwiperSlide key={step.id}>
            <div className="project-items">
              <div className="project-image">
                <img
                  src={STEP_IMAGES[index] ?? STEP_IMAGES[0]}
                  alt={`Bước ${step.id} - ${step.title}`}
                />
                <div className="project-content">
                  <p>Bước {step.id}</p>
                  <h4>{step.title}</h4>
                  <p className="work-process-step-desc">{step.description}</p>
                  <Link to="/ho-tro-khach-hang" className="icon" aria-label="Tư vấn">
                    <i className="fa-solid fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-dot-2">
          <div className="work-process-dot" />
        </div>
      </Swiper>
    </section>
  )
}

export default WorkProcessCarousel
