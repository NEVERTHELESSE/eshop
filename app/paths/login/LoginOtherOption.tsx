import { BsGoogle } from "react-icons/bs";

export default function LoginOtherOption() {
  return (
    <div className="w-full text-white">
      <div className="w-full my-2 p-4 rounded-2xl flex bg-primary items-center">
        <BsGoogle />
        <p className="ml-4">Login with google account</p>
      </div>
    </div>
  );
}
