import { lazy, Suspense } from "react";
import AdvertLoading from "~/loading/AdvertLoading";
import CategoryLoading from "~/loading/CategoryLoading";
import HeroLoading from "~/loading/HeroLoading";
import FlashSales from "~/paths/home/FlashSales";
import Hero from "../paths/home/Hero";
import HomeAdvert from "~/paths/home/HomeAdvert";

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
      <FlashSales />
      {/* <Suspense fallback={<AdvertLoading />}>
        <Voucher />
      </Suspense> */}
      {/* <Suspense fallback={<AdvertLoading />}>
        <HomeDeals />
      </Suspense> */}

      <Suspense fallback={<AdvertLoading />}>
        <Reuse />
      </Suspense>
    </section>
  );
}
