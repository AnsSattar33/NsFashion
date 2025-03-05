import Footer from "@/shared/Footer/Footer"
import Navbar from "@/shared/Header/Navbar"
import { Outlet } from "react-router-dom"
import Sidebar from "./sidebar"

const DashboardLayout = () => {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <main className="flex">
                <div>
                    <Sidebar />
                </div>
                <div>
                    <Outlet />
                </div>
            </main>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default DashboardLayout