import { jwtVerify } from "jose";
import type { LoaderFunctionArgs } from "react-router";
import { supabase } from "~/lib/supabase";

export default async function loader({ request }: LoaderFunctionArgs) {
  const cookieHeader = request.headers.get("Cookie");
  const token = cookieHeader
    ?.split(";")
    .map((cookie) => cookie.trim())
    .find((cookie) => cookie.startsWith("auth_token="))
    ?.slice("auth_toke=".length);
  if (!token) {
    return Response.json(
      {
        message: "Not logged in",
      },
      { status: 401 }
    );
  }
  const secret = process.env.JWT_SECRET;
  if (!secret || secret.length < 32) {
    console.error("JWT_SECRET is missing or too short");
    return Response.json(
      {
        message: "Server configuation error",
      },
      { status: 500 }
    );
  }
  try {
    const { payload } = await jwtVerify(
      token,
      new TextEncoder().encode(secret),
      { algorithms: ["HS256"] }
    );
    if (!payload.sub) {
      return Response.json({ message: "Invalid session" }, { status: 401 });
    }

    const { data, error } = await supabase
      .from("user")
      .select("id, username, email")
      .eq("id", payload.sub)
      .maybeSingle();

    if (error) {
      console.error("Session lookup error: ", error.message);
      return Response.json(
        { message: "Unable to verify session" },
        { status: 500 }
      );
    }

    if (!data) {
      return Response.json(
        {
          message: "User no longer exist",
        },
        { status: 401 }
      );
    }
    return Response.json({ data });
  } catch {
    return Response.json(
      {
        message: "Session expired or invalid",
      },
      {
        status: 401,
        headers: {
          "Set-Cookie":
            "auth_token=; HttpOnly; Path=/; SameSite=Lax; Max-Age=0" +
            (process.env.NODE_ENV === "production" ? "; Secure" : ""),
        },
      }
    );
  }
}
