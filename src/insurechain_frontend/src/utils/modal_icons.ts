import { IconType } from "react-icons";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FaInfoCircle, FaWindowClose, FaCheck } from "react-icons/fa";
import { IoIosWarning } from "react-icons/io";
import { modalMode } from "../types/modal";

export const getModalIcon = (mode: modalMode): IconType => {
  switch (mode) {
    case "CONFIRMATION":
      return IoIosWarning;

    case "INFORMATIONAL":
      return FaInfoCircle;

    case "ERROR":
      return FaWindowClose;

    case "SUCCESS":
      return FaCheck;

    default:
      return AiOutlineLoading3Quarters;
  }
};
