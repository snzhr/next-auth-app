"use client";
import React, { useContext, useState } from "react";
import styles from "./CommentForm.module.css";
import { IComment } from "@/models/comment";
import { AuthContext } from "@/context/authContext";
import axios from "axios";

function CommentForm({ postId }: { postId: string }) {
  const auth = useContext(AuthContext);
  const [content, setContent] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      const comment: Partial<IComment> = {
        content,
        postId,
        authorId: auth?.user?.id,
      };

      await axios.post("/api/comments", comment);
      setContent("");
    } catch (error) {
      console.log(error);
    }
  }

  if (!auth || !auth?.user) return null;

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <textarea
        rows={5}
        value={content}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          setContent(e.target.value)
        }
      ></textarea>
      <button disabled={!content} type="submit">
        Add
      </button>
    </form>
  );
}

export default CommentForm;
