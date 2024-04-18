import { Outlet, Link, useLocation } from "react-router-dom";

const DefaultLayout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const linkPath = isHomePage ? "/registerlayout" : "..";
  const linkText = isHomePage ? "Sign In" : "Go Back";

  return (
    <section id="default-layout">
      <div className="bg-primary font-openSans h-screen">
        <div className="flex justify-between items-center px-[7rem] mt-3">
          <Link to="/">
            <img src="../../public/images/ic-ithink-hackathon.png" alt="Logo" />
          </Link>
          <Link to={linkPath}>
            <h2 className="text-black font-bold text-center font-bold">
              {linkText}
              <i className="fa-solid fa-arrow-right text-black px-2"></i>
            </h2>
          </Link>
        </div>
        <div className="flex justify-center items-center h-full w-full bg-primary">
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default DefaultLayout;
