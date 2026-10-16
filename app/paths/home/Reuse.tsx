import Brand from "./Brand";
import FlashSales from "./FlashSales";
import Light from "./Light";
import Most from "./Most";

export default function Reuse() {
  return (
    <main>
      {/* <FlashSales title="Flash Sales" /> */}
      <Most title="Top Seller" />
      <Brand />
      <Light title={"Fans Deals"} />
      <Light title={"Smart TV's"} />
      <Most title="outdoor & garden" />
      <Light title={"Xiaomi Official Store"} />
      <Most title="Unilever Official Store" />
      <Light title={"Beyond the brand"} />
      <Light title={"computing deals"} />
      <Most title="mobile accessories deal" />
      {/* <FlashSales title="Flash Sales" /> */}
      <Most title="grocery deal - wines & more" />
      <Most title="girls fashion" />
      <Light title={"hot deals right now"} />
      <Light title={"games & console"} />
      <Most title="upto 80% off" />
    </main>
  );
}
