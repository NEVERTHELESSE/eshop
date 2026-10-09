import { useEffect, useState } from "react";
import { Link } from "react-router";
import Image from "~/components/Image";
import { details } from "~/data/heroData";
import { supabase } from "~/lib/supabase";
import HeroLoading from "~/loading/HeroLoading";

export default function Hero() {
  const [products, setProducts] = useState(details);

  const carousel = Array.from({ length: details.length }, (_, i) => i + 1);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev == carousel.length - 1 ? 0 : prev + 1));
    }, 5000);
    interval;
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    getProduct();
  }, []);
  type d = { data: any; error: any };
  async function getProduct() {
    const { data, error }: d = await supabase.from("hero").select("*");
    if (error) {
      console.log(error);
      return;
    } else {
      console.log(data);
      setProducts(data);
    }
  }

  return (
    <section className="relative w-full rounded-4xl my-4 overflow-hidden flex">
      <div
        className=" w-full flex h-full duration-700 ease-out"
        style={{
          transform: `translateX(-${100 * active}%)`,
        }}
      >
        {details.map(({ id, imageUrl, title, color }) => (
          <div
            key={id}

            className="min-w-full box flex items-center justify-between text-white my-5 slg:px-8  shadow-lg rounded-4xl overflow-hidden"
            style={{
              background: `linear-gradient(${color[0]}, ${color[1]})`,
            }}
          >
            <div className=" w-[50%] p-4 slg:p-20">
              <p className="sm:text-3xl">New Collection</p>
              <h4 className=" lg:text-6xl my-4 slg:my-10 font-bold">
                Brand New Festival
              </h4>
              <p className="md:text-3xl">30% Off</p>
              <p className="lg:text-4xl sm:font-bold my-6">
                As he dey Hot, Discover the latest trends Shoe, for fashion,
                sport, and lifestyle
              </p>
              <Link
                to="wow"
                className="bg-primary p-4  lg:px-12 font-bold my-8 py-2 sm:py-4 rounded-full shadow-lg"
              >
                Shop Now{" "}
              </Link>
            </div>
            <div className="lg:h-full w-[50%]">
              <Image src={imageUrl} alt={title} />
            </div>
          </div>
        ))}
      </div>

      <div className=" absolute w-max left-[45%] flex  bottom-10 bg-soft p-1 sm:p-2 rounded-full">
        {carousel.map((number, index) => (
          <div
            key={number}
            className={`h-2 ${index == active ? "w-4 sm:w-6 bg-black" : "w-2 bg-soft"} m-1 sm:mr-2  border-2 rounded-full`}
          ></div>
        ))}
      </div>
    </section>
  );
}
