import { FaGreaterThan } from "react-icons/fa";
import { Link } from "react-router";

export default function Pickup() {
  return (
    <div className="bg-white mr-8 shadow w-[70%] p-2">
      <div className="around flex border-b">
        <h3>
          DELIVER DETAILS (FOR FASTER AND SMOOTHER DELIVERY, USE A PHONE NUMBER
          THAT IS ACTIVE ON WHATSAPP)
        </h3>
        <Link
          to="number"
          className="text-secondary flex items-center text-right"
        >
          Change <FaGreaterThan />
        </Link>
      </div>
    </div>
  );
}
