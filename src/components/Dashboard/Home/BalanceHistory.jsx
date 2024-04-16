import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { balanceHistoryData } from "../../../../lib/transactions";

const BalanceHistory = () => {
  return (
    <div className="inline-block w-full max-w-[750px] text-sm">
      <h3 className="text-xl mb-3">Balance History</h3>
      <ResponsiveContainer
        width="100%"
        height={290}
        className="bg-white  rounded-badge p-4 max-md:p-1"
      >
        <AreaChart data={balanceHistoryData} barGap={30} height={250}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" axisLine={false} />
          <YAxis axisLine={false} />
          <Tooltip />
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#2D60FF80" stopOpacity={1} />
              <stop offset="95%" stopColor="#2D60FF00" stopOpacity={1} />
            </linearGradient>
          </defs>
          <Area
            type="monotone"
            dataKey="balance"
            stroke="#1814F3"
            strokeWidth={3}
            fillOpacity={5}
            fill="url(#colorUv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BalanceHistory;
