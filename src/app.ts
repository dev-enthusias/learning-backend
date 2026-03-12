import express from "express";
import customerRoutes from "@modules/customers/customer.routes";

const app = express();

// Routes
app.use("/customers", customerRoutes);

export default app;
