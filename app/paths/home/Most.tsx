import { FiArrowRight } from "react-icons/fi";
import FlashSalesInfo from "./FlashSalesInfo";
import Image from "~/components/Image";
import type { reuse } from "~/types/type";
import { Link } from "react-router";
import { useState } from "react";
import CartLoading from "~/loading/CartLoading";

export default function Most({ title }: reuse) {
  const [products, setProducts] = useState([]);

  return (
    <div className="w-full box rounded-2xl  dark:bg-primaryD bg-primary mb-4 p-2 sm:p-4">
      <div className="flex justify-between mb-2">
        <p className="text-2xl sm:text-4xl  capitalize  text-white mr-3 font-bold  ">
          {title}
        </p>
        <button className="cursor-pointer bg-white rounded-full py-1 px-8 text-tertiary-500 flex items-center">
          <span className="mr-2 ">See All</span>
          <FiArrowRight />
        </button>
      </div>
      <p className="text-white mb-4">up to 50% off</p>
      {products.length > 1 ? (
        <div className="flex overflow-hidden ">
          (
          {products.map(({ id, src, price, rate, title }) => (
            <Link
              // to={convertSpace(title + id)}
              to="/product"
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
          )
        </div>
      ) : (
        <CartLoading />
      )}
    </div>
  );
}
