import "./globals.css";
import type { Metadata } from "next";
import GlobalProtect from "./GlobalProtect";

export const metadata: Metadata = {
  title: "Lyrics Diary",
  description: "Song lyrics collection",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <GlobalProtect />
        {children}
      </body>
    </html>
  );
}