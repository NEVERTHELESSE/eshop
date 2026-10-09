import { FaStar } from "react-icons/fa";

export default function Rate() {
  const lists = Array.from({ length: 5 }, (_, i) => i + 1);
  return (
    <main className="flex">
      {lists.map((list) => (
        <FaStar key={list} className="mr-2 text-soft" size={30} />
      ))}
    </main>
  );
}
