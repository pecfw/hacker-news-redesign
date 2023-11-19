"use client";
import React, { useContext } from "react";
import "./globals.css";
import styles from "./styles/global.module.scss";
import typography from "./styles/typography.module.scss";
import state_theme from "./styles/state.themes.module.scss";

import Header from "./components/header";
import Footer from "./components/footer";
import { ThemeContext } from "./themeProvider";

export default function AppLayouts({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isDarkmode } = useContext(ThemeContext);

  return (
    <main
      className={`${styles.main} ${typography.typography} ${
        isDarkmode ? "dark_theme" : "light_theme"
      }`}
    >
      <Header />
      {children}
      <hr />
      <Footer />
    </main>
  );
}
