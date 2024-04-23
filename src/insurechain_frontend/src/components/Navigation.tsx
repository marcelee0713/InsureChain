import { FaUser } from "react-icons/fa";
import { FaList } from "react-icons/fa6";
import { LuLogOut } from "react-icons/lu";
import { NavigationItems } from "./navigation/nav.items";
import { MdSpaceDashboard } from "react-icons/md";
import { KeyedMutator, mutate } from "swr";
import { User } from "../interfaces/user.interface";

interface props {
  name: string;
  onLogOut: () => void;
}

const Navigation = ({ name, onLogOut }: props) => {
  return (
    <aside
      className="w-64 h-full bg-primary overflow-y-auto border-r-2 border-black border-opacity-70"
      aria-label="Sidebar"
    >
      <ul className="h-full flex flex-col gap-2 items-stretch p-2">
        <li className="flex gap-2 items-center justify-center m-5">
          <img src="images/logo.png" alt="Logo" className="w-[75px] h-[75px]" />

          <div className="font-bold text-xl font-openSans ">InsureChain</div>
        </li>

        <NavigationItems icon={FaUser} redirectTo="profile" text={name} />

        <NavigationItems
          icon={MdSpaceDashboard}
          redirectTo="dashboard"
          text="Dashboard"
        />

        <NavigationItems
          icon={FaList}
          redirectTo="challenges"
          text="Challenges"
        />

        <NavigationItems icon={LuLogOut} text="Log out" onClick={onLogOut} />
      </ul>
    </aside>
  );
};

export default Navigation;
