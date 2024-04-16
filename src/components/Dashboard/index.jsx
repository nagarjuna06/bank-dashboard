import Home from "./Home";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-6">
      <Sidebar />
      <div className="col-span-5 max-2xl:col-span-6">
        <Navbar />
        <Home />
      </div>
    </div>
  );
};

export default Dashboard;
