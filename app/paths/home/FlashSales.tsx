import Image from "~/components/Image";
import FlashSalesInfo from "./FlashSalesInfo";
import Countdown from "~/components/Countdown";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { Link } from "react-router";
import { useEffect, useState } from "react";
import { supabase } from "~/lib/supabase";
import CartLoading from "~/loading/CartLoading";
import SCartLoading from "~/loading/SCartLoading";
import type { productType } from "~/types/type";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";

export default function FlashSales() {
  type d = { data: any; error: any };
  function getProduct() {
    return useQuery({
      queryKey: ["products"],
      queryFn: async () => {
        const { data, error }: d = await supabase.from("product").select("*");
        if (error) {
          toast(
            "There was an error while loading product, kindly check you internet connection",
            { type: "error" }
          );
        } else {
          return data;
        }
      },
    });

    // if (error) {
    //   console.error(error);
    //   return;
    // } else {
    //   setProducts(data);
    // }
  }
  const { data, isPending, isError } = getProduct();

  return (
    <main className="w-full box shadow-lg my-4 rounded-2xl dark:bg-tertiaryD bg-tertiary  p-2 sm:p-4">
      <div className="flex justify-between mb-3">
        <div className="flex items-center">
          <p className="text-2xl sm:text-4xl  text-white mr-3 font-bold  ">
            Flash Sales
          </p>
          <Countdown />
        </div>
        <button className="cursor-pointer bg-white rounded-full py-1 px-2 sm:px-8 text-tertiary-600 flex items-center">
          <span className="mr-2 hidden sm:block">See All</span>
          <FiArrowRight />
        </button>
      </div>
      {isPending || isError ? (
        <SCartLoading />
      ) : (
        <div className="flex overflow-hidden">
          {data.map((product: productType) => (
            <div
              // to={title}
              key={product.id}
              className="box my-2 min-w-[49%]  md:w-[calc(100%/3.1)] lg:max-w-[calc(100%/6.2)] slg:min-w-[calc(100%/6.5)] mr-2 sm:mr-4 cursor-pointer overflow-hidden bg-white rounded-2xl"
            >
              <div className=" w-full h-50 sm:h-70  hover:scale-105 duration-200 ">
                <Link to={`product?${product.id}`}>
                  <Image src={product.src[0]} alt="bass" />
                </Link>
              </div>
              <FlashSalesInfo
                id={product.id}
                numberOfItem={product.numberOfItem}
                title={product.title}
                price={product.price}
                src={product.src}
                rate={product.rate}
              />
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
