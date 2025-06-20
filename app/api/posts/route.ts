import prisma from "@/lib/prisma";
import { getPosts } from "@/services/posts";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    const posts = await getPosts({});
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
    const { title, content, authorId } = await request.json();
    const post = await prisma.post.create({
      data: {
        content,
        title,
        authorId,
      },
    });

    return NextResponse.json({ message: "Success", post }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 400 }
    );
  }
}
