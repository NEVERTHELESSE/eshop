import { FaStar } from "react-icons/fa";
import { Link } from "react-router";

export default function ProductPromotion() {
  return (
    <div>
      <h4 className="font-bold my-4">PROMOTIONS</h4>

      <div className="">
        <div className="flex items-center">
          <div className="size-5 mr-2  flex items-center justify-center  rounded-full bg-primary text-white">
            <FaStar />
          </div>
          <Link to="/call" className="text-secondary-300">
            Call 0201883899 To Place Your Order{" "}
          </Link>
        </div>
        <div className="flex ">
          <div className="size-5 mr-2   flex items-center justify-center  rounded-full bg-primary text-white">
            <FaStar />
          </div>
          <Link to="/call" className="text-secondary-300">
            Enjoy cheaper shipping fees when you select a PickUpStation at
            checkout
          </Link>
        </div>
      </div>
    </div>
  );
}
