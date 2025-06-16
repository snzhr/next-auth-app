import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

type PostParams = {
  params: { id: string };
};

export async function GET(req: NextRequest, { params }: PostParams) {
  try {
    const { id } = await params;
    const post = await prisma.post.findUnique({ where: { id } });

    if (!post) {
      return NextResponse.json({ message: "Post not found" }, { status: 404 });
    }

    return NextResponse.json(post, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 400 }
    );
  }
}

export async function PUT(req: NextRequest, { params }: PostParams) {
  try {
    const { id } = await params;

    const data = await req.json();
    const existingPost = await prisma.post.findUnique({ where: { id } });

    if (!existingPost) {
      return NextResponse.json({ message: "Post not found" }, { status: 404 });
    }

    const post = await prisma.post.update({ data, where: { id } });

    return NextResponse.json(post, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 400 }
    );
  }
}

export async function DELETE(req: NextRequest, { params }: PostParams) {
  try {
    const { id } = await params;
    const post = await prisma.post.delete({ where: { id } });

    return NextResponse.json(
      { message: "Post successfully deleted" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 400 }
    );
  }
}
