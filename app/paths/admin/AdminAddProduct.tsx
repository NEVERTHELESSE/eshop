import { useState, type ChangeEvent } from "react";
import Image from "~/components/Image";
import { supabase } from "~/lib/supabase";
import { toast } from "react-toastify";
export default function AdminAddProduct() {
  const [src, setSrc] = useState("");
  const [loading, setLoading] = useState(false);
  const [productDetails, setProductDetails] = useState({
    title: "",
    description: "",
    src: [""],
    discount: [],
    price: 0,
    numberOfProduct: 0,
    quantity: 0,
  });
  async function addProduct(e: any) {
    e.preventDefault();
    setLoading(true);

    const { data, error } = await supabase
      .from("product")
      .insert({
        title: productDetails.title,
        price: productDetails.price,
        src: [src],
        discount: productDetails.discount,
        numberOfProduct: productDetails.numberOfProduct,
        quantity: productDetails.quantity,
        description: productDetails.description,
      })
      .select();
    if (error) {
      toast("There was an error while adding product kidnly try again", {
        type: "error",
      });
      setLoading(false);
    } else {
      toast("Product successfully added", { type: "success" });
      setProductDetails({
        title: "",
        description: "",
        discount: [],
        src: [],
        price: 0,
        numberOfProduct: 0,
        quantity: 0,
      });
      setLoading(false);
    }
  }

  function changeFile(e: any) {
    const url = URL.createObjectURL(e.target.files[0]);
    setSrc(url);
  }

  return (
    <form className="w-[60vw] border-t py-4 " onSubmit={addProduct}>
      <div className="flex justify-between">
        <div className="w-[50%]">
          <div className="w-full mb-2">
            <p>Title</p>
            <input
              type="text"
              minLength={10}
              required
              className="p-6 w-full rounded-2xl  border  "
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setProductDetails((prev) => ({
                  ...prev,
                  title: e.target.value,
                }))
              }
            />
          </div>
          <div className="flex">
            <div className="w-full mr-2 mb-2">
              <p>Price</p>
              <input
                type="number"
                minLength={1}
                required
                className="p-6 w-full rounded-2xl  border  "
                onChange={(e: any) =>
                  setProductDetails((prev) => ({
                    ...prev,
                    price: e.target.value,
                  }))
                }
              />
            </div>
            <div className="w-full mb-2">
              <p>Discount</p>
              <input
                placeholder="30% (Optional)"
                className="p-6 w-full rounded-2xl  border  "

                type="number"
                onChange={(e: any) =>
                  setProductDetails((prev) => ({
                    ...prev,
                    discount: e.target.value,
                  }))
                }
              />
            </div>
          </div>
          <div className="flex">
            <div className="w-full mb-2 mr-2">
              <p>Number of product</p>
              <input
                type="text"
                minLength={1}
                required
                className="p-6 w-full rounded-2xl  border  "
                onChange={(e: any) =>
                  setProductDetails((prev) => ({
                    ...prev,
                    numberOfItems: e.target.value,
                  }))
                }
              />
            </div>
            <div className="w-full mb-2">
              <p>Quantity</p>
              <input
                type="text"
                minLength={1}
                required
                className="p-6 w-full rounded-2xl  border  "
                onChange={(e: any) =>
                  setProductDetails((prev) => ({
                    ...prev,
                    quantity: e.target.value,
                  }))
                }
              />
            </div>
          </div>
          <div className="w-full mb-2">
            <p>Description</p>
            <textarea
              minLength={10}
              required
              className="p-6 w-full rounded-2xl  border  "
              onChange={(e: any) =>
                setProductDetails((prev) => ({
                  ...prev,
                  description: e.target.value,
                }))
              }
            />
          </div>
        </div>
        <div>
          <input
            type="text"
            className="p-4 rounded-lg border w-full "
            placeholder="Paste image url here"
            onChange={(e: any) => setSrc(e.target.value)}
          />
          <p className="text-center my-3">or</p>
          <div className="size-80 rounded-2xl border flex items-center justify-center flex-col relative">
            <h4 className="absolute text-2xl">Choose or Drop File here</h4>
            {src != "" && <Image src={src} alt="image" />}
            <input
              type="file"
              onChange={changeFile}

              className="size-full absolute cursor-pointer opacity-0"
            />
          </div>
          <a download href={src}>
            download
          </a>
          {/* <div className="flex mt-3">
            <div className="border size-20"></div>
          </div> */}
        </div>
      </div>
      <button
        className={`w-full ${loading ? "bg-soft" : "bg-primary"} font-bold text-white p-3 rounded-2xl my-5 cursor-pointer`}
      >
        Add Product
      </button>
    </form>
  );
}
