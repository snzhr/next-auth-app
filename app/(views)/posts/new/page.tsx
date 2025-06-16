"use client";
import PostForm from "@/components/post-form/PostForm";
import { IPost } from "@/models/post";
import axios from "axios";

function NewPost() {
  const handleSubmit = async (formData: Partial<IPost>) => {
    try {
      const post = await axios.post("/api/posts", {
        ...formData,
      });
      console.log(post);
    } catch (error) {
      console.log(error);
    }
  };

  return <PostForm onFormSubmit={handleSubmit} />;
}

export default NewPost;
