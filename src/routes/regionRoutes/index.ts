import { Router } from "express";
import {
  getAllRegion,
  getSingleRegion,
} from "../../controllers/regionController";

const router = Router();

router.get("/", getAllRegion);
router.get("/:id", getSingleRegion);

export default router;
