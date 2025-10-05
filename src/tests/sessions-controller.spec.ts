import request from "supertest";
import { app } from "@/app";
import { prisma } from "@/database/prisma";

describe("SessionsController", () => {
  afterAll(async () => {
    await prisma.user.delete({
      where: { email: "authtestuser@example.com" },
    });
  });

  it("should authenticate a and get a access token", async () => {
    const userResponse = await request(app).post("/users").send({
      name: "Auth testUser",
      email: "authtestuser@example.com",
      password: "password123",
    });
    const sessionResponse = await request(app).post("/sessions").send({
      email: "authtestuser@example.com",
      password: "password123",
    });
    expect(sessionResponse.status).toBe(200),
      expect(sessionResponse.body.token).toEqual(expect.any(String));
  });
});
