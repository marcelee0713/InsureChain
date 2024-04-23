import { Outlet, Link, useLocation } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { useEffect, useState } from "react";
import { AuthLoading } from "../components/auth/loading";
import { getUser } from "../fetchers/user.fetcher";
const DefaultLayout = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const linkPath = isHomePage ? "/auth/sign-in" : "/";
  const signUpPath = location.pathname === "/auth/sign-up";
  const linkText = isHomePage ? "Sign In" : "Go Back";

  useEffect(() => {
    // Check if the user is logged in
    const uid = localStorage.getItem("uid");

    const gettingUser = async () => {
      if (!uid) {
        setLoading(false);
        return;
      }

      try {
        await getUser(uid);

        window.location.href = "/home/dashboard";
      } catch (err) {
        localStorage.removeItem("uid");
        setLoading(false);
        return;
      }
    };

    gettingUser();
  }, []);

  if (loading) {
    return (
      <main
        id="default-layout"
        className="relative h-screen w-full bg-primary font-openSans container mx-auto flex justify-center items-center"
      >
        <AuthLoading />
      </main>
    );
  }

  return (
    <main
      id="default-layout"
      className="relative h-screen w-full bg-primary font-openSans container mx-auto"
    >
      <div className="absolute h-20 w-full flex items-center justify-between">
        <Link to={"/"} replace={true}>
          <img
            src="images/logo.png"
            alt="logo"
            className="w-auto h-12 animate-animfadeLeftSide"
          />
        </Link>
        <Link
          to={signUpPath ? "/auth/sign-in" : linkPath}
          replace={signUpPath}
          className="cursor-pointer flex justify-center items-center text-black gap-2 animate-animfadeRightSide"
        >
          <div className="font-bold text-xl">{linkText}</div>
          <FaArrowRight size={18} />
        </Link>
      </div>
      <Outlet />
    </main>
  );
};

export default DefaultLayout;
