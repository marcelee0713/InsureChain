import { Dispatch, SetStateAction } from "react";
import { FaCaretDown } from "react-icons/fa";
import { FilterTile } from "./filter_tile";
import { FilterBox } from "./filter_box";

interface props {
  input: string;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  arr?: string[];
  element?: string;
  onElementChange?: Dispatch<SetStateAction<string>>;
  dateArr?: string[];
  date?: string;
  onDateChange?: Dispatch<SetStateAction<string>>;
  mode: "INPUT-ONLY" | "WITH-FILTER" | "ALL-IN";
}

export const Filters = ({
  arr,
  element,
  input,
  onElementChange,
  onInputChange,
  dateArr,
  date,
  onDateChange,
  mode,
}: props) => {
  const inputStyle =
    "outline-none border bg-boxColor border-secondary px-3 py-2 w-[220px] text-black font-bold text-sm placeholder:text-black placeholder:font-light placeholder:text-sm rounded-lg";

  const isSolo = mode === "INPUT-ONLY";
  const isDuo = mode === "WITH-FILTER" && arr && element && onElementChange;
  const isAllIn =
    mode === "ALL-IN" &&
    arr &&
    element &&
    onElementChange &&
    date &&
    dateArr &&
    onDateChange;

  if (isSolo) {
    return (
      <input
        value={input}
        onChange={onInputChange}
        placeholder="&#128270; Search..."
        type="text"
        className={inputStyle}
      />
    );
  }

  if (isDuo) {
    return (
      <div className="flex gap-2 h-10">
        <input
          value={input}
          onChange={onInputChange}
          placeholder="&#128270; Search..."
          type="text"
          className={inputStyle}
        />

        <FilterBox
          element={element}
          filterArr={arr}
          onElementChange={onElementChange}
        />
      </div>
    );
  }

  if (isAllIn) {
    return (
      <div className="flex gap-2 h-10">
        <input
          value={input}
          onChange={onInputChange}
          placeholder="&#128270; Search..."
          type="text"
          className={inputStyle}
        />

        <FilterBox
          element={element}
          filterArr={arr}
          onElementChange={onElementChange}
        />

        <FilterBox
          element={date}
          filterArr={dateArr}
          onElementChange={onDateChange}
        />
      </div>
    );
  }
};
