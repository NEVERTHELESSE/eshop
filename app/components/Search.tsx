import type { FormEvent } from "react";
import { FaSearch } from "react-icons/fa";
import Image from "./Image";
import FlashSalesInfo from "~/paths/home/FlashSalesInfo";
import ProductDetails from "./ProductDetails";
import { Link } from "react-router";

export default function Search() {
  function searchProduct(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <section className="w-full flex flex-col absolute">
      <form
        action=""
        onSubmit={searchProduct}
        className="w-full mx-2 py-2  flex sm:hidden items-center pl-4 rounded-full"
      >
        <FaSearch />
        <input
          type="text"
          placeholder="Search products, brands and categories"
          className=" p-2 sm:w- w-full focus:outline-none"
        />
      </form>
      <Link
        to={"/product?id"}
        className="w-full cursor-pointer  bg-white shadow   absolute z-50 top-10 left-0 p-3 rounded-2xl "
      >
        <div className="flex border rounded-2xl p-2">
          <div className="h-30 w-50 mr-3 border-r ">
            <Image src="shoe.png" alt="image" />
          </div>
          <ProductDetails
            price={334}
            rate={4}
            title="a new model nike running shoe"
          />
          <div>Only 7 Remain</div>
        </div>
      </Link>
    </section>
  );
}
