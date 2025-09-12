import { RefundsController } from "@/controllers/refunds-controller";
import { verifyUserAuthorization } from "@/middleware/verify-user-authorization";
import { Router } from "express";

const refundsRoutes = Router();
const refundsController = new RefundsController();

refundsRoutes.post(
  "/",
  verifyUserAuthorization(["employee"]),
  refundsController.create
);

refundsRoutes.get(
  "/",
  verifyUserAuthorization(["manager"]),
  refundsController.index
);
export { refundsRoutes };
