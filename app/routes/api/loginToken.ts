import type { ActionFunctionArgs } from "react-router";
import { SignJWT } from "jose";
import { config } from "dotenv";
config();

export async function action({ request }: ActionFunctionArgs) {
  if (request.method !== "POST") {
    return Response.json({
      message: "Method is not allowed",
      status: 405,
    });
  } //cancel all request except post
  try {
    const secret = process.env.JWT_SECRET;
    if (!secret) {
      throw new Error("JWT SECRET is missing");
    } //finding if there's secret key  or not
    const key = new TextEncoder().encode(secret); //encoding secret key
    const body = await request.json(); // getting the body that's coming from the client
    const token = await new SignJWT({
      email: body.email,
      password: body.password,
    })
      .setProtectedHeader({ alg: "HS256" })
      .setSubject(String(body.id))
      .setIssuedAt()
      .setExpirationTime("1h")
      .sign(key); //signing email and password into jwt
    console.log(token);
    // return Response.json(
    //   {
    //     message: "Login succesfully",
    //   },
    //   {
    //     headers: {
    //       "Set-Cookie": [
    //         `token=${token}`,
    //         "HttpOnly",
    //         "Secure",
    //         "SameSite=Lax",
    //         "Path=/",
    //         "Max-Age=3600",
    //       ].join("; "),
    //     },
    //   }
    // ); // if everything goes well login user
  } catch {
    return Response.json({
      message: "Unable to login",
      status: 500,
    });
  }
}
