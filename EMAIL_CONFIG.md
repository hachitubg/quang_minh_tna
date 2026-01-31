# Hướng dẫn cấu hình gửi Email

Website sử dụng **EmailJS** để gửi email từ form mà không cần backend. Miễn phí **200 email/tháng**.

## Luồng gửi email

- **Chỉ gửi tới Sales** – Khi khách điền form → email chứa thông tin form được gửi tới `sales@quangminhtna.vn`. **Không** gửi auto email xác nhận cho khách; bộ phận sales sẽ trả lời khách hàng.

## Config hiện tại (đã cấu hình)

| Mục | Giá trị |
|-----|--------|
| **Template ID** | `template_qlanbrk` |
| **Service ID** | `service_ul5p0m7` |
| **Public Key** | `y2eF1NKDKicGABCFN` |
| **Private Key** | Chỉ cấu hình trong EmailJS Dashboard (không đưa vào code) |

---

## Bước 1: Đăng ký EmailJS

1. Truy cập https://www.emailjs.com/
2. Đăng ký tài khoản miễn phí
3. Vào **Dashboard**

---

## Bước 2: Thêm Email Service

1. Vào **Email Services** → **Add New Service**
2. Chọn nhà cung cấp (VD: Gmail)
3. Kết nối tài khoản Gmail của công ty
4. Sau khi tạo, copy **Service ID** (vd: `service_abc123`)

---

## Bước 3: Template gửi tới Sales (đang dùng)

Chỉ cần **1 template** – gửi thông tin form tới Sales. Không dùng template gửi xác nhận cho khách (sales sẽ trả lời).

1. Vào **Email Templates** → template đang dùng: **Template ID** `template_qlanbrk`
2. **To Email:** `sales@quangminhtna.vn` (hoặc email công ty)
3. **Subject:** `Yêu cầu hỗ trợ từ {{user_name}}`
4. **Content** (các biến phải khớp):

```
Yêu cầu hỗ trợ mới từ website:

Họ tên: {{user_name}}
Email: {{user_email}}
Số điện thoại: {{user_phone}}
Chủ đề: {{subject}}

Nội dung:
{{message}}

---
Gửi từ quangminhtna.vn
```

---

## Bước 4: Lấy Public Key

1. Vào **Account** (góc trên bên phải)
2. Tab **API Keys**
3. Copy **Public Key**

---

## Bước 5: Tạo file .env

1. Copy file mẫu:
   ```bash
   cp .env.example .env
   ```

2. Mở `.env` và điền (đã dùng config hiện tại):

```
VITE_EMAILJS_PUBLIC_KEY=y2eF1NKDKicGABCFN
VITE_EMAILJS_SERVICE_ID=service_ul5p0m7
VITE_EMAILJS_TEMPLATE_SALES=template_qlanbrk
VITE_SALES_EMAIL=sales@quangminhtna.vn
```

- **Private Key** (`zd4cYqVarOz14DQtgf3MI`) chỉ cấu hình trong EmailJS Dashboard, **không** đưa vào `.env`.
- Không gửi auto email cho khách → không cần `VITE_EMAILJS_TEMPLATE_USER_CONFIRM`.

3. Lưu file (đừng commit `.env` lên Git)

---

## Bước 6: Chạy lại dev server

Sau khi sửa `.env`, cần restart:

```bash
npm run dev
```

---

## Biến template (tên phải khớp)

| Biến        | Mô tả              |
|------------|--------------------|
| `user_name`  | Họ tên khách hàng  |
| `user_email` | Email khách hàng   |
| `user_phone` | Số điện thoại      |
| `subject`    | Chủ đề             |
| `message`    | Nội dung yêu cầu   |

---

## Lưu ý

- **Public Key** có thể dùng ở frontend; **Private Key** chỉ cấu hình trong EmailJS, không đưa vào code.
- Hiện tại **chỉ gửi tới Sales** (không auto gửi xác nhận cho khách – sales sẽ trả lời).
- Gmail miễn phí có giới hạn ~500 email/ngày; cần nhiều hơn thì dùng SendGrid/Outlook.
