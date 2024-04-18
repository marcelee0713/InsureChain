import { Link } from "react-router-dom";

const Signin = () => {
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
          <label htmlFor="password" className="font-semibold my-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="bg-boxColor border-secondary rounded-lg border py-3 px-3 text-accent hover:border-black"
            placeholder="Enter your password"
          />
          <p className="text-accent font-openSans w-full text-right mb-2 text-xs mt-2">
            Forgot password?
          </p>
          <button
            type="button"
            className="bg-black text-primary font-bold py-3 rounded-lg my-5 hover:bg-secondary hover:text-primary "
          >
            Sign in
          </button>
          <hr className="border-secondary" />
          <Link to="Signup" className="w-full h-full">
            <button
              type="button"
              className="border-secondary font-bold rounded-lg border py-3 my-5 w-full hover:bg-black hover:text-primary"
            >
              Create an Account
            </button>
          </Link>
        </div>
      </form>
    </section>
  );
};

export default Signin;
