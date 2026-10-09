import { FaStar } from "react-icons/fa";

export default function AdvertLoading() {
  const lists = [1, 2, 3, 4, 5, 6];

  return (
    <main className="w-full bg-purple-600 flex px-2 py-4 rounded-2xl h-80 my-3">
      {lists.map((list) => (
        <div
          key={list}
          className="w-[calc(100%/6)] mx-2 flex items-center justify-center bg-soft rounded-2xl h-full"
        >
          <FaStar size={30} className="rounded-full bg-white text-soft p-1" />
        </div>
      ))}
    </main>
  );
}
