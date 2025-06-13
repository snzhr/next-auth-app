import React from "react";
import styles from "./Post.module.css";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { IUser } from "@/models/user";
import { AiOutlineUser } from "react-icons/ai";
import { CiCalendar } from "react-icons/ci";

type PostProps = {
  id: string;
  title: string;
  content: string;
  author: IUser;
  createdAt: string;
};

function Post({ title, content, id, author, createdAt }: PostProps) {
  return (
    <div className={styles.post}>
      <div className={styles.content}>
        <h4>{title}</h4>
        <p>{content}</p>
      </div>
      <div className={styles.footer}>
        <div className={styles.meta}>
            <p><AiOutlineUser /> {author.name}</p>
            <p><CiCalendar /> {new Date(createdAt).toDateString()}</p>
        </div>
        <Link href={`/posts/${id}`}>Read more <FaArrowRight /></Link>
      </div>
    </div>
  );
}

export default Post;
