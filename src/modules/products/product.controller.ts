import { Request, Response } from "express";
import { findAllProducts } from "./product.repository";

export const getAllProducts = async (req: Request, res: Response) => {
    const findAllProductsCatalog = await findAllProducts();

    res.json({
        message: "List of all products catalog",
        data: findAllProductsCatalog,
    });
};
