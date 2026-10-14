import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("about", "routes/about.tsx"),
  route("login", "routes/login.tsx"),
  route("signup", "routes/signup.tsx"),
  route("product", "routes/product.tsx"),
  route("cart", "routes/cart.tsx"),
  route("checkout", "routes/checkout.tsx"),
  route("admin", "routes/admin.tsx"),
  route("seller", "routes/seller.tsx"),
  route("api/hello", "routes/api/hello.ts"),
  route("api/payment", "routes/api/payment.ts"),
  route("api/loginToken", "routes/api/loginToken.ts"),
  route("api/signup", "routes/api/signup.ts"),
  route("api/me", "routes/api/me.ts"),
  route("api/newaccount", "routes/api/newAccount.ts"),
  route("api/verify", "routes/api/verify.ts"),
] satisfies RouteConfig;
