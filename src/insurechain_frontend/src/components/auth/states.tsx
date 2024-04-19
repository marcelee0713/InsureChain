import { ButtonStates } from "./states.buttonts";
import { authStatusImages } from "./states.images";

export type stateType = "SUCCESS" | "ERROR" | "WARNING";
export type buttonType = "DUO" | "SINGLE" | "NONE";

interface props {
  type: stateType;
  alt?: string;
  buttonType: buttonType;
  header: string;
  desc: string;
  onTapYes?: () => void;
  onTapNo?: () => void;
  onTap?: () => void;
  onTapYesText?: string;
  onTapNoText?: string;
  onTapText?: string;
  style?: string;
}

export const AuthStates = (states: props) => {
  const image = authStatusImages(states.type);

  return (
    <div className={states.style}>
      <img src={image} alt={states.alt} className="object-cover" />

      <div className="flex flex-col justify-center items-center gap-2 font-openSans">
        <p className="text-black font-bold text-center font-openSans">
          {states.header}
        </p>
        <p className="text-center font-openSans">{states.desc}</p>

        <ButtonStates {...states} />
      </div>
    </div>
  );
};
