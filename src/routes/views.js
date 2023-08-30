import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.render("index", { title: "Index" });
});

router.get("/home", (req, res) => {
  res.render("home", { title: "Home"});
});

router.get("/realtimeproducts", (req, res) => {
  res.render("realTimeProducts", {
    title: "Real Time Products"
  });
});
export default router;