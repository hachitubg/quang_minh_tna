import { useState, useEffect } from "react"
import PageTitle from "@/components/sections/pageTitle"
import WorkProcessCarousel from "@/components/sections/workProcess/WorkProcessCarousel"
import SectionTitle from "@/components/ui/sectionTitle"
import { quyTrinhSanXuatData, sanPhamData } from "@/db/gioiThieuData"
import { Link } from "react-router-dom"

/**
 * Trang Giới thiệu - Quy trình sản xuất & gia công trọn gói
 * Quang Minh TNA
 */
const GioiThieu = () => {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)

  useEffect(() => {
    if (lightboxImage) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [lightboxImage])

  return (
    <>
      <PageTitle title="Giới thiệu" currentPage="Giới thiệu" />

      <div className="about-page-wrapper">
        <div className="left-shape">
          <img src="/img/project/left-shape.png" alt="shape-img" />
        </div>
        <div className="right-shape">
          <img src="/img/project/right-shape.png" alt="shape-img" />
        </div>

        {/* Giới thiệu tổng quan - layout about-wrapper-2 style-2 */}
        <section className="about-section about-page-section fix section-padding">
          <div className="circle-shape about-shape about-shape-1">
            <img src="/img/about/circle.png" alt="shape-img" />
          </div>
          <div className="circle-shape about-shape about-shape-2">
            <img src="/img/about/circle.png" alt="shape-img" />
          </div>
          <div className="circle-shape about-shape about-shape-3">
            <img src="/img/about/circle.png" alt="shape-img" />
          </div>
          <div className="container">
          <div className="about-wrapper-2 style-2">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="about-image-items about-image-items--triple">
                  <div className="about-image-2 wow slideUp" data-delay=".5">
                    <img src="/img_quangminh/cong_nghe_loi_01.jpg" alt="Công nghệ lõi - Dây chuyền sản xuất Quang Minh TNA" />
                  </div>
                  <div className="about-image-1 bg-cover wow slideLeft" data-delay=".3" style={{ backgroundImage: 'url("/img_quangminh/cong_nghe_loi_03.jpg")' }} aria-hidden />
                  <div className="about-image-3 bg-cover wow slideRight" data-delay=".4" style={{ backgroundImage: 'url("/img_quangminh/cong_nghe_loi_02.jpg")' }} aria-hidden />
                </div>
              </div>
              <div className="col-lg-6 mt-4 mt-lg-0">
                <div className="about-content">
                  <SectionTitle>
                    <SectionTitle.SubTitle>Về Quang Minh TNA</SectionTitle.SubTitle>
                    <SectionTitle.Title>Gia công trọn gói từ A–Z</SectionTitle.Title>
                  </SectionTitle>
                  <p className="mt-3 mt-md-0 about-animate about-animate-delay-1">
                    Nhà máy Quang Minh TNA triển khai mô hình gia công khép kín, bao gồm đầy đủ các bước từ tư vấn định hướng sản phẩm đến thiết kế bao bì – nhãn mác chuyên nghiệp.
                  </p>
                  <p className="about-animate about-animate-delay-2">
                    Doanh nghiệp chỉ cần đưa ý tưởng, Quang Minh TNA triển khai trọn gói từ A–Z, giúp rút ngắn tối đa thời gian ra thị trường.
                  </p>
                  <div className="icon-area about-animate about-animate-delay-3">
                    <ul className="list">
                      <li><i className="fa-regular fa-circle-check" />Tư vấn định hướng sản phẩm</li>
                      <li><i className="fa-regular fa-circle-check" />Thiết kế bao bì – nhãn mác</li>
                      <li><i className="fa-regular fa-circle-check" />Gia công khép kín từ A–Z</li>
                    </ul>
                    <ul className="list">
                      <li><i className="fa-regular fa-circle-check" />Dây chuyền công nghệ châu Âu</li>
                      <li><i className="fa-regular fa-circle-check" />Hệ thống nghiền nano</li>
                      <li><i className="fa-regular fa-circle-check" />Đối tác 20+ thương hiệu</li>
                    </ul>
                  </div>
                  <div className="about-button about-animate about-animate-delay-4">
                    <Link to="/ho-tro-khach-hang" className="theme-btn">
                      Yêu cầu tư vấn
                      <i className="fa-solid fa-arrow-right-long" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

        {/* Quy trình sản xuất 7 bước - Carousel style project */}
        <WorkProcessCarousel
          data={quyTrinhSanXuatData}
          subTitle="Quy trình gia công"
          title="7 bước gia công trọn gói"
        />

        {/* Sản phẩm đa dạng */}
        <section id="san-pham" className="about-page-products section-padding fix pt-0 pb-0">
          <div className="container">
            <SectionTitle className="text-center">
              <SectionTitle.SubTitle>Sản phẩm</SectionTitle.SubTitle>
              <SectionTitle.Title>Nhà máy đáp ứng đa dạng sản phẩm</SectionTitle.Title>
            </SectionTitle>
            <div className="row g-4 mt-4">
              {sanPhamData.map((item, index) => (
                <div key={index} className="col-lg-4 col-md-6">
                  <div className="service-box-items style-2 p-4 h-100 support-box">
                    <div className="content">
                      <h4>{item.title}</h4>
                      <p className="mb-0">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-48">
              <Link to="/ho-tro-khach-hang" className="theme-btn">
                Yêu cầu tư vấn
                <i className="fa-solid fa-arrow-right-long" />
              </Link>
            </div>
          </div>
        </section>

        {/* Pháp lý & Chứng nhận */}
        <section id="phap-ly" className="about-page-legal section-padding fix">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <SectionTitle className="text-center">
                  <SectionTitle.SubTitle>Pháp lý</SectionTitle.SubTitle>
                  <SectionTitle.Title>Pháp lý & Chứng nhận</SectionTitle.Title>
                </SectionTitle>
                <p className="text-center mb-5">
                  Công ty TNHH Quang Minh TNA có đầy đủ giấy tờ pháp lý và chứng nhận đủ điều kiện sản xuất phân bón, chế phẩm diệt côn trùng – diệt khuẩn theo quy định hiện hành. Sản xuất hợp pháp, hồ sơ minh bạch.
                </p>

                <div className="row g-4">
                  <div className="col-lg-6">
                    <div className="service-box-items style-2 p-4 h-100 support-box">
                      <div className="content">
                        <div
                          className="legal-cert-image mb-3"
                          role="button"
                          tabIndex={0}
                          onClick={() => setLightboxImage("/img_quangminh/giay_phep_1.png")}
                          onKeyDown={(e) => e.key === "Enter" && setLightboxImage("/img_quangminh/giay_phep_1.png")}
                          title="Nhấn để xem phóng to"
                        >
                          <img src="/img_quangminh/giay_phep_1.png" alt="Giấy chứng nhận đủ điều kiện sản xuất phân bón - Cục Bảo vệ thực vật" className="img-fluid rounded" />
                        </div>
                        <h4>1. Giấy chứng nhận đủ điều kiện sản xuất phân bón</h4>
                        <ul className="list-unstyled small mb-0 mt-3">
                          <li><strong>Cơ quan ban hành:</strong> Bộ Nông nghiệp và Phát triển nông thôn, Cục Bảo vệ thực vật.</li>
                          <li><strong>Số:</strong> 0855/GCN-BVTV-PB.</li>
                          <li><strong>Ngày cấp:</strong> 11/04/2024.</li>
                          <li><strong>Hình thức:</strong> Sản xuất phân bón và dòng gởi phân bón.</li>
                          <li><strong>Tổng công suất:</strong> 900 tấn/năm (phân vô cơ 500 tấn/năm, phân hữu cơ 200 tấn/năm, phân sinh học 200 tấn/năm).</li>
                          <li><strong>Thời hạn:</strong> 11/04/2024 – 10/04/2029.</li>
                          <li><strong>Người ký:</strong> Cục trưởng Huỳnh Tấn Đạt.</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="service-box-items style-2 p-4 h-100 support-box">
                      <div className="content">
                        <div
                          className="legal-cert-image mb-3"
                          role="button"
                          tabIndex={0}
                          onClick={() => setLightboxImage("/img_quangminh/giay_phep_2.png")}
                          onKeyDown={(e) => e.key === "Enter" && setLightboxImage("/img_quangminh/giay_phep_2.png")}
                          title="Nhấn để xem phóng to"
                        >
                          <img src="/img_quangminh/giay_phep_2.png" alt="Thông báo đủ điều kiện sản xuất chế phẩm diệt côn trùng, diệt khuẩn - Sở Y tế Nam Định" className="img-fluid rounded" />
                        </div>
                        <h4>2. Thông báo đủ điều kiện sản xuất chế phẩm diệt côn trùng, diệt khuẩn</h4>
                        <ul className="list-unstyled small mb-0 mt-3">
                          <li><strong>Cơ quan ban hành:</strong> UBND tỉnh Nam Định, Sở Y tế.</li>
                          <li><strong>Số thông báo:</strong> 2452/TB-SYT.</li>
                          <li><strong>Ngày thông báo:</strong> 20/12/2023.</li>
                          <li><strong>Căn cứ:</strong> Nghị định 91/2016/NĐ-CP và Nghị định 155/2018/NĐ-CP.</li>
                          <li><strong>Nội dung:</strong> Công bố đủ điều kiện sản xuất chế phẩm diệt côn trùng, diệt khuẩn dùng trong gia dụng và y tế.</li>
                          <li><strong>Người đứng đầu cơ sở:</strong> Lê Quang Hiếu.</li>
                          <li><strong>Người ký:</strong> KT. Giám đốc – Phó Giám đốc Khương Thành Vinh.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 p-4 service-box-items style-2 support-box">
                  <div className="content">
                    <p className="mb-0 small">
                      <strong>Thông tin đơn vị:</strong> Công ty TNHH Quang Minh TNA · Mã số doanh nghiệp: 0601247717<br />
                      Trụ sở: Số 25 Bùi Tân, phường Lộc Vượng, TP Nam Định, tỉnh Nam Định · Địa chỉ sản xuất: Xóm 9, xã Tân Thành, huyện Vụ Bản, tỉnh Nam Định<br />
                      Liên hệ: 0918 428 566 · quangminhtna@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Lightbox xem ảnh giấy phép phóng to */}
      {lightboxImage && (
        <div
          className="legal-image-lightbox"
          onClick={() => setLightboxImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Xem ảnh phóng to"
        >
          <button
            type="button"
            className="legal-image-lightbox-close"
            onClick={() => setLightboxImage(null)}
            aria-label="Đóng"
          >
            <i className="fa-solid fa-times" />
          </button>
          <div className="legal-image-lightbox-inner" onClick={(e) => e.stopPropagation()}>
            <img src={lightboxImage} alt="Giấy phép chứng nhận" />
          </div>
        </div>
      )}
    </>
  )
}

export default GioiThieu
