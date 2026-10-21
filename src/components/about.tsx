"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  PackageCheck,
  Code2,
  CheckCircle2,
  Sparkles,
  Layers,
  Cpu,
  Clock,
  ShieldCheck,
  Compass,
  ArrowDownRight,
} from "lucide-react";

interface Metric {
  num: string;
  enLabel: string;
  title: string;
  desc: string;
  icon: React.ElementType;
}

const metrics: Metric[] = [
  {
    num: "+۸ سال",
    enLabel: "DISCIPLINE",
    title: "انضباط در نشر و توزیع",
    desc: "حل مسئله در بازار واقعی؛ حساسیت شدید به زمان‌بندی و دلیوری بدون تاخیر.",
    icon: Clock,
  },
  {
    num: "۱۰۰٪",
    enLabel: "STRUCTURE",
    title: "معماری تایپ‌سیف و سمانتیک",
    desc: "کد تمیز و ساختارمند با TypeScript که فردا هم نگهداری آن لذت‌بخش است.",
    icon: ShieldCheck,
  },
  {
    num: "ریموت",
    enLabel: "AUTONOMOUS",
    title: "ارتباط شفاف و مستقیم",
    desc: "گزارش منظم، درک عمیق محصول و تعهد در اسپرینت‌ها بدون نیاز به پیگیری مداوم.",
    icon: Compass,
  },
];

const dualityModes = [
  {
    id: "web",
    title: "مهندسی در وب مدرن",
    badge: "CURRENT FOCUS",
    subtitle: "توسعه فرانت‌اند با معماری مدرن React و Next.js",
    icon: Code2,
    points: [
      "توسعه ساختاریافته و ماژولار با Next.js 15 و استراتژی App Router",
      "رابط کاربری سبک، بهینه و بدون حتی یک فریم لگ در اسکرول موبایل (Tailwind v4)",
      "تضمین پایداری کامپوننت‌ها با TypeScript سخت‌گیرانه و دسترس‌پذیری کامل (a11y)",
    ],
  },
  {
    id: "publishing",
    title: "ریشه در زنجیره نشر و توزیع",
    badge: "BACKGROUND",
    subtitle: "۸ سال تجربه مستقیم با ده‌ها هزار داده و حساسیت توزیع",
    icon: PackageCheck,
    points: [
      "مدیریت داده‌های پیچیده و فهرست‌بندی کالاها با صفر درصد خطا در ساختار",
      "احترام عمیق به گرید ادیتوریال، فواصل، چشم مخاطب و خوانایی متن",
      "درک ارزش زمان در کسب‌وکار: قول تحویل یعنی تحویلِ به‌موقع",
    ],
  },
];

