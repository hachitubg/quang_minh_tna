import PageTitle from "@/components/sections/pageTitle"
import SupportForm from "@/components/forms/SupportForm"

/**
 * Trang Hỗ trợ khách hàng
 * Form gửi email tới Sales + email xác nhận tới khách hàng qua email họ nhập
 */
const HoTroKhachHang = () => {
  return (
    <>
      <PageTitle title="Hỗ trợ khách hàng" currentPage="Hỗ trợ khách hàng" />
      <section className="contact-section fix section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <SupportForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HoTroKhachHang
