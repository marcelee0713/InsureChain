import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import { ModalMode } from "../../types/modal";
import { ModalStates } from "./modal.states";

interface props {
  setModal: Dispatch<SetStateAction<boolean>>;
  onClick?: () => void;
  onClose?: () => void;
  onClickOutside?: () => void;
  text: string;
  subText: string;
  buttonText?: string;
  buttonCloseText?: string;
  mode: ModalMode;
  canCloseOutside?: boolean;
}

export const Modal = ({
  onClick,
  onClickOutside,
  onClose,
  setModal,
  subText,
  text,
  buttonText,
  buttonCloseText,
  mode,
  canCloseOutside,
}: props) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleOutSideClick = (e: MouseEvent) => {
      if (!modalRef.current?.contains(e.target as Node)) {
        onClickOutside && onClickOutside();

        if (canCloseOutside !== undefined && !canCloseOutside) return;
        setModal(false);
      }
    };

    window.addEventListener("mousedown", handleOutSideClick);

    return () => {
      window.removeEventListener("mousedown", handleOutSideClick);
    };
  }, [modalRef]);

  return (
    <div
      className={`absolute inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex justify-center items-center z-20 text-accent w-full h-full px-10 py-7`}
    >
      <div
        ref={modalRef}
        className="flex flex-col items-center justify-center w-[450px] h-[350px] bg-primary rounded-buttons gap-3 py-3 px-5 rounded-lg shadow-lg text-b text-black"
      >
        <ModalStates
          mode={mode}
          text={text}
          subText={subText}
          buttonText={buttonText}
          buttonCloseText={buttonCloseText}
          onClick={onClick}
          onClose={onClose}
        />
      </div>
    </div>
  );
};
