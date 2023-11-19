"use client";
import React from "react";
import "./globals.css";
import { ThemeProvider } from "./themeProvider";
import AppLayout from "./appLayout";

export default function App({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <AppLayout>{children}</AppLayout>
    </ThemeProvider>
  );
}
