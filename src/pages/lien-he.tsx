import ContactAddress from "@/components/sections/contact/contactAddress"
import SupportForm from "@/components/forms/SupportForm"
import ContactMap from "@/components/sections/contact/contactMap"
import PageTitle from "@/components/sections/pageTitle"

/**
 * Trang Liên hệ - Địa chỉ, Zalo, Facebook, TikTok, SĐT, Bản đồ
 */
const LienHe = () => {
  return (
    <>
      <PageTitle currentPage="Liên hệ" title="Liên hệ" />
      <section className="contact-section fix section-padding">
        <div className="container">
          <div className="contact-wrapper-2">
            <div className="row g-4 align-items-stretch">
              <div className="col-lg-6 d-flex flex-column gap-4">
                {/* Bản đồ đặt trên sidebar liên hệ */}
                <div className="flex-grow-0">
                  <h3 className="mb-3">Vị trí nhà máy</h3>
                  <div className="map-wrapper rounded overflow-hidden" style={{ minHeight: "280px" }}>
                    <ContactMap />
                  </div>
                </div>
                <ContactAddress />
              </div>
              <div className="col-lg-6">
                <SupportForm showFullContent={false} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default LienHe
