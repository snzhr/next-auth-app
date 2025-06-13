import prisma from "@/lib/prisma";
import { IUser } from "../models/user";
import bcrypt from "bcryptjs";
import { cookies } from "next/headers";
import { verifyToken } from "@/utils/verifyToken";

export async function createUser<IUser>(user: IUser) {}

export async function getUserByEmail(email: string) {
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  return user;
}

export async function getUserById() {
  const token = (await cookies()).get("token");

  if (!token) return null;

  const { user, error } = verifyToken(token.value);

  if (error) return null;

  const existingUser = await prisma.user.findUnique({
    where: {
      id: user?.id,
    },
    omit: { password: true },
  });

  return existingUser;
}
