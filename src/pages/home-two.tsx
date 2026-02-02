import AboutTwo from "@/components/sections/about/aboutTwo"
import AchievementTwo from "@/components/sections/achievements/achievementTwo"
import ChooseUs from "@/components/sections/chooseUs"
import HomeContactOne from "@/components/sections/contact/homeContactOne"
import HeroTwo from "@/components/sections/heros/heroTwo"
import MarqueThree from "@/components/sections/marques/marqueThree"
import Offer from "@/components/sections/offer"
import PartnersOne from "@/components/sections/partners/partnersOne"

const HomeTwo = () => {
  return (
    <>
      <HeroTwo />
      <AboutTwo/>
      <MarqueThree/>
      <Offer/>
      <PartnersOne/>
      <ChooseUs/>
      <AchievementTwo achievementWrapperClass="style-2" className="section-bg-2"/>
      <HomeContactOne/>
    </>
  )
}

export default HomeTwo