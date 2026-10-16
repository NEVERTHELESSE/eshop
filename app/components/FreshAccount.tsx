import { useState } from "react";
import AnimateButton from "./AnimateButton";
import { Link } from "react-router";
import { MdMenu } from "react-icons/md";

export default function FreshAccount() {
  const [active, setActive] = useState(false);
  function toggleActive() {
    setActive((prev) => !prev);
  }
  return (
    <div className="relative">
      <button
        className="bg-linear-0 from-primary to-tertiary p-2 sm:px-10 text-white  rounded-full shadow cursor-pointer"
        onClick={toggleActive}
      >
        Account
      </button>
      {/* <AnimateButton /> */}
      {active && (
        <div className="absolute p-4 bg-white w-60 shadow-2xl rounded-2xl flex flex-col  right-5 top-15 box text-white">
          <Link
            to="/signup"
            className="w-full text-center p-3 rounded-lg bg-secondary cursor-pointer hover:bg-primary duration-300"
          >
            Create an Account
          </Link>
          <Link
            to="/login"
            className="w-full text-center my-3 p-3 rounded-lg bg-primary cursor-pointer hover:bg-secondary duration-300"
          >
            Login{" "}
          </Link>
          <p className="text-black border-t py-3">
            Kindly Login or Create an account for a better Account, to get some
            awesome offer
          </p>
        </div>
      )}
    </div>
  );
}
