import { authConfig } from "@/configs/auth";
import { AppError } from "@/utils/AppError";
import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
interface tokenPayload {
  role: string;
  sub: string;
}

function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  try {
    const authHeader = request.headers.authorization;
    if (!authHeader) {
      throw new AppError("JWT Token not found", 401);
    }
    const [, token] = authHeader.split(" ");
    const { role, sub: user_id } = verify(
      token,
      authConfig.jwt.secret
    ) as tokenPayload;
    request.user = {
      id: user_id,
      role,
    };
    return next();
  } catch (error) {
    throw new AppError("Invalid JWT Token", 401);
  }
}
export { ensureAuthenticated };
