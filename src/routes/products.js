import { Router } from "express";

const router = Router();

import { ProductManager } from "../ProductManager.js";

const pro = new ProductManager("../src/productos.json");

router.get("/", (req, res) => {
  res.send(`Server levantado sobre puerto: 8080`);
});

router.get("/products", async (req, res) => {
  const prod = await pro.getProducts();
  const limite = req.query.limit;
  if (limite) {
    const limiteProductos = prod.slice(0, limite);
    res.json(limiteProductos);
  } else {
    res.json(prod);
  }
});

router.get("/products/:pid", async (req, res) => {
  const getPID = await pro.getProductById(+req.params.pid);
  res.json(getPID);
});

export default router;
