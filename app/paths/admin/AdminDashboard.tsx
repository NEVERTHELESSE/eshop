import { FaUser } from "react-icons/fa";
import Image from "~/components/Image";

export default function AdminDashboard() {
  const infos = [
    {
      id: "495",
      title: "Number of Product",
      numbersOfItems: 43,
      imageUrl: "/shoe.png",
    },
    {
      id: "131",
      title: "Number of Users",
      numbersOfItems: 53,
      imageUrl: "/shoe.png",
    },
    {
      id: "488",
      title: "Active Offers",
      numbersOfItems: 10,
      imageUrl: "/shoe.png",
    },
    {
      id: "366",
      title: "Shipped Items",
      numbersOfItems: 1272,
      imageUrl: "/shoe.png",
    },
    {
      id: "124",
      title: "flash sales",
      numbersOfItems: 43,
      imageUrl: "/shoe.png",
    },
    {
      id: "366",
      title: "brand deals",
      numbersOfItems: 53,
      imageUrl: "/shoe.png",
    },
    {
      id: "337",
      title: "sweet deals",
      numbersOfItems: 10,
      imageUrl: "/shoe.png",
    },
    {
      id: "389",
      title: "home appliance deals",
      numbersOfItems: 1272,
      imageUrl: "/shoe.png",
    },
    {
      id: "78",
      title: "Number of Product",
      numbersOfItems: 43,
      imageUrl: "/shoe.png",
    },
    {
      id: "134",
      title: "Number of Users",
      numbersOfItems: 53,
      imageUrl: "/shoe.png",
    },
    {
      id: "210",
      title: "Active Offers",
      numbersOfItems: 10,
      imageUrl: "/shoe.png",
    },
    {
      id: "269",
      title: "Shipped Items",
      numbersOfItems: 1272,
      imageUrl: "/shoe.png",
    },
    {
      id: "459",
      title: "Number of Product",
      numbersOfItems: 43,
      imageUrl: "/shoe.png",
    },
    {
      id: "325",
      title: "Number of Users",
      numbersOfItems: 53,
      imageUrl: "/shoe.png",
    },
    {
      id: "336",
      title: "Active Offers",
      numbersOfItems: 10,
      imageUrl: "/shoe.png",
    },
    {
      id: "35",
      title: "Shipped Items",
      numbersOfItems: 1272,
      imageUrl: "/shoe.png",
    },
  ];

  return (
    <div className="my-2 sm:my-6 flex flex-wrap justify-between overflow-y-scroll  h-full pb-20">
      {infos.map(({ id, title, numbersOfItems, imageUrl }) => (
        <div
          key={id}
          className="bg-white hover:bg-primary cursor-pointer hover:shadow-2xl p-2 duration-700 mr-2 mb-2 rounded-2xl  shadow-lg size-25 md:size-45 flex flex-col justify-around items-center "
        >
          <p className="capitalize">{title}</p>
          <p className="sm:text-3xl font-bold">{numbersOfItems}</p>

          <FaUser className="text-2xl lg:text-5xl" />
        </div>
      ))}
    </div>
  );
}
