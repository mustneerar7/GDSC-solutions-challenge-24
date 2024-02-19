import express from "express";
const router = express.Router();
import * as controller from "./controller";

router.post("/create", controller.createUser);

export default router;
