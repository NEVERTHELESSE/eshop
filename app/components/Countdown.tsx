import { useEffect, useState } from "react";
import { FiClock } from "react-icons/fi";

export default function Countdown() {
  const [hour, setHour] = useState(11);
  const [minute, setMinute] = useState(2);
  const [seconds, setSeconds] = useState(0);
  function time(number: number) {
    return number >= 10 ? number : `0${number}`;
  }
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => (prev < 59 ? prev + 1 : 0));
    }, 1000);
    const moveMinute = setInterval(() => {
      setMinute((prev) => (prev < 59 ? prev - 1 : 0));
    }, 60000);
    const moveHour = setInterval(() => {
      setHour((prev) => prev - 1);
    }, 600000);
    return () => {
      clearInterval(interval);
      clearInterval(moveMinute);
      clearInterval(moveHour);
    };
  }, []);

  return (
    <main className="bg-white text-tertiary-600 flex items-center rounded-lg sm:rounded-2xl p-1 sm:p-2">
      <FiClock />
      <p className="ml-2 ">
        <span>{time(hour)}h : </span>
        <span>{time(minute)}m : </span>
        <span>{time(seconds)}s </span>
        {/* : 37m : 05s */}
      </p>
    </main>
  );
}
