import express from "express";
import authMiddleware from "../middleware/auth.js";
import { placeOrder, verifyOrder, userOrders, listOrders, updateStatus } from "../controllers/orderController.js";

const orderRouter = express.Router();

// Place an order (Requires authentication)
orderRouter.post("/place", authMiddleware, placeOrder);

// Verify order after Stripe payment (Handles GET requests)
orderRouter.post("/verify", verifyOrder);  // ✅ Changed from POST to GET

// Fetch user orders (Requires authentication)
orderRouter.post("/userorders", authMiddleware, userOrders);

orderRouter.get("/list",listOrders);

orderRouter.post("/status",updateStatus);

export default orderRouter;
