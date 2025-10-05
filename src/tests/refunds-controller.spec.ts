import request from "supertest";
import { app } from "@/app";
import { prisma } from "@/database/prisma";

describe("Refunds", () => {
  let token: string;
  const testEmail = "testrefund@example.com";

  beforeAll(async () => {
    await request(app).post("/users").send({
      name: "Test refund",
      email: testEmail,
      password: "password123",
      role: "employee",
    });

    const sessionResponse = await request(app).post("/sessions").send({
      email: testEmail,
      password: "password123",
    });

    token = sessionResponse.body.token;
  });

  it("should create a new Refund", async () => {
    const responseRefund = await request(app)
      .post("/refunds")
      .set("Authorization", `Bearer ${token}`)
      .send({
        name: "Refund Test",
        category: "transport",
        amount: 1,
        filename: "comprovante_refundTest123.png",
      });

    expect(responseRefund.status).toBe(201);
  });

  afterAll(async () => {
    const user = await prisma.user.findUnique({ where: { email: testEmail } });

    if (user) {
      await prisma.refunds.deleteMany({
        where: { userId: user.id },
      });
      await prisma.user.delete({
        where: { id: user.id },
      });
    }
  });
});
