import React from "react";

interface props {
  tailwindStyle?: string;
}

export const AuthLoading: React.FC<props> = ({ tailwindStyle }) => {
  return (
    <div className={tailwindStyle}>
      <img
        src={"/images/loading.svg"}
        alt="My SVG"
        className="h-[150px] w-[150px] animate-spin"
      />
    </div>
  );
};
