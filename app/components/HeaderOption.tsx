import { useCartStore } from "../store/store";

import { FiBell, FiHeart, FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router";
import Image from "./Image";

export default function HeaderOption() {
  const count = useCartStore((state) => state.count);
  const username = useCartStore((state) => state.user.username);

  const buttonStyle =
    "items-center flex relative ml-2 relative cursor-pointer hover:bg-soft p-1  rounded-lg ";
  return (
    <section className="flex ">
      <main className={buttonStyle}></main>

      <Link to="/cart" className={buttonStyle} title="My Cart">
        {count != 0 && (
          <div className="absolute rounded-full size-5 top-0 right-0 flex justify-center items-center text-white font-bold bg-red-500">
            <p>{count}</p>
          </div>
        )}
        <FiShoppingCart className="text-2xl lg:mx-4 mx-2 sm:text-1xl" />
      </Link>
      <main className={buttonStyle}>
        <Link
          to="/favorite"
          className=" items-center hidden sm:flex cursor-pointer"
          title="favorite"
        >
          <FiHeart className="text-2xl  lg:mx-4 mx-2 sm:text-1xl" />
        </Link>
      </main>
      <Link to="/notification" className={buttonStyle} title="Notification">
        <FiBell className="text-2xl lg:mx-4 mx-2 sm:text-1xl" />
      </Link>
      <div
        className="size-12 rounded-full lg:ml-8 border border-primary overflow-hidden"
        title={username === null ? "loading" : username}
      >
        <Image src="/users/neverthelesse.png" alt="profilePics" />
      </div>
    </section>
  );
}
