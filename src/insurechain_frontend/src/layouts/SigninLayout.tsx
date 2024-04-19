import { Outlet } from "react-router-dom";

const SigninLayout = () => {
  return (
    <section className="flex justify-between items-center bg-primary h-full w-full px-16">
      <div className="flex flex-col gap-2">
        <h1 className="text-black text-[50px] font-bold font-openSans animate-animfadeLeftSide">
          InsureChain
        </h1>
        <p className="text-black font-openSans animate-animfadeLeftSide">
          Earn insurance coverage by completing challenges on blockchain.
        </p>
      </div>
      <Outlet />
    </section>
  );
};

export default SigninLayout;
