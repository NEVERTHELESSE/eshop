import { FiMinus, FiPlus } from "react-icons/fi";

export default function CartChange() {
  return (
    <main className="w-80 flex rounded-lg my-4 justify-between items-center">
      <button className="bg-primary p-2 cursor-pointer text-white font-bold shadow-lg rounded-lg">
        <FiMinus size={30} />
      </button>
      <h2>1</h2>
      <button className="bg-primary p-2 cursor-pointer text-white font-bold shadow-lg rounded-lg">
        <FiPlus size={30} />
      </button>
      <p> (1 items(s) added) </p>
    </main>
  );
}
