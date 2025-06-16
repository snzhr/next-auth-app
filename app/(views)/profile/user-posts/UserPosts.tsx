"use client";
import { IPost } from "@/models/post";
import styles from "./UserPosts.module.css";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { MdOutlineEdit } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import Link from "next/link";

function UserPosts({ userPosts }: { userPosts: IPost[] }) {
  return (
    <div>
      <h1>My posts</h1>
      <div className={styles["user-post"]}>
        {userPosts.length === 0
          ? "No posts"
          : userPosts.map((post) => {
              return (
                <div key={post.id}>
                  <h3>{post.title}</h3>
                  <div className={styles.actions}>
                    <Link href={`/posts/${post.id}/edit`}>
                      <MdOutlineEdit />
                    </Link>
                    <MdDeleteOutline />
                    <Link href={`/posts/${post.id}`}>
                      <FaArrowAltCircleRight />
                    </Link>
                  </div>
                </div>
              );
            })}
      </div>
    </div>
  );
}

export default UserPosts;
