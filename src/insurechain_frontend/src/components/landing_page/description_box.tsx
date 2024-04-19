import React from "react";

interface props {
  imageUrl: string;
  imageAlt: string;
  name: string;
  desc: string;
}

const DescriptionBox: React.FC<props> = ({
  imageUrl,
  imageAlt,
  desc,
  name,
}) => {
  return (
    <div className="flex flex-col w-[300px] gap-1">
      <img
        src={imageUrl}
        alt={imageAlt}
        className="h-auto animate-animfadeAbove"
      />
      <div className="flex flex-col text-center gap-2">
        <h1 className="text-black font-bold text-xl font-openSans text-center animate-animfadeBelow">
          {name}
        </h1>
        <h1 className="text-black font-normal text-sm  font-openSans text-center animate-animfadeBelow">
          {desc}
        </h1>
      </div>
    </div>
  );
};

export default DescriptionBox;
