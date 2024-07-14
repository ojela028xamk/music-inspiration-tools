"use client";
import { Alert } from "@mui/material";
import css from "./page.module.scss";

export default function Home() {
  return (
    <main className={css.main}>
      <h1>Music Inspiration Tools</h1>
      <Alert severity="success">
        Here is a gentle confirmation that your action was successful.
      </Alert>
    </main>
  );
}
