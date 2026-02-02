import Footer from '@/components/sections/footer'
import HeaderTwo from '@/components/headers/headerTwo'
import MobileBottomBar from '@/components/sections/MobileBottomBar'
import { Outlet, ScrollRestoration } from 'react-router-dom'
import useAnimation from '@/hooks/useAnimation'

const LayoutTwo = () => {
    useAnimation()
    return (
        <>
            <HeaderTwo />
            <Outlet />
            <Footer />
            <MobileBottomBar />
            <ScrollRestoration />
        </>
    )
}

export default LayoutTwo