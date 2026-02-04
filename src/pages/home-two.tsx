import AboutTwo from "@/components/sections/about/aboutTwo"
import HomeContactOne from "@/components/sections/contact/homeContactOne"
import FaqHomeOne from "@/components/sections/faqHomeOne"
import HeroTwo from "@/components/sections/heros/heroTwo"
import MarqueThree from "@/components/sections/marques/marqueThree"
import Offer from "@/components/sections/offer"
import PartnersOne from "@/components/sections/partners/partnersOne"
import ServicesTwo from "@/components/sections/services/servicesTwo"

const HomeTwo = () => {
  return (
    <>
      <HeroTwo />
      <Offer/>
      <AboutTwo/>
      <MarqueThree/>
      <ServicesTwo/>
      <FaqHomeOne/>
      <PartnersOne/>
      <HomeContactOne/>
    </>
  )
}

export default HomeTwo