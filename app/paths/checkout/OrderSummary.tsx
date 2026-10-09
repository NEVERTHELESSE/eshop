import axios from "axios";
import { RiCoupon2Line } from "react-icons/ri";
import { Link } from "react-router";

export default function OrderSummary() {
  async function submitOrder() {
    await axios
      .post(import.meta.env.VITE_APIURL + "/api/OpayPayment")
      .then((res) => console.log(res.data))
      .catch((e) => console.log(e));
  }

  return (
    <main className="w-[30%] ">
      <div className="w-full p-2 bg-white shadow-lg rounded-lg">
        <h5 className="font-bold py-2 mb-3 border-b border-b-soft">
          Order summary
        </h5>
        <div className="flex border-b border-b-soft py-2 justify-between">
          <p>Item's total (1)</p> <h3>2,134,00</h3>
        </div>
        <div className="flex border-b border-b-soft justify-between py-3">
          <p>Delivery fees </p> <h3>1,700</h3>
        </div>
        <div className="flex border-b border-b-soft justify-between py-3">
          <p>Total </p> <h3>2,169,700</h3>
        </div>
        <div className="flex border-b border-b-soft justify-between py-2">
          <div className="flex items-center justify-between w-full relative">
            <input
              type="text"
              className="rounded-lg border border-soft  p-3 pl-10 "
              placeholder="Enter code here"
            />
            <RiCoupon2Line className="absolute left-3" />
            <button>Apply</button>
          </div>
        </div>
        <button
          className="w-full bg-soft p-3 rounded-lg my-4 font-black text-white"
          onClick={submitOrder}
        >
          Confirm Order
        </button>
        <p className="text-center">(Complete the steps in order to proceed)</p>
      </div>
      <p>
        Please use a Whatsapp-enabled number to receiver faster delivery updates
        and support. Tap "Change" to updates your number before checkout. By
        proceeding, you are automatically accepting the
        <Link to="terms-and-conditions" className="text-secondary-400">
          Terms & Condition
        </Link>
      </p>
    </main>
  );
}
