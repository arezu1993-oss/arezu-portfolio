import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";

export const metadata: Metadata = {
  title: "آرزو نعمتی | توسعه‌دهنده وب فریلنسر",
  description: "پورتفولیوی شخصی آرزو نعمتی — طراحی و توسعه وب‌سایت‌های حرفه‌ای",
  authors: [{ name: "Arezoo Nemati" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body>
        <Header />
        {children}</body>
    </html>
  );
}
