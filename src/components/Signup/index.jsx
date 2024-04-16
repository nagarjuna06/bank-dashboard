import { signUpFields } from "../../../lib/form";
import Input from "../ui/input";
import AuthenticationTemplate from "../ui/authenticationTemplate";
import ThirdPartySignIn from "../ui/ThirdPartySignIn";
import Logo from "../ui/Logo";

const SignUp = () => {
  return (
    <div className="container py-3">
      <Logo />
      <div className="grid grid-cols-2 max-md:grid-cols-1 gap-8 content-center max-md:mt-16">
        <AuthenticationTemplate type="register" />
        <form className="flex flex-col gap-4 max-w-[400px]">
          <h2 className="text-3xl font-semibold max-md:hidden">Sign Up</h2>
          {signUpFields.map((each, index) => (
            <Input key={index} {...each} />
          ))}
          <button type="submit" className="btn btn-primary">
            Register
          </button>
          <ThirdPartySignIn />
        </form>
      </div>
    </div>
  );
};

export default SignUp;
