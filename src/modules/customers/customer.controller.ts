import { Response, Request } from "express";
import { findAllCustomers } from "./customer.respository";

const getAllCustomers = async (req: Request, res: Response) => {
  const customers = await findAllCustomers();

  res.json({ message: "List of all customers", data: customers });
};

export default { getAllCustomers };
