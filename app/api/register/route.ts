import prisma from "@/lib/prisma";
import { createUser, getUserByEmail } from "@/services/userService";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const credentials = await request.json();
    const { email, name, password } = credentials;
    if (!email || !name || !password) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = {
      email,
      name,
      password: hashedPassword,
    };
    await prisma.user.create({
      data: user,
    });

    return NextResponse.json(
      { message: "Registration successful", user: { email, name } },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ error: "Registration failed" }, { status: 400 });
  }
}
