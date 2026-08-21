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
      <body>
        {children}
        {/* Monetag Vignette Banner zone:11621212 全局脚本，满足联盟检测 */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(s){s.dataset.zone='11621212',s.src='https://n6wxm.com/vignette.min.js'})([document.documentElement, document.body].filter(Boolean).pop().appendChild(document.createElement('script')))`
          }}
        />
      </body>
    </html>
  );
}