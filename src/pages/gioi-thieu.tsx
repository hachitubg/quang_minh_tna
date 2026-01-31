import PageTitle from "@/components/sections/pageTitle"
import WorkProcess from "@/components/sections/workProcess"
import SectionTitle from "@/components/ui/sectionTitle"
import { quyTrinhSanXuatData, sanPhamData } from "@/db/gioiThieuData"
import { Link } from "react-router-dom"

/**
 * Trang Giới thiệu - Quy trình sản xuất & gia công trọn gói
 * Quang Minh TNA
 */
const GioiThieu = () => {
  return (
    <>
      <PageTitle title="Giới thiệu" currentPage="Giới thiệu" />

      {/* Giới thiệu tổng quan */}
      <section className="section-padding fix">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="text-center mb-5">
                <SectionTitle>
                  <SectionTitle.SubTitle>Về Quang Minh TNA</SectionTitle.SubTitle>
                  <SectionTitle.Title>
                    Gia công trọn gói từ A–Z
                  </SectionTitle.Title>
                </SectionTitle>
                <p className="lead">
                  Nhà máy Quang Minh TNA triển khai mô hình gia công khép kín, bao gồm đầy đủ các bước từ tư vấn định hướng sản phẩm đến thiết kế bao bì – nhãn mác chuyên nghiệp.
                </p>
                <p>
                  Doanh nghiệp chỉ cần đưa ý tưởng, Quang Minh TNA triển khai trọn gói từ A–Z, giúp rút ngắn tối đa thời gian ra thị trường. Đối tác sản xuất chiến lược của hơn 20 thương hiệu trên toàn quốc.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quy trình sản xuất 7 bước */}
      <WorkProcess
        data={quyTrinhSanXuatData}
        subTitle="Quy trình gia công"
        title="7 bước gia công trọn gói"
      />

      {/* Sản phẩm đa dạng */}
      <section id="san-pham" className="section-padding fix section-bg-2">
        <div className="container">
          <SectionTitle className="text-center">
            <SectionTitle.SubTitle className="text-white">Sản phẩm</SectionTitle.SubTitle>
            <SectionTitle.Title className="text-white">
              Nhà máy đáp ứng đa dạng sản phẩm
            </SectionTitle.Title>
          </SectionTitle>
          <div className="row g-4 mt-4">
            {sanPhamData.map((item, index) => (
              <div
                key={index}
                className="col-lg-4 col-md-6 wow slideUp"
                data-delay={`.${3 + index * 2}`}
              >
                <div className="service-box-items style-2 p-4 h-100">
                  <div className="content">
                    <h4>{item.title}</h4>
                    <p className="mb-0">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-5">
            <Link to="/ho-tro-khach-hang" className="theme-btn">
              Yêu cầu tư vấn
              <i className="fa-solid fa-arrow-right-long" />
            </Link>
          </div>
        </div>
      </section>

      {/* Pháp lý */}
      <section className="section-padding fix">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h3 className="mb-4">Pháp lý & Chứng nhận</h3>
              <p>
                Nhà máy Quang Minh TNA có đầy đủ hệ thống pháp lý và giấy phép sản xuất phân bón, thuốc bảo vệ thực vật theo quy định hiện hành. Đảm bảo sản xuất hợp pháp, hồ sơ minh bạch.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default GioiThieu
