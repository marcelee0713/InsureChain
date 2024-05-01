import { IconBaseProps, IconType } from "react-icons";
import { ModalMode } from "../../types/modal";
import { getModalIcon } from "../../utils/modal_icons";

interface modalStatesProps {
  mode: ModalMode;
  text: string;
  subText: string;
  buttonText?: string;
  buttonCloseText?: string;
  onClick?: () => void;
  onClose?: () => void;
}

interface CustomIconProps extends IconBaseProps {
  icon: IconType;
}

export const CustomIcon = ({ icon, ...rest }: CustomIconProps) => {
  const IconComponent = icon;

  return <IconComponent {...rest} />;
};

export const ModalStates = ({
  mode,
  subText,
  text,
  buttonCloseText,
  buttonText,
  onClick,
  onClose,
}: modalStatesProps) => {
  let icon = getModalIcon(mode);

  if (mode === "CONFIRMATION" || mode === "ERROR" || mode === "SUCCESS") {
    return (
      <>
        <CustomIcon icon={icon} size={150} />
        <div className="flex flex-col gap-1 items-center justify-center text-boxColor">
          <div className="font-bold text-xl">{text}</div>
          <div className="font-sm text-base text-center">{subText}</div>
        </div>
        <div className="flex h-[45px] w-full gap-2">
          <button
            className="flex-1 bg-boxColor w-full rounded-lg text-primary font-bold hover:bg-primary hover:text-boxColor border border-boxColor duration-300 ease-in-out transition-colors"
            onClick={onClick}
          >
            {buttonText ? buttonText : "Yes"}
          </button>
          <button
            className="flex-1 border-boxColor rounded-lg border w-full text-boxColor font-bold hover:bg-boxColor hover:text-primary duration-300 ease-in-out transition-colors"
            onClick={onClose}
          >
            {buttonCloseText ? buttonCloseText : "Close"}
          </button>
        </div>
      </>
    );
  }

  if (mode === "INFORMATIONAL") {
    return (
      <>
        <CustomIcon icon={icon} size={150} />
        <div className="flex flex-col gap-1 items-center justify-center text-boxColor">
          <div className="font-bold text-xl">{text}</div>
          <div className="font-sm text-base text-center">{subText}</div>
        </div>
        <div className="flex h-[45px] w-full gap-2">
          <button
            className="flex-1 bg-boxColor w-full rounded-lg text-primary font-bold hover:bg-primary hover:text-boxColor border border-boxColor duration-300 ease-in-out transition-colors"
            onClick={onClick}
          >
            {buttonText ? buttonText : "Yes"}
          </button>
        </div>
      </>
    );
  }

  return <CustomIcon icon={icon} size={150} className="animate-spin" />;
};
