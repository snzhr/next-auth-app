'use client';
import { useContext, useState } from 'react';
import styles from './NewPost.module.css';
import { IPost } from '@/models/post';
import axios from 'axios';
import { AuthContext } from '@/context/authContext';

function NewPost() {
const auth = useContext(AuthContext);
  const [formData, setFormData] = useState<Partial<IPost>>({
    title: '',
    content: '',
  });


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
        await axios.post('/api/posts', {
            ...formData,
            authorId: auth?.user?.id
        });
        setFormData({
          title: "",
          content: ""
        });
    } catch (error) {
        console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2 className={styles.heading}>Create New Post</h2>
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
      <button type="submit" className={styles.button}>Submit</button>
    </form>
  );
}

export default NewPost;
