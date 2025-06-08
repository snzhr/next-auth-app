import Input from "@/components/input/Input";
import React from "react";
import styles from "./Login.module.css";
import Link from "next/link";

function Login() {
  return (
    <div className={styles.login}>
      <h1 className={styles.title}>Login</h1>
      <p className={styles.description}>
        Please enter your credentials to login.
      </p>
      <form className={styles.form}>
        <Input type="text" placeholder="Username" />
        <Input type="password" placeholder="Password" />
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
