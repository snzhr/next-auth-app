import prisma from "@/lib/prisma";

export async function getPosts() {
  const posts = await prisma.post.findMany({
    include: { author: true },
  });
  return posts;
}

export async function getPost(id: string) {
  const posts = await prisma.post.findUnique({ where: { id } });
  return posts;
}
