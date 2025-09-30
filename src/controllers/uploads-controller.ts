import uploadConfig from "@/configs/upload";
import { DiskStorage } from "@/providers/disk-storage";
import { AppError } from "@/utils/AppError";
import { Request, Response } from "express";
import z, { ZodError } from "zod";

class UploadsController {
  async create(request: Request, response: Response) {
    const diskStorage = new DiskStorage();
    try {
      const fileSchema = z
        .object({
          filename: z.string().min(1, { message: "Arquivo é obrigatório" }),
          mimetype: z
            .string()
            .refine(
              (type) => uploadConfig.ACCEPTED_IMAGES_TYPES.includes(type),
              {
                message: `formato de arquivos permitidos: 
              ${uploadConfig.ACCEPTED_IMAGES_TYPES}`,
              }
            ),
          size: z
            .number()
            .positive()
            .refine(
              (size) => size <= uploadConfig.MAX_FILE_SIZE,
              `Arquivo excede o tamanho de: ${uploadConfig.MAX_SIZE}`
            ),
        })
        .passthrough();

      const file = fileSchema.parse(request.file);
      const filename = await diskStorage.saveFile(file.filename);

      response.json({ filename });
    } catch (error) {
      if (error instanceof ZodError) {
        if (request.file) {
          await diskStorage.deleteFile(request.file.filename, "tmp");
        }
        throw new AppError(error.issues[0].message);
      }
    }
  }
}

export { UploadsController };
