import { Outlet } from "react-router-dom";

const SigninLayout = () => {
  return (
    <section>
      <div className="flex justify-center items-center bg-primary">
        <div className="mx-16">
          <h1 className="text-black text-[50px] font-bold">InsureChain</h1>
          <p className="text-black">
            Earn insurance coverage by completing challenges on blockchain.
          </p>
        </div>
        <div className="mx-16">
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default SigninLayout;
