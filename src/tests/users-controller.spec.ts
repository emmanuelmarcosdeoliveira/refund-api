import request from "supertest";
import { app } from "@/app";
import { prisma } from "@/database/prisma";

describe("UsersController", () => {
  afterAll(async () => {
    await prisma.user.delete({
      where: { email: "testuser@example.com" },
    });
  });

  it("should a new create user successfully", async () => {
    const response = await request(app).post("/users").send({
      name: "Test User",
      email: "testuser@example.com",
      password: "password123",
      role: "employee",
    });

    expect(response.body.message).toBe("Usuário criado com sucesso");
    expect(response.status).toBe(201);
  });
  it("should throw an error if user with same email already exists", async () => {
    const response = await request(app).post("/users").send({
      name: "Duplicate User",
      email: "testuser@example.com",
      password: "password123",
      role: "employee",
    });
    expect(response.status).toBe(409);
    expect(response.body.message).toBe(
      "Já existe um usuário com esse e-mail cadastrado"
    );
  });
  it("should throw a validation error if email is invalid", async () => {
    const response = await request(app).post("/users").send({
      name: "Test User",
      email: "invalid-email",
      password: "password123",
    });

    expect(response.status).toBe(400);
    expect(response.body.message).toBe("Validation error");
  });
});
