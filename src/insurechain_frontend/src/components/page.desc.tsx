interface props {
  pageName: string;
  pageDesc: string;
}

export const PageDesciption = ({ pageName, pageDesc }: props) => {
  return (
    <div className="flex flex-col gap-1 animate-animfadeLeftSide">
      <h1 className="font-bold text-3xl">{pageName}</h1>
      <p>{pageDesc}</p>
    </div>
  );
};
