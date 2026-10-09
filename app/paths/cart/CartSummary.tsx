import { Link } from "react-router";

export default function CartSummary() {
  return (
    <div className="w-[30%] flex flex-col p-2 rounded-lg shadow-lg ml-6 h-max bg-white">
      <h3 className="border-b-soft border-b my-3 pb-2">CART Summary</h3>
      <div className="flex justify-between my-4">
        <p>Subtotal</p>
        <h3>N2,168,000</h3>
      </div>
      <Link
        to="/checkout"
        className="w-full p-2 text-white bg-primary rounded-lg text-center"
      >
        Checkout (N23,000)
      </Link>
    </div>
  );
}
