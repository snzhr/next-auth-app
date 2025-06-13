import prisma from "@/lib/prisma";

export async function getPosts({ authorId }: { authorId?: string }) {
  const filter = authorId ? { authorId } : {};
  const posts = await prisma.post.findMany({
    where: filter,
    include: { author: true },
    orderBy: { createdAt: "desc" },
  });
  return posts;
}

export async function getPost(id: string) {
  const posts = await prisma.post.findUnique({ where: { id }, include: {author: true} });
  return posts;
}
