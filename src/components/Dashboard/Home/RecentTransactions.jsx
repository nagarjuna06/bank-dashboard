import { recentTransactions } from "../../../../lib/dashboard";
import { format } from "date-fns";

const RecentTransactions = () => {
  return (
    <div>
      <h3 className="text-xl mb-3">Recent Transaction</h3>
      <div className="bg-white p-6 flex flex-col gap-5 w-full rounded-3xl">
        {recentTransactions.map((each, index) => (
          <div key={index} className="flex gap-10 items-center justify-between">
            <div className="flex gap-4">
              <img src={each.icon} />
              <div>
                <p>{each.title}</p>
                <p className="text-[#718EBF]">
                  {format(new Date(each.date), "dd MMMM yyyy")}
                </p>
              </div>
            </div>
            <p className={each.credit ? "text-green-500" : "text-red-500"}>
              {each.debit ? "-" : "+"}${each.amount.toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentTransactions;
