import { FaShoppingCart, FaStar } from "react-icons/fa";
import { toast } from "react-toastify";
import { supabase } from "~/lib/supabase";
import { useCartStore } from "~/store/store";
import type { productType } from "~/types/type";

export default function FlashSalesInfo(cart: productType) {
  const email = useCartStore((state) => state.user.email);
  const carts = useCartStore((state) => state.carts);

  async function addItem() {
    const { data, error } = await supabase.rpc("add_to_carts", {
      user_id_input: 5,
      new_item: cart,
    });
    if (error) {
      toast("There was an error while updateing your cart", { type: "error" });
      console.error(error.message);
    } else {
      toast("Product succesfully added to cart", { type: "success" });
      console.log(data);
    }
    // useCartStore((state) => state.addItem)
  }

  return (
    <div className="w-full  ">
      {cart.numberofItem != 0 && (
        <p className="bg-yellow-200 text-center">
          {cart.numberofItem} items in stock
        </p>
      )}
      <div className="p-2">
        <p className="whitespace-nowrap overflow-hidden text-ellipsis">
          {cart.title}
        </p>
        <div className="flex items-center">
          <FaStar size={15} className="text-primary" />
          <h4 className="mx-1">{cart.rate}</h4>
          <p>(1848844)</p>
        </div>
        <div className="flex pr-1 items-center justify-between">
          <div>
            <div className="flex my-2 items-center">
              <h4>₦ {cart.price.toLocaleString()}</h4>
              <h6 className="ml-2 bg-green-600 px-1 text-white rounded-lg">
                -46%
              </h6>
            </div>
          </div>
          <button
            onClick={addItem}
            className="shadow-lg cursor-pointer  p-2 rounded-lg"
            title="add to cart"
          >
            <FaShoppingCart size={30} />
          </button>
        </div>
      </div>
    </div>
  );
}
