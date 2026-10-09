import Image from "~/components/Image";
import Price from "~/components/Price";
import ProductTitle from "~/components/ProductTitle";

export default function CustomerView() {
  return (
    <main className="bg-white p-2 rounded-lg shadow-lg">
      <h4>Customer who viewed this also viewed</h4>
      <div className="flex my-3">
        <div className="w-40">
          <div className="w-full h-50">
            <Image src="/products/product12.jpg" alt="product" />
          </div>
          <ProductTitle title={"ECOFLOW DELTA 3 CLASSIC"} />
          <Price price={300000} />
          <p>1,2000</p>
        </div>
      </div>
    </main>
  );
}
