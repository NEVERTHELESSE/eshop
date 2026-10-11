// import { config } from "dotenv";
// config();

export async function loader() {
  Response.json({
    success: true,
    message: "Hello from React Router API!",
  });
}
