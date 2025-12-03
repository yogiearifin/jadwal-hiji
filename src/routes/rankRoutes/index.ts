import { Router } from "express";
import { getAllRanks } from "../../controllers/rankController";

const router = Router();

router.get("/", getAllRanks);

export default router;
