import { faqData } from "@/db/faqData"
import SectionTitle from "../ui/sectionTitle"

const FaqHomeOne = () => {
    return (
        <section className="faq-section fix section-padding">
            <div className="right-shape">
                <img src="/img/faq/right-shape.png" alt="shape-img" />
            </div>
            <div className="faq-shape-box">
                <div className="faq-shape">
                    <img src="/img/faq/shape.png" alt="shape-img" />
                </div>
            </div>
            <div className="container">
                <div className="faq-wrapper">
                    <div className="row g-4">
                        <div className="col-lg-6">
                            <div className="about-image-items about-image-items--triple faq-triple-images">
                                <div className="about-image-2 wow slideUp" data-delay=".5">
                                    <img src="/img_quangminh/cong_nghe_loi_01.jpg" alt="Công nghệ lõi - Dây chuyền sản xuất Quang Minh TNA" />
                                </div>
                                <div
                                    className="about-image-1 bg-cover wow slideLeft"
                                    data-delay=".3"
                                    aria-hidden
                                    style={{ backgroundImage: 'url("/img_quangminh/cong_nghe_loi_02.jpg")' }}
                                />
                                <div
                                    className="about-image-3 bg-cover wow slideRight"
                                    data-delay=".4"
                                    aria-hidden
                                    style={{ backgroundImage: 'url("/img_quangminh/day_chuyen_san_xuat.png")' }}
                                />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="faq-content">
                                <SectionTitle>
                                    <SectionTitle.SubTitle>Tại sao chọn chúng tôi</SectionTitle.SubTitle>
                                    <SectionTitle.Title>Công nghệ lõi & lợi ích nano</SectionTitle.Title>
                                </SectionTitle>
                                <div className="faq-accordion mt-4 mt-md-0">
                                    <div className="accordion" id="accordion">
                                        {faqData.map((faq) => (
                                            <div className="accordion-item mb-3 wow slideUp" data-delay={faq.delay} key={faq.id}>
                                                <h5 className="accordion-header">
                                                    <button
                                                        className={`accordion-button ${faq.isOpen ? '' : 'collapsed'}`}
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target={`#${faq.id}`}
                                                        aria-expanded={faq.isOpen}
                                                        aria-controls={faq.id}
                                                    >
                                                        {faq.question}
                                                    </button>
                                                </h5>
                                                <div id={faq.id} className={`accordion-collapse collapse ${faq.isOpen ? 'show' : ''}`} data-bs-parent="#accordion">
                                                    <div className="accordion-body">
                                                        {(typeof faq.answer === 'string' && faq.answer.includes(' + ')
                                                            ? faq.answer.split(/\s*\+\s*/).filter(Boolean)
                                                            : [faq.answer]
                                                        ).map((item: string, idx: number) => (
                                                            <div key={idx} className="faq-answer-item d-flex align-items-start gap-2 mb-2">
                                                                <span className="faq-answer-icon flex-shrink-0 mt-1" aria-hidden>
                                                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M15 4.5L6.75 12.75L3 9" stroke="#77B80F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                                    </svg>
                                                                </span>
                                                                <span className="faq-answer-text">{item.trim()}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default FaqHomeOne