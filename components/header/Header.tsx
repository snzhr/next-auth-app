'use client';
import Link from "next/link";
import styles from "./Header.module.css";
import { useContext } from "react";
import { AuthContext } from "@/context/authContext";

function Header() {
  const auth = useContext(AuthContext);
  return (
    <header className={styles.header}>
      <nav>
        <Link href="/">Home</Link>
        <div>
          {!auth?.user ? (
            <div>
              <Link href="/login">Login</Link>
              <Link href="/register">Register</Link>
            </div>
          ) : (
            <span onClick={auth.logout}>Logout</span>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
