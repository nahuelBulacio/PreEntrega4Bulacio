import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.render("index", { title: "Index", style: "index.css" });
});

router.get("/home", (req, res) => {
  res.render("home", { title: "Home", style: "home.css" });
});

router.get("/realtimeproducts", (req, res) => {
  res.render("realTimeProducts", {
    title: "Real Time Products",
    style: "realtimeproducts.css",
  });
});
export default router;