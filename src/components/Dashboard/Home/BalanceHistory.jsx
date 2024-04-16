import LineChart from "../../charts/LineChart";

const BalanceHistory = () => {
  return (
    <div className="inline-block w-full max-w-[750px] text-sm">
      <h3 className="text-xl mb-3">Balance History</h3>
      <div className="h-[300px] w-full bg-white rounded-badge p-5">
        <LineChart />
      </div>
    </div>
  );
};

export default BalanceHistory;
