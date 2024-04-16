import { Link } from "react-router-dom";
import CreditCard from "../CreditCard";

const MyCards = () => {
  return (
    <div>
      {/* my cards header */}
      <div className="flex justify-between mb-3">
        <h3 className="text-2xl">My Cards</h3>
        <Link className="text-primary">See all</Link>
      </div>
      <div className="overflow-x-auto flex gap-5">
        <CreditCard color="text-white" bg="bg-primary" />
        <CreditCard color="text-[#343C6A]" bg="bg-white" image="grey" border />
      </div>
    </div>
  );
};

export default MyCards;
