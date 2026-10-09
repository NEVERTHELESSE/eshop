import { FiTrash } from "react-icons/fi";

export default function AddRemove() {
  return (
    <main className="flex  my-3 justify-between">
      <button className="flex cursor-pointer items-center text-primary">
        <FiTrash />
        <p className="ml-3">Remove</p>
      </button>
      <div className="flex items-center">
        <button className="py-1 px-3 cursor-pointer rounded-lg text-2xl text-white bg-soft">
          -
        </button>
        <p className="mx-6">1</p>
        <button className="py-1 px-3 cursor-pointer rounded-lg text-2xl text-white bg-primary">
          +
        </button>
      </div>
    </main>
  );
}
