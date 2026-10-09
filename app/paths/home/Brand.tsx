import { FiArrowRight } from "react-icons/fi";
import Image from "~/components/Image";
import { sales } from "~/data/sales";
import FlashSalesInfo from "./FlashSalesInfo";
import { festivals } from "~/data/festival";
import { Link } from "react-router";
import { supabase } from "~/lib/supabase";
import { useEffect, useState } from "react";
import CartLoading from "~/loading/CartLoading";
import SCartLoading from "~/loading/SCartLoading";

export default function Brand() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProduct();
  }, []);
  type d = { data: any; error: any };
  async function getProduct() {
    const { data, error }: d = await supabase.from("topSeller").select("*");
    if (error) {
      console.error(error);
      return;
    } else {
      setProducts(data);
    }
  }

  return (
    <main className="w-full rounded-2xl box bg-secondary d:bg-secondaryD mb-4 p-2  sm:p-4">
      <div className="flex justify-between mb-2">
        <p className="text-2xl sm:text-4xl   text-white mr-3 font-bold  ">
          Brand Festival deals
        </p>
        <button className="cursor-pointer bg-white rounded-full py-1 slg:px-8 text-tertiary-500 flex items-center">
          <span className="mr-2 ">See All</span>
          <FiArrowRight />
        </button>
      </div>
      <p className="text-white mb-4">up to 70% off</p>
      {products.length > 1 ? (
        <div className="flex flex-wrap justify-between">
          {products.map(({ id, src, price, rate, title }) => (
            <Link
              to="product"
              key={id}
              className="my-2 w-[49%]  md:sm:w-[calc(100%/3.1)] lg:sm:w-[calc(100%/5.2)] slg:max-w-[calc(100%/6.5)] sm:my-4 box cursor-pointer overflow-hidden  bg-cover rounded-2xl"
            >
              <div className=" w-full h-50 sm:h-70 hover:scale-105 duration-200 ">
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
        <SCartLoading />
      )}
    </main>
  );
}
