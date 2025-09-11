import { ensureAuthenticated } from "@/middleware/ensure-authenticated";
import { Router } from "express";
import { refundsRoutes } from "./refunds-routes";
import { sessionsRoutes } from "./sessions-routes";
import { usersRoutes } from "./users-routes";
const routes = Router();

// Rotas públicas
routes.use("/users", usersRoutes);
routes.use("/sessions", sessionsRoutes);

// Rotas privadas
routes.use(ensureAuthenticated);
routes.use("/refunds", refundsRoutes);

export { routes };
