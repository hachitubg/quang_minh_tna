/**
 * Dữ liệu cho trang chủ Quang Minh TNA
 * Giữ layout và hiệu ứng gốc - chỉ cập nhật nội dung
 */

export const heroData = {
  titleLines: ["Công nghệ tiên phong", "Nông nghiệp bứt phá"],
  subtitle:
    "Nhà máy sản xuất phân bón và thuốc bảo vệ thực vật ứng dụng công nghệ nano. Gia công trọn gói cho doanh nghiệp phát triển thương hiệu riêng – đối tác của hơn 20 thương hiệu trên toàn quốc.",
  btnPrimary: { text: "Xem thêm", link: "/gioi-thieu" },
  btnSecondary: { text: "Hỗ trợ khách hàng", link: "/ho-tro-khach-hang" },
}

export const achievementData = [
  { id: 1, icon: "/img_quangminh/icon/products2.png", count: 100000, description: "Sản phẩm/ngày", delay: ".3" },
  { id: 2, icon: "/img_quangminh/icon/partners.png", count: 20, description: "Thương hiệu đối tác", delay: ".5" },
  { id: 3, icon: "/img_quangminh/icon/productivity.png", count: 5, description: "Ngày gia công trọn gói", delay: ".7" },
  { id: 4, icon: "/img_quangminh/icon/high-quality.png", count: 100, description: "Chất lượng ổn định", delay: ".9" },
]

export const marqueeItems = [
  "Phân bón nano",
  "Thuốc bảo vệ thực vật",
  "Công nghệ châu Âu",
  "Gia công trọn gói",
  "Phân bón hữu cơ",
  "Nghiền nano",
  "Phân bón dạng hạt",
  "Phân bón dạng nước",
  "Phân bón dạng bột",
]

export const offerItems = [
  { id: 1, title: "Phân bón hạt", isActive: false, delay: ".2" },
  { id: 2, title: "Phân bón bột", isActive: false, delay: ".4" },
  { id: 3, title: "Phân bón nước", isActive: false, delay: ".6" },
  { id: 4, title: "Phân bón hữu cơ", isActive: false, delay: ".8" },
  { id: 5, title: "Thuốc BVTV", isActive: false, delay: ".9" },
  { id: 6, title: "Công nghệ nano", isActive: false, delay: ".9" },
]
