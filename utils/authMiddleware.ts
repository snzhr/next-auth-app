import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "./verifyToken";

export function authMiddleware(request: NextRequest) {
    const token = request.cookies.get("token");
    if (!token?.value) {
      return NextResponse.json({ messsage: "Unathorized" }, { status: 401 });
    }

    const { user, error } = verifyToken(token.value);

    if (error) {
      return NextResponse.json(
        { message: "Forbidden: Insufficient permissions" },
        { status: 403 }
      );
    }

    return user;
}