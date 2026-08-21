import type { Metadata } from "next";
import { Script } from "next/script";

export const metadata: Metadata = {
  title: "Song List",
  other: {
    "monetag": "9a4e7f25a0e97d80791f9fb8ea301348",
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
      {/* monetag sdk 广告脚本，替换为你真实ZoneID */}
      <Script
        src="https://cdn.monetag.com/sdk.js"
        data-zone="你的ZoneID"
        data-sdk="show_你的ZoneID"
        strategy="afterInteractive"
      />
    </html>
  );
}