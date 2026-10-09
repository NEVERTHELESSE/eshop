import { FaStar } from "react-icons/fa";
import { FaBagShopping, FaBasketShopping } from "react-icons/fa6";
import { Link } from "react-router";
import Image from "./Image";

export default function Logo() {
  return (
    <Link
      to="/"
      title="Go to Eshop home page"

      className="flex items-center h-12 w-24"
    >
      <Image src="eshop.png" alt="logo" />
    </Link>
  );
}
