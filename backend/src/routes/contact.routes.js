// src/routes/contact.routes.js
import { Router } from "express";

const router = Router();

router.post("/", (req, res) => {
  res.json({ message: "Contact received" });
});

export default router;