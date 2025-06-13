import prisma from "@/lib/prisma";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export async function GET(req: NextApiRequest) {
  try {
    console.log(req);
    
    // const post = await prisma.post.findUnique({
    //     // where: {}
    // });
    return NextResponse.json(
    //   post,
      { status: 200 }
    );

  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 400 }
    );
  }
}