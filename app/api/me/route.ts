import prisma from "@/lib/prisma";
import { IUser } from "@/models/user";
import { authMiddleware } from "@/utils/authMiddleware";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const user = authMiddleware(request);

    if (!user || !user.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const existingUser = await prisma.user.findUnique({
      where: { id: user.id },
    });

    const {name, id, email} = existingUser as IUser;

    return NextResponse.json({ success: true, user: {name, id, email} });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 400 }
    );
  }
}
