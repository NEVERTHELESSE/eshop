import { useState } from "react";
import { FiTrash } from "react-icons/fi";
import { toast } from "react-toastify";

export default function AddRemove() {
  const [quantity, setQuantity] = useState(1);

  function addQuantity() {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    } else {
      toast('Quanity can"t be less than 1', { type: "warning" });
    }
  }

  return (
    <main className="flex  my-3 justify-between">
      <button className="flex cursor-pointer items-center text-primary">
        <FiTrash />
        <p className="ml-3">Remove</p>
      </button>
      <div className="flex items-center">
        <button
          onClick={addQuantity}

          className={`py-1 px-3 cursor-pointer rounded-lg text-2xl text-white ${quantity > 1 ? "bg-primary" : "bg-soft"}`}
        >
          -
        </button>
        <p className="mx-6">{quantity}</p>
        <button
          onClick={() => setQuantity((prev) => prev + 1)}

          className="py-1 px-3 cursor-pointer rounded-lg text-2xl text-white bg-primary"
        >
          +
        </button>
      </div>
    </main>
  );
}
