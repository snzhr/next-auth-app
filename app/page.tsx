import Header from "@/components/header/Header";
import styles from "./page.module.css";
import HomePage from "@/components/homepage/HomePage";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <HomePage />
      </main>
    </div>
  );
}
