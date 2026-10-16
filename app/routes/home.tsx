import { lazy, Suspense } from "react";
import AdvertLoading from "~/loading/AdvertLoading";
import CategoryLoading from "~/loading/CategoryLoading";
import HeroLoading from "~/loading/HeroLoading";
import Hero from "../paths/home/Hero";
import HomeAdvert from "~/paths/home/HomeAdvert";
import FlashSales from "~/paths/home/FlashSales";
import Most from "~/paths/home/Most";
import Brand from "~/paths/home/Brand";
import Light from "~/paths/home/Light";

const Categories = lazy(() => import("../paths/home/Categories"));
const HomeDeals = lazy(() => import("../paths/home/HomeDeals"));

const Voucher = lazy(() => import("../paths/home/Voucher"));
const SweetDeals = lazy(() => import("../paths/home/SweetDeals"));
const Reuse = lazy(() => import("../paths/home/Reuse"));

export function meta() {
  return [
    {
      title:
        "Eshop | Online Shopping for Electronics, Fashion, Home, Beauty & Sport",
    },
    { name: "Order Online at Ease", content: "Home Page" },
  ];
}

export default function home() {
  return (
    <section className="my-3 px-2">
      <Hero />
      <Categories />
      <HomeAdvert />
      {/* <Suspense fallback={<AdvertLoading />}>
        <Voucher />
      </Suspense> */}
      {/* <Suspense fallback={<AdvertLoading />}>
        <HomeDeals />
      </Suspense> */}

      <FlashSales title="Flash Sales" />
      <Most title="Top Seller" />
      <Brand title="Xiamoi Brand" />
      <Light title={"Fans Deals"} />
      <Light title={"Smart TV's"} />
      <Most title="outdoor & garden" />
      <Light title={"Xiaomi Official Store"} />
      <Most title="Unilever Official Store" />
      <Light title={"Beyond the brand"} />
      <Light title={"computing deals"} />
      <Most title="mobile accessories deal" />
      <FlashSales title="Flash Sales" />
      <Most title="grocery deal - wines & more" />
      <Most title="girls fashion" />
      <Light title={"hot deals right now"} />
      <Light title={"games & console"} />
      <Most title="upto 80% off" />
    </section>
  );
}
