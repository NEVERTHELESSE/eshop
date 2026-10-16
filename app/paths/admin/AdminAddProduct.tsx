import { useState, type ChangeEvent } from "react";
import Image from "~/components/Image";
import { supabase } from "~/lib/supabase";
import { toast } from "react-toastify";
export default function AdminAddProduct() {
  const [src, setSrc] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  function addImage() {
    setSrc((prev) => [...prev, productImage]);
    setProductImage("");
  }

  const [productDetails, setProductDetails] = useState({
    title: "",
    description: "",
    src: [""],
    discount: [],
    price: 0,
    numberOfProduct: 0,
    quantity: 0,
  });
  const [productImage, setProductImage] = useState("");
  async function addProduct(e: any) {
    e.preventDefault();
    setLoading(true);
    const { data, error } = await supabase.from("product").insert({
      title: productDetails.title,
      price: productDetails.price,
      src,
      discount: productDetails.discount,
      numberOfProduct: productDetails.numberOfProduct,
      quantity: productDetails.quantity,
      description: productDetails.description,
      deal_type: deal,
    });
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
  const dealsTypes = [
    "Flash Sales",
    "Top Seller",
    "Xiamoi Brand",
    "Fans Deals",
    "Smart TV's",
    "outdoor & garden",
    "Xiaomi Official Store",
    "Unilever Official Store",
    "Beyond the brand",
    "computing deals",
    "mobile accessories deal",
  ];
  const [deal, setDeal] = useState("");
  return (
    <form
      className="w-full border-t py-4 overflow-scroll "
      onSubmit={addProduct}
    >
      <div className="md:flex justify-between">
        <div className="w-full md:w-[50%]">
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
          <div className="md:flex">
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
          <div className="flex">
            <select
              onChange={(e) => setDeal(e.target.value)}
              name="deals"

              className="p-3 rounded-2xl border"
              id="deals"
            >
              {dealsTypes.map((dealsType) => (
                <option value={dealsType} key={dealsType}>
                  {dealsType}
                </option>
              ))}
            </select>
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
            value={productImage}
            placeholder="Paste image url here"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setProductImage(e.target.value)
            }
          />
          <p className="text-center my-3">or</p>
          <div className="size-80 rounded-2xl border flex items-center justify-center flex-col relative">
            <h4 className="absolute text-2xl">
              Paste your image url
              <span>Local image isn't available for naw</span>
            </h4>
            {productImage != "" && <Image src={productImage} alt="image" />}
          </div>
          <div className="bg-secondary p-2" onClick={addImage}>
            Add image
          </div>
          <div className="flex mt-3">
            {src.map((s, index) => (
              <div key={index} className="border size-20">
                <Image src={s} alt={s} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <button
        type="submit"
        className={`w-full ${loading ? "bg-soft" : "bg-primary"} font-bold text-white p-3 rounded-2xl my-5 cursor-pointer`}
      >
        Add Product
      </button>
    </form>
  );
}
