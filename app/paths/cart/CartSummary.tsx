import { Link } from "react-router";

export default function CartSummary() {
  function placeOrder() {}

  return (
    <div className="w-[30%] flex flex-col p-2 rounded-lg shadow-lg ml-6 h-max bg-white">
      <p className="border-b-soft border-b my-3 pb-2">CART Summary</p>
      <div className="flex justify-between my-4">
        <p>Subtotal</p>
        <p>N2,168,000</p>
      </div>
      <button
        onClick={placeOrder}
        className="w-full p-2 text-white bg-primary rounded-lg text-center"
      >
        Checkout (N23,000)
      </button>
    </div>
  );
}
