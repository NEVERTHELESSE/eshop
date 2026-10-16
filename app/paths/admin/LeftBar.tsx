import { BiMenu } from "react-icons/bi";
import {
  FaFoursquare,
  FaPray,
  FaShoppingCart,
  FaStar,
  FaUser,
  FaUsers,
} from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { FcStatistics } from "react-icons/fc";
import { GiAbacus } from "react-icons/gi";
import { Link } from "react-router";
import Image from "~/components/Image";
import Logo from "~/components/Logo";
type activeType = {
  setActive: any;
};

export default function LeftBar({ setActive }: activeType) {
  const lists = [
    {
      id: "1",
      icon: <BiMenu />,
      title: "Dashboard",
    },
    {
      id: "2",
      icon: <FaShoppingCart />,
      title: "Order",
    },
    {
      id: "3",
      icon: <FaShoppingCart />,
      title: "Product",
    },
    {
      id: "4",
      icon: <FaUser />,
      title: "Users",
    },
    {
      id: "5",
      icon: <FaShoppingCart />,
      title: "Order",
    },
    {
      id: "6",
      icon: <FcStatistics />,
      title: "Statistic",
    },
    {
      id: "7",
      icon: <FaPray />,
      title: "Offer",
    },
    {
      id: "8",
      icon: <FaMessage />,
      title: "Message",
    },
  ];

  return (
    <div className="w-40 lg:min-w-70 text-white text-2xl bg-primary h-full">
      <div className="py-7 w-15 mb-5 pb-2 px-3 flex items-center">
        <Image src="eshop.png" alt="logo" />
        <h2 className="ml-3 font-bold">Eshop</h2>
      </div>
      {lists.map(({ id, title, icon }) => (
        <Link
          to="#dashboard"
          className="flex w-full cursor-pointer hover:text-black duration-300 hover:bg-white border-t items-center  px-4 py-6"
          key={id}
          onClick={() => setActive(title)}
        >
          {icon}
          <p className="ml-2 sm:text-3xl font-bold">{title}</p>
        </Link>
      ))}
    </div>
  );
}
