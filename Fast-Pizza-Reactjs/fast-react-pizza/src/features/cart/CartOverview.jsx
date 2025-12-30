import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";

function CartOverview() {
  const toatalCartQuantity= useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);
  if(!toatalCartQuantity) return null;
  return (
    <div className="flex items-center justify-between  bg-stone-800 text-stone-200 uppercase p-4 sm:px-6 text-sm md:text-base">
      <p className="text-stone-200 font-semibold space-x-4 sm:space-x-6">
        <span>{toatalCartQuantity} pizzas</span>
        <span>${totalCartPrice}</span>
      </p>
      <Link to="/cart">Open Cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
