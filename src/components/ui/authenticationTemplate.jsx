import { Link } from "react-router-dom";

const AuthenticationTemplate = ({ type = "register" }) => {
  const register = type === "register";
  return (
    <div className="flex flex-col relative self-center">
      <div className="flex flex-col gap-2 ">
        <h1 className="text-5xl font-bold max-md:text-4xl">
          Sign {register ? "up" : "in"} to
        </h1>
        <h3 className="text-3xl max-md:text-2xl font-semibold mb-10">
          Lorem Ipsum is simply
        </h3>
        <p>
          {register
            ? "If you already have an account"
            : "If you don't have an account register"}
        </p>
        <p>
          You can{" "}
          {register ? (
            <Link className="text-primary font-bold" to="/login">
              Login here!
            </Link>
          ) : (
            <Link className="text-primary font-bold" to="/register">
              Register here!
            </Link>
          )}
        </p>
      </div>
      <img
        className="h-auto w-full max-w-[280px] absolute top-10 self-end max-xl:hidden"
        src="/authentication.png"
      />
    </div>
  );
};

export default AuthenticationTemplate;
