import { categories } from "~/data/category";

export default function Categories() {
  return (
    //debugging the change
    <main className="w-full dark:text-white overflow-hidden box rounded-2xl p-2 flex-nowrap  hidden sm:flex">
      {categories.map(({ icon, id, title }) => (
        <div
          key={id}
          className="flex m-2 md:mr-8 my-2 items-center cursor-pointer dark:bg-softD bg-soft p-2 rounded-lg"
        >
          {icon} <p className="ml-1">{title}</p>
        </div>
      ))}
    </main>
  );
}
