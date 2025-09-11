import { Router } from "express";
import { sessionsRoutes } from "./sessions-routes";
import { usersRoutes } from "./users-routes";

const routes = Router();

// Rotas públicas

routes.use("/users", usersRoutes);
routes.use("/sessions", sessionsRoutes);
export { routes };
