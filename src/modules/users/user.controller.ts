import { Request, Response } from "express";
import { findAllUsers } from "./user.repository";

export const getUsers = async (req: Request, res: Response) => {
  const users = await findAllUsers();

  res.json({ message: "List of all users", data: users });
};
