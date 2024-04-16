import { useState } from "react";

const Input = ({ type = "text", placeholder = "", name = "", required }) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="bg-[#F0EFFF] relative p-4 rounded-lg w-full">
      <input
        name={name}
        className="w-full outline-none bg-transparent placeholder:text-[#A7A3FF]"
        type={showPassword ? "text" : type}
        placeholder={placeholder}
        required={required}
      />
      {type === "password" && (
        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute top-4 right-4"
        >
          {showPassword ? (
            <img src="/icons/eye.svg" className="w-6 h-6" />
          ) : (
            <img src="/icons/eye-off.svg" className="w-6 h-6 " />
          )}
        </button>
      )}
    </div>
  );
};

export default Input;
