import { Suspense, lazy, useState } from "react";
import AdminAddProduct from "./AdminAddProduct";
import Selection from "./Selection";
const AllProduct = lazy(() => import("./AllProduct"));

export default function AdminProduct() {
  const lists = ["Add Product", "All Product", "Out of Stock", ""];
  const [selected, setSelected] = useState("All Product");
  return (
    <div className="py-6 w-[60vw] ">
      <Selection lists={lists} selected={selected} setSelected={setSelected} />
      {selected == "Add Product" && <AdminAddProduct />}
      {selected == "All Product" && (
        <Suspense fallback="loading">
          <AllProduct />
        </Suspense>
      )}
    </div>
  );
}
