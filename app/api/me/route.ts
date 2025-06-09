import { verifyToken } from "@/utils/verifyToken";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const appCookies = await cookies();
    const token = appCookies.get("token");
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

    return NextResponse.json({ success: true , user});
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 400 }
    );
  }
}
