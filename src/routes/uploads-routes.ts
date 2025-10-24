import path from "path";
import fs from "fs";
import { Router } from "express";
import { verifyUserAuthorization } from "@/middleware/verify-user-authorization";

const uploadsRoutes = Router();
const uploadFolder = path.resolve(__dirname, "..", "uploads"); // ajuste conforme seu projeto

// Rota GET protegida, aceita 'employee' e 'manager'
uploadsRoutes.get(
  "/:filename",
  verifyUserAuthorization(["employee", "manager"]),
  (req, res) => {
    const { filename } = req.params;
    const filePath = path.join(uploadFolder, filename);

    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ message: "Arquivo não encontrado" });
    }

    res.sendFile(filePath);
  }
);

export { uploadsRoutes };
