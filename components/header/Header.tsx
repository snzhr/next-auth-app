'use client';
import Link from "next/link";
import styles from "./Header.module.css";
import { useContext } from "react";
import { AuthContext } from "@/context/authContext";
import { FiUser, FiUserPlus } from "react-icons/fi";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { FiPlusCircle } from "react-icons/fi";
import { LuCircleUser } from "react-icons/lu";  

function Header() {
  const auth = useContext(AuthContext);
  return (
    <header className={styles.header}>
      <nav>
        <Link href="/">SZ</Link>
        <div>
          {!auth?.user ? (
            <div>
              <Link href="/login"><FiUser /></Link>
              <Link href="/register"><FiUserPlus /></Link>
            </div>
          ) : (
            <div>
              <Link href="/posts/new" title="Add post"><FiPlusCircle /></Link>
              <Link href="/profile" title="Profile"><LuCircleUser /></Link>
              <span title="Logout" onClick={auth.logout}><RiLogoutCircleRLine /></span>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
