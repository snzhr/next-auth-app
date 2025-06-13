import { getPost } from "@/services/posts";
import React from "react";
import styles from "./SinglePost.module.css";
import CommentForm from "@/components/comment-form/CommentForm";
import { getComments } from "@/services/comments";

type Props = {
  params: { id: string };
};

async function SinglePost({ params }: Props) {
  const { id } = await params;
  const post = await getPost(id);
  const comments = await getComments({postId: id});
  return (
    <div className={styles.main}>
      <div className={styles.singlePost}>
        <h2>{post?.title}</h2>
        <p>{post?.content}</p>
        <div>
          <span>Author: {post?.author.name}</span>
          <span>Date: {post?.createdAt.toDateString()}</span>
        </div>
      </div>
      <div className={styles.comments}>
        <div>
          {
            comments.map(comment => {
              return <div>
                <p>{comment.content}</p>
                <p>{comment.author.name}</p>
                <p>{comment.createdAt.toLocaleDateString("en-US", {})}</p>
              </div>
            })
          }
        </div>
        <CommentForm postId={id} />
      </div>
    </div>
  );
}

export default SinglePost;
