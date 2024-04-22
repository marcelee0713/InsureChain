import { useEffect } from "react";
import Navigation from "../components/Navigation";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  useEffect(() => {
    // Check if the user is logged in
    // const isLoggedIn = localStorage.getItem("uid");
    // if (!isLoggedIn) {
    //   // Redirect to the dashboard if the user is logged in
    //   window.location.href = "/auth/sign-in";
    // }
  }, []);
  return (
    <section className="flex">
      <Navigation />
      <div className="h-screen bg-primary flex-1 overflow-y-auto">
        <Outlet />
      </div>
    </section>
  );
};

export default HomeLayout;
