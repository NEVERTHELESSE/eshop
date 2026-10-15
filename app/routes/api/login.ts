import type { ActionFunctionArgs, LoaderFunctionArgs } from "react-router";
import { SignJWT } from "jose";
import { config } from "dotenv";
import bcrypt from "bcrypt";
import { supabase } from "~/lib/supabase";
config();

export async function loader({ request }: LoaderFunctionArgs) {
  if (request.method !== "POST") {
    return Response.json({
      message: "Method is not allowed",
      status: 405,
    });
  } //cancel
}

export async function action({ request }: ActionFunctionArgs) {
  const info = await request.json();
  const { email, password } = info;

  const { data, error } = await supabase
    .from("user")
    .select("username, email,profilePic,password")
    .eq("email", email);

  if (error) {
    return Response.json({
      message: "there wasn an error while checking a user",
      status: 405,
    });
  }
  if (data?.length === 0) {
    return Response.json({
      message: "invalid username or password",
      status: 405,
    });
  }
  const userCryptPassword = data[0].password;
  const confirmPassword = await bcrypt.compare(password, userCryptPassword);
  if (!confirmPassword) {
    return Response.json({
      message: "invalid username or password",
      status: 405,
    });
  }
  const secret = new TextEncoder().encode("jibola");

  const token = await new SignJWT({ email })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("1h")
    .sign(secret);
  console.log(token);
  return Response.json(
    {
      message: "Succesfully login",
    },
    {
      headers: {
        "Set-Cookie": `token=${token}; HttpOnly; Path=/; Max-Age=3600; SameSite=Lax`,
      },
      status: 200,
    }
  );
}
