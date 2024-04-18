import Navigation from "../components/Navigation";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
    return (
        <section className="flex">
            <Navigation />
            <div className="h-screen bg-primary flex-1 overflow-y-auto">
                <Outlet />
            </div>
        </section>
    )
}

export default HomeLayout