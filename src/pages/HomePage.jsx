import DashBoard from "../components/DashBoard/DashBoard";
import Header from "../components/Header";
import Sidebar from "../components/SideBar";

export default function HomePage(){
    return (
        <div id="homePage">
            <Header />
            <Sidebar />
            <DashBoard />
        </div>
    )
}