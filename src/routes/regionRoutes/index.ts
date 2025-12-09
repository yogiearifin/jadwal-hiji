import { Router } from "express";
import { getAllRegion } from "../../controllers/regionController";

const router = Router();

router.get("/", getAllRegion);
export default router;
