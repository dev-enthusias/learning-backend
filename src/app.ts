import express from "express";
import userRoutes from "@modules/users/user.route";
import productRoutes from "@modules/products/product.route";
import customerRoutes from "@modules/customers/customer.routes";

const app = express();

// Routes
app.use("/customers", customerRoutes);
app.use("/users", userRoutes);
app.use("/products", productRoutes);

export default app;
