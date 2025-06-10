import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "./verifyToken";
import { IUser } from "@/models/user";

export function authMiddleware(request: NextRequest): Partial<IUser> | null {
    const token = request.cookies.get("token");
    if (!token?.value) {
      return null;
    }
    const { user, error } = verifyToken(token.value);

    if (error) {
      return null;
    }
    return user;
}