"use client";
import { Alert } from "@mui/material";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Music Inspiration Tools</h1>
      <Alert severity="success">
        Here is a gentle confirmation that your action was successful.
      </Alert>
    </main>
  );
}
