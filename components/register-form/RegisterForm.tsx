'use client';
import React from "react";
import Input from "../input/Input";
import styles from "./RegisterForm.module.css";
import axios from "axios";



function RegisterForm() {
  const [credentials, setCredentials] = React.useState({
    email: '',
    name: '',
    password: ''
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      const res = await axios.post('/api/register', credentials);
      console.log(res);
      
    } catch (error) {
        console.error('Registration error:', error);
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setCredentials(prev => ({ ...prev, [name]: value }));
  }

  return (
    <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
      <Input name="email" value={credentials.email} onChange={handleChange} type="email" placeholder="Email" />
      <Input name="name" value={credentials.name} onChange={handleChange} type="text" placeholder="Name" />
      <Input name="password" value={credentials.password} onChange={handleChange} type="password" placeholder="Password" />
      <button type="submit" className={styles.button}>
        Register
      </button>
    </form>
  );
}

export default RegisterForm;
