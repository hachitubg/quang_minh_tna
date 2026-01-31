import { companyInfo } from "@/config/companyInfo"

const ContactMap = () => {
  return (
    <div className="map-section">
      <div className="map-items">
        <div className="googpemap">
          <iframe
            src={companyInfo.mapEmbedUrl}
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Bản đồ Quang Minh TNA - Xóm 9, Phường Trường Thi, Ninh Bình"
          />
        </div>
      </div>
    </div>
  )
}

export default ContactMap