export const authConfig = {
  jwt: {
    secret: process.env.JWT_SECRET || "emmanuel",
    expiresIn: "1d",
  },
};
