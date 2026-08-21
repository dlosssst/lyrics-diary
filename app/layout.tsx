import type { Metadata } from "next";
// 去掉大括号！！
import Script from "next/script";

export const metadata: Metadata = {
  title: "Song List",
  other: {
    "monetag": "53be088f2e3d3c962a835df673dc910c",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
      <Script
        src="https://cdn.monetag.com/sdk.js"
        data-zone="你的真实ZoneID"
        data-sdk="show_你的真实ZoneID"
        strategy="afterInteractive"
      />
    </html>
  );
}