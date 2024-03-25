import express from "express";
import {
  Register,
  Login,
  Validate,
  ValidateAdmin,
} from "../controllers/auth/auth.js";
import {
  ValidationLogin,
  ValidationUser,
} from "../middleware/schemaValidation.js";
const router = express.Router();

router.post("/register", ValidationUser, Register);

router.post("/login", ValidationLogin, Login);

router.get("/validate", Validate);

router.get("/validateAdmin", ValidateAdmin);
export default router;
