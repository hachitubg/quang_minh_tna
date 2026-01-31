import LayoutTwo from "@/layout/layoutTwo"
import Error from "@/pages/404"
import GioiThieu from "@/pages/gioi-thieu"
import HoTroKhachHang from "@/pages/ho-tro-khach-hang"
import LienHe from "@/pages/lien-he"
import HomeTwo from "@/pages/home-two"
import TemplatesIndex from "@/pages/templates"
import { createBrowserRouter } from "react-router-dom"

// Import các trang template để tham khảo (ẩn tại /templates/*)
import About from "@/pages/about"
import Blog from "@/pages/blog"
import BlogDetails from "@/pages/blog-details"
import BlogStandard from "@/pages/blog-standard"
import Contact from "@/pages/contact"
import Faq from "@/pages/faq"
import Home from "@/pages/home"
import HomeFour from "@/pages/home-four"
import HomeFourSingle from "@/pages/home-four-single"
import HomeOneSingle from "@/pages/home-one-single"
import HomeThree from "@/pages/home-three"
import HomeThreeSingle from "@/pages/home-three-single"
import HomeTwoSingle from "@/pages/home-two-single"
import Pricing from "@/pages/pricing"
import Project from "@/pages/project"
import ProjectCarousel from "@/pages/project-carousel"
import ProjectDetails from "@/pages/project-details"
import Service from "@/pages/service"
import ServiceCarousel from "@/pages/service-carousel"
import ServiceDetails from "@/pages/service-details"
import Team from "@/pages/team"
import TeamCarousel from "@/pages/team-carousel"
import TeamDetails from "@/pages/team-details"

/**
 * Router chính - Website Quang Minh TNA
 *
 * Trang chính: Home 2 làm trang chủ
 * Các trang: Trang chủ, Giới thiệu, Hỗ trợ khách hàng, Liên hệ
 *
 * Thư viện mẫu: /templates - Chứa các trang template gốc để tham khảo
 */
export const router = createBrowserRouter([
  // === TRANG CHÍNH - Layout 2 ===
  {
    path: "/",
    element: <LayoutTwo />,
    children: [
      { path: "/", element: <HomeTwo /> },
      { path: "/gioi-thieu", element: <GioiThieu /> },
      { path: "/ho-tro-khach-hang", element: <HoTroKhachHang /> },
      { path: "/lien-he", element: <LienHe /> },

      // Thư viện mẫu - Index
      { path: "/templates", element: <TemplatesIndex /> },

      // Thư viện mẫu - Các trang template gốc (ẩn, dùng để tham khảo)
      { path: "/templates/home-one", element: <Home /> },
      { path: "/templates/home-two", element: <HomeTwo /> },
      { path: "/templates/home-three", element: <HomeThree /> },
      { path: "/templates/home-four", element: <HomeFour /> },
      { path: "/templates/home-one-single", element: <HomeOneSingle /> },
      { path: "/templates/home-two-single", element: <HomeTwoSingle /> },
      { path: "/templates/home-three-single", element: <HomeThreeSingle /> },
      { path: "/templates/home-four-single", element: <HomeFourSingle /> },
      { path: "/templates/about", element: <About /> },
      { path: "/templates/service", element: <Service /> },
      { path: "/templates/service-carousel", element: <ServiceCarousel /> },
      { path: "/templates/service-details", element: <ServiceDetails /> },
      { path: "/templates/project", element: <Project /> },
      { path: "/templates/project-carousel", element: <ProjectCarousel /> },
      { path: "/templates/project-details", element: <ProjectDetails /> },
      { path: "/templates/team", element: <Team /> },
      { path: "/templates/team-carousel", element: <TeamCarousel /> },
      { path: "/templates/team-details", element: <TeamDetails /> },
      { path: "/templates/pricing", element: <Pricing /> },
      { path: "/templates/faq", element: <Faq /> },
      { path: "/templates/news", element: <Blog /> },
      { path: "/templates/news-standard", element: <BlogStandard /> },
      { path: "/templates/news-details", element: <BlogDetails /> },
      { path: "/templates/contact", element: <Contact /> },

      // 404 - Trang không tồn tại
      { path: "*", element: <Error /> },
    ],
  },
])
