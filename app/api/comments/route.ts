import prisma from "@/lib/prisma";
import { getComments } from "@/services/comments";
import { NextRequest, NextResponse } from "next/server";


export async function GET() {
  try {
    const posts = await getComments({});
    return NextResponse.json(
      posts,
      { status: 200 }
    );

  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 400 }
    );
  }
}



export async function POST(request: NextRequest) {
  try {
    const { content, authorId, postId } = await request.json();
    const comment = await prisma.comment.create({
      data: {
        content,
        authorId,
        postId,
      },
    });
    return NextResponse.json({ message: "Success", comment }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 400 }
    );
  }
}
