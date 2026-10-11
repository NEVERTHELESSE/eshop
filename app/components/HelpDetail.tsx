import { BsWhatsapp } from "react-icons/bs";
import { FiMessageSquare } from "react-icons/fi";
import { options } from "~/data/navigates";

type propT = {
  showHelpDetail: any;
};

export default function HelpDetail({ showHelpDetail }: propT) {
  return (
    <section
      className={`absolute top-10 w-50 shadow p-2 rounded-lg ${showHelpDetail ? "flex " : "hidden"}`}
    >
      <ul className="w-full p-2 my-2 rounded-lg bg-white">
        {options.map((option) => (
          <li
            key={option}
            className="p-2 flex cursor-pointer hover:bg-soft rounded-lg  items-center"
          >
            {option}
          </li>
        ))}
        <button className="primary w-full p-2 rounded-lg shadow my-2 flex justify-center items-center ">
          <FiMessageSquare />
          <span className="ml-2 ">Live Chat</span>
        </button>
        <button className="border-green-400 border w-full p-2 rounded-lg shadow flex text-green-400 justify-center items-center ">
          <BsWhatsapp />
          <span className="ml-2">Whatsapp</span>
        </button>
      </ul>
    </section>
  );
}
