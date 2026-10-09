import { FaStar } from "react-icons/fa";

export default function SCartLoading() {
  const lists = Array.from({ length: 30 }, (_, number) => number + 1);
  return (
    <div className="flex  justify-between w-full overflow-hidden">
      {lists.map((list) => (
        <div
          key={list}
          className="min-w-[48%] my-2 sm:min-w-50 mr-2 sm:mr-4 h-92 bg-soft  rounded-2xl overflow-hidden"
        >
          <div className="w-full h-50  sm:size-60 bg-gray-400 flex justify-center items-center ">
            <FaStar size={50} className="bg-white p-2 rounded-full" />
          </div>
        </div>
      ))}
    </div>
  );
}
