import { Request, Response } from "express";
import { findAllUsers } from "./user.repository";

export const getUsers = (req: Request, res: Response) => {
  const users = findAllUsers();

  res.json({ message: "List of all users", data: users });
};
