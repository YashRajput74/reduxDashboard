import DashBoard from "../components/DashBoard/DashBoard";
import Header from "../components/Header";
import Sidebar from "../components/SideBar";
import './HomePage.css'

export default function HomePage() {
    return (
        <div id="homePage">
            <Header />
            <div id="mainBoard">
                <Sidebar />
                <DashBoard />
            </div>
        </div>
    )
}