"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  ArrowUpRight,
  Code2,
  ExternalLink,
  Layers,
  Sparkles,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

interface CaseStudy {
  id: string;
  number: string;
  title: string;
  badge: string;
  badgeColor: string;
  year: string;
  problem: string;
  solution: string;
  result: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: "shimi-gostar",
    number: "01",
    title: "پلتفرم صنعتی شیمی‌گستر",
    badge: "سرعت و پرفورمنس بالا",
    badgeColor:
      "text-amber-700 bg-amber-500/10 border-amber-500/20 dark:text-amber-400",
    year: "۱۴۰۴",
    problem: "لود سنگین کاتالوگ محصولات و سردرگمی مشتریان در استعلام قیمت.",
    solution:
      "بازنویسی با معماری Next.js و بهینه‌سازی مسیر خرید در کمتر از ۳ کلیک.",
    result: "لود زیر ۱ ثانیه و تجربه کاربری روان",
    image: "/images/project1.png",
    tags: ["Next.js 15", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/arezu-nemati",
    demo: "https://shimigostarsulfate.com",
  },
  {
    id: "elefix",
    number: "02",
    title: "لندینگ‌پیج تخصصی الفیکس",
    badge: "تعاملی و موشن روان",
    badgeColor:
      "text-sky-700 bg-sky-500/10 border-sky-500/20 dark:text-sky-400",
    year: "۱۴۰۴",
    problem:
      "نیاز به نمایش جذاب خدمات پیچیده تعمیرات الکترونیک خودرو در موبایل.",
    solution:
      "طراحی انیمیشن‌های نرم و مینیمال با اسکرول سریع ۶۰ فریم بر ثانیه.",
    result: "افزایش ماندگاری کاربر در صفحه اول",
    image: "/images/project2.png",
    tags: ["React", "Framer Motion", "Tailwind CSS"],
    github: "https://github.com/arezu-nemati",
    demo: "https://elefix.netlify.app",
  },
  {
    id: "portfolio",
    number: "03",
    title: "پورتفولیو شخصی و برندینگ وب",
    badge: "هویت استودیویی مدرن",
    badgeColor:
      "text-emerald-700 bg-emerald-500/10 border-emerald-500/20 dark:text-emerald-400",
    year: "۱۴۰۵",
    problem: "خروج از کلیشه‌های تکراری و ساخت هویت بصری گرم و متفاوت در وب.",
    solution: "پیاده‌سازی سبک ادیتوریال با فونت ساحل و رنگ‌های خاکی و گرم.",
    result: "نرخ تبدیل بالاتر در جذب پروژه‌های جدید",
    image: "/images/project3.png",
    tags: ["Next.js 15", "TypeScript", "Tailwind v4"],
    github: "https://github.com/arezu-nemati",
    demo: "#",
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      dir="rtl"
      className="relative py-20 sm:py-32 px-5 sm:px-8 lg:px-12 max-w-6xl mx-auto overflow-hidden text-right"
    >
      {/* هدر بخش - هماهنگ با سبک ادیتوریال و شاداب */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-24 border-b border-[var(--color-border)]/60 pb-8">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium text-[var(--color-accent)] bg-gradient-to-r from-[var(--color-accent)]/15 to-amber-500/10 border border-[var(--color-accent)]/30">
            <Layers className="w-3.5 h-3.5" />
            <span>پروژه‌ها و نمونه‌کارها • ۰۳</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[var(--color-text)] tracking-tight">
            حل مسئله،{" "}
            <span className="bg-gradient-to-l from-[var(--color-accent)] via-amber-700 to-[var(--color-accent)] bg-clip-text text-transparent">
              با ابزارهای مدرن وب
            </span>
          </h2>
        </div>

        <p className="text-xs sm:text-sm text-[var(--color-muted-foreground)] max-w-sm leading-relaxed">
          هر پروژه یک چالش تجاری واقعی بوده که با کدهای بهینه و ظرافت بصری به یک
          راه‌حل ماندگار تبدیل شده است.
        </p>
      </div>

      {/* لیست پروژه‌ها */}
      <div className="space-y-20 lg:space-y-28">
        {caseStudies.map((project, idx) => {
          const isEven = idx % 2 === 0;

          return (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className={`flex flex-col gap-8 lg:gap-14 items-center ${
                isEven ? "lg:flex-row" : "lg:flex-row-reverse"
              }`}
            >
              {/* بخش تصویر موکاپ با قاب استودیویی لوکس */}
              <div className="w-full lg:w-1/2 group">
                <div className="relative aspect-[16/11] sm:aspect-[4/3] w-full rounded-3xl bg-[var(--color-card)] border border-[var(--color-border)] p-3 sm:p-4 shadow-sm group-hover:shadow-xl group-hover:border-[var(--color-accent)]/40 transition-all duration-500">
                  {/* لیبل مونو ظریف روی فریم */}
                  <div className="flex items-center justify-between pb-3 px-1 text-[10px] font-mono text-[var(--color-muted-foreground)] border-b border-[var(--color-border)]/60 mb-3">
                    <span dir="ltr">CASE #{project.number}</span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      Live Verified
                    </span>
                  </div>

                  <div className="relative w-full h-[calc(100%-34px)] rounded-2xl overflow-hidden bg-[var(--color-bg)]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      unoptimized
                    />
                  </div>
                </div>
              </div>

              {/* بخش محتوا و اطلاعات پروژه */}
              <div className="w-full lg:w-1/2 space-y-6">
                {/* متادیتا: سال و برچسب رنگی */}
                <div className="flex items-center gap-2.5">
                  <span className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-[var(--color-bg)] border border-[var(--color-border)] text-[var(--color-text)]">
                    {project.year}
                  </span>
                  <span
                    className={`px-3 py-1 rounded-lg text-xs font-medium border ${project.badgeColor}`}
                  >
                    {project.badge}
                  </span>
                </div>

                {/* عنوان پروژه */}
                <h3 className="text-2xl sm:text-3xl font-black text-[var(--color-text)] tracking-tight">
                  {project.title}
                </h3>

                {/* کارت‌های فشرده چالش و راهکار */}
                <div className="space-y-3">
                  <div className="p-3.5 rounded-2xl bg-[var(--color-card)]/60 border border-[var(--color-border)]/80 flex items-start gap-3">
                    <div className="w-6 h-6 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                      <AlertCircle className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-[var(--color-text)] block mb-0.5">
                        صورت مسئله:
                      </span>
                      <p className="text-xs text-[var(--color-muted-foreground)] leading-relaxed">
                        {project.problem}
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-[var(--color-card)]/60 border border-[var(--color-border)]/80 flex items-start gap-3">
                    <div className="w-6 h-6 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-[var(--color-text)] block mb-0.5">
                        نتیجه و راهکار:
                      </span>
                      <p className="text-xs text-[var(--color-muted-foreground)] leading-relaxed">
                        {project.solution}
                      </p>
                    </div>
                  </div>
                </div>

                {/* تگ‌های تکنولوژی کاملاً LTR */}
                <div dir="ltr" className="flex flex-wrap gap-2 pt-1">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-3 py-1 rounded-xl bg-[var(--color-bg)] text-[var(--color-text)] border border-[var(--color-border)] hover:border-[var(--color-accent)]/50 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* دکمه‌های تعاملی اکشن */}
                <div className="flex items-center gap-3 pt-3">
                  {project.demo && project.demo !== "#" && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[var(--color-accent)] to-amber-700 text-white text-xs font-bold shadow-sm hover:brightness-110 hover:shadow-md transition-all active:scale-95"
                    >
                      <span>مشاهده زنده پروژه</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      dir="ltr"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[var(--color-card)] text-[var(--color-text)] text-xs font-mono font-medium border border-[var(--color-border)] hover:border-[var(--color-accent)]/50 hover:bg-[var(--color-bg)] transition-all"
                    >
                      <Code2 className="w-4 h-4 text-[var(--color-accent)]" />
                      <span>Source Code</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
