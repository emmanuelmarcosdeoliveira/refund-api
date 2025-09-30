import uploadsConfig from "@/configs/upload";
import { UploadsController } from "@/controllers/uploads-controller";
import { verifyUserAuthorization } from "@/middleware/verify-user-authorization";
import { Router } from "express";
import multer from "multer";

const uploadsRoutes = Router();
const uploadsController = new UploadsController();

const upload = multer(uploadsConfig.MULTER);

uploadsRoutes.use(verifyUserAuthorization(["employee"]));
uploadsRoutes.post("/", upload.single("file"), uploadsController.create);

export { uploadsRoutes };
