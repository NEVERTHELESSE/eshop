import Image from "~/components/Image";
import FlashSalesInfo from "./FlashSalesInfo";
import { sales } from "~/data/sales";
import { FiArrowRight } from "react-icons/fi";
import type { reuse } from "~/types/type";
import { Link } from "react-router";
import CartLoading from "~/loading/CartLoading";
import { useState } from "react";

export default function Light({ title }: reuse) {
  const [products, setProducts] = useState([]);
  return (
    <main className="w-full box rounded-2xl  dark:bg-tertiaryD bg-tertiary mb-4 p-2 sm:p-4 shadow">
      <div className="flex justify-between mb-2">
        <p className="sm:text-2xl mr-3 font-bold capitalize text-tertiary-500">
          {title}
        </p>
        <button className="cursor-pointer bg-white rounded-full py-1 px-8 text-tertiary-500 flex items-center">
          <span className="mr-2 ">See All</span>
          <FiArrowRight />
        </button>
      </div>
      <p className="text-tertiary-500 mb-4">up to 50% off</p>
      {products.length > 1 ? (
        <div className="flex overflow-hidden ">
          {sales.map(({ id, src, price, rate, title }) => (
            <Link
              to="product"
              key={id}
              className="min-w-55 mr-4 cursor-pointer overflow-hidden h-[calc(100%-2rem)] bg-white rounded-2xl"
            >
              <div className="w-60 h-60 hover:scale-105 duration-200 ">
                <Image src={src[0]} alt="bass" />
              </div>
              <FlashSalesInfo
                numberOfItem={0}
                price={price}
                rate={rate}
                title={title}
              />
            </Link>
          ))}
        </div>
      ) : (
        <CartLoading />
      )}
    </main>
  );
}
