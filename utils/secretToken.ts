import jwt from "jsonwebtoken";
export const SECRET_KEY = "nextapp";

type Token = {
  userId: number;
  name: string;
};

export function createSecretToken({ userId, name }: Token) {
  return jwt.sign({ userId, name }, SECRET_KEY, {
    expiresIn: "1d",
  });
}
