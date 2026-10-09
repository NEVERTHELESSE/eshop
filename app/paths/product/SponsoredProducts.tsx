import Image from "~/components/Image";

export default function SponsoredProducts() {
  return (
    <div className="w-full p-4 bg-white rounded-lg mt-10 shadow ">
      <h4>Sponsored products</h4>
      <div className="flex overflow-hidden mt-4">
        <div className="w-30">
          <div className="w-full h30">
            <Image src="products/product11.jpg" alt="cloth" />
          </div>
          <h4>ECOFLOW DEL</h4>
          <h2>N1362,00</h2>
        </div>
      </div>
    </div>
  );
}
