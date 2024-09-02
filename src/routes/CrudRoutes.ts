import express from "express";
import { ReadCompInventory } from "../middlewares/ReadInventory.js";

const router = express.Router();

export default router.get("/", ReadCompInventory);
