import Image from "~/components/Image";

export default function HomeAdvert() {
  const adverts = [
    "deal/Banger-Deals.gif",
    "deal/call-to-order.gif",
    "deal/clearance-sales.gif",
    "deal/call-to-order.gif",

    "deal/buy-two-pay-for-one.gif",
    "deal/Banger-Deals.gif",
  ];

  return (
    <main className="w-full box nobutton flex px-2 py-4 rounded-2xl h-60 overflow-x-scroll  sm:overflow-hidden justify-between my-7">
      {adverts.map((advert, index) => (
        <div
          key={index}
          className=" cursor-pointer min-w-[47%] sm:min-w-50 m-1 md:mx-2 flex items-center justify-center bg-soft rounded-2xl overflow-hidden h-full"
        >
          <Image src={advert} alt={advert} />
        </div>
      ))}
      {/* {lists.map((list) => (
        <div
          key={list}
          className="w-[calc(100%/6)] mx-2 flex items-center justify-center bg-soft rounded-2xl h-full"
        >
          <FaStar size={30} className="rounded-full bg-white text-soft p-1" />
        </div>
      ))} */}
    </main>
  );
}
