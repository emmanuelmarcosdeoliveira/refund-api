import { Router } from "express";
import { usersRoutes } from "./users-routes";

const routes = Router();

// Rotas públicas

routes.use("/users", usersRoutes);

export { routes };
