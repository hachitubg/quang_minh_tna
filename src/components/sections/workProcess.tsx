import { workProcessData } from "@/db/workProcessData"
import SectionTitle from "../ui/sectionTitle"

type ProcessItem = { id: number; icon: string; title: string; description: string; style?: string }

export type WorkProcessProps = {
    data?: ProcessItem[]
    subTitle?: string
    title?: string
    verticalOnDesktop?: boolean
    sectionId?: string
}

const WorkProcess = ({ data = workProcessData, subTitle = "Our Process", title = "Our Work Process", verticalOnDesktop = false, sectionId }: WorkProcessProps) => {
    const colClass = verticalOnDesktop ? "col-12" : "col-xl-4 col-lg-4 col-md-6 p-3"
    const wrapperMod = verticalOnDesktop ? "process-work-wrapper--vertical" : "process-work-wrapper--grid"
    return (
        <section id={sectionId} className="work-process-section fix section-padding pt-0">
            <div className="circle-shape about-shape about-shape-1">
                <img src="/img/about/circle.png" alt="" />
            </div>
            <div className="circle-shape about-shape about-shape-2">
                <img src="/img/about/circle.png" alt="" />
            </div>
            <div className="container">
                <SectionTitle className="text-center">
                    <SectionTitle.SubTitle>{subTitle}</SectionTitle.SubTitle>
                    <SectionTitle.Title>{title}</SectionTitle.Title>
                </SectionTitle>
                <div className={`process-work-wrapper ${wrapperMod}`}>
                    <div className="row">
                        {data.map((process, index) => {
                            const isLastAndOdd = data.length === 7 && index === 6
                            const col = isLastAndOdd ? `${colClass} offset-xl-4 offset-lg-4 offset-md-3` : colClass
                            return (
                            <div key={process.id} className={col}>
                                <div className={`work-process-items text-center d-flex flex-column ${verticalOnDesktop ? "work-process-items--vertical" : ""}`}>
                                    <div className="icon">
                                        <img width={50} height={50} src={process.icon} alt="" />
                                        <h6 className="number">{process.id}</h6>
                                    </div>
                                    <div className="content">
                                        <h4>{process.title}</h4>
                                        <p>{process.description}</p>
                                    </div>
                                </div>
                            </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WorkProcess