import { IUser } from "../models/user";

import bcrypt from 'bcryptjs';

const MOCK_USER: IUser = {
  name: "Test User",
  email: "test@example.com",
  password: await bcrypt.hash("test123", 10)
};

const users: IUser[] = [MOCK_USER];

export async function createUser<IUser>(user: IUser): Promise<IUser> {
  return new Promise((resolve) => {
    setTimeout(() => {
      users.push(user);
      resolve(user);
    }, 1000);
  });
}

export async function getUserByEmail(
  email: string
): Promise<IUser | undefined> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const user = users.find((user) => user.email === email);
      resolve(user);
    }, 1000);
  });
}
