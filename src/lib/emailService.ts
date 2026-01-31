import emailjs, { type EmailJSResponseStatus } from "@emailjs/browser"
import { emailConfig } from "@/config/emailConfig"

export type SupportFormData = {
  userName: string
  userEmail: string
  userPhone: string
  subject: string
  message: string
}

/** Gửi email thông báo tới Sales (bộ phận hỗ trợ) */
export const sendToSales = async (data: SupportFormData): Promise<void> => {
  if (!emailConfig.publicKey || !emailConfig.serviceId || !emailConfig.templateIdSales) {
    throw new Error("Chưa cấu hình Email. Vui lòng kiểm tra file .env")
  }

  const templateParams = {
    user_name: data.userName,
    user_email: data.userEmail,
    user_phone: data.userPhone,
    subject: data.subject,
    message: data.message,
    to_email: emailConfig.salesEmail,
  }

  await emailjs.send(
    emailConfig.serviceId,
    emailConfig.templateIdSales,
    templateParams,
    { publicKey: emailConfig.publicKey }
  )
}

/** Gửi email xác nhận tới khách hàng (qua email họ nhập) */
export const sendToUser = async (data: SupportFormData): Promise<void> => {
  if (
    !emailConfig.publicKey ||
    !emailConfig.serviceId ||
    !emailConfig.templateIdUserConfirm
  ) {
    // Không bắt buộc - nếu chưa cấu hình template xác nhận thì bỏ qua
    return
  }

  const templateParams = {
    user_name: data.userName,
    user_email: data.userEmail,
    message: data.message,
    to_email: data.userEmail,
  }

  await emailjs.send(
    emailConfig.serviceId,
    emailConfig.templateIdUserConfirm,
    templateParams,
    { publicKey: emailConfig.publicKey }
  )
}

/** Gửi form hỗ trợ: chỉ gửi tới Sales (không auto gửi xác nhận cho khách – sales sẽ trả lời) */
export const submitSupportForm = async (
  data: SupportFormData
): Promise<{ success: boolean; error?: string }> => {
  try {
    await sendToSales(data)
    return { success: true }
  } catch (err) {
    const error = err as EmailJSResponseStatus
    console.error("Email error:", error)
    return {
      success: false,
      error: error.text || "Gửi thất bại. Vui lòng thử lại hoặc liên hệ Hotline.",
    }
  }
}
