import {
  type RouteConfig,
  index,
  route,
  layout,
} from "@react-router/dev/routes";

export default [
  layout("routes/layout/MainLayout.tsx", [
    index("routes/home.tsx"),
    route("about", "routes/about.tsx"),
    route("product", "routes/product.tsx"),
    route("cart", "routes/cart.tsx"),
    route("checkout", "routes/checkout.tsx"),
    route("seller", "routes/seller.tsx"),
    route("api/hello", "routes/api/hello.ts"),
    route("api/payment", "routes/api/payment.ts"),
    route("api/me", "routes/api/me.ts"),
    route("api/newaccount", "routes/api/newAccount.ts"),
    route("api/verify", "routes/api/verify.ts"),
    route("api/login", "routes/api/login.ts"),
    route("api/signup", "routes/api/signup.ts"),
  ]),
  route("admin", "routes/admin.tsx"),
  route("login", "routes/login.tsx"),
  route("signup", "routes/signup.tsx"),
] satisfies RouteConfig;
