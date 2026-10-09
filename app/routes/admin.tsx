import { lazy, Suspense, useState } from "react";
import AdminProduct from "~/paths/admin/AdminProduct";
import LeftBar from "~/paths/admin/LeftBar";
import AdminLogin from "../paths/admin/AdminLogin";

const AdminDashBoard = lazy(() => import("../paths/admin/AdminDashboard"));
const AdminOrder = lazy(() => import("../paths/admin/AdminOrder"));
export default function admin() {
  const [active, setActive] = useState("Dashboard");

  const [isAdmin, setIsAdmin] = useState(true);

  return (
    <section className="w-full  flex items-center ">
      {isAdmin ? (
        <main className="p-8 h-screen ">
          <div className="w-full h-full shadow  shadow-4xl bg-white rounded-2xl overflow-hidden flex">
            <LeftBar setActive={setActive} />
            <div className="p-6 w-full">
              <h2 className="text-2xl font-bold">{active}</h2>
              {(active == "Dashboard" && (
                <Suspense fallback="loading...">
                  <AdminDashBoard />
                </Suspense>
              )) ||
                (active == "Order" && <AdminOrder />) ||
                (active == "Product" && <AdminProduct />)}
            </div>
          </div>
        </main>
      ) : (
        <AdminLogin setIsAdmin={setIsAdmin} />
      )}
    </section>
  );
}
