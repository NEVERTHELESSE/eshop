import { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import { toast } from "react-toastify";

export default function CartChange() {
  const [quantity, setQuantity] = useState(1);

  function addQuantity() {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    } else {
      toast('Quanity can"t be less than 1', { type: "warning" });
    }
  }

  return (
    <main className="w-70 flex rounded-lg my-4 justify-between items-center">
      <button
        onClick={addQuantity}
        className={` p-2  text-white font-bold shadow-lg rounded-lg ${quantity > 1 ? "bg-primary cursor-pointer" : "bg-gray-500 cursor-not-allowed"}`}
      >
        <FiMinus size={20} />
      </button>
      <p>{quantity}</p>
      <button
        onClick={() => setQuantity((prev) => prev + 1)}

        className="bg-primary p-2 cursor-pointer text-white font-bold shadow-lg rounded-lg"
      >
        <FiPlus size={20} />
      </button>
      <p> (1 items(s) added) </p>
    </main>
  );
}
