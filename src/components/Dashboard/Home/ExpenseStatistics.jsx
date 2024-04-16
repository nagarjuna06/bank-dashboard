import PieChart from "../../charts/PieChart";

const ExpenseStatistics = () => {
  return (
    <div className="max-w-[400px] w-full text-sm">
      <h3 className="text-xl mb-3">Expense Statistics</h3>
      <div className="bg-white rounded-badge  text-sm h-[350px] ">
        <PieChart />
      </div>
    </div>
  );
};

export default ExpenseStatistics;
