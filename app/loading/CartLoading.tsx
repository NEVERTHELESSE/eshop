import { FaStar } from "react-icons/fa";

export default function CartLoading() {
  const lists = Array.from({ length: 20 }, (_, number) => number + 1);
  return (
    <div className="flex flex-wrap justify-between w-full ">
      {lists.map((list) => (
        <div
          key={list}
          className="min-w-[48%] my-2 sm:min-w-50 mr-1 sm:mr-4 h-92 dark:bg-softD bg-soft  rounded-2xl overflow-hidden"
        >
          <div className=" w-full h-50  sm:size-60 bg-gray-400 flex justify-center items-center ">
            <FaStar size={50} className="bg-white p-2 rounded-full" />
          </div>
        </div>
      ))}
    </div>
  );
}
