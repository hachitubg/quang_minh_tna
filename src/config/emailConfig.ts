/**
 * Cấu hình Email - Gửi form hỗ trợ khách hàng
 *
 * Sử dụng EmailJS (https://www.emailjs.com/) - miễn phí 200 email/tháng
 * Chỉ gửi tới Sales (1 template); không auto gửi xác nhận cho khách – sales trả lời.
 * Xem chi tiết: EMAIL_CONFIG.md
 */

export const emailConfig = {
  /** Public Key - lấy từ EmailJS Dashboard > Account > API Keys */
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "",

  /** Service ID - lấy từ EmailJS > Email Services */
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "",

  /** Template ID gửi tới Sales (chứa thông tin form) */
  templateIdSales: import.meta.env.VITE_EMAILJS_TEMPLATE_SALES || "",

  /** Template xác nhận cho khách (không dùng – sales trả lời) */
  templateIdUserConfirm: import.meta.env.VITE_EMAILJS_TEMPLATE_USER_CONFIRM || "",

  /** Email nhận thông báo (fallback nếu template chưa cấu hình) */
  salesEmail: import.meta.env.VITE_SALES_EMAIL || "sales@quangminhtna.vn",
} as const

/** Kiểm tra đã cấu hình EmailJS chưa */
export const isEmailConfigured = () => {
  return !!(
    emailConfig.publicKey &&
    emailConfig.serviceId &&
    emailConfig.templateIdSales
  )
}
