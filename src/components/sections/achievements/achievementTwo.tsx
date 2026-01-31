import SectionTitle from "@/components/ui/sectionTitle";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { achievementData } from "@/db/homePageData";

const AchievementTwo = ({ achievementWrapperClass, className }: { achievementWrapperClass?: string, className?: string }) => {
    const { ref, inView } = useInView({
        threshold: 1,
        triggerOnce: true
    });
    return (
        <section className={`achievement-section-2 fix ${className}`}>
            <div className="container">
                <div className={`achievement-wrapper ${achievementWrapperClass}`}>
                    <SectionTitle className="mb-0">
                        <SectionTitle.SubTitle className="text-white">Năng lực sản xuất</SectionTitle.SubTitle>
                        <SectionTitle.Title className="text-white">Con số ấn tượng của Quang Minh TNA</SectionTitle.Title>
                    </SectionTitle>
                    <div className="counter-area" ref={ref}>
                        {achievementData.map((item) => (
                            <div
                                key={item.id}
                                className="counter-items wow slideUp"
                                data-delay={item.delay}
                            >
                                <div className="icon">
                                    <img src={item.icon} alt="icon-img" />
                                </div>
                                <div className="content">
                                    {
                                        inView &&
                                        <h2>
                                            <span className="count"><CountUp end={item.count} /></span>+
                                        </h2>
                                    }
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

    )
}

export default AchievementTwo