import { lazy, Suspense } from "react";
import { Links } from "react-router";
import { Link } from "react-router";
import Image from "~/components/Image";
import Rate from "~/components/Rate";
import ShareProduct from "~/components/ShareProduct";
import CartChange from "~/paths/product/CartChange";
import DeliveryDetail from "~/paths/product/DeliveryDetail";
import ProductPromotion from "~/paths/product/ProductPromotion";
import StoreBrand from "~/paths/product/StoreBrand";
export default function product() {
  const lists = Array.from({ length: 9 }, (_, i: number) => i + 10);
  const SponsoredProduct = lazy(
    () => import("../paths/product/SponsoredProducts"),
  );
  return (
    <section className="flex  my-8 ">
      {/* <p>Home </p> */}
      <div className="w-[70%]">
        <div className="bg-white flex h-auto  rounded-lg w-full shadow-lg p-3">
          <div className="w-100 flex">
            <div className="w-100">
              <div className="w-full h-100">
                <Image
                  src="products/product11.jpg"

                  alt="cloth"
                />
              </div>
              <div className="flex my-2 shadow-lg p-2 overflow-hidden">
                {lists.map((list) => (
                  <button
                    key={list}
                    className="min-w-15 overflow-hidden cursor-pointer mx-2 border h-15"
                  >
                    <div className="w-full hover:scale-105 duration-75">
                      <Image
                        src={`products/product${list}.jpg`}

                        alt="image"
                      />
                    </div>
                  </button>
                ))}
              </div>
              <ShareProduct id="wow" />
              <Link to="report" className="text-secondary-300 mt-30">
                Report incorrect product information
              </Link>
            </div>
            <div className="ml-8">
              <StoreBrand />
              <h4>
                ECOFLOW DELTA 3 ULTRA Portable Power Station 3600W Output Home
                Power, 3072Wh LifeP04 Battery, Portable Solar Generator for Home
                Use, Camping Accessories & RV Backup
              </h4>
              <p>
                Brand: <span>ECOFLOW |</span>
                <Link to="similar product" className="text-secondary">
                  Similar products from ECOFLOW
                </Link>
              </p>
              <div className="flex items-center my-6">
                <h2>N2,168,000</h2>
                <p className="mx-4">N2,87,000</p>
                <button className="text-primary bg-primary-300">-25%</button>
              </div>
              <p className="text-text-500">Few units left</p>
              <p className="my-3">
                + shipping from N1,700 to LEKKI-AJAH(SANGOTEDO)
              </p>
              <Rate />
              <CartChange />
              <ProductPromotion />
            </div>
          </div>
        </div>
        <Suspense fallback="loading">
          <SponsoredProduct />
        </Suspense>
      </div>
      <DeliveryDetail />
    </section>
  );
}
