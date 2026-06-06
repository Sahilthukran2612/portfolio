import type { Metadata } from "next";
import { Pixelify_Sans } from "next/font/google";
import "./globals.css";

const pixelifySans = Pixelify_Sans({
  variable: "--font-pixelify-sans",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "Sahil Thukran",
  description: "Hi! I'm Sahil Thukran, a passionate software developer with a knack for crafting elegant solutions. With a strong foundation in programming and a love for problem-solving, I thrive on creating innovative applications that make a difference. Whether it's building web applications, exploring new technologies, or collaborating on exciting projects, I'm always eager to learn and grow in the ever-evolving world of software development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${pixelifySans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
