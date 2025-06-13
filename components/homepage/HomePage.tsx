"use client";
import { AuthContext } from "@/context/authContext";
import { IPost } from "@/models/post";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Post from "../post/Post";
import styles from './HomePage.module.css';

function HomePage() {
  const auth = useContext(AuthContext);
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    (async function () {
      try {
        const { data } = await axios.get("/api/posts");
        setPosts(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div className={styles.homepage}>
      {auth?.user
        ? posts.map((post) => {
            return (
              <Post key={post.id} {...post}/>
            );
          })
        : "Please log in"}
    </div>
  );
}

export default HomePage;
