import { cardDetails } from "../../../lib/dashboard";

const CreditCard = ({
  color = "white",
  bg = "primary",
  image = "white",
  border = false,
}) => {
  return (
    <div className="inline-block">
      <div
        className={`${bg} w-[400px]  max-md:w-[350px] rounded-3xl ${color} border-2 border-[#E6EFF5] flex-grow`}
      >
        <div className="pb-0 p-6">
          {/* balance */}
          <div className="flex justify-between">
            <div>
              <p>Balance</p>
              <h4 className="font-semibold text-xl">
                $ {cardDetails.balance.toLocaleString()}
              </h4>
            </div>
            <img src="/icons/card-chip.png" className="w-10 h-10" />
          </div>
          {/* holder name and valid till */}
          <div className="grid grid-cols-2 gap-8 my-6">
            <div>
              <p className="font-light uppercase">card holder</p>
              <h4>{cardDetails.cardHolder}</h4>
            </div>
            <div>
              <p className="font-light uppercase">valid thru</p>
              <h4>{cardDetails.validTill}</h4>
            </div>
          </div>
        </div>

        {/* card no */}

        <div
          className={`flex justify-between items-center bg-gradient-to-r from-gray-50/20 via-gray-50/40 to-gray-50/20 pb-4 px-6 ${
            border ? "border-t-2" : ""
          }  border-[#E6EFF5]`}
        >
          <h4 className="text-2xl">{cardDetails.cardNo}</h4>
          <img src={`/icons/master-${image}.svg`} className="w-12 h-12" />
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
