import { buttonType } from "./states";

interface buttonStateProps {
  buttonType: buttonType;
  onTapYes?: () => void;
  onTapNo?: () => void;
  onTap?: () => void;
  onTapYesText?: string;
  onTapNoText?: string;
  onTapText?: string;
}

export const ButtonStates = ({
  buttonType,
  onTap,
  onTapYes,
  onTapNo,
  onTapNoText,
  onTapYesText,
  onTapText,
}: buttonStateProps) => {
  if (buttonType === "DUO") {
    return (
      <div className="flex flex-row w-full justify-center gap-2">
        <button
          onClick={onTapYes}
          className="bg-boxColor text-primary hover:bg-primary hover:text-boxColor border hover:border-boxColor font-bold py-3 rounded-lg my-5 w-full font-openSans transition-colors duration-500 ease-in-out h-[50px]"
        >
          {onTapYesText}
        </button>
        <button
          onClick={onTapNo}
          className="border-boxColor text-boxColor font-bold rounded-lg border py-3 my-5 w-full hover:bg-boxColor hover:text-primary font-openSans transition-colors duration-500 ease-in-out h-[50px]"
        >
          {onTapNoText}
        </button>
      </div>
    );
  }

  if (buttonType === "SINGLE") {
    return (
      <button
        onClick={onTap}
        className="bg-boxColor text-primary hover:bg-primary hover:text-boxColor border hover:border-boxColor font-bold py-3 rounded-lg my-5 w-full font-openSans transition-colors duration-500 ease-in-out h-[50px]"
      >
        {onTapText}
      </button>
    );
  }
};