const techSpecs = [
  {
    category: "Framework",
    name: "Next.js 15",
    sub: "App Router / SSR",
  },
  {
    category: "Language",
    name: "TypeScript",
    sub: "Strict Type Safety",
  },
  {
    category: "Styling",
    name: "Tailwind v4",
    sub: "Zero-runtime CSS",
  },
  {
    category: "Core",
    name: "React 19",
    sub: "Server Components",
  },
  {
    category: "Primitives",
    name: "Radix UI",
    sub: "Accessible Headless",
  },
  {
    category: "VCS",
    name: "Git & GitHub",
    sub: "Clean Commits Flow",
  },
];

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState<"web" | "publishing">("web");

  return (
    <section
      id="about"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
    >
      {/* هدر بخش: ترکیب هماهنگ ادیتوریال و مدرن */}
      <div className="max-w-2xl mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono tracking-wider text-amber-900 dark:text-amber-300 bg-amber-500/10 border border-amber-600/20 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-600 dark:bg-amber-400" />
          <span>شناسنامه کاری • ۰۲</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 dark:text-stone-100 tracking-tight leading-tight mb-4">
          دقت در ساختار، ظرافت در اجرا
        </h2>

        <p className="text-sm sm:text-base text-stone-600 dark:text-stone-400 leading-relaxed font-normal">
          من معتقدم یک وب‌سایت خوب حاصل ترکیب نظم داده‌ها و زیبایی بصری است.
          سال‌ها کار در زنجیره کتاب، وسواس روی خوانایی و ساختار را در من نهادینه
          کرده؛ چیزی که امروز مستقیماً به کدهای فرانت‌اند منتقل می‌کنم.
        </p>
      </div>

      {/* ۱. کارت‌های متریک: منسجم، بالانس‌شده و با تنفس بصری مناسب */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-12">
        {metrics.map((item, idx) => {
          const IconComp = item.icon;
          return (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-stone-50/80 dark:bg-stone-900/40 border border-stone-200/90 dark:border-stone-800/80 hover:border-amber-500/40 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 dark:bg-amber-400/10 border border-amber-600/15 flex items-center justify-center text-amber-800 dark:text-amber-400">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <span
                    dir="ltr"
                    className="text-[10px] font-mono tracking-widest text-stone-600 dark:text-stone-300 font-semibold uppercase"
                  >
                    {item.enLabel}
                  </span>
                </div>

                <div className="text-3xl sm:text-4xl font-black font-mono text-stone-900 dark:text-stone-100 mb-2">
                  {item.num}
                </div>

                <h3 className="text-sm font-bold text-stone-900 dark:text-stone-200 mb-2">
                  {item.title}
                </h3>
              </div>

              <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed mt-2 pt-3 border-t border-stone-200/60 dark:border-stone-800/60">
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>

      {/* ۲. کنسول مقایسه و تعامل (سویچر دیدگاه) */}
      <div className="rounded-2xl sm:rounded-3xl bg-stone-100/60 dark:bg-stone-900/30 border border-stone-200/90 dark:border-stone-800 p-5 sm:p-8 mb-12">
        {/* نوار کنترل بالای کنسول */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-stone-200/80 dark:border-stone-800">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-600 dark:bg-amber-400" />
            <span className="text-xs font-mono uppercase tracking-wider text-stone-600 dark:text-stone-400 font-semibold">
              پشتوانه اجرایی و رویکرد
            </span>
          </div>

          {/* تب‌ها */}
          <div className="inline-flex p-1 rounded-xl bg-stone-200/70 dark:bg-stone-800 border border-stone-300/50 dark:border-stone-700 self-start sm:self-auto">
            <button
              onClick={() => setActiveTab("web")}
              className={`px-4 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                activeTab === "web"
                  ? "bg-white dark:bg-stone-900 text-stone-900 dark:text-white shadow-xs font-bold"
                  : "text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200"
              }`}
            >
              مهندسی وب فعلی
            </button>
            <button
              onClick={() => setActiveTab("publishing")}
              className={`px-4 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                activeTab === "publishing"
                  ? "bg-white dark:bg-stone-900 text-stone-900 dark:text-white shadow-xs font-bold"
                  : "text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200"
              }`}
            >
              ریشه در نشر و توزیع
            </button>
          </div>
        </div>

        {/* محتوای فعال سویچر */}
        <div className="pt-6">
          <AnimatePresence mode="wait">
            {dualityModes
              .filter((m) => m.id === activeTab)
              .map((item) => {
                const IconComp = item.icon;
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center"
                  >
                    {/* ستون راست: عنوان و آیکون */}
                    <div className="lg:col-span-5 space-y-2.5">
                      <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-xl bg-amber-600/10 dark:bg-amber-400/10 border border-amber-600/20 flex items-center justify-center text-amber-800 dark:text-amber-400 shrink-0">
                          <IconComp className="w-5 h-5" />
                        </div>
                        <span
                          dir="ltr"
                          className="text-[10px] font-mono tracking-widest px-2.5 py-0.5 rounded-md bg-stone-200/70 dark:bg-stone-800 text-stone-600 dark:text-stone-300 font-semibold"
                        >
                          {item.badge}
                        </span>
                      </div>
                      <h4 className="text-lg sm:text-xl font-extrabold text-stone-900 dark:text-stone-100">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
                        {item.subtitle}
                      </p>
                    </div>

                    {/* ستون چپ: بالت‌های تمیز و اسکن‌پذیر */}
                    <div className="lg:col-span-7 space-y-2.5">
                      {item.points.map((point, pIdx) => (
                        <div
                          key={pIdx}
                          className="flex items-start gap-3 p-3.5 rounded-xl bg-white/90 dark:bg-stone-800/80 border border-stone-200/70 dark:border-stone-700/60 shadow-2xs"
                        >
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-sm text-stone-800 dark:text-stone-200 leading-relaxed font-normal">
                            {point}
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
          </AnimatePresence>
        </div>
      </div>

      {/* ۳. چیپ‌های مشخصات مهندسی (کامپکت، LTR دقیق و بهینه برای موبایل) */}
      <div className="p-5 sm:p-7 rounded-2xl bg-white/60 dark:bg-stone-900/30 border border-stone-200/90 dark:border-stone-800">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-5 mb-5 border-b border-stone-200/70 dark:border-stone-800">
          <div className="flex items-center gap-2">
            <Cpu className="w-4 h-4 text-stone-500" />
            <span
              dir="ltr"
              className="text-xs font-mono font-semibold text-stone-700 dark:text-stone-300 uppercase tracking-wider"
            >
              TECHNICAL SPECIFICATIONS
            </span>
          </div>
          <span
            dir="ltr"
            className="text-[11px] font-mono text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-600/20 self-start sm:self-auto font-medium"
          >
            ● Core Web Vitals Ready
          </span>
        </div>

        {/* گرید چیپ‌ها با چیدمان صریح LTR از چپ به راست */}
        <div
          dir="ltr"
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-left"
        >
          {techSpecs.map((chip, cIdx) => (
            <div
              key={cIdx}
              className="p-3 rounded-xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200/80 dark:border-stone-700/60 hover:border-amber-600/30 transition-colors"
            >
              <div className="text-[10px] font-mono text-amber-800 dark:text-amber-400 font-semibold uppercase tracking-wider mb-1">
                {chip.category}
              </div>
              <div className="text-xs font-bold font-mono text-stone-900 dark:text-stone-100 truncate mb-0.5">
                {chip.name}
              </div>
              <div className="text-[10px] text-stone-600 dark:text-stone-300 truncate">
                {chip.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
