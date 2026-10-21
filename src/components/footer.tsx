"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUp, ArrowUpLeft, Mail, Send } from "lucide-react";

function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.8"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.8"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Footer() {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer
      dir="rtl"
      className="relative bg-[#faf8f5] text-stone-800 pt-20 pb-14 border-t border-stone-200/90 font-sans"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* بخش اصلی فوتر */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 pb-16 items-start">
          {/* ستون راست: تیتر و بیانیه بدون لوگوی زاید A */}
          <div className="lg:col-span-6 space-y-6">
            {/* نشانگر زنده وضعیت کاری (جایگزین تمیز و مدرن جعبه قبلی) */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-stone-200 bg-stone-100/80 px-3.5 py-1.5 text-xs text-stone-700 shadow-2xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600" />
              </span>
              <span className="font-medium">
                آماده برای فرصت‌های ریموت و پروژه‌های جدید
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-stone-900 leading-snug tracking-tight">
              پایان این صفحه، <br />
              <span className="text-stone-400 font-bold">
                شروع همکاری بعدی ماست.
              </span>
            </h3>

            <p className="text-stone-600 text-sm sm:text-base leading-relaxed max-w-lg">
              اگر ایده‌ای برای توسعه دارید، به دنبال بازطراحی رابط کاربری هستید
              یا می‌خواهید درباره موقعیت شغلی گفتگو کنیم، مشتاق شنیدنم.
            </p>
          </div>

          {/* ستون وسط: مسیرهای کلیدی وبگاه */}
          <div className="lg:col-span-2 lg:pr-6 space-y-4 pt-2">
            <span className="text-[11px] font-mono font-bold tracking-widest text-stone-400 uppercase">
              مسیرهای وبگاه
            </span>
            <ul className="space-y-3">
              {[
                { label: "پروژه‌ها و کارها", href: "#projects" },
                { label: "درباره و پیشینه", href: "#about" },
                { label: "مهارت‌ها و ابزارها", href: "#skills" },
                { label: "فرم تماس مستقیم", href: "#contact" },
              ].map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    className="group inline-flex items-center gap-2 text-sm text-stone-600 hover:text-stone-950 transition-colors"
                  >
                    <span className="h-1 w-1 rounded-full bg-stone-300 group-hover:bg-amber-600 group-hover:scale-125 transition-all" />
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ستون چپ: کارت‌های ارتباطی منسجم */}
          <div className="lg:col-span-4 lg:pr-6 space-y-4 pt-2">
            <span className="text-[11px] font-mono font-bold tracking-widest text-stone-400 uppercase">
              شبکه‌ها و راه‌های ارتباط
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5">
              {[
                {
                  label: "ارسال ایمیل مستقیم",
                  href: "mailto:arezufrontend.developer@gmail.com",
                  icon: <Mail className="w-4 h-4" />,
                },
                {
                  label: "پروفایل لینکدین",
                  href: "https://linkedin.com",
                  icon: <LinkedinIcon className="w-4 h-4" />,
                },
                {
                  label: "ریپازیتوری‌های گیت‌هاب",
                  href: "https://github.com",
                  icon: <GithubIcon className="w-4 h-4" />,
                },
                {
                  label: "پیام در تلگرام",
                  href: "https://t.me",
                  icon: <Send className="w-4 h-4" />,
                },
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between rounded-xl border border-stone-200/90 bg-white/80 px-4 py-2.5 shadow-2xs hover:border-stone-400 hover:bg-white transition-all"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-stone-400 group-hover:text-amber-700 transition-colors">
                      {item.icon}
                    </span>
                    <span className="text-xs font-medium text-stone-700 group-hover:text-stone-900">
                      {item.label}
                    </span>
                  </div>
                  <ArrowUpLeft className="w-3.5 h-3.5 text-stone-300 group-hover:text-stone-800 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* نوار پایانی: تراز متقارن و ارتقا یافته */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-6 pt-8 border-t border-stone-200">
          {/* کردیت و مشخصات فنی */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-3 gap-y-1 text-xs text-stone-500 font-mono">
            <span className="font-semibold text-stone-700">AREZOO NEMATI</span>
            <span>—</span>
            <span>DEVELOPED WITH NEXT.JS & TAILWIND CSS</span>
            <span className="hidden sm:inline text-stone-300">•</span>
            <span>2026</span>
          </div>

          {/* دکمه بازگشت به بالا بدون حالت شلوغ */}
          <motion.button
            type="button"
            onClick={scrollToTop}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="group inline-flex items-center gap-2.5 rounded-full border border-stone-300 bg-white px-4 py-1.5 text-xs font-semibold text-stone-700 shadow-2xs hover:border-stone-900 hover:text-stone-950 transition-all cursor-pointer"
          >
            <span>بازگشت به بالا</span>
            <ArrowUp className="h-3.5 w-3.5 text-stone-400 group-hover:text-stone-900 transition-colors" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
