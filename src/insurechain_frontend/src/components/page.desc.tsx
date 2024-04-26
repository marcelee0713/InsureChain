interface props {
  pageName: string;
  pageDesc?: string;
  additionalStyle?: string;
}

export const PageDesciption = ({
  pageName,
  pageDesc,
  additionalStyle,
}: props) => {
  return (
    <div
      className={`flex flex-col gap-1 animate-animfadeLeftSide ${additionalStyle}`}
    >
      <h1 className="font-bold text-3xl">{pageName}</h1>
      {pageDesc && <p>{pageDesc}</p>}
    </div>
  );
};
