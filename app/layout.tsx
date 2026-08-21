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
        data-zone="<script>(function(s){s.dataset.zone='11621212',s.src='https://n6wxm.com/vignette.min.js'})([document.documentElement, document.body].filter(Boolean).pop().appendChild(document.createElement('script')))</script>"
        data-sdk="<script>(function(s){s.dataset.zone='11621212',s.src='https://n6wxm.com/vignette.min.js'})([document.documentElement, document.body].filter(Boolean).pop().appendChild(document.createElement('script')))</script>"
        strategy="afterInteractive"
      />
    </html>
  );
}