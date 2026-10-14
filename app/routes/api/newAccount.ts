import type { ActionFunctionArgs } from "react-router";
import bcrypt from "bcrypt";
import { SignJWT } from "jose";

import { supabase } from "~/lib/supabase";
import { GiConsoleController } from "react-icons/gi";
export async function loader(_: any) {
  return Response.json({
    message: "invalid url",
  });

  //debug send a message to the admin that's someone is trying to send a get request form
} //if they send a get request

const secret = new TextEncoder().encode("jibola");
export async function action({ request }: ActionFunctionArgs) {
  const body = await request.json();
  const { username, email, password } = body.userInfo;
  if (!username || !email || !password) {
    return Response.json(
      {
        message: "all data are require",
      },
      { status: 200 }
    );
  }

  const cryptpassword = await bcrypt.hash(password, 10);
  if (!cryptpassword) {
    return Response.json(
      {
        message: "Error while crypting password",
      },
      { status: 400 }
    );
  }

  const token = await new SignJWT({ email })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("1h")
    .sign(secret);
  const { data, error } = await supabase
    .from("user")
    .insert({
      username,
      email,
      password: cryptpassword,
    })
    .select("username,email,password");
  if (error) {
    if (error.code == "23505") {
      console.log("user already exist");
      return Response.json({
        message: "User already exist",
      });
    }
    return Response.json(
      {
        message: "There was an error while creating a user",
      },
      { status: 400 }
    );
  }

  return Response.json(
    {
      message: "User successfully added",
      success: true,
      data: data[0],
    },
    {
      headers: {
        "Set-Cookie": `token=${token}; HttpOnly; Path=/; Max-Age=3600; SameSite=Lax`,
      },
      status: 200,
    }
  );
}
