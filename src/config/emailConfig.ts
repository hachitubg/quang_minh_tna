/**
 * Cấu hình Email - Gửi form hỗ trợ khách hàng
 *
 * Sử dụng EmailJS (https://www.emailjs.com/) - miễn phí 200 email/tháng
 * Chỉ gửi tới Sales (1 template); không auto gửi xác nhận cho khách – sales trả lời.
 * Xem chi tiết: EMAIL_CONFIG.md
 *
 * Nguồn cấu hình (theo thứ tự ưu tiên):
 * 1. Runtime: file public/email-config.json (được load khi app chạy) – dùng cho host/build production
 * 2. Build-time: biến VITE_* trong .env – dùng cho localhost
 */

export type EmailConfigShape = {
  publicKey: string
  serviceId: string
  templateIdSales: string
  templateIdUserConfirm: string
  salesEmail: string
}

const defaultsFromEnv: EmailConfigShape = {
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "",
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "",
  templateIdSales: import.meta.env.VITE_EMAILJS_TEMPLATE_SALES || "",
  templateIdUserConfirm: import.meta.env.VITE_EMAILJS_TEMPLATE_USER_CONFIRM || "",
  salesEmail: import.meta.env.VITE_SALES_EMAIL || "sales@quangminhtna.vn",
}

/** Cấu hình dùng trong app – có thể bị ghi đè bởi loadEmailConfig() */
export const emailConfig: EmailConfigShape = { ...defaultsFromEnv }

/** Load cấu hình từ public/email-config.json (runtime) – dùng trên host khi không có .env */
export async function loadEmailConfig(): Promise<void> {
  try {
    const base = import.meta.env.BASE_URL || "/"
    const url = base.endsWith("/") ? `${base}email-config.json` : `${base}/email-config.json`
    const res = await fetch(url)
    if (!res.ok) return
    const data = (await res.json()) as Partial<EmailConfigShape>
    if (data.publicKey) emailConfig.publicKey = data.publicKey
    if (data.serviceId) emailConfig.serviceId = data.serviceId
    if (data.templateIdSales) emailConfig.templateIdSales = data.templateIdSales
    if (data.templateIdUserConfirm != null) emailConfig.templateIdUserConfirm = data.templateIdUserConfirm
    if (data.salesEmail) emailConfig.salesEmail = data.salesEmail
  } catch {
    // Bỏ qua lỗi (file không tồn tại hoặc CORS) – giữ giá trị từ .env
  }
}

/** Kiểm tra đã cấu hình EmailJS chưa */
export const isEmailConfigured = (): boolean => {
  return !!(
    emailConfig.publicKey &&
    emailConfig.serviceId &&
    emailConfig.templateIdSales
  )
}
