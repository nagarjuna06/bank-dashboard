import MobileMenu from "./MobileMenu";

const Navbar = () => {
  return (
    <div className="border-b-2 border-[#E6EFF5] p-4 px-8  flex justify-between items-center max-md:p-3">
      <div className="flex items-center gap-2">
        <MobileMenu />
        <p className="text-2xl text-[#343C6A] max-md:text-xl">Overview</p>
      </div>
      <div className="flex gap-8">
        <div className="bg-[#F5F7FA] p-3 rounded-full flex gap-2 items-center px-6 max-lg:hidden">
          <img src="/icons/search.svg" className="w-5 h-5" />
          <input
            type="search"
            placeholder="Search for Something"
            className="outline-none bg-transparent placeholder:text-[#8BA3CB]"
          />
        </div>
        <button className="max-md:hidden">
          <img
            src="/icons/settings-outline.svg"
            className="w-11 h-auto bg-[#F5F7FA] rounded-full  max-lg:w-10"
          />
        </button>
        <button className="max-md:hidden">
          <img
            src="/icons/notifications.svg"
            className="w-11 h-auto bg-[#F5F7FA] rounded-full max-lg:w-10"
          />
        </button>
        <button>
          <img
            src="/profile.png"
            className="w-14 h-auto rounded-full max-xl:w-10"
          />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
