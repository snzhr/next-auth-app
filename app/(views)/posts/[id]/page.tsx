import { getPost } from "@/services/posts";
import React from "react";
import styles from "./SinglePost.module.css";
import CommentForm from "@/components/comment-form/CommentForm";
import { getComments } from "@/services/comments";
import Comment from "@/components/comment/Comment";

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
          {
            comments.map(comment => {
              return <Comment comment={comment}  />
            })
          }
        </div>
        <CommentForm postId={id} />
    </div>
  );
}

export default SinglePost;
