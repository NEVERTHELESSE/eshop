import Image from "~/components/Image";

export default function Voucher() {
  return (
    <main className="shadow flex rounded-2xl mb-4 p-2 sm:h-80 ">
      <div className="w-[50%] rounded-2xl overflow-hidden">
        <Image src="voucher/vocher1.gif" alt="voucher" />
      </div>
      <div className="ml-3 bg-contain w-[50%] rounded-2xl overflow-hidden">
        <Image src="voucher/vocher1.gif" alt="voucher" />
      </div>
    </main>
  );
}
