import { FaShoppingCart, FaStar } from "react-icons/fa";
import Image from "~/components/Image";
import { useCartStore } from "~/store/store";
import type { flashSaleType } from "~/types/type";

export default function FlashSalesInfo({
  numberOfItem,
  title,
  price,
  rate,
}: flashSaleType) {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <div className="w-full  ">
      {numberOfItem != 0 && (
        <p className="bg-yellow-200 text-center">
          {numberOfItem} items in stock
        </p>
      )}
      <div className="p-2">
        <p className="whitespace-nowrap overflow-hidden text-ellipsis">
          {title}
        </p>
        <div className="flex items-center">
          <FaStar size={15} className="text-primary" />
          <h4 className="mx-1">{rate}</h4>
          <p>(1848844)</p>
        </div>
        <div className="flex pr-1 items-center justify-between">
          <div>
            <p>(1848844)</p>
            <div className="flex my-2 items-center">
              <h4>₦ {price.toLocaleString()}</h4>
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
