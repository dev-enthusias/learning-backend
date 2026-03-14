import express from "express";
import customerRoutes from "@modules/customers/customer.routes";
import userRoutes from "@modules/users/user.route";

const app = express();

// Routes
app.use("/customers", customerRoutes);
app.use("/users", userRoutes);

export default app;
