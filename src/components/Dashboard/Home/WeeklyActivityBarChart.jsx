import BarChart from "../../charts/BarChart";

const WeeklyActivityBarChart = () => {
  return (
    <div className="w-full max-w-[820px]">
      <h3 className="text-xl mb-3">Weekly Activity</h3>
      <div className="bg-white rounded-badge  text-sm h-[350px]">
        <BarChart />
      </div>
    </div>
  );
};

export default WeeklyActivityBarChart;
