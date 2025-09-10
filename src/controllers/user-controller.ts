import { prisma } from "@/database/prisma";
import { AppError } from "@/utils/AppError";
import { UserRole } from "@prisma/client";
import { hash } from "bcrypt";
import { Request, Response } from "express";
import { z } from "zod";
class UserController {
  async create(request: Request, response: Response) {
    const bodySchema = z.object({
      name: z.string().trim().min(2, { message: "O nome é obrigatório" }),
      email: z.string().email({ message: "E-mail, inválido" }).toLowerCase(),
      password: z
        .string()
        .min(6, { message: "Deve conter pelo menos 6 caracteres" }),
      role: z
        .enum([UserRole.employee, UserRole.manager])
        .default(UserRole.employee),
    });

    const { name, email, password, role } = bodySchema.parse(request.body);

    const userWithSameEmail = await prisma.user.findFirst({ where: { email } });
    if (userWithSameEmail) {
      throw new AppError(
        "Já existe um usuário com esse e-mail cadastrado",
        409
      );
    }
    const hashedPassword = await hash(password, 8);

    await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role,
      },
    });

    response.status(201).json({ message: "Usuário criado com sucesso" });
  }
}
export { UserController };
