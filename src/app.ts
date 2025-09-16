import uploadConfig from "@/configs/upload";
import cors from "cors";
import express from "express";
import "express-async-errors";
import { errorHandling } from "./middleware/error-handling";
import { routes } from "./routes";
const app = express();
app.use(cors());
app.use(express.json());

app.use("/uploads", express.static(uploadConfig.UPLOADS_FOLDER));

app.use(routes);
app.use(errorHandling);

export { app };
