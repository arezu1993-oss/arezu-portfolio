"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  ArrowUpRight,
  Code,
  GitBranch,
  Target,
  CheckCircle2,
  Layers,
} from "lucide-react";

interface CaseStudy {
  id: string;
  title: string;
  category: string;
  year: string;
  problem: string;
  solution: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: "shimi-gostar",
    title: "پلتفرم B2B شیمی گستر",
    category: "معماری داده و پرفورمنس",
    year: "۱۴۰۴",
    problem:
      "لود سنگین کاتالوگ‌های صنعتی و نیاز مشتریان سازمانی به یک رابط کاربری خلوت برای استعلام سریع بدون سردرگمی.",
    solution:
      "پیاده‌سازی معماری تمیز با Next.js، بهینه‌سازی رندرینگ برای لود زیر یک ثانیه و طراحی مسیر کاربری مینیمال.",
    image: "/images/project1.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/yourusername/shimi-gostar",
    demo: "https://shimigostarsulfate.com",
  },
  {
    id: "elefix",
    title: "لندینگ‌پیج الفیکس",
    category: "تعامل و انیمیشن (UI/UX)",
    year: "۱۴۰۴",
    problem:
      "انتقال حس تخصص و مهندسیِ دقیق در تعمیرات ECU خودرو به مخاطب، در قالب یک تک‌صفحه روان و جذاب برای موبایل.",
    solution:
      "استفاده از Framer Motion برای خلق اسکرول ۶۰ فریم بر ثانیه و انیمیشن‌های کنترل‌شده که هویت کارگاهی را بازتاب می‌دهد.",
    image: "/images/project2.png",
    tags: ["React", "Framer Motion", "Tailwind CSS"],
    github: "https://github.com/yourusername/elefix",
    demo: "https://elefix.netlify.app",
  },
  {
    id: "portfolio",
    title: "پورتفولیو شخصی آرزو",
    category: "توسعه فرانت‌اند و ادیتوریال",
    year: "۱۴۰۵",
    problem:
      "تلفیق ۸ سال سابقه در نشر و توزیع کتاب با مهارت‌های مدرن توسعه وب، بدون افتادن در دام قالب‌های تکراری.",
    solution:
      "خلق یک هویت بصری ادیتوریال بر پایه رنگ‌های سنگی و عاجی، و پیاده‌سازی گرید ژورنالی با حداقل وابستگی به کتابخانه‌ها.",
    image: "/images/project3.png",
    tags: ["Next.js 15", "TypeScript", "Tailwind v4"],
    github: "https://github.com/yourusername/portfolio",
    demo: "#",
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-stone-200/80 dark:border-stone-800/80"
    >
      {/* هدر بخش - استایل کیس استادی */}
      <div className="mb-20 space-y-4 max-w-2xl">
        <div className="inline-flex items-center gap-2 text-[11px] font-mono tracking-wider text-stone-500 dark:text-stone-400 uppercase">
          <Layers className="w-4 h-4 text-amber-600 dark:text-amber-500" />
          <span>Case Studies & Execution</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 dark:text-stone-100 tracking-tight leading-tight">
          مسئله‌ها و{" "}
          <span className="text-amber-700 dark:text-amber-500">
            راه‌حل‌های مهندسی
          </span>
        </h2>
        <p className="text-sm sm:text-base text-stone-600 dark:text-stone-400 leading-relaxed">
          فراتر از زیبایی بصری، هر پروژه یک چالش فنی و کاربری داشته است. در
          اینجا بررسی می‌کنیم که چگونه با ابزارهای مدرن وب، این چالش‌ها به
          راه‌حل تبدیل شده‌اند.
        </p>
      </div>

      {/* لیست پروژه‌ها (چیدمان متناوب در دسکتاپ) */}
      <div className="space-y-24 lg:space-y-32">
        {caseStudies.map((project, idx) => {
          const isEven = idx % 2 === 0;

          return (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className={`flex flex-col gap-8 lg:gap-16 items-center ${
                isEven ? "lg:flex-row" : "lg:flex-row-reverse"
              }`}
            >
              {/* بخش تصویر (موکاپ/فریم) */}
              <div className="w-full lg:w-1/2">
                <div className="relative aspect-[4/3] w-full rounded-2xl bg-stone-100/50 dark:bg-stone-900/30 border border-stone-200/80 dark:border-stone-800 p-2 sm:p-4 shadow-sm hover:shadow-md transition-shadow">
                  <div className="relative w-full h-full rounded-xl overflow-hidden bg-stone-200 dark:bg-stone-800">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover object-top hover:scale-105 transition-transform duration-700 ease-in-out"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      unoptimized
                    />
                  </div>
                </div>
              </div>

              {/* بخش توضیحات کیس‌استادی */}
              <div className="w-full lg:w-1/2 space-y-8">
                {/* تگ سال و دسته‌بندی */}
                <div className="flex items-center gap-3 font-mono text-xs">
                  <span className="px-2.5 py-1 rounded-md bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 border border-stone-200 dark:border-stone-700">
                    {project.year}
                  </span>
                  <span className="text-amber-700 dark:text-amber-500 font-bold tracking-tight">
                    {project.category}
                  </span>
                </div>

                {/* عنوان */}
                <h3 className="text-2xl sm:text-3xl font-black text-stone-900 dark:text-stone-100">
                  {project.title}
                </h3>

                {/* بلوک چالش و راهکار */}
                <div className="space-y-5">
                  {/* چالش */}
                  <div className="flex gap-3">
                    <Target className="w-5 h-5 text-stone-400 dark:text-stone-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-stone-900 dark:text-stone-200 mb-1">
                        صورت مسئله:
                      </h4>
                      <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
                        {project.problem}
                      </p>
                    </div>
                  </div>

                  {/* راهکار */}
                  <div className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-600 dark:text-amber-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-stone-900 dark:text-stone-200 mb-1">
                        راهکار اجرایی:
                      </h4>
                      <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
                        {project.solution}
                      </p>
                    </div>
                  </div>
                </div>

                {/* تگ‌های فنی */}
                <div dir="ltr" className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-mono px-3 py-1.5 rounded-lg bg-stone-50 dark:bg-stone-900 text-stone-700 dark:text-stone-300 border border-stone-200 dark:border-stone-800 shadow-2xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* دکمه‌های اکشن */}
                <div className="flex items-center gap-4 pt-4 border-t border-stone-100 dark:border-stone-800">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-stone-900 text-stone-100 dark:bg-stone-100 dark:text-stone-900 text-sm font-bold hover:bg-amber-800 dark:hover:bg-amber-500 dark:hover:text-stone-900 transition-colors shadow-sm"
                    >
                      <span>مشاهده خروجی</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-transparent text-stone-700 dark:text-stone-300 text-sm font-mono hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors border border-transparent hover:border-stone-200 dark:hover:border-stone-700"
                    >
                      <Code className="w-4 h-4" />
                      <span dir="ltr">Code</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>

      {/* پی‌نوشت انتهای بخش */}
      <div className="mt-24 pt-8 border-t border-dashed border-stone-200 dark:border-stone-800 text-center">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-stone-600 dark:text-stone-400 hover:text-amber-700 dark:hover:text-amber-400 transition-colors font-medium text-sm"
        >
          <GitBranch className="w-4 h-4" />
          <span>مشاهده سایر پروژه‌ها در گیت‌هاب</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </section>
  );
}
