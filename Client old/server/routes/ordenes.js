import express from "express";
import { ValidationGet } from "../middleware/menu.middleware.js";
import { Orders } from "../controllers/Orders/orders.js";

const router = express.Router();

router.get("/", ValidationGet, Orders);

export default router;
