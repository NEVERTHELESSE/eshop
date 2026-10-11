import axios from "axios";
import { useState } from "react";
import { RiCoupon2Line } from "react-icons/ri";
import { Link, redirect } from "react-router";
import { toast } from "react-toastify";

export default function OrderSummary() {
  const [loading, setLoading] = useState(false);
  async function submitOrder() {
    setLoading(true);
    await axios
      .post(import.meta.env.VITE_APIURL + "hello", {
        email: "neverthelesse21@gmail.com",
        amount: 1000,
        currency: "NGN",
      })
      .then((res) => {
        setLoading(false);
        window.location.replace(res.data.message);
        console.log(res.data.message);
      })
      .catch((e) => {
        toast("There was an error while checking out, Kindly try again later", {
          type: "error",
        });
        setLoading(false);
      });
  }

  return (
    <main className="w-full ">
      <div className="w-full p-2 bg-white shadow-lg rounded-lg">
        <h5 className="font-bold py-2 mb-3 border-b border-b-soft">
          Order summary
        </h5>
        <div className="flex border-b border-b-soft py-2 justify-between">
          <p>Item's total (1)</p> <p>2,134,00</p>
        </div>
        <div className="flex border-b border-b-soft justify-between py-3">
          <p>Delivery fees </p> <p>1,700</p>
        </div>
        <div className="flex border-b border-b-soft justify-between py-3">
          <p>Total </p> <p>2,169,700</p>
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
        {loading ? (
          <button
            className="w-full bg-soft cursor-not-allowed duration-200 p-3 rounded-lg my-4 font-black text-white"
            onClick={submitOrder}
            type="submit"
          >
            Loading
          </button>
        ) : (
          <button
            className="w-full bg-primary hover:bg-secondary duration-200 cursor-pointer p-3 rounded-lg my-4 font-black text-white"
            onClick={submitOrder}
            type="submit"
          >
            Checkout
          </button>
        )}
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
