import { Link } from "react-router";
import Pickup from "../checkout/Pickup";
import OrderSummary from "../checkout/OrderSummary";

export default function CartSummary() {
  function placeOrder() {}

  return (
    <div className="w-[30%] flex flex-col p-2 rounded-lg shadow-lg ml-6 h-max bg-white">
      <Pickup />
      <OrderSummary />
    </div>
  );
}
