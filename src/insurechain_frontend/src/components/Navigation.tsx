import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <aside
      className="w-64 h-screen bg-primary overflow-y-auto border-r-2 border-black border-opacity-70 "
      aria-label="Sidebar"
    >
      <div className="h-full px-3 py-4">
        <ul className="space-y-2 font-openSans">
          <li>
            <img src="images/logo.png" alt="Logo" className="mb-5" />
          </li>
          <li>
            <NavLink
              to="profile"
              className={({ isActive }) =>
                isActive
                  ? "bg-black text-primary flex items-center p-2 hover:bg-secondary group"
                  : "flex items-center p-2 hover:bg-secondary group text-black"
              }
            >
              <i className="fa-solid fa-user flex-shrink-0 w-5 h-5 group-hover:text-primary"></i>
              <span className="flex-1 ms-3 whitespace-nowrap group-hover:text-primary">
                Lance Kian Flores
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "bg-black text-primary flex items-center p-2 hover:bg-secondary group"
                  : "flex items-center p-2 hover:bg-secondary group text-black"
              }
            >
              <svg
                className="flex-shrink-0 w-5 h-5 group-hover:text-primary"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 18"
              >
                <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
              </svg>
              <span className="flex-1 ms-3 whitespace-nowrap group-hover:text-primary">
                Dashboard
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="challenge"
              className={({ isActive }) =>
                isActive
                  ? "bg-black text-primary flex items-center p-2 hover:bg-secondary group"
                  : "flex items-center p-2 hover:bg-secondary group text-black"
              }
            >
              <i className="fa-solid fa-list-check flex-shrink-0 w-5 h-5 group-hover:text-primary"></i>
              <span className="flex-1 ms-3 whitespace-nowrap  group-hover:text-primary">
                Challenges
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/logout"
              className="flex items-center p-2 hover:bg-secondary group bg-black text-primary"
            >
              <i className="fa-solid fa-right-from-bracket font-bold flex-shrink-0 w-5 h-5 group-hover:text-primary"></i>
              <span className="flex-1 ms-3 whitespace-nowrap group-hover:text-primary">
                Logout
              </span>
            </NavLink>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Navigation;
