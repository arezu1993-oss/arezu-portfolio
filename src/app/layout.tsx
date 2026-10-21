import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "@/components/header";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAF8F5" },
    { media: "(prefers-color-scheme: dark)", color: "#171614" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://arezu.dev"),
  title: {
    default: "آرزو نعمتی | توسعه‌دهنده فرانت‌اند و طراح تجربه کاربری",
    template: "%s | آرزو نعمتی",
  },
  description:
    "پورتفولیوی تخصصی آرزو نعمتی. توسعه فرانت‌اند مدرن با تمرکز بر Next.js، تایپ‌اسکریپت و طراحی وب ادیتوریال بر پایه ۸ سال سابقه درک محتوا و بیزینس.",
  keywords: [
    "آرزو نعمتی",
    "Arezoo Nemati",
    "توسعه‌دهنده فرانت‌اند",
    "Frontend Developer",
    "توسعه دهنده Next.js",
    "طراح وب فریلنسر",
    "React",
    "TypeScript",
    "Tailwind CSS",
  ],
  authors: [{ name: "آرزو نعمتی", url: "https://arezu.dev" }],
  creator: "آرزو نعمتی",
  publisher: "آرزو نعمتی",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "آرزو نعمتی | توسعه‌دهنده فرانت‌اند و وب مدرن",
    description:
      "تلفیق درک بیزینس و دقت ادیتوریال با معماری مدرن وب (Next.js & TypeScript). مشاهده پروژه‌ها و راه‌های همکاری.",
    url: "https://arezu.dev",
    siteName: "Arezu Nemati Portfolio",
    locale: "fa_IR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg", // عکس کاور اشتراک‌گذاری در لینکدین و تلگرام
        width: 1200,
        height: 630,
        alt: "آرزو نعمتی - توسعه‌دهنده فرانت‌اند",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "آرزو نعمتی | توسعه‌دهنده فرانت‌اند",
    description:
      "توسعه وب‌سایت‌های مدرن، مقیاس‌پذیر و مسئله‌محور با Next.js و React.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// اسکیما و داده‌های ساختاریافته گوگل برای شناسایی هویت حرفه‌ای در نتایج جستجو
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "آرزو نعمتی",
  alternateName: "Arezoo Nemati",
  jobTitle: "Frontend Developer",
  url: "https://arezu.dev",
  sameAs: [
    "https://github.com/arezoonemati", // در صورت تفاوت اصلاح کن
    "https://linkedin.com/in/arezoonemati",
  ],
  knowsAbout: [
    "Next.js",
    "React.js",
    "TypeScript",
    "Tailwind CSS",
    "Editorial Web Design",
    "Frontend Engineering",
  ],
  description:
    "توسعه‌دهنده فرانت‌اند با سابقه در نشر و مدیریت محصول، متمرکز بر ساخت محصولات وب اصیل و باکیفیت.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)] selection:bg-[var(--color-accent)] selection:text-white transition-colors duration-300">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
