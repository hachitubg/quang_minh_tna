import { servicesTwoData } from "@/db/servicesTwoData"
import ServiceCard from "./serviceCard"
import SectionTitle from "@/components/ui/sectionTitle"

const ServicesTwo = () => {
    return (
        <section id="services" className="service-section-2 fix section-padding pb-0">
            <div className="container">
                <SectionTitle className="text-center">
                    <SectionTitle.SubTitle>Sản phẩm của chúng tôi</SectionTitle.SubTitle>
                    <SectionTitle.Title>Đa dạng phân bón & thuốc bảo vệ<br /> thực vật</SectionTitle.Title>
                </SectionTitle>
                <div className="row">
                    {servicesTwoData.map((service) => (
                        <div
                            key={service.id}
                            className={`col-xl-3 col-lg-6 col-md-6 wow slideUp`}
                            data-delay={service.delay}
                        >
                            <ServiceCard service={service} className={`style-2 ${service.active ? 'active' : ''}`} />
                        </div>
                    ))}
                </div>
            </div>
        </section>

    )
}

export default ServicesTwo