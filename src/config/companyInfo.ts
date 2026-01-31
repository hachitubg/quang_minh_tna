/**
 * Cấu hình thông tin Công ty TNHH Quang Minh TNA
 * Sử dụng xuyên suốt website - chỉnh sửa tại đây để cập nhật toàn bộ
 */

export const companyInfo = {
  // Thông tin cơ bản
  name: "Công ty TNHH Quang Minh TNA",
  shortName: "Quang Minh TNA",
  slogan: "Công nghệ tiên phong – Nông nghiệp bứt phá",
  website: "https://quangminhtna.vn",
  domain: "quangminhtna.vn",

  // Logo
  logo: "/img_quangminh/logo_quang_minh_tna.png",
  logoHeight: 80,
  logoWidth: 150,
  logoAlt: "Quanh Minh TNA",

  // Liên hệ
  contact: {
    phone: "0961167791",
    phoneDisplay: "096 116 7791",
    phoneLink: "tel:0961167791",
    email: "sales@quangminhtna.vn",
    emailDisplay: "sales@quangminhtna.vn",
    address: "Xóm 9, Phường Trường Thi, Tỉnh Ninh Bình",
    addressFull: "Xóm 9, Phường Trường Thi, Thành phố Ninh Bình, Tỉnh Ninh Bình",
  },

  // Mạng xã hội - cập nhật URL khi có
  social: {
    zalo: "https://zalo.me/0961167791",
    facebook: "https://facebook.com/quangminhtna",
    tiktok: "https://tiktok.com/@quangminhtna",
    // Thêm YouTube, LinkedIn nếu có
  },

  // Email nhận form hỗ trợ khách hàng
  supportEmail: "sales@quangminhtna.vn",

  /** Google Maps embed - Tìm địa chỉ trên Google Maps > Share > Embed map > Copy src */
  mapEmbedUrl:
    "https://www.google.com/maps?q=Ph%C6%B0%E1%BB%9Dng+Tr%C6%B0%E1%BB%9Dng+Thi,+Ninh+B%C3%ACnh,+Vietnam&output=embed&z=15",
} as const;

export type CompanyInfo = typeof companyInfo;
