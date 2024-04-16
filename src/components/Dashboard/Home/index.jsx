import BalanceHistory from "./BalanceHistory";
import ExpenseStatistics from "./ExpenseStatistics";
import MyCards from "./MyCards";
import QuickTransfer from "./QuickTransfer";
import RecentTransactions from "./RecentTransactions";
import WeeklyActivityBarChart from "./WeeklyActivityBarChart";

const Home = () => {
  return (
    <div className="p-5 bg-[#F5F7FA] flex flex-col gap-4">
      {/* section 1 */}
      <div className="flex gap-8 max-xl:flex-col">
        <MyCards />
        <RecentTransactions />
      </div>
      {/* section 2 */}
      <div className="flex gap-8 max-xl:flex-col">
        <WeeklyActivityBarChart />
        <ExpenseStatistics />
      </div>
      <div className="flex gap-8 max-lg:flex-col">
        <QuickTransfer />
        <BalanceHistory />
      </div>
    </div>
  );
};

export default Home;
