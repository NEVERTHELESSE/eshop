import axios from "axios";
import type { ActionFunctionArgs } from "react-router";
import "dotenv/config";

const secretKey = process.env.SECRETKEY;

export async function action({ request }: ActionFunctionArgs) {
  const body = await request.json();
  if (request.method !== "POST") {
    return Response.json({ message: "Method not allowed" }, { status: 405 });
  }
  if (!secretKey) {
    console.log("no key");
    return Response.json(
      { message: "Paystack secret key is missing" },
      { status: 500 }
    );
  }
  console.log(body);
  const data = await axios
    .post("https://api.paystack.co/transaction/initialize", body, {
      headers: {
        Authorization: `Bearer ${secretKey}`,
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      console.log(res.data);
      return res.data.data.authorization_url;
    });
  return Response.json({
    success: true,
    message: data,
  });
}
