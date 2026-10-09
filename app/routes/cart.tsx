import { lazy, Suspense } from "react";
import ProductShow from "../paths/cart/ProductShow";
import CartSummary from "../paths/cart/CartSummary";
const CustomerView = lazy(() => import("../paths/cart/CustomerView"));
export default function Cart() {
  return (
    <main>
      <div className="flex w-full my-6 ">
        <ProductShow />
        <CartSummary />
      </div>
      <Suspense fallback="loading">
        <CustomerView />
      </Suspense>
    </main>
  );
}
