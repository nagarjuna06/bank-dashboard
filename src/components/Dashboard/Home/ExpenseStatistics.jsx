import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import { pieChartData } from "../../../../lib/transactions";

const ExpenseStatistics = () => {
  const RADIAN = Math.PI / 190;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <>
        <text
          x={x}
          y={y}
          fill="white"
          textAnchor={x > cx ? "start" : "end"}
          dominantBaseline="central"
          className="text-lg font-semibold"
        >
          {`${(percent * 100).toFixed(0)}%`}
        </text>
        <text
          x={x + (x > cx ? -40 : 30) + (index == 3 ? 30 : 0)}
          y={y + 15}
          fill="white"
          textAnchor={x > cx ? "start" : "end"}
          dominantBaseline="central"
          className="font-semibold"
        >
          {pieChartData[index].category}
        </text>
      </>
    );
  };
  return (
    <div className="max-w-[400px] w-full text-sm">
      <h3 className="text-xl mb-3">Expense Statistics</h3>
      <ResponsiveContainer width="100%" height={350}>
        <PieChart className="bg-white rounded-3xl p-2">
          <Pie
            data={pieChartData}
            cx={180}
            cy={180}
            angleNumDecimalPlaces={1}
            dataKey="value"
            label={renderCustomizedLabel}
            labelLine={false}
          >
            {pieChartData.map((each) => (
              <Cell
                key={`cell-${each.category}`}
                fill={each.bgColor}
                style={{ strokeWidth: "3px" }}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ExpenseStatistics;
