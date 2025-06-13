import React from "react";
import styles from "./Profile.module.css";
import { getUserById } from "@/services/userService";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import UserPosts from "./user-posts/UserPosts";
import { getPosts } from "@/services/posts";

async function Profile() {
  const user = await getUserById();
  const userPosts = await getPosts({ authorId: user?.id });
  return (
    <div className={styles.profile}>
      <div className="about">
        <p>
          <FaRegUser /> {user?.name}
        </p>
        <p>
          <MdOutlineEmail /> {user?.email}
        </p>
      </div>
      <UserPosts userPosts={userPosts} />
    </div>
  );
}

export default Profile;
