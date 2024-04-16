import { Link, useLocation } from "react-router-dom";
import { tabs } from "../../../lib/sidebar";

const Sidebar = () => {
  const { pathname } = useLocation();
  return (
    <div className="flex flex-col gap-y-5 pt-8 border-r-2 border-[#E6EFF5] w-full h-screen max-2xl:hidden">
      <div className="px-8 flex gap-4">
        <img src="/logo.png" className="w-8 h-8" />
        <p className="text-xl">BankDash.</p>
      </div>

      {tabs.map((tab) => (
        <Link key={tab.path} className="flex" to={`/dashboard${tab.path}`}>
          {pathname === `/dashboard${tab.path}` ? (
            <div className="w-1.5 rounded-r-full bg-primary" />
          ) : (
            <div className="w-1.5" />
          )}
          <div className="flex items-center gap-6 py-2 pl-8">
            <img src={tab.icon} className="w-6 h-6" />
            <p className="text-lg text-[#B1B1B1]">{tab.title}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
