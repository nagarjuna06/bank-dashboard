import { usersData } from "../../../../lib/transactions";

const QuickTransfer = () => {
  return (
    <div>
      <h3 className="text-xl mb-3">Weekly Activity</h3>
      <div className="bg-white rounded-3xl p-10 flex flex-col gap-10 max-md:p-4">
        <div className="flex items-center gap-8 ">
          {usersData.map((user, index) => (
            <div key={index} className="text-center max-md:text-sm">
              <img
                src={user.image}
                className="w-16 h-auto rounded-full mb-3 max-md:w-14"
              />
              <h4>{user.name}</h4>
              <p className="text-[#718EBF] text-sm">{user.role}</p>
            </div>
          ))}
          <button className="p-2 rounded-full shadow-lg">
            <img src="/icons/right-arrow.svg" className="h-auto w-8" />
          </button>
        </div>
        <div className="flex gap-4 items-center ">
          <p className="text-[#718EBF]">Write Amount</p>
          <div className="flex bg-[#EDF1F7] rounded-badge ">
            <input
              type="text"
              placeholder="Enter Amount"
              className="outline-none  p-3 placeholder:text-[#8BA3CB] bg-transparent  w-[140px]"
            />
            <button className="bg-primary p-2 px-4 text-white rounded-badge flex gap-2 items-center">
              <span>Send</span>
              <img src="/icons/send.svg" className="h-auto w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickTransfer;
