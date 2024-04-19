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
          className="bg-black w-full rounded-lg text-primary font-bold hover:bg-secondary font-openSans h-[50px]"
        >
          {onTapYesText}
        </button>
        <button
          onClick={onTapNo}
          className="border-secondary rounded-lg border w-full text-black font-bold hover:bg-black hover:text-primary font-openSans  h-[50px]"
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
        className="bg-black w-full rounded-lg text-primary font-bold hover:bg-secondary font-openSans h-[50px]"
      >
        {onTapText}
      </button>
    );
  }
};
