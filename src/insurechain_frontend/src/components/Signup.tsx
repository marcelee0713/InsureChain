import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <section>
      <form action="">
        <div className="h-scre bg-boxColor border-secondary border rounded-lg p-[36px] font-openSans flex flex-col lg:min-w-[488px] w-full sm:min-w-[200px] h-full border-opacity-20">
          <label htmlFor="username" className="font-semibold my-1 text-black">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="bg-boxColor border-secondary rounded-lg border mb-4 px-3 py-3 hover:border-black"
            placeholder="Enter your username"
          />
          <label htmlFor="email" className="font-semibold my-1 text-black">
            Email
          </label>
          <input
            type="text"
            id="email"
            className="bg-boxColor border-secondary rounded-lg border mb-4 px-3 py-3 hover:border-black"
            placeholder="Enter your email"
          />
          <label htmlFor="password" className="font-semibold my-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="bg-boxColor border-secondary rounded-lg border mb-4 py-3 px-3 text-accent hover:border-black"
            placeholder="Enter your password"
          />
          <label htmlFor="confirmPassword" className="font-semibold my-1">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            className="bg-boxColor border-secondary rounded-lg border py-3 px-3 text-accent hover:border-black"
            placeholder="Enter your confirm password"
          />
          <Link to="/Registerlayout">
            <p className="text-accent font-openSans w-full text-right mb-2 text-xs mt-2">
              Already Have an Account?
            </p>
          </Link>
          <Link to="/registerlayout/success" className="w-full">
            <button
              type="button"
              className="bg-black text-primary w-full font-bold py-3 rounded-lg my-5 hover:bg-secondary hover:text-primary"
            >
              Sign Up
            </button>
          </Link>
          <hr className="border-secondary" />
          <p className="text-xs py-4">
            By creating an account you agree to our{" "}
            <span className="font-bold">Terms of Agreement </span>and
            <span className="font-bold"> Privacy Policy.</span>
          </p>
        </div>
      </form>
    </section>
  );
};

export default Signup;
