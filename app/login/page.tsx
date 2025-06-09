"use client";
import Input from "@/components/input/Input";
import React, { useContext } from "react";
import styles from "./Login.module.css";
import Link from "next/link";
import axios from "axios";
import { AuthContext } from "@/context/authContext";
import { useRouter } from "next/navigation";

function Login() {
  const auth = useContext(AuthContext);
  const router = useRouter();
  const [credentials, setCredentials] = React.useState({
    email: "",
    password: "",
  });
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      await axios.post("/api/login", credentials);
      const { data } = await axios.get("/api/me");
console.log(data);

      auth?.login(data.user);
      
      router.push("/");
    } catch (error) {
      console.error("Login error:", error);
    }
  }
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  }
  return (
    <div className={styles.login}>
      <h1 className={styles.title}>Login</h1>
      <p className={styles.description}>
        Please enter your credentials to login.
      </p>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder="Email"
          name="email"
          onChange={handleChange}
        />
        <Input
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleChange}
        />
        <button type="submit" className={styles.button}>
          Login
        </button>
      </form>
      <p className={styles.register}>
        Don't have an account?{" "}
        <Link href="/register" className={styles.link}>
          Register
        </Link>
      </p>
    </div>
  );
}

export default Login;
