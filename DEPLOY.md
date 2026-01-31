# Hướng dẫn Deploy website Quang Minh TNA lên VPS

## Thông tin VPS

- **IP:** 222.255.214.198  
- **SSH:** `ssh root@222.255.214.198`  
- **Mật khẩu:** (bạn đã có – nhập khi SSH yêu cầu)

---

## Bước 1: SSH vào VPS

Trên máy tính (Windows dùng PowerShell/CMD hoặc Git Bash):

```bash
ssh root@222.255.214.198
```

Nhập mật khẩu khi được hỏi.

---

## Bước 2: Cài đặt môi trường (nếu chưa có)

### Cài Node.js (khuyến nghị dùng Node 18 hoặc 20)

```bash
# Cài Node.js 20.x qua NodeSource
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
apt-get install -y nodejs

# Kiểm tra
node -v   # ví dụ: v20.x.x
npm -v
```

### Cài Git (nếu chưa có)

```bash
apt-get update
apt-get install -y git
```

---

## Bước 3: Clone code từ GitHub

```bash
# Tạo thư mục web (tùy chọn)
mkdir -p /var/www
cd /var/www

# Clone repo (dùng HTTPS vì dễ hơn trên VPS)
git clone https://github.com/hachitubg/quang_minh_tna.git
cd quang_minh_tna
```

Nếu repo private, có thể dùng Personal Access Token thay mật khẩu khi Git hỏi.

---

## Bước 4: Build project

```bash
cd /var/www/quang_minh_tna

# Cài dependency
npm install

# Build production
npm run build
```

Sau khi build xong, thư mục **`dist/`** chứa file tĩnh (HTML, CSS, JS) để deploy.

---

## Bước 5: Cài Nginx và cấu hình

### Cài Nginx

```bash
apt-get update
apt-get install -y nginx
```

### Tạo file cấu hình site

```bash
nano /etc/nginx/sites-available/quang_minh_tna
```

Dán nội dung sau (thay `your_domain.com` bằng domain thật hoặc dùng IP):

```nginx
server {
    listen 80;
    server_name your_domain.com 222.255.214.198;
    root /var/www/quang_minh_tna/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

Lưu file (Ctrl+O, Enter, Ctrl+X).

### Bật site và khởi động lại Nginx

```bash
ln -s /etc/nginx/sites-available/quang_minh_tna /etc/nginx/sites-enabled/
nginx -t
systemctl reload nginx
```

---

## Bước 6: Mở firewall (nếu có)

```bash
ufw allow 80
ufw allow 22
ufw enable
```

---

## Truy cập website

- Nếu dùng domain: `http://your_domain.com`
- Nếu chỉ dùng IP: `http://222.255.214.198`

---

## Cập nhật sau này (khi có code mới)

Trên VPS:

```bash
cd /var/www/quang_minh_tna
git pull
npm install
npm run build
```

Không cần restart Nginx; Nginx đọc file từ `dist/` nên chỉ cần build lại là đủ.

---

## Cấu hình HTTPS (SSL) – khuyến nghị

Khi đã có domain trỏ về IP 222.255.214.198:

```bash
apt-get install -y certbot python3-certbot-nginx
certbot --nginx -d your_domain.com
```

Certbot sẽ tự cấu hình Nginx dùng HTTPS.

---

## Lưu ý

1. **Biến môi trường:** Nếu có file `.env` (ví dụ cho EmailJS), tạo `.env` trên VPS trong thư mục project và điền giá trị tương ứng. File `.env` không nên commit lên Git.
2. **Base URL:** Ứng dụng Vite/React dùng base mặc định `/`. Nếu deploy vào subpath (ví dụ `http://domain.com/quangminh/`) thì cần chỉnh `base` trong `vite.config.ts` và build lại.
3. **Bảo mật:** Nên đổi mật khẩu root sau lần đăng nhập đầu và tắt đăng nhập root bằng mật khẩu khi đã dùng SSH key.
