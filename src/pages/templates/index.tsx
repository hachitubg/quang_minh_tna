import { Link } from "react-router-dom"
import PageTitle from "@/components/sections/pageTitle"

/**
 * Thư viện mẫu - Các trang template gốc để tham khảo và lấy code
 * Truy cập: /templates
 * Không hiển thị trong menu chính
 */
const templateLinks = [
  { path: "/templates/home-one", label: "Home 01", desc: "Trang chủ gốc - có thể lấy Hero, About, Services..." },
  { path: "/templates/home-two", label: "Home 02", desc: "Đang dùng làm trang chủ chính" },
  { path: "/templates/home-three", label: "Home 03", desc: "" },
  { path: "/templates/home-four", label: "Home 04", desc: "" },
  { path: "/templates/home-one-single", label: "Home 01 One Page", desc: "" },
  { path: "/templates/home-two-single", label: "Home 02 One Page", desc: "" },
  { path: "/templates/home-three-single", label: "Home 03 One Page", desc: "" },
  { path: "/templates/home-four-single", label: "Home 04 One Page", desc: "" },
  { path: "/templates/about", label: "About", desc: "" },
  { path: "/templates/service", label: "Service", desc: "" },
  { path: "/templates/service-carousel", label: "Service Carousel", desc: "" },
  { path: "/templates/service-details", label: "Service Details", desc: "" },
  { path: "/templates/project", label: "Project", desc: "" },
  { path: "/templates/project-carousel", label: "Project Carousel", desc: "" },
  { path: "/templates/project-details", label: "Project Details", desc: "" },
  { path: "/templates/team", label: "Team", desc: "" },
  { path: "/templates/team-carousel", label: "Team Carousel", desc: "" },
  { path: "/templates/team-details", label: "Team Details", desc: "" },
  { path: "/templates/pricing", label: "Pricing", desc: "" },
  { path: "/templates/faq", label: "FAQ", desc: "" },
  { path: "/templates/news", label: "Blog", desc: "" },
  { path: "/templates/news-standard", label: "Blog Standard", desc: "" },
  { path: "/templates/news-details", label: "Blog Details", desc: "" },
  { path: "/templates/contact", label: "Contact (gốc)", desc: "" },
]

const TemplatesIndex = () => {
  return (
    <>
      <PageTitle title="Thư viện mẫu" currentPage="Templates" />
      <section className="section-padding">
        <div className="container">
          <div className="mb-5">
            <h2 className="mb-3">Thư viện trang mẫu</h2>
            <p className="text-muted">
              Các trang template gốc từ Sungo. Dùng để tham khảo và copy code khi cần.
              Không hiển thị trong menu chính.
            </p>
          </div>
          <div className="row g-4">
            {templateLinks.map(({ path, label, desc }) => (
              <div key={path} className="col-md-6 col-lg-4">
                <Link
                  to={path}
                  className="card h-100 text-decoration-none border hover-shadow transition"
                  style={{ transition: "box-shadow 0.2s" }}
                >
                  <div className="card-body">
                    <h5 className="card-title text-dark">{label}</h5>
                    {desc && <p className="card-text text-muted small mb-0">{desc}</p>}
                    <small className="text-primary">{path}</small>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default TemplatesIndex
