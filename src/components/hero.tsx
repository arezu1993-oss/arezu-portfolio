"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative w-full pt-32 pb-24 sm:pt-40 sm:pb-32 px-6 sm:px-10 lg:px-16 overflow-hidden bg-[var(--color-bg)]">
      {/* هاله ملایم پس‌زمینه هماهنگ با رنگ آجری برند */}
      <div className="absolute top-1/4 left-1/4 w-[420px] h-[420px] bg-[var(--color-accent)]/[0.04] rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* ستون متن و پیشنهاد ارزش */}
          <div className="lg:col-span-7 flex flex-col justify-center text-right order-1 space-y-8">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-[var(--color-sub-accent)] border border-[var(--color-accent)]/20 px-3.5 py-1.5 text-xs font-medium text-[var(--color-accent)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] animate-pulse" />
                توسعه‌دهنده فرانت‌اند و دیزاین سیستم
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-[3.35rem] font-black tracking-tight text-[var(--color-text)] leading-[1.3] sm:leading-[1.24]">
             مهندسی رابط کاربری
              <br />
              <span className="text-[var(--color-accent)] font-black">
               سریع، مقیاس‌پذیر
              </span>{" "}
             و بی‌نقص
            </h1>

            {/* متن منتخب و بهینه‌شده برای جذب کارفرما */}
            <p className="text-base sm:text-lg text-[var(--color-muted-foreground)] leading-relaxed font-normal max-w-xl">
              {" "}
              <strong className="text-[var(--color-text)] font-semibold">
                 
              </strong>{" "}
               خلق رابط‌های کاربری مدرن با Next.js که سریع لود می‌شوند، در
              تمام دستگاه‌ها بی‌نقص نمایش داده می‌شوند و حس اعتماد را به مشتریان
              و کاربران محصول شما منتقل می‌کنند.
            </p>

            {/* دکمه‌های اقدام (Call to Action) */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="#projects"
                className="group inline-flex items-center gap-3 rounded-full bg-[var(--color-accent)] hover:opacity-95 text-white px-8 py-4 text-sm font-semibold shadow-md shadow-[var(--color-accent)]/20 transition-all hover:-translate-y-0.5"
              >
                <span>مشاهده نمونه‌کارها</span>
                <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
              </Link>

              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-card)] hover:bg-[var(--color-sub-accent)] text-[var(--color-text)] px-7 py-4 text-sm font-medium transition-all"
              >
                گفت‌وگو درباره پروژه
              </Link>
            </div>

            {/* وضعیت کاری و استک فنی */}
            <div className="pt-8 border-t border-[var(--color-border)]/70 flex flex-wrap items-center gap-6 text-xs text-[var(--color-muted-foreground)] font-mono">
              <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span>در دسترس برای پروژه‌های ریموت</span>
              </div>
              <span className="text-[var(--color-border)]">•</span>
              <span>Next.js 15 • Tailwind v4 • TypeScript</span>
            </div>
          </div>

          {/* ستون فریم تصویر با پالت گرم و هماهنگ ادیتوریال */}
          <div className="lg:col-span-5 relative order-2 flex justify-center">
            <div className="relative w-full max-w-[380px] sm:max-w-[400px]">
              {/* نشانه‌های کراپ گوشه (Crop Marks ادیتوریال) */}
              <div className="absolute -top-3.5 -right-3.5 w-6 h-6 border-t-2 border-r-2 border-[var(--color-accent)]/50 z-20 pointer-events-none" />
              <div className="absolute -bottom-3.5 -left-3.5 w-6 h-6 border-b-2 border-l-2 border-[var(--color-accent)]/50 z-20 pointer-events-none" />

              {/* کادر کلی پاسپارتو */}
              <div className="relative p-3 sm:p-3.5 bg-[var(--color-card)] border border-[var(--color-border)] shadow-[0_24px_50px_-16px_rgba(0,0,0,0.08)] rounded-t-[12rem] rounded-b-[2rem]">
                {/* ظرف نگه‌دارنده تصویر */}
                <div className="relative overflow-hidden rounded-t-[11.5rem] rounded-b-[1.4rem] aspect-[4/5.2] bg-[var(--color-sub-accent)]/30 group">
                  <Image
                    src="/images/hero.png"
                    alt="آرزو نعمتی - توسعه‌دهنده فرانت‌اند"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 400px"
                    className="object-cover object-[55%_18%] scale-[1.03] transition-all duration-700 
                               saturate-[0.88] sepia-[0.08] contrast-[1.04] brightness-[0.98]
                               group-hover:scale-105 group-hover:saturate-100 group-hover:sepia-0"
                  />

                  {/* گرادیانت ظریف برای خوانایی زیرنویس روی عکس */}
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />

                  {/* زیرنویس روی عکس */}
                  <div className="absolute bottom-3.5 right-4 left-4 flex items-center justify-between text-white/95 text-xs z-10 font-sans">
                    <span className="text-[11px] font-medium tracking-wide drop-shadow-md">
                      کاشان، خانه عامری‌ها
                    </span>
                    <span className="font-mono text-[10px] text-amber-200/90 tracking-wider drop-shadow-md">
                      EST. 2024
                    </span>
                  </div>
                </div>

                {/* زیرکپشن هنری خارج از فریم */}
                <div className="mt-3 px-2 flex items-center justify-between text-[11px] text-[var(--color-muted-foreground)] font-mono">
                  <div className="flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-[var(--color-accent)]" />
                    <span>EDITION ۰۱</span>
                  </div>
                  <span className="tracking-wider">ARCH / STUDIO</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
