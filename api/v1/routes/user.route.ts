import express, { Router } from "express";
import * as controller from "../controllers/user.controller";
import * as middlewareAuth from "../middlewares/auth.middleware";
const router: Router = express.Router();

router.post("/register", controller.register);

router.post("/login", controller.login);

router.get("/detail", middlewareAuth.requireAuth, controller.detail);

export const userRoutes: Router = router;