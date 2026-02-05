import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { achievementData } from "@/db/homePageData";

const AchievementTwo = ({
    achievementWrapperClass = "style-2",
    className = "section-bg-2",
}: {
    achievementWrapperClass?: string;
    className?: string;
}) => {
    const { ref, inView } = useInView({
        threshold: 0.2,
        triggerOnce: true,
    });
    return (
        <section className={`achievement-section-2 fix ${className}`}>
            <div className="circle-shape achievement-shape achievement-shape-1">
                <img src="/img/about/circle.png" alt="shape-img" />
            </div>
            <div className="circle-shape achievement-shape achievement-shape-2">
                <img src="/img/about/circle.png" alt="shape-img" />
            </div>
            <div className="circle-shape achievement-shape achievement-shape-3">
                <img src="/img/about/circle.png" alt="shape-img" />
            </div>
            <div className="container">
                <div className={`achievement-wrapper ${achievementWrapperClass}`}>
                    <div className="section-title mb-0 pb-5">
                        <span className="wow slideUp text-white">Năng lực sản xuất</span>
                        <h2 className="wow slideUp text-white" data-delay=".3">
                            Con số ấn tượng của Quang Minh TNA
                        </h2>
                    </div>
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
                                    {inView && (
                                        <h2>
                                            <span className="count">
                                                <span>
                                                    <CountUp end={item.count} />
                                                </span>
                                            </span>
                                            +
                                        </h2>
                                    )}
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AchievementTwo