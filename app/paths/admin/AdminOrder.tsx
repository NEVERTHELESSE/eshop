import { useState } from "react";
import { Link } from "react-router";
import Image from "~/components/Image";
import Selection from "./Selection";

export default function Adminrder() {
  const lists = ["complete order", "Processing", "Delivered", "return"];
  const [selected, setSelected] = useState("complete order");
  return (
    <div className="w-[60vw] ">
      <Selection lists={lists} selected={selected} setSelected={setSelected} />
      <div className="flex">
        <div className="shadow-lg p-4 rounded-lg my-8">
          <div className="flex border-b p-2">
            <div className="size-20 rounded-full overflow-hidden">
              <Image src="/users/neverthelesse.png" alt="neverthelesse" />
            </div>
            <div className="ml-2">
              <p>Neverthelesse</p>
              <Link to={"www.gmail.com"}>neverthelesse21@gmail.com</Link>
              <p>
                21-03-2026 | <span>10:30 PM</span>
              </p>
            </div>
          </div>
          <div className="w-full my-3 h-60">
            <Image src="/products/shoe.png" alt="shoe" />
          </div>
          <div className="flex">
            <div className="mr-5">
              <p>Number of Product:</p>
              <p>Delivery Fee:</p>
              <p>Payment Method:</p>
              <p>Deliry Method</p>
              <p>Amount:</p>
              <p>Total Amount:</p>
            </div>
            <div className="font-bold">
              <p>3 Product </p>
              <p>$5.02 </p>
              <p>Pay on Delivery </p>
              <p>Pick up station</p>
              <p>$27.32 </p>
              <p className="text-2xl">$32.32 </p>
            </div>
          </div>
          <button className="w-full bg-primary rounded-2xl p-4 text-white font-bold ">
            View Order Details
          </button>
        </div>
      </div>
    </div>
  );
}
