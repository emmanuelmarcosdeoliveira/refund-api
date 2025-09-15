import multer from "multer";
import crypto from "node:crypto";
import path from "node:path";

const TMP_FOLDER = path.resolve(__dirname, "..", "..", "tmp");
const UPLOADS_FOLDER = path.resolve(__dirname, "..", "..", "uploads");

const MAX_FILE_SIZE = 1024 * 1024 * 3; //3MB
const ACCEPTED_IMAGES_TYPES = ["image/jpeg", "image/jpg", "image/png"];

const MULTER = {
  storage: multer.diskStorage({
    destination: TMP_FOLDER,
    filename(request, file, callback) {
      const fileHash = crypto.randomBytes(10).toString("hex");
      const fileName = `${fileHash}- ${file.originalname}`;
      return callback(null, fileName);
    },
  }),
};

export default {
  ACCEPTED_IMAGES_TYPES,
  MAX_FILE_SIZE,
  MULTER,
  TMP_FOLDER,
  UPLOADS_FOLDER,
};
