import type { Metadata } from "next";
import "./globals.css";
import yekanBakh from "@/assets/fonts/yekanBakh";

export const metadata: Metadata = {
  title: {
    default: "Training AI",
    template: "%s | Training AI ",
  },
  description:
    "Training AI is a platform for learning and experimenting with artificial intelligence, machine learning, and data science projects, offering tutorials, tools, and resources for developers and enthusiasts.",
  keywords:
    "AI, Artificial Intelligence, Machine Learning, Data Science, Training AI, Tutorials, Developer Resources, Tech Education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${yekanBakh.className} antialiased`}>{children}</body>
    </html>
  );
}
