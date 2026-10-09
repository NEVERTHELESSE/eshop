import Image from "~/components/Image";

export default function SweetDeals() {
  const lists = Array.from({ length: 4 }, (i: number) => i + 1);
  return (
    <main className="bg-tertiary-500 rounded-2xl  p-4 mb-5 columns-3 sm:columns-6  justify-around">
      <div className="mr-4 h-50 w-30 sm:w-auto sm:h-70 rounded-2xl overflow-hidden">
        <Image src="deal/DEALS.gif" alt="deals-of-the-day-HMD" />
      </div>

      {lists.map((list) => (
        <div className="mr-4 w-30 sm:w-51 h-50 sm:h-70 rounded-2xl overflow-hidden   flex items-center sm:bg-white mx-2 justify-center flex-col ">
          <div className="w-30 h-30 rounded-full bg-primary"></div>
          <h3 className="bg-white sm:bg-white rounded-lg p-1">N26, 900</h3>
        </div>
      ))}
      <div className="mr-4 h-50 w-30 sm:w-auto sm:h-70 rounded-2xl overflow-hidden">
        <Image src="deal/DEALS.gif" alt="deals-of-the-day-HMD" />
      </div>
    </main>
  );
}
