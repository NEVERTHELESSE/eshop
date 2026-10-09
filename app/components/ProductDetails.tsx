import { FaStar } from "react-icons/fa";
import type { productDetailType } from "~/types/type";

export default function ProductDetails({
  title,
  price,
  rate,
}: productDetailType) {
  return (
    <div className="w-full  ">
      <div className="p-2 capitalize">
        <p className="whitespace-nowrap overflow-hidden text-ellipsis">
          {title}
        </p>
        <div className="flex items-center">
          <FaStar size={15} className="text-primary" />
          <h4 className="mx-1">{rate}</h4>
          <p>(1848844)</p>
        </div>
        <div className="flex my-2 items-center">
          <h4>₦ {price.toLocaleString()}</h4>
          <h6 className="ml-2 bg-green-600 px-1 text-white rounded-lg">-46%</h6>
        </div>
      </div>
    </div>
  );
}
