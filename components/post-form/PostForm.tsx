"use client";
import { useContext, useEffect, useState } from "react";
import styles from "./PostForm.module.css";
import { AuthContext } from "@/context/authContext";
import { IPost } from "@/models/post";

type PostFormProps = {
  onFormSubmit: (formData: Partial<IPost>) => Promise<void>;
  name?: string;
  post?: Partial<IPost> | null;
};

function PostForm({
  name = "Create New Post",
  onFormSubmit,
  post,
}: PostFormProps) {
  const auth = useContext(AuthContext);
  const [formData, setFormData] = useState<Partial<IPost>>({
    title: "",
    content: "",
  });

  useEffect(() => {
    if (post) {
      setFormData({
        title: post?.title,
        content: post?.content,
      });
    }
  }, [post]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const updatedFormData = { ...formData, authorId: auth?.user?.id };
    await onFormSubmit(updatedFormData);
    setFormData({
      title: "",
      content: "",
    });
  };
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2 className={styles.heading}>{name}</h2>
      <input
        type="text"
        name="title"
        placeholder="Post Title"
        value={formData.title}
        onChange={handleChange}
        className={styles.input}
        required
      />
      <textarea
        name="content"
        placeholder="Write your content here..."
        value={formData.content}
        onChange={handleChange}
        className={styles.textarea}
        required
      />
      <button
        disabled={!formData.title || !formData.content}
        type="submit"
        className={styles.button}
      >
        Submit
      </button>
    </form>
  );
}

export default PostForm;
