import { workProcessData } from "@/db/workProcessData"
import SectionTitle from "../ui/sectionTitle"

type ProcessItem = { id: number; icon: string; title: string; description: string; style?: string }

export type WorkProcessProps = {
    data?: ProcessItem[]
    subTitle?: string
    title?: string
    verticalOnDesktop?: boolean
}

const WorkProcess = ({ data = workProcessData, subTitle = "Our Process", title = "Our Work Process", verticalOnDesktop = false }: WorkProcessProps) => {
    const colClass = verticalOnDesktop ? "col-12" : "col-xl-3 col-lg-4 col-md-6"
    const itemFlexClass = verticalOnDesktop ? "flex-column" : (index: number) => index % 2 === 0 ? 'flex-column' : 'flex-xl-column-reverse flex-column'
    return (
        <section className="work-process-section fix section-padding pt-0">
            <div className="container">
                <SectionTitle className="text-center">
                    <SectionTitle.SubTitle>{subTitle}</SectionTitle.SubTitle>
                    <SectionTitle.Title>{title}</SectionTitle.Title>
                </SectionTitle>
                <div className={`process-work-wrapper ${verticalOnDesktop ? "process-work-wrapper--vertical" : ""}`}>
                    {!verticalOnDesktop && (
                        <div className="line-shape">
                            <img src="/img/process/linepng.png" alt="img" />
                        </div>
                    )}
                    <div className="row">
                        {data.map((process, index) => (
                            <div key={process.id} className={colClass}>
                                <div className={`work-process-items text-center d-flex ${verticalOnDesktop ? 'work-process-items--vertical' : ''} ${typeof itemFlexClass === 'function' ? itemFlexClass(index) : itemFlexClass}`}>
                                    <div className="icon">
                                        <img width={50} height={50} src={process.icon} alt="img" />
                                        <h6 className="number">{process.id}</h6>
                                    </div>
                                    <div className={`content ${process.style || ''}`}>
                                        <h4>{process.title}</h4>
                                        <p>{process.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WorkProcess