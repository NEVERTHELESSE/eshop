import { useState, type ChangeEvent, type FormEvent } from "react";

type isAdmin = {
  setIsAdmin: any;
};

export default function AdminLogin({ setIsAdmin }: isAdmin) {
  const [id, setId] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function loginAdmin(e: FormEvent) {
    e.preventDefault();
    if (
      id === "9051602536" &&
      username === "neverthelesse" &&
      email === "neverthelesse21@gmail.com" &&
      password === "ajibola21"
    ) {
      setIsAdmin(true);
    } else {
      alert("Unable to login as an Admin, You have 2 more attempt");
    }
  }

  return (
    <main className="w-screen flex-col flex items-center justify-center h-screen">
      <form
        action=""
        className="w-100 rounded-2xl shadow-2xl sm:p-6 my-4"
        onSubmit={loginAdmin}
      >
        <h2 className="text-center">
          Welcome to the Admin Dashboard kindly login to continue
        </h2>
        <input
          onChange={(e: ChangeEvent<HTMLInputElement>) => setId(e.target.value)}
          type="text"
          minLength={5}
          placeholder="Admin Id"
          className="w-full border-soft shadow border my-3 p-4 rounded-lg"
        />
        <input
          type="text"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setUsername(e.target.value)
          }

          placeholder="Username"
          minLength={3}

          className="w-full border border-soft shadow my-3 p-4 rounded-lg"
        />
        <input
          type="email"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }

          placeholder="email"
          className="w-full border-soft shadow border my-3 p-4 rounded-lg"
        />
        <input
          type="text"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
          minLength={6}

          placeholder="Password"
          className="w-full border-soft shadow border my-3 p-4 rounded-lg"
        />
        <button className="bg-primary rounded-2xl p-4 text-white w-full my-3">
          Login
        </button>
      </form>
    </main>
  );
}
