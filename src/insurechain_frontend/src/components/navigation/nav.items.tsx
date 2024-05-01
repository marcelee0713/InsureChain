import React from "react";
import { IconBaseProps, IconType } from "react-icons";
import { FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";

interface props {
  redirectTo?: string;
  text: string;
  icon: IconType;
  onClick?: () => void;
}

interface CustomIconProps extends IconBaseProps {
  icon: IconType; // Type for specifying which icon to display
}

const CustomIcon = ({ icon, ...rest }: CustomIconProps) => {
  const IconComponent = icon; // Dynamically select the icon component based on the prop

  return <IconComponent {...rest} />;
};

export const NavigationItems = ({ icon, redirectTo, text, onClick }: props) => {
  if (!redirectTo) {
    return (
      <div
        onClick={onClick}
        className="flex items-center p-2 text-black hover:bg-boxColor hover:bg-opacity-60 group transition-all duration-200 cursor-pointer rounded-lg"
      >
        <CustomIcon icon={icon} className="group-hover:text-primary" />
        <span className="flex-1 ms-3 whitespace-nowrap group-hover:text-primary font-openSans ">
          {text}
        </span>
      </div>
    );
  }

  return (
    <NavLink
      to={redirectTo}
      onClick={onClick}
      className={({ isActive }) =>
        isActive
          ? "flex items-center p-2 justify-center bg-boxColor text-primary  hover:bg-boxColor group transition-all duration-200 cursor-pointer rounded-lg"
          : "flex items-center p-2 text-black hover:bg-boxColor hover:bg-opacity-60 group transition-all duration-200 cursor-pointer rounded-lg"
      }
    >
      <CustomIcon icon={icon} className="group-hover:text-primary" />
      <span className="flex-1 ms-3 whitespace-nowrap group-hover:text-primary font-openSans">
        {text}
      </span>
    </NavLink>
  );
};
