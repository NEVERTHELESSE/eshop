import OrderSummary from "~/paths/checkout/OrderSummary";
import Pickup from "~/paths/checkout/Pickup";

export default function checkout() {
  return (
    <main className=" flex py-8">
      <Pickup />
      <OrderSummary />
    </main>
  );
}
