import { jwtVerify } from "jose";
import type { LoaderFunctionArgs } from "react-router";
import { supabase } from "~/lib/supabase";

const secret = new TextEncoder().encode("jibola");
export async function loader({ request }: LoaderFunctionArgs) {
  const cookieHeader = request.headers.get("Cookie");
  const token = cookieHeader?.split("=")[1];
  if (!token) {
    return Response.json(
      {
        message: "no token",
      },
      { status: 401 }
    );
  }

  try {
    const { payload } = await jwtVerify(token, secret, {
      algorithms: ["HS256"],
    });
    const ownerToken = await supabase
      .from("user")
      .select("email, username, profilePic")
      .eq("email", payload.email);

    if (!ownerToken.success) {
      return Response.json(
        {
          message: "There was an error while getting the user",
        },
        { status: 400 }
      );
    }
    console.log(ownerToken);

    return Response.json(
      {
        message: "Token verfied successfully",
        userid: payload.email,
        sucess: true,
      },
      { status: 200 }
    );
  } catch (error) {
    return Response.json({
      message: "Invalid token",
    });
  }
}
