import { Link } from "react-router-dom";
import { tabs } from "../../../lib/sidebar";

const MobileMenu = () => {
  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label htmlFor="my-drawer" className="2xl:hidden cursor-pointer">
          <img src="/icons/menu.svg" className="w-8 h-auto" />
        </label>
      </div>

      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-2 w-80 min-h-full bg-white text-base-content flex flex-col gap-4">
          {tabs.map((tab) => (
            <Link key={tab.path} className="flex" to={`/dashboard${tab.path}`}>
              <div className="flex items-center gap-6 py-2 pl-8">
                <img src={tab.icon} className="w-6 h-6" />
                <p className="text-lg text-[#B1B1B1]">{tab.title}</p>
              </div>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
