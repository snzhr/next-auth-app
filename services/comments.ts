import prisma from "@/lib/prisma";

export async function getComments({ postId }: { postId?: string }) {
  const filter = postId ? { postId } : {};
  const posts = await prisma.comment.findMany({
    where: filter,
    include: { author: true },
    orderBy: { createdAt: "desc" },
  });
  return posts;
}
