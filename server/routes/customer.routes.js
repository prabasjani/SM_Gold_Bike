import express from "express";
import {
  allCustomers,
  customerInfo,
  deleteCustomer,
  newCustomer,
  updateCustomer,
} from "../controllers/customer.controller.js";

const router = express.Router();

router.get("/all-customers", allCustomers);
router.get("/customer/:id", customerInfo);
router.post("/new-customer", newCustomer);
router.put("/update-customer/:id", updateCustomer);
router.post("/delete-customer/:id", deleteCustomer);

export { router as CustomerRouter };
