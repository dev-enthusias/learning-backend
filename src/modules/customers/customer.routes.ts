import { Router } from "express";
import controller from "./customer.controller";

const router = Router();

router.get("/", controller.getAllCustomers);

export default router;
