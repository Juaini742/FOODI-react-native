import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { getCategoryFromRequest } from "../utilities/getCategoryFromRequest";

const prisma = new PrismaClient();

export const getProducts = async (req: Request, res: Response) => {
  try {
    let whereClause = {};

    if (req.query.category) {
      const category = getCategoryFromRequest(req.query.category);
      whereClause = { category: { name: category } };
    }

    const products = await prisma.product.findMany({
      include: {
        category: {
          select: {
            name: true,
          },
        },
      },
      where: whereClause,
    });

    res.status(200).json(products);
  } catch (error) {
    console.error(error.message);
    res.status(500).json("Internal Server Error");
  }
};

export const getOneProduct = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    if (!id) {
      res.status(400).json({ message: "Some credentials is missing" });
      return;
    }

    const product = await prisma.product.findUnique({
      where: {
        id,
      },
      include: {
        category: {
          select: {
            name: true,
          },
        },
      },
    });

    if (!product) {
      res.status(400).json({ message: "Product not found" });
      return;
    }

    res.status(200).json(product);
  } catch (error) {
    console.error(error.message);
    res.status(500).json("Internal Server Error");
  }
};
