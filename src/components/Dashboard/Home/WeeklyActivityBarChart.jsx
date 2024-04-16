import {
  Bar,
  BarChart,
  Legend,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import { barChartData } from "../../../../lib/transactions";

const WeeklyActivityBarChart = () => {
  return (
    <div className="w-full max-w-[820px]">
      <h3 className="text-xl mb-3">Weekly Activity</h3>
      <div className="bg-white rounded-3xl p-5 max-md:p-0 text-sm">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart barCategoryGap="25%" barGap="15%" data={barChartData}>
            <XAxis dataKey="day" axisLine={false} tickLine={false} />
            <YAxis axisLine={false} tickLine={false} />
            <Bar dataKey="deposit" fill="#1814F3" radius={20} />
            <Bar dataKey="withdraw" fill="#16DBCC" radius={20} />

            <Legend
              layout="horizontal"
              align="right"
              verticalAlign="top"
              iconType="circle"
              wrapperStyle={{
                paddingBottom: "30px",
              }}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default WeeklyActivityBarChart;
