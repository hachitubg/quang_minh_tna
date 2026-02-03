import { Link } from 'react-router-dom'

/**
 * Nút Liên hệ floating ở góc phải màn hình (chỉ hiển thị trên PC)
 * Component này luôn hiển thị ở góc dưới bên phải màn hình
 */
const FloatingContactButton = () => {
    return (
        <div className="floating-contact-button d-none d-lg-block">
            <Link to="/lien-he" className="contact-btn">
                <div className="icon-wrapper">
                    <i className="fa-solid fa-headset"></i>
                </div>
                <span className="btn-text">Liên hệ</span>
            </Link>

            <style>{`
                .floating-contact-button {
                    position: fixed;
                    bottom: 30px;
                    right: 30px;
                    z-index: 999;
                }

                .floating-contact-button .contact-btn {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    background: linear-gradient(135deg, #4CAF50 0%, #45a049 100%);
                    color: #fff;
                    padding: 14px 24px;
                    border-radius: 50px;
                    text-decoration: none;
                    font-weight: 600;
                    font-size: 16px;
                    box-shadow: 0 8px 24px rgba(76, 175, 80, 0.4);
                    transition: all 0.3s ease;
                    position: relative;
                    overflow: hidden;
                }

                .floating-contact-button .contact-btn::before {
                    content: '';
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    width: 0;
                    height: 0;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.2);
                    transform: translate(-50%, -50%);
                    transition: width 0.5s, height 0.5s;
                }

                .floating-contact-button .contact-btn:hover::before {
                    width: 300px;
                    height: 300px;
                }

                .floating-contact-button .contact-btn:hover {
                    transform: translateY(-4px);
                    box-shadow: 0 12px 32px rgba(76, 175, 80, 0.5);
                }

                .floating-contact-button .icon-wrapper {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 32px;
                    height: 32px;
                    background: rgba(255, 255, 255, 0.2);
                    border-radius: 50%;
                    position: relative;
                    z-index: 1;
                }

                .floating-contact-button .icon-wrapper i {
                    font-size: 18px;
                    animation: pulse-icon 2s ease-in-out infinite;
                }

                .floating-contact-button .btn-text {
                    position: relative;
                    z-index: 1;
                    letter-spacing: 0.5px;
                }

                @keyframes pulse-icon {
                    0%, 100% {
                        transform: scale(1);
                    }
                    50% {
                        transform: scale(1.1);
                    }
                }

                /* Hiệu ứng ripple khi click */
                .floating-contact-button .contact-btn:active {
                    transform: translateY(-2px) scale(0.98);
                }

                /* Responsive - Ẩn trên tablet nhỏ hơn */
                @media (max-width: 991px) {
                    .floating-contact-button {
                        display: none !important;
                    }
                }
            `}</style>
        </div>
    )
}

export default FloatingContactButton
