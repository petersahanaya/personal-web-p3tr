import Cursor from "@component/cursor";
import "./globals.css";
import type { Metadata } from "next";
import { Work_Sans, Bebas_Neue } from "next/font/google";

const WorkSans = Work_Sans({
  fallback: ["sans-serif"],
  subsets: ["latin"],
  weight: ["400", "200", "300", "500", "700", "800"],
});

const BebasNeue = Bebas_Neue({
  subsets: ["latin"],
  fallback: ["sans-serif"],
  weight: ["400"],
});

export const runtime = "edge";

export const metadata: Metadata = {
  title: "P3TR - Personal",
  authors: {
    name: "Peter Sahanaya",
    url: "https://linkedin.com/in/peter-sahanaya",
  },
  description: "Personal website of peter.",
  keywords: ["Personal Web", "Next Js", "React Js"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={` ${WorkSans.className} ${BebasNeue.className}`}>
        <Cursor />
        {children}
      </body>
    </html>
  );
}
