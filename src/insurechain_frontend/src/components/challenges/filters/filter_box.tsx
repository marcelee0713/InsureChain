import { Dispatch, SetStateAction } from "react";
import { FaCaretDown } from "react-icons/fa";
import { FilterTile } from "./filter_tile";

interface props {
  element: string;
  onElementChange: Dispatch<SetStateAction<string>>;
  filterArr: string[];
}

export const FilterBox = ({ element, filterArr, onElementChange }: props) => {
  return (
    <div className="group text-sm relative hover:border-none bg-boxColor px-3 py-2 w-[150px] text-primary rounded-lg">
      <div className="flex items-center justify-between gap-2 rounded-lg cursor-pointer w-full">
        <div className={`font-bold`}>{element}</div>
        <FaCaretDown />
      </div>
      <ul
        className={`font-bold absolute w-full left-0 top-0 flex flex-col transition-opacity rounded-lg -z-10 opacity-0 group-hover:z-10 group-hover:opacity-100`}
      >
        {filterArr.map((val, i) => {
          const selected: boolean =
            filterArr.findIndex((val) => val === element) === i;

          return (
            <FilterTile
              index={i}
              onClick={() => onElementChange(filterArr[i])}
              selected={selected}
              text={val}
              key={i}
              arrayLength={filterArr.length}
            />
          );
        })}
      </ul>
    </div>
  );
};
