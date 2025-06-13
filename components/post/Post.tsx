import React from "react";
import styles from "./Post.module.css";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

type PostProps = {
  id: string;
  title: string;
  content: string;
};

function Post({ title, content, id }: PostProps) {
  return (
    <div className={styles.post}>
      <div className={styles.content}>
        <h4>{title}</h4>
        <p>{content}</p>
      </div>
        <Link href={`/posts/${id}`}>Read more <FaArrowRight /></Link>
    </div>
  );
}

export default Post;
