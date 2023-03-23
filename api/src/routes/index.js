import { Router } from "express";
import authRoute from "./Auth.routes";
import userRoute from "./users.routes";
import productRoute from "./Product.routes";

const routes = Router();

routes.use("/users", userRoute);
routes.use("/auth", authRoute);
routes.use("/products", productRoute);
routes.get("/", (req, res) => {
  res.status(200).json("this root page");
});

export default routes;
