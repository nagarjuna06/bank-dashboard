import { useNavigate } from "react-router-dom";
import { loginFields } from "../../../lib/form";
import { validateLogin } from "../../../lib/loginHandler";
import AuthenticationTemplate from "../ui/authenticationTemplate";
import Input from "../ui/input";
import ThirdPartySignIn from "../ui/ThirdPartySignIn";
import Logo from "../ui/Logo";

const Login = () => {
  const router = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    if (validateLogin(formData)) {
      sessionStorage.setItem("__token", crypto.randomUUID());
      router("/dashboard");
      return;
    }
    alert("Invalid Credentials!");
  };
  return (
    <div className="container py-3">
      <Logo />
      <div className="grid grid-cols-2 gap-8 max-md:grid-cols-1 content-center h-[75vh] max-md:mt-16">
        <AuthenticationTemplate type="login" />
        <form
          className="flex flex-col gap-4 max-w-[400px]"
          onSubmit={handleSubmit}
        >
          <h2 className="text-3xl font-semibold max-md:hidden">Sign in</h2>
          {loginFields.map((each, index) => (
            <Input key={index} {...each} />
          ))}
          <button type="submit" className="btn btn-primary">
            Login
          </button>
          <ThirdPartySignIn />
        </form>
      </div>
    </div>
  );
};

export default Login;
