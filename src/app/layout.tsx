import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import styles from "./styles/global.module.scss";
import App from "./app";

const openSans = Open_Sans({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hacker News Redesign",
  description: "Get the latest news in a new format",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <hr className={styles.header__hr} />
        <App>{children}</App>
      </body>
    </html>
  );
}
