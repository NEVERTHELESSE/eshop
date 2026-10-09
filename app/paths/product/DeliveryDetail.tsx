import { Link } from "react-router";
import { countryState } from "~/data/countryState";
import DeliveryAssurance from "./DeliveryAssurance";
import JumiaExpress from "~/components/JumiaExpress";

export default function DeliveryDetail() {
  return (
    <main className="w-[30%] ml-4 rounded-lg bg-white p-2 shadow-lg">
      <h2 className="border-b">DELIVERY & RETURN</h2>
      <JumiaExpress />
      <p>
        THE BEST products, delivered faster, Now Pay on DELIVERY, Cash or Bank
        Transfer Anywhere, Zero Wahala{" "}
        <Link to="delivery" className="text-secondary-300">
          Detail
        </Link>
      </p>
      <div>
        <h2>Choose your location</h2>
        <select
          className="border w-full p-4 my-3 rounded-lg border-soft cursor-pointer "
          name="location"
          id="location"
        >
          {countryState[0].state.map((state) => (
            <option className="p-2 cursor-pointer" value="Lagos">
              Lagos
            </option>
          ))}
        </select>
        <select
          className="border w-full p-4 my-3 rounded-lg border-soft cursor-pointer "
          name="location"
          id="location"
        >
          {countryState[0].state.map((state) => (
            <option className="p-2 cursor-pointer" value="Lagos">
              Lagos
            </option>
          ))}
        </select>
      </div>
      <DeliveryAssurance />
    </main>
  );
}
