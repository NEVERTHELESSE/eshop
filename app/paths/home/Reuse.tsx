import Brand from "./Brand";
import Light from "./Light";
import Most from "./Most";

export default function Reuse() {
  return (
    <main>
      <Most title="top seller" />
      <Brand />
      <Light title={"Fans Deals"} />
      <Light title={"Smart TV's"} />
      <Most title="outdoor & garden" />
      <Light title={"Xiaomi Official Store"} />
      <Most title="Unilever Official Store" />
      <Light title={"Beyond the brand"} />
      <Light title={"computing deals"} />
      <Most title="mobile accessories deal" />
      <Most title="grocery deal - wines & more" />
      <Most title="girls fashion" />
      <Light title={"hot deals right now"} />
      <Light title={"games & console"} />
      <Most title="upto 80% off" />
    </main>
  );
}
