import uploadsConfig from "@/configs/upload";
import { UploadsController } from "@/controllers/uploads-controller";
import { verifyUserAuthorization } from "@/middleware/verify-user-authorization";
import { Router } from "express";
import multer from "multer";
import path from "path";
import cors from "cors";
import fs from "fs";

const uploadsRoutes = Router();
const uploadsController = new UploadsController();

// Configura Multer para upload
const upload = multer(uploadsConfig.MULTER);

// Permitir CORS do front-end
uploadsRoutes.use(
  cors({
    origin: "https://refund-ofs.vercel.app", // domínio do front-end
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Middleware para proteger todas as rotas
uploadsRoutes.use(verifyUserAuthorization(["employee"]));

/**
 * POST /uploads
 * Upload de arquivo
 */
uploadsRoutes.post("/", upload.single("file"), uploadsController.create);

/**
 * GET /uploads/:filename
 * Serve arquivos protegidos por token
 */
uploadsRoutes.get("/:filename", (req, res) => {
  const { filename } = req.params;
  const filePath = path.join(uploadsConfig.UPLOADS_FOLDER, filename);

  // Verifica se o arquivo existe
  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ message: "Arquivo não encontrado" });
  }

  // Retorna o arquivo
  res.sendFile(filePath, (err) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: "Erro ao enviar arquivo" });
    }
  });
});

export { uploadsRoutes };
