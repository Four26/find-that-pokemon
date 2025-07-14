import { Outlet } from "react-router"
import Footer from "../pages/Footer"

const MainLayout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Outlet />
            <Footer />
        </div>
    )
}

export default MainLayout