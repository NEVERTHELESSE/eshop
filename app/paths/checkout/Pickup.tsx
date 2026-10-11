import { FaGreaterThan } from "react-icons/fa";
import { Link } from "react-router";

export default function Pickup() {
  return (
    <div className="bg-white mr-8 shadow w-full p-2">
      <div className="around flex border-b">
        <p>
          DELIVER DETAILS (FOR FASTER AND SMOOTHER DELIVERY, USE A PHONE NUMBER
          THAT IS ACTIVE ON WHATSAPP)
        </p>
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
