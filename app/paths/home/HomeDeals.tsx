import Image from "~/components/Image";
import { deals } from "~/data/deals";

export default function HomeDeals() {
  const detail = [];
  return (
    <main className="bg-tertiary-300 w-full rounded-2xl px-2 py-4 mb-4">
      <h2 className="text-tertiary-500">
        All your favorite deals in one place
      </h2>
      <div className="flex flex-wrap w-full ">
        {deals.map(({ id, title }) => (
          <div className="w-[calc(100%/6)] p-2" key={id}>
            <div className="  w-full ">
              <Image
                src="essential/Appliances-deals.png"
                alt="Appliances-deals.png"
              />
            </div>
            <h3 className="text-tertiary-500 font-bold">{title}</h3>
          </div>
        ))}
      </div>
    </main>
  );
}
