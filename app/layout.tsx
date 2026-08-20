import "./globals.css";
import type { Metadata } from "next";
import GlobalProtect from './GlobalProtect';

export const metadata: Metadata = {
  title:"Diary Lyrics",
  description:"Multi language lyrics site"
};

export default function RootLayout({children}:{children:React.ReactNode}){
  return (
    <html lang="zh">
      <body>
        <GlobalProtect />
        {children}
      </body>
    </html>
  )
}