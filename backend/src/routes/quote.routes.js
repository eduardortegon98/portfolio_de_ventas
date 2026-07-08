// src/routes/quote.routes.js
import { Router } from "express";

const router = Router();

router.post("/", (req, res) => {
  res.json({ message: "Quote request received" });
});

export default router;