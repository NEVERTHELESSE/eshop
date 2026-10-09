export default function LoginWithEmail() {
  return (
    <form action="" className="w-full my-3 ">
      <input
        type="email"
        className="w-full rounded-2xl p-4  border border-primary my-2"
        placeholder="Enter your email address "
      />
      <input
        type="password"
        className="w-full my-2 rounded-2xl p-4  border border-primary"
        placeholder="Enter your password"
      />
      <button className="p-4 rounded-2xl w-full bg-soft my-2">Continue</button>
    </form>
  );
}
