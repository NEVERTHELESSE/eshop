import Image from "~/components/Image";
import JumiaExpress from "~/components/JumiaExpress";
import AddRemove from "./AddRemove";

export default function ProductShow() {
  return (
    <main className="w-[70%] bg-white shadow-lg rounded-lg p-2">
      <h4 className="my-3">Cart (1)</h4>
      <div className="flex">
        <div className="min-w-30 h-30">
          <Image src="/products/product11.jpg" alt="product" />
        </div>
        <div className="flex justify-between mx-3">
          <div className="flex flex-col justify-between">
            <h3>
              ECOFLOW DELTA 3 ULTRA Portable Power Station, 3600W Output Home
              Power, 3072wh LifeP04 Battery, Portable Solar Generator
            </h3>
            <p className="text-primary-300">Few units left</p>
            <JumiaExpress />
          </div>
          <div>
            <h4>N2,168,000</h4>
          </div>
        </div>
      </div>
      <AddRemove />
    </main>
  );
}
