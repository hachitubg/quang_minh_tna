const LOGO_SRC = "/img_quangminh/logo_quang_minh_tna.png";
const BRAND_TEXT = "Quang Minh TNA";
const PAIRS = 8; // Số cặp logo + chữ mỗi lượt (logo, chữ, logo, chữ...)

const MarqueThree = () => {
    const items = Array.from({ length: PAIRS * 2 }, (_, i) =>
        i % 2 === 0 ? (
            <span key={i} className="marquee-logo-item">
                <img src={LOGO_SRC} alt={BRAND_TEXT} />
            </span>
        ) : (
            <span key={i} className="marquee-text-item">{BRAND_TEXT}</span>
        )
    );

    return (
        <div className="marque-section-2 section-padding pt-0">
            <div className="container-fluid">
                <div className="marquee-wrapper style-2 marquee-logo">
                    <div className="marquee-inner to-left">
                        <ul className="marqee-list d-flex">
                            <li className="marquee-item style-2 marquee-item--logo">{items}</li>
                        </ul>
                        <ul className="marqee-list d-flex">
                            <li className="marquee-item style-2 marquee-item--logo">{items}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MarqueThree