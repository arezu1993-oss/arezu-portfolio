"use client";

import Image from "next/image";
import { Compass, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative w-full px-4 pt-28 pb-6 sm:px-6 md:pt-32 md:pb-10 lg:px-10">
      <div className="mx-auto max-w-6xl">
        {/* ۱. هدر متنی و استاتوس مینیمال (متعادل، بدون دکمه‌های تکراری) */}
        <div className="mb-5 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[var(--color-accent)]">
              <span className="h-2 w-2 rounded-full bg-[var(--color-accent)]" />
              <span>مهندسی فرانت‌اند • رابط‌های کاربری وب</span>
            </div>
            <h1 className="text-2xl font-black tracking-tight text-[var(--color-text)] sm:text-3xl md:text-4xl lg:text-[2.5rem]">
              معماری وب؛ با دقت، تقارن و ظرافت نشر.
            </h1>
          </div>

          {/* استاتوس استودیویی سمت چپ (جایگزین دکمه‌های تکراری) */}
          <div className="flex shrink-0 items-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-card)]/80 px-3.5 py-1.5 text-xs font-medium text-[var(--color-text)]/90 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span>آمادهٔ همکاری ریموت • ۱۴۰۵</span>
            </div>
          </div>
        </div>

        {/* ۲. قاب تصویر استاتیک، سریع و باوقار (نسبت سینمایی کشیده) */}
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] shadow-lg sm:aspect-[18/9] lg:aspect-[21/9] sm:rounded-3xl">
          <Image
            src="/images/kashan.jpg"
            alt="آرزو نعمتی - خانه عامری‌ها کاشان"
            fill
            priority
            sizes="(max-width: 1280px) 100vw, 1200px"
            quality={85}
            className="object-cover object-[center_38%]"
          />

          {/* شید بسیار ملایم در پایین کادر برای خوانایی بهتر تگ‌ها */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/50 to-transparent" />

          {/* تگ لوکیشن */}
          <div className="absolute bottom-3.5 right-3.5 z-10 inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/45 px-3 py-1 text-xs text-white backdrop-blur-md">
            <Compass className="h-3.5 w-3.5 text-amber-300" />
            <span>کاشان، خانه عامری‌ها</span>
          </div>

          {/* تگ فنی مختصات */}
          <div
            dir="ltr"
            className="absolute bottom-3.5 left-3.5 z-10 hidden items-center gap-1.5 rounded-full border border-white/20 bg-black/45 px-3 py-1 font-mono text-[11px] text-white/95 backdrop-blur-md sm:inline-flex"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span>33.9850° N, 51.4100° E</span>
          </div>
        </div>

        {/* ۳. پانویس ادیتوریال و استک کلیدی (خوانا، با کنتراست شفاف) */}
        <div className="mt-3.5 flex flex-col justify-between gap-2.5 border-t border-[var(--color-border)] pt-3 text-xs sm:flex-row sm:items-center sm:text-sm">
          <p className="max-w-2xl font-medium leading-relaxed text-[var(--color-text)]">
            ترکیب ۸ سال وسواس و مهندسی نشر با توسعهٔ مدرن وب؛ خلق محصولاتی
            دیجیتال با همان ماندگاری، وقار و تناسبات معماری اصیل.
          </p>

          <div className="flex shrink-0 items-center gap-2 font-mono text-[11px] font-semibold tracking-wider text-[var(--color-text)]/70 uppercase">
            <Sparkles className="h-3 w-3 text-[var(--color-accent)]" />
            <span>FIG. 01 — ARCHITECTURAL PERSPECTIVE</span>
          </div>
        </div>
      </div>
    </section>
  );
}
