import uploadConfig from "@/configs/upload";
import cors from "cors";
import express from "express";
import "express-async-errors";
import { errorHandling } from "./middleware/error-handling";
import { routes } from "./routes";
const app = express();
app.use(
  cors({
    origin: "https://refund-ofs.vercel.app",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.json());

app.use("/uploads", express.static(uploadConfig.UPLOADS_FOLDER));

app.use(routes);
app.use(errorHandling);

export { app };
