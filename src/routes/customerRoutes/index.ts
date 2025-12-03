import { Router } from "express";
import {
  getAllCustomers,
  getSingleCustomer,
} from "../../controllers/customerController";

const router = Router();

router.get("/", getAllCustomers);
router.get("/:id", getSingleCustomer);

export default router;
