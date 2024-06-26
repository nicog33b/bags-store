import type { Metadata } from "next";
import "./globals.css";
import TopNavBar from "./gui/navbar";
import ToolsNavBar from "./gui/toolsNavbar";



export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body >
        <TopNavBar></TopNavBar>
        <ToolsNavBar></ToolsNavBar>
        {children}

        </body>
    </html>
  );
}
