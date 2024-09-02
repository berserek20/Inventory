import express from "express";
import { AuthInventory } from "../middlewares/Auth.js";
const router = express.Router();
export default router.get("/", AuthInventory);
