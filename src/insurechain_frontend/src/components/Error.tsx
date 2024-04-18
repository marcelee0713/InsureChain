import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-boxColor border rounded-lg border-boxColor w-[488px] py-16 px-8">
      <img
        src="/images/error.png"
        alt="Warning Vector"
        className="object-cover mb-3"
      />
      <p className="text-black font-bold mb-2 text-center">
        Unverified email address
      </p>
      <p className="text-center">
        In order to sign in, we have to verify your email first.We sent you an
        email verification after creating an account. Would you like to send
        another email verification?
      </p>
      <div className="flex flex-row w-full justify-center mt-4">
        <Link to="/RegisterLayout/Signup" className="w-full mx-3">
          <button className="bg-black py-3 w-full rounded-lg text-primary font-bold hover:bg-secondary">
            Yes
          </button>
        </Link>
        <Link to="/RegisterLayout/Signin" className="w-full mx-3">
          <button className="border-secondary rounded-lg border py-3 w-full text-black font-bold hover:bg-black hover:text-primary">
            No
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
