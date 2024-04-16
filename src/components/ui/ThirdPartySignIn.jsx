const ThirdPartySignIn = () => {
  return (
    <div className="flex flex-col items-center mt-6">
      <p>or continue with</p>
      <div className="flex gap-6 mt-8">
        <button type="button">
          <img src="/apple.svg" className="w-8 h-8" />
        </button>
        <button type="button">
          <img src="/google.svg" className="w-8 h-8" />
        </button>
      </div>
    </div>
  );
};

export default ThirdPartySignIn;
