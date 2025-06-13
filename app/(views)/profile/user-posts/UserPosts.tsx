"use client";
import { IPost } from "@/models/post";
import styles from './UserPosts.module.css';
import { FaArrowAltCircleRight } from "react-icons/fa";
import Link from "next/link";

function UserPosts({userPosts}: {userPosts: IPost[]}) {
  return (
    <div>
      <h1>My posts</h1>
      <div className={styles['user-post']}>
      {userPosts.length === 0
        ? "No posts"
        : userPosts.map((post) => {
            return <div key={post.id}>
              <h3>{post.title}</h3>
              <Link href={`/posts/${post.id}`}><FaArrowAltCircleRight /></Link>
            </div>;
          })}
      </div>
    </div>
  );
}

export default UserPosts;
