"use client";

import React from "react";
import {
  Sparkles,
  CheckCircle2,
  Clock,
  Smartphone,
  Zap,
  ShieldCheck,
  Layers,
} from "lucide-react";

const stackTags = [
  "Next.js 15",
  "TypeScript",
  "Tailwind CSS",
  "React 19",
  "Radix UI",
  "Framer Motion",
];

export default function AboutSection() {
  return (
    <section
      id="about"
      dir="rtl"
      className="relative py-16 sm:py-24 px-5 sm:px-8 lg:px-12 max-w-6xl mx-auto overflow-hidden text-right"
    >
      {/* هاله‌های رنگی و گرم پس‌زمینه برای عمق‌بخشی به فضا */}
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-gradient-to-br from-[var(--color-accent)]/15 to-amber-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-tr from-emerald-500/10 to-teal-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* ۱. هدر شیک و منسجم - کاملاً راست‌چین و بدون تداخل */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12 border-b border-[var(--color-border)]/60 pb-8">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium text-[var(--color-accent)] bg-gradient-to-r from-[var(--color-accent)]/15 to-amber-500/10 border border-[var(--color-accent)]/30 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse" />
            <span>شناسنامه کاری • تعهدات اجرایی</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[var(--color-text)] tracking-tight leading-snug">
            طراحی چشم‌نواز،{" "}
            <span className="bg-gradient-to-l from-[var(--color-accent)] via-amber-700 to-[var(--color-accent)] bg-clip-text text-transparent">
              خروجی سریع و مطمئن
            </span>
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-[var(--color-muted-foreground)] max-w-md leading-relaxed font-normal">
          ایده‌های شما را به سایتی روان، چشم‌نواز و بدون نقص تبدیل می‌کنم؛ همراه
          با خوش‌قولی در زمان تحویل و پشتیبانی پاسخگو.
        </p>
      </div>

      {/* ۲. گرید بنتو با رنگ و لعاب استودیویی */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6">
        {/* کارت اول: مزیت‌های ملموس برای کاربر و بیزینس (۸ ستون) */}
        <div className="md:col-span-8 relative p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[var(--color-card)] via-[var(--color-card)] to-[var(--color-bg)] border border-[var(--color-border)] shadow-sm hover:border-[var(--color-accent)]/40 transition-all duration-300 flex flex-col justify-between overflow-hidden">
          {/* نشانگر ظریف وضعیت در بالای کارت */}
          <div className="flex items-center justify-between pb-5 mb-5 border-b border-[var(--color-border)]/70">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[var(--color-accent)]/20 to-amber-500/10 text-[var(--color-accent)] flex items-center justify-center border border-[var(--color-accent)]/20">
                <Sparkles className="w-4 h-4" />
              </div>
              <span className="text-sm font-bold text-[var(--color-text)]">
                ویژگی‌های وب‌سایت تحویلی
              </span>
            </div>

            {/* بج سبز اطمینان */}
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium text-emerald-700 dark:text-emerald-300 bg-emerald-500/15 border border-emerald-500/30">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              تست‌شده و بدون باگ
            </span>
          </div>

          {/* ۴ گزاره شفاف به زبان کارفرما (بدون لغات پیچیده) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
            <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-[var(--color-bg)]/80 border border-[var(--color-border)]/60 hover:bg-[var(--color-card)] transition-colors">
              <div className="w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                <Smartphone className="w-4 h-4" />
              </div>
              <span className="text-[var(--color-text)] font-medium">
                نمایش بی‌نقص در موبایل و مانیتور
              </span>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-[var(--color-bg)]/80 border border-[var(--color-border)]/60 hover:bg-[var(--color-card)] transition-colors">
              <div className="w-7 h-7 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
                <Zap className="w-4 h-4" />
              </div>
              <span className="text-[var(--color-text)] font-medium">
                سرعت لود آنی و بدون تأخیر
              </span>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-[var(--color-bg)]/80 border border-[var(--color-border)]/60 hover:bg-[var(--color-card)] transition-colors">
              <div className="w-7 h-7 rounded-lg bg-sky-500/10 text-sky-600 dark:text-sky-400 flex items-center justify-center shrink-0">
                <Layers className="w-4 h-4" />
              </div>
              <span className="text-[var(--color-text)] font-medium">
                ساختار منظم با امکان توسعه در آینده
              </span>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-[var(--color-bg)]/80 border border-[var(--color-border)]/60 hover:bg-[var(--color-card)] transition-colors">
              <div className="w-7 h-7 rounded-lg bg-[var(--color-accent)]/15 text-[var(--color-accent)] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <span className="text-[var(--color-text)] font-medium">
                کدنویسی تمیز با امنیت و ثبات بالا
              </span>
            </div>
          </div>

          {/* نوار زیرین وضعیت پروژه */}
          <div className="mt-6 pt-4 border-t border-[var(--color-border)]/70 flex items-center justify-between text-xs text-[var(--color-muted-foreground)]">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              طراحی مطابق دقیق با سلیقه و نیاز بیزینس شما
            </span>
            <span
              dir="ltr"
              className="font-mono text-[11px] text-[var(--color-accent)] font-semibold"
            >
              Ready for Launch
            </span>
          </div>
        </div>

        {/* کارت دوم: خوش‌قولی و ددلاین با رنگ گرم و پرانرژی (۴ ستون) */}
        <div className="md:col-span-4 relative p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[var(--color-card)] via-[var(--color-card)] to-amber-500/10 border border-[var(--color-border)] shadow-sm hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-5">
              <div className="w-10 h-10 rounded-2xl bg-amber-500/15 text-amber-600 dark:text-amber-400 flex items-center justify-center border border-amber-500/20">
                <Clock className="w-5 h-5" />
              </div>
              <span
                dir="ltr"
                className="text-[10px] font-mono tracking-wider px-2 py-0.5 rounded-md bg-[var(--color-bg)] border border-[var(--color-border)] text-[var(--color-muted-foreground)]"
              >
                ON TIME
              </span>
            </div>

            <div className="text-3xl sm:text-4xl font-black text-[var(--color-text)] font-mono mb-2">
              ۱۰۰٪
            </div>
            <h3 className="text-base font-bold text-[var(--color-text)] mb-2">
              تحویل رأس تاریخ توافق‌شده
            </h3>
            <p className="text-xs text-[var(--color-muted-foreground)] leading-relaxed">
              ارزش وقت شما را می‌دانم. ۸ سال سابقه در بازار جدی کار به من یاد
              داده که خوش‌قولی و ارتباط شفاف، مهم‌ترین اصل یک همکاری موفق است.
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-[var(--color-border)]/70 flex items-center justify-between text-xs">
            <span className="text-[var(--color-text)] font-medium">
              پایبندی به زمان‌بندی:
            </span>
            <span className="text-emerald-600 dark:text-emerald-400 font-bold">
              تضمین‌شده
            </span>
          </div>
        </div>

        {/* کارت سوم: جعبه‌ابزار فنی با تفکیک کامل چپ‌به‌راست (۱۲ ستون) */}
        <div className="md:col-span-12 p-4 sm:p-5 rounded-2xl bg-[var(--color-card)] border border-[var(--color-border)] shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5 shrink-0 self-start sm:self-auto">
            <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-amber-500 to-[var(--color-accent)]" />
            <span className="text-xs sm:text-sm font-bold text-[var(--color-text)]">
              ابزارهای مدرن توسعه:
            </span>
          </div>

          {/* تگ‌های ابزارها - کاملاً چپ‌به‌راست و مرتب */}
          <div
            dir="ltr"
            className="flex flex-wrap items-center gap-2 justify-start sm:justify-end w-full"
          >
            {stackTags.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-xl text-xs font-mono font-medium bg-[var(--color-bg)] text-[var(--color-text)] border border-[var(--color-border)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] hover:shadow-xs transition-all duration-200 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
