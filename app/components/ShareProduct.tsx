import { BsWhatsapp } from "react-icons/bs";
import { FiFacebook, FiTwitter, FiX, FiXCircle } from "react-icons/fi";
import { Link } from "react-router";

type productT = {
  id: string;
};
export default function ShareProduct({ id }: productT) {
  return (
    <section>
      <h4>SHARE THIS PRODUCT</h4>

      <div className="flex">
        <Link to={`https://facebook/${id}`}>
          <FiFacebook className="mr-3 p-1 rounded-full text-4xl border" />
        </Link>
        <Link to={`https://twitter/${id}`}>
          <FiTwitter className="mr-3 p-1 rounded-full text-4xl border" />
        </Link>
        <Link to={`https://web.whatsapp/${id}`}>
          <BsWhatsapp className="mr-3 p-1 rounded-full text-4xl border" />
        </Link>
      </div>
    </section>
  );
}
