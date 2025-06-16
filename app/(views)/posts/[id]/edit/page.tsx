"use client";

import PostForm from "@/components/post-form/PostForm";
import { IPost } from "@/models/post";
import axios from "axios";
import { SinglePostProps } from "../page";
import React, { useEffect, useState } from "react";

function Edit({ params }: SinglePostProps) {
  const [post, setPost] = useState<IPost | null>(null);
  const { id } = React.use(params);

  useEffect(() => {
    (async function () {
      try {
        const { data } = await axios.get(`/api/posts/${id}`);
        setPost(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  const handleSubmit = async (formData: Partial<IPost>) => {
    try {
      const {data} = await axios.put(`/api/posts/${id}`, {
        ...formData,
      });
      setPost(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <PostForm post={post} name="Update Post" onFormSubmit={handleSubmit} />
  );
}

export default Edit;
