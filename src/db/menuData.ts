import type { MenuItemDataType } from "./menuData.types";

/**
 * Menu chính cho website Quang Minh TNA
 * Chỉ 4 mục: Trang chủ, Giới thiệu, Hỗ trợ khách hàng, Liên hệ
 */
export const menuData: MenuItemDataType[] = [
  { title: "Trang chủ", link: "/" },
  { title: "Giới thiệu", link: "/gioi-thieu" },
  { title: "Hỗ trợ khách hàng", link: "/ho-tro-khach-hang" },
  { title: "Liên hệ", link: "/lien-he" },
];
