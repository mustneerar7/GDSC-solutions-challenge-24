import express from "express";
const router = express.Router();

import userService from "./services/users";

router.use("/user", userService.router);

export default router;
