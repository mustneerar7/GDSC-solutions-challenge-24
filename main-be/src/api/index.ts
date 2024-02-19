import express from "express";
const router = express.Router();

import listingService from "./services/listings";

router.use("/listing", listingService.router);

export default router;
