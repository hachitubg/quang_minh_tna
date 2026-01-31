import { useState, FormEvent } from "react"
import { companyInfo } from "@/config/companyInfo"
import { submitSupportForm } from "@/lib/emailService"
import { isEmailConfigured } from "@/config/emailConfig"

const SupportForm = () => {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")
  const [formData, setFormData] = useState({
    userName: "",
    userEmail: "",
    userPhone: "",
    subject: "",
    message: "",
  })

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

  const emailConfigured = isEmailConfigured()

  return (
    <div className="contact-content">
      <h2>Yêu cầu hỗ trợ</h2>
      <p>
        Điền form bên dưới, yêu cầu sẽ được chuyển tới bộ phận sales. Bộ phận sales sẽ liên hệ lại bạn.
      </p>
      <p className="small text-muted">
        <i className="fa-solid fa-phone me-2" />
        Hotline: <a href={companyInfo.contact.phoneLink}>{companyInfo.contact.phoneDisplay}</a>
      </p>

      {!emailConfigured && (
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
  )
}

export default SupportForm
