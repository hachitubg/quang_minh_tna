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
    <div className="contact-content support-page-content">
      {showFullContent && (
        <>
          <div className="support-header-section support-animate">
            <span className="support-label">Dịch vụ</span>
            <h2 className="support-main-title">Dịch vụ hỗ trợ khách hàng / đối tác</h2>
            <p className="support-intro">
              Quang Minh TNA không chỉ sản xuất mà đóng vai trò <strong>hậu phương kỹ thuật</strong> cho đối tác
            </p>
          </div>

          <div className="support-content-grid support-animate support-animate-delay-1">
            <div className="service-box-items style-2 support-box support-features-box">
              <div className="icon icon-fa">
                <i className="fa-solid fa-layer-group" aria-hidden />
              </div>
              <div className="content">
                <h4>Dịch vụ hỗ trợ toàn diện</h4>
                <ul className="support-features-list">
                  <li><i className="fa-solid fa-comments" aria-hidden /><span>Tư vấn giải pháp sản phẩm</span></li>
                  <li><i className="fa-solid fa-flask" aria-hidden /><span>Hỗ trợ cải tiến công thức theo phản hồi thị trường</span></li>
                  <li><i className="fa-solid fa-graduation-cap" aria-hidden /><span>Đào tạo chuyên môn sản phẩm</span></li>
                  <li><i className="fa-solid fa-book-open" aria-hidden /><span>Chuyển giao kiến thức kỹ thuật</span></li>
                  <li><i className="fa-solid fa-folder-open" aria-hidden /><span>Cung cấp tài liệu, hình ảnh, nội dung truyền thông bán hàng</span></li>
                  <li><i className="fa-solid fa-bullhorn" aria-hidden /><span>Hỗ trợ xây dựng thông điệp sản phẩm</span></li>
                </ul>
              </div>
            </div>

            <div className="support-benefits-col support-animate support-animate-delay-2">
              <div className="service-box-items style-2 support-box">
                <div className="icon icon-fa">
                  <i className="fa-solid fa-rocket" aria-hidden />
                </div>
                <div className="content">
                  <h4>Tự tin ra thị trường</h4>
                  <p>Đối tác tự tin triển khai sản phẩm với sự hỗ trợ toàn diện</p>
                </div>
              </div>
              <div className="service-box-items style-2 support-box">
                <div className="icon icon-fa">
                  <i className="fa-solid fa-chart-line" aria-hidden />
                </div>
                <div className="content">
                  <h4>Bán hàng bài bản hơn</h4>
                  <p>Quy trình chuẩn hóa từ tư vấn đến chuyển giao</p>
                </div>
              </div>
              <div className="service-box-items style-2 support-box">
                <div className="icon icon-fa">
                  <i className="fa-solid fa-seedling" aria-hidden />
                </div>
                <div className="content">
                  <h4>Gia tăng hiệu quả triển khai</h4>
                  <p>Đào tạo chuyên môn và hỗ trợ thực tế tại thị trường</p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      <div className="support-form-section support-animate support-animate-delay-3">
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
