import { AppError } from "@/utils/AppError";
import { NextFunction, Request, Response } from "express";

function verifyUserAuthorization(role: string[]) {
  return (request: Request, response: Response, next: NextFunction) => {
    if (!request.user || !role.includes(request.user.role)) {
      throw new AppError("Unauthorized", 401);
    }
    return next();
  };
}
export { verifyUserAuthorization };
