import express from "express";
import { signIn } from "../controllers/auth.ontroller.js";
const router = express.Router();

router.post("/signin", signIn);
export default router;
