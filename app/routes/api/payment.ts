import axios from "axios";
// import { config } from "dotenv";
// config();

// const secretKey = import.meta.env.SECRETKEY;

export async function loader() {
  // await axios
  //   .post(
  //     "https://api.paystack.co/transaction/initialize",
  //     JSON.stringify({
  //       email: "easy21ajibola@gmail.com",
  //       amount: 1000 * 100,
  //       currency: "NGN",
  //     }),
  //     {
  //       headers: {
  //         Authorization: `Bearer sk_live_e531bca69c5e6858f53959bae9d674b3368c7ffa`,
  //         "Content-Type": "application/json",
  //       },
  //     }
  //   )
  //   .then(
  //     (res) => {
  //       console.log(res.data);
  //       return res.data;
  //     }
  //   )
  //   .catch((error) => {
  //     console.log(error || "Payment failed to initialize");
  //   });
  Response.json({
    success: true,
    message: "Hello from React Router API!",
  });
}
