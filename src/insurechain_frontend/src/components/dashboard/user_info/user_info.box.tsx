import { IconBaseProps, IconType } from "react-icons";

interface props {
  headText: string;
  subText: string;
  icon: IconType;
  iconSize?: number;
  altText?: string;
  width?: string;
}

interface CustomIconProps extends IconBaseProps {
  icon: IconType;
}

const CustomIcon = ({ icon, ...rest }: CustomIconProps) => {
  const IconComponent = icon;

  return <IconComponent {...rest} />;
};

export const UserInfoBox = ({
  headText,
  subText,
  icon,
  iconSize,
  altText,
  width,
}: props) => {
  const newWidth = width ? width : "w-full";

  const defaultStyle =
    "rounded-lg bg-boxColor text-primary px-8 py-5 flex gap-4";

  return (
    <div className={`${defaultStyle} h-full items-center ${newWidth}`}>
      <CustomIcon icon={icon} size={iconSize} />
      <div className="flex flex-col gap-[2px]">
        <div className="text-base">
          <span>{headText}</span>
        </div>
        <div className="text-sm font-bold">
          <span>{subText}</span>
        </div>
        {altText && <div className="text-sm font-light italic">{altText}</div>}
      </div>
    </div>
  );
};
