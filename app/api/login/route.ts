import prisma from "@/lib/prisma";
import { getUserByEmail } from "@/services/userService";
import { createSecretToken } from "@/utils/secretToken";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 }
      );
    }

    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (!existingUser) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      );
    }

    const isPasswordMatch = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!isPasswordMatch) {
      return NextResponse.json(
        { error: "Incorrect password" },
        { status: 400 }
      );
    }

    const token = createSecretToken({
      name: existingUser.name as string,
      userId: existingUser.id as number,
    });

    const response = NextResponse.json(
      { message: "Login successful" },
      { status: 200 }
    );

    response.cookies.set("token", token, {
      httpOnly: true,
      maxAge: 60 * 60 * 24,
    });
    return response;
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json({ error: "Login failed" }, { status: 400 });
  }
}
