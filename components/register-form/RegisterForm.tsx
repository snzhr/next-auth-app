'use client';
import React from "react";
import Input from "../input/Input";
import styles from "./RegisterForm.module.css";
import axios from "axios";



function RegisterForm() {
  const [credentials, setCredentials] = React.useState({
    fullName: '',
    email: '',
    username: '',
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
      <Input name="fullName" value={credentials.fullName} onChange={handleChange} type="text" placeholder="Full name" />
      <Input name="email" value={credentials.email} onChange={handleChange} type="email" placeholder="Email" />
      <Input name="username" value={credentials.username} onChange={handleChange} type="text" placeholder="Username" />
      <Input name="password" value={credentials.password} onChange={handleChange} type="password" placeholder="Password" />
      <button type="submit" className={styles.button}>
        Register
      </button>
    </form>
  );
}

export default RegisterForm;
