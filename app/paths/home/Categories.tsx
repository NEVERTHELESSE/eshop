import { categories } from "~/data/category";

export default function Categories() {
  return (
    <main className="w-full overflow-hidden box rounded-2xl p-2 flex-nowrap  hidden sm:flex">
      {categories.map(({ icon, id, title }) => (
        <button
          key={id}
          className="flex m-2 md:mr-8 my-2 items-center cursor-pointer dark:bg-softD bg-soft p-2 rounded-lg"
        >
          {icon} <span className="ml-1">{title}</span>
        </button>
      ))}
    </main>
  );
}
