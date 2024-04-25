interface props {
  text: string;
  onClick: () => void;
  index: number;
  selected: boolean;
  arrayLength: number;
}

export const FilterTile = ({
  onClick,
  text,
  index,
  selected,
  arrayLength,
}: props) => {
  const elementStyle = `${
    selected ? "bg-secondary" : "bg-boxColor"
  } cursor-pointer transition-color duration-300 ease-in-out hover:bg-secondary px-3 py-2`;

  const firstElementStyle = elementStyle + " rounded-t-lg";

  const lastElementStyle = elementStyle + " rounded-b-lg";

  let chosenStyle = elementStyle;

  let beginningAndEndingIndex = index === 0 || index === arrayLength - 1;

  if (beginningAndEndingIndex) {
    chosenStyle = index === 0 ? firstElementStyle : lastElementStyle;
  }

  return (
    <li onClick={onClick} key={index} className={chosenStyle}>
      {text}
    </li>
  );
};
