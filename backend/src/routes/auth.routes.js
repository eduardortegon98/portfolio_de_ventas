// src/routes/auth.routes.js
import { Router } from "express";

const router = Router();

router.post("/login", (req, res) => {
  res.json({ message: "Login route" });
});

export default router;