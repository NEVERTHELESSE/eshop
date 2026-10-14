import type { ActionFunctionArgs } from "react-router";
import { supabase } from "~/lib/supabase";
import bcrypt from "bcrypt";
import { SignJWT } from "jose";

export async function action({ request }: ActionFunctionArgs) {
  if (request.method !== "POST") {
    Response.json({
      message: "Method is not allowe",
      status: 405,
    });
  } //check user method
  try {
    const body = await request.json();
    const { email, username, password }: any = body.userInfo ?? {};
    const isProduction = process.env.NODE_ENV === "production";
    if (!email || !username || !password) {
      return Response.json({
        message: "Email, Username and password are required",
        status: 400,
      });
    } //checking whether all the userinformation are given
    const secret = process.env.JWT_SECRET;
    const passwordCrypt = await bcrypt.hash(password, 10); //hashing the

    const key = new TextEncoder().encode(secret); //encoding secret key
    const token = await new SignJWT({
      email,
    })
      .setProtectedHeader({ alg: "HS256" })
      .setSubject(email)
      .setIssuedAt()
      .setExpirationTime("1h")
      .sign(key); //signing email and password into jwt
    const { data, error }: any = await supabase
      .from("user")
      .insert({ username, email, password: passwordCrypt })
      .select("id, username, email");
    if (data == null || error) {
      console.log(error);
      if (error.code === "23505") {
        return Response.json(
          { message: "User already exist" },
          { status: 409 }
        );
      } else {
        return Response.json(
          { message: "There was an error while creating user try again later" },
          { status: 500 }
        );
      }
    } else {
      if (!data || data.lenght === 0) {
        return Response.json(
          {
            message: "User was not created",
          },
          { status: 500 }
        );
      }
      return Response.json(
        {
          message: "User createdddkd succesfully",
          user: data[0],
        },
        {
          status: 201,
          headers: {
            // "Set-Cookie": `token=${token}; HttpOnly; Path=/; Max-Age=3600; SameSite=Lax`,
            "Set-Cookie": `token=wows; HttpOnly; Path=/; Max-Age=3600; SameSite=Lax`,
          },
        }
      );
    }
  } catch (error) {
    console.error("Registration error", error);
    return Response.json(
      { message: "An unexpected error occured" },
      { status: 500 }
    );
  }
}
