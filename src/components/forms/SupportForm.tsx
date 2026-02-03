import { useState, useEffect, FormEvent } from "react"
import { companyInfo } from "@/config/companyInfo"
import { submitSupportForm } from "@/lib/emailService"
import { isEmailConfigured, loadEmailConfig } from "@/config/emailConfig"

interface SupportFormProps {
  showFullContent?: boolean
}

const SupportForm = ({ showFullContent = true }: SupportFormProps) => {
  const [configLoaded, setConfigLoaded] = useState(false)
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")
  const [formData, setFormData] = useState({
    userName: "",
    userEmail: "",
    userPhone: "",
    subject: "",
    message: "",
  })

  useEffect(() => {
    loadEmailConfig().then(() => setConfigLoaded(true))
  }, [])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    setErrorMessage("")

    const result = await submitSupportForm({
      userName: formData.userName,
      userEmail: formData.userEmail,
      userPhone: formData.userPhone,
      subject: formData.subject,
      message: formData.message,
    })

    if (result.success) {
      setStatus("success")
      setFormData({ userName: "", userEmail: "", userPhone: "", subject: "", message: "" })
    } else {
      setStatus("error")
      setErrorMessage(result.error || "Đã có lỗi xảy ra")
    }
  }

  const emailConfigured = configLoaded && isEmailConfigured()

  return (
    <div className="contact-content">
      {showFullContent && (
        <>
          <div className="support-header-section">
            <h2 className="support-main-title">Dịch vụ hỗ trợ khách hàng / đối tác</h2>
            <p className="support-intro">
              Quang Minh TNA không chỉ sản xuất mà đóng vai trò <strong>hậu phương kỹ thuật</strong> cho đối tác
            </p>
          </div>

          <div className="support-features-section">
        <div className="support-section-content">
          <h3 className="support-section-title">Dịch vụ hỗ trợ toàn diện</h3>
          <ul className="support-features-list">
            <li>
              <i className="fa-solid fa-check-circle" />
              <span>Tư vấn giải pháp sản phẩm</span>
            </li>
            <li>
              <i className="fa-solid fa-check-circle" />
              <span>Hỗ trợ cải tiến công thức theo phản hồi thị trường</span>
            </li>
            <li>
              <i className="fa-solid fa-check-circle" />
              <span>Đào tạo chuyên môn sản phẩm</span>
            </li>
            <li>
              <i className="fa-solid fa-check-circle" />
              <span>Chuyển giao kiến thức kỹ thuật</span>
            </li>
            <li>
              <i className="fa-solid fa-check-circle" />
              <span>Cung cấp tài liệu, hình ảnh, nội dung truyền thông bán hàng</span>
            </li>
            <li>
              <i className="fa-solid fa-check-circle" />
              <span>Hỗ trợ xây dựng thông điệp sản phẩm</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="support-benefits-wrapper">
        <h3 className="benefits-main-title">Giúp đối tác</h3>
        <div className="benefits-blocks">
          <div className="benefit-block benefit-green">
            <div className="benefit-icon">
              <i className="fa-solid fa-rocket" />
            </div>
            <h4 className="benefit-title">Tự tin ra thị trường</h4>
            <div className="benefit-watermark">1</div>
          </div>
          
          <div className="benefit-block benefit-blue">
            <div className="benefit-icon">
              <i className="fa-solid fa-chart-line" />
            </div>
            <h4 className="benefit-title">Bán hàng bài bản hơn</h4>
            <div className="benefit-watermark">2</div>
          </div>
          
          <div className="benefit-block benefit-orange">
            <div className="benefit-icon">
              <i className="fa-solid fa-seedling" />
            </div>
            <h4 className="benefit-title">Gia tăng hiệu quả triển khai thực tế</h4>
            <div className="benefit-watermark">3</div>
          </div>
        </div>
      </div>
        </>
      )}

      <div className="support-form-section">
        <h3 className="form-section-title">{showFullContent ? 'Yêu cầu hỗ trợ' : 'Liên hệ với chúng tôi'}</h3>
        <p>
          Điền form bên dưới, yêu cầu sẽ được chuyển tới bộ phận sales. Bộ phận sales sẽ liên hệ lại bạn sớm nhất.
        </p>
        <p className="small text-muted">
          <i className="fa-solid fa-phone me-2" />
          Hotline: <a href={companyInfo.contact.phoneLink}>{companyInfo.contact.phoneDisplay}</a>
        </p>

        {configLoaded && !isEmailConfigured() && (
          <div className="alert alert-warning mb-4" role="alert">
            <strong>Chưa cấu hình email.</strong> Form sẽ không gửi được. Vui lòng xem file{" "}
            <code>EMAIL_CONFIG.md</code> để hướng dẫn cấu hình.
          </div>
        )}

        {status === "success" && (
          <div className="alert alert-success" role="alert">
            <i className="fa-solid fa-check-circle me-2" />
            Gửi thành công! Bộ phận sales sẽ liên hệ bạn sớm.
          </div>
        )}

        {status === "error" && (
          <div className="alert alert-danger" role="alert">
            <i className="fa-solid fa-exclamation-circle me-2" />
            {errorMessage}
          </div>
        )}

        <form
        id="support-form"
        onSubmit={handleSubmit}
        className="contact-form-items mt-4"
      >
        <div className="row g-4">
          <div className="col-lg-6">
            <div className="form-clt">
              <span>Họ và tên *</span>
              <input
                type="text"
                name="userName"
                value={formData.userName}
                onChange={handleChange}
                placeholder="Nguyễn Văn A"
                required
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-clt">
              <span>Email *</span>
              <input
                type="email"
                name="userEmail"
                value={formData.userEmail}
                onChange={handleChange}
                placeholder="email@example.com"
                required
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-clt">
              <span>Số điện thoại *</span>
              <input
                type="tel"
                name="userPhone"
                value={formData.userPhone}
                onChange={handleChange}
                placeholder="0901 234 567"
                required
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-clt">
              <span>Chủ đề</span>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="VD: Tư vấn gia công phân bón"
              />
            </div>
          </div>
          <div className="col-lg-12">
            <div className="form-clt">
              <span>Nội dung yêu cầu *</span>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Mô tả chi tiết yêu cầu hỗ trợ của bạn..."
                rows={5}
                required
              />
            </div>
          </div>
          <div className="col-lg-7">
            <button
              type="submit"
              className="theme-btn"
              disabled={status === "loading" || !emailConfigured}
            >
              {status === "loading" ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true" />
                  Đang gửi...
                </>
              ) : (
                <>
                  Gửi yêu cầu <i className="fa-solid fa-arrow-right-long" />
                </>
              )}
            </button>
          </div>
        </div>
      </form>
      </div>
    </div>
  )
}

export default SupportForm
