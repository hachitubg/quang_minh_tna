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
        verticalOnDesktop
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
          <div className="text-center mt-48">
            <Link to="/ho-tro-khach-hang" className="theme-btn">
              Yêu cầu tư vấn
              <i className="fa-solid fa-arrow-right-long" />
            </Link>
          </div>
        </div>
      </section>

      {/* Pháp lý & Chứng nhận */}
      <section id="phap-ly" className="section-padding fix">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <h3 className="mb-4 text-center">Pháp lý & Chứng nhận</h3>
              <p className="text-center mb-5">
                Công ty TNHH Quang Minh TNA có đầy đủ giấy tờ pháp lý và chứng nhận đủ điều kiện sản xuất phân bón, chế phẩm diệt côn trùng – diệt khuẩn theo quy định hiện hành. Sản xuất hợp pháp, hồ sơ minh bạch.
              </p>

              <div className="row g-4">
                {/* Giấy chứng nhận sản xuất phân bón */}
                <div className="col-lg-6">
                  <div className="p-4 h-100 rounded border border-secondary border-opacity-25 bg-light bg-opacity-50">
                    <h5 className="mb-3">1. Giấy chứng nhận đủ điều kiện sản xuất phân bón</h5>
                    <ul className="list-unstyled small mb-0">
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

                {/* Thông báo sản xuất chế phẩm diệt côn trùng, diệt khuẩn */}
                <div className="col-lg-6">
                  <div className="p-4 h-100 rounded border border-secondary border-opacity-25 bg-light bg-opacity-50">
                    <h5 className="mb-3">2. Thông báo đủ điều kiện sản xuất chế phẩm diệt côn trùng, diệt khuẩn</h5>
                    <ul className="list-unstyled small mb-0">
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

              <div className="mt-4 p-3 rounded bg-light bg-opacity-50 small">
                <strong>Thông tin đơn vị:</strong> Công ty TNHH Quang Minh TNA · Mã số doanh nghiệp: 0601247717<br />
                Trụ sở: Số 25 Bùi Tân, phường Lộc Vượng, TP Nam Định, tỉnh Nam Định · Địa chỉ sản xuất: Xóm 9, xã Tân Thành, huyện Vụ Bản, tỉnh Nam Định<br />
                Liên hệ: 0918 428 566 · quangminhtna@gmail.com
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default GioiThieu
