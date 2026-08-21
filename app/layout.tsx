import type { Metadata } from "next";

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
    </html>
  );
}