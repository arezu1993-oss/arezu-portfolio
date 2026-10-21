"use client";

import React, { useState, type FormEvent } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import {
  ArrowLeft,
  Check,
  Copy,
  Mail,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

// اطلاعات تماس
const EMAIL = "arezufrontend.developer@gmail.com";

const channels = [
  {
    icon: Phone,
    label: "تماس تلفنی مستقیم",
    value: "۰۹۳۵ ۱۴۶ ۵۷۸۰",
    href: "tel:+989351465780",
    ltr: true,
  },
  {
    icon: Mail,
    label: "آدرس ایمیل",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
    ltr: true,
    copyable: true,
  },
  {
    icon: Send,
    label: "ارتباط در تلگرام",
    value: "پیام مستقیم به تلگرام",
    href: "https://t.me/+989351465780",
    ltr: false,
  },
];

// دسته‌بندی پروژه‌ها
const projectTypes = [
  "سایت شرکتی و B2B",
  "لندینگ‌پیج تعاملی",
  "طراحی هویت بصری وب",
  "داشبورد و پلتفرم",
  "مشاوره و بازطراحی",
];

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: EASE },
  }),
};

// فیلد با لیبل شناور مینیمال و سنگی
function MinimalField({
  id,
  label,
  value,
  onChange,
  multiline = false,
  type = "text",
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  multiline?: boolean;
  type?: string;
}) {
  const baseClasses =
    "peer w-full rounded-2xl border border-stone-200 dark:border-stone-800 bg-stone-50/60 dark:bg-stone-900/60 px-4 pb-3.5 pt-6 text-sm text-stone-900 dark:text-stone-100 outline-none transition-all duration-300 placeholder:text-transparent focus:border-amber-600 focus:bg-white dark:focus:bg-stone-900 focus:ring-4 focus:ring-amber-600/10";

  return (
    <div className="relative">
      {multiline ? (
        <textarea
          id={id}
          rows={4}
          required
          placeholder={label}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`${baseClasses} resize-none`}
        />
      ) : (
        <input
          id={id}
          type={type}
          required
          placeholder={label}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={baseClasses}
        />
      )}
      <label
        htmlFor={id}
        className="pointer-events-none absolute right-4 top-2 text-[11px] font-bold text-stone-600 dark:text-stone-400 transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-xs peer-placeholder-shown:font-normal peer-placeholder-shown:text-stone-500 peer-focus:top-2 peer-focus:text-[11px] peer-focus:font-bold peer-focus:text-amber-700 dark:peer-focus:text-amber-400"
      >
        {label}
      </label>
    </div>
  );
}

export default function Contact() {
  const [type, setType] = useState(projectTypes[0]);
  const [name, setName] = useState("");
  const [reach, setReach] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = `درخواست همکاری پروژه: ${type}`;
    const body = `سلام آرزو،\n\nنام: ${name}\nراه ارتباطی: ${reach}\nنوع پروژه: ${type}\n\nتوضیحات:\n${message}\n`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  const reset = () => {
    setName("");
    setReach("");
    setMessage("");
    setType(projectTypes[0]);
    setSent(false);
  };

  return (
    <section
      id="contact"
      dir="rtl"
      className="relative overflow-hidden bg-white dark:bg-stone-950 py-24 sm:py-32 border-t border-stone-200/80 dark:border-stone-800/80"
    >
      {/* بافت نور محیطی بسیار محو و کلاسیک */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-amber-600/5 blur-3xl" />
        <div className="absolute left-10 bottom-10 h-80 w-80 rounded-full bg-stone-500/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-start">
          {/* ستون متن و اطلاعات تماس (عرض ۵ ستون در دسکتاپ) */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-5 space-y-8"
          >
            {/* نشانگر پذیرش پروژه */}
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono tracking-wider text-amber-900 dark:text-amber-300 bg-amber-500/10 border border-amber-600/20">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-500 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-600" />
                </span>
                <span>آماده پذیرش پروژه‌های منتخب</span>
              </span>
            </motion.div>

            {/* تیتر ادیتوریال */}
            <motion.div variants={fadeUp} custom={1} className="space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 dark:text-stone-100 tracking-tight leading-tight">
                بیایید با هم اثری{" "}
                <span className="relative inline-block text-amber-800 dark:text-amber-500">
                  ماندگار بسازیم
                  {/* خط دست‌نویس با ظرافت و هارمونی کهربایی */}
                  <svg
                    aria-hidden
                    viewBox="0 0 200 12"
                    preserveAspectRatio="none"
                    className="absolute -bottom-2 right-0 h-2.5 w-full text-amber-700/40 dark:text-amber-500/40"
                  >
                    <motion.path
                      d="M2 8 Q 50 2, 100 7 T 198 5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.9,
                        delay: 0.4,
                        ease: "easeInOut",
                      }}
                    />
                  </svg>
                </span>
              </h2>

              <p className="text-sm sm:text-base text-stone-600 dark:text-stone-400 leading-relaxed font-normal pt-2">
                اگر ایده‌ای دارید، یا به دنبال معماری وب‌سایتی با استاندارد
                بالا، سرعت عالی و روحی مینیمال هستید، کافی است جزئیاتی از آن را
                بنویسید.
              </p>
            </motion.div>

            {/* کارت‌های مینیمال مسیرهای تماس */}
            <div className="space-y-3 pt-2">
              {channels.map(
                ({ icon: Icon, label, value, href, ltr, copyable }, i) => (
                  <motion.div
                    key={label}
                    variants={fadeUp}
                    custom={2 + i}
                    className="group relative flex items-center justify-between rounded-2xl border border-stone-200/90 dark:border-stone-800/90 bg-stone-50/50 dark:bg-stone-900/40 p-4 transition-all duration-300 hover:border-amber-600/30 hover:bg-white dark:hover:bg-stone-900 hover:shadow-xs"
                  >
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="flex items-center gap-3.5 flex-1 min-w-0"
                    >
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 group-hover:bg-amber-600 group-hover:text-white transition-colors duration-300">
                        <Icon className="w-4 h-4" />
                      </span>
                      <div className="min-w-0 flex-1">
                        <span className="block text-[11px] font-medium text-stone-600 dark:text-stone-400">
                          {label}
                        </span>
                        <span
                          dir={ltr ? "ltr" : undefined}
                          className="block truncate text-xs sm:text-sm font-bold text-stone-900 dark:text-stone-200 text-right mt-0.5"
                        >
                          {value}
                        </span>
                      </div>
                    </a>

                    {/* دکمه اختصاصی کپی ایمیل برای ارتقای UX */}
                    {copyable ? (
                      <button
                        type="button"
                        onClick={handleCopyEmail}
                        aria-label="کپی آدرس ایمیل"
                        className="ml-1 p-2 rounded-lg text-stone-600 dark:text-stone-400 hover:text-amber-800 dark:hover:text-amber-400 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
                      >
                        {copied ? (
                          <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>
                    ) : (
                      <ArrowLeft className="w-4 h-4 text-stone-600 dark:text-stone-400 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                    )}
                  </motion.div>
                ),
              )}
            </div>
          </motion.div>

          {/* ستون کارت فرم تعاملی (عرض ۷ ستون در دسکتاپ) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
            className="lg:col-span-7"
          >
            <div className="rounded-3xl border border-stone-200/90 dark:border-stone-800/90 bg-white dark:bg-stone-900/60 p-6 sm:p-10 shadow-xs backdrop-blur-sm">
              <AnimatePresence mode="wait">
                {sent ? (
                  // حالت تایید سابمیت (Success State)
                  <motion.div
                    key="sent"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex min-h-[420px] flex-col items-center justify-center text-center px-4"
                  >
                    <div className="grid h-16 w-16 place-items-center rounded-2xl bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-600/20 mb-6">
                      <Check className="w-8 h-8 stroke-[2.5]" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-stone-900 dark:text-stone-100">
                      پیش‌نویس پیام آماده شد، {name || "همراه عزیز"}!
                    </h3>
                    <p className="mt-3 max-w-sm text-xs sm:text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
                      متن پیام به برنامه ایمیل شما منتقل شد. با فشردن دکمه Send
                      در ایمیل، پیام شما مستقیماً به دست من می‌رسد.
                    </p>
                    <button
                      type="button"
                      onClick={reset}
                      className="mt-8 text-xs font-bold text-amber-700 dark:text-amber-400 hover:text-amber-800 underline underline-offset-6 transition-colors"
                    >
                      ارسال پیامی دیگر
                    </button>
                  </motion.div>
                ) : (
                  // فرم اصلی
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6"
                  >
                    <div className="flex items-center justify-between pb-2 border-b border-stone-100 dark:border-stone-800/80">
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-amber-700 dark:text-amber-400" />
                        <h3 className="text-base sm:text-lg font-black text-stone-900 dark:text-stone-100">
                          ثبت خلاصه پروژه
                        </h3>
                      </div>
                      <span className="text-[11px] font-mono text-stone-600 dark:text-stone-300">
                        پاسخ‌گویی معمولاً در ۲۴ ساعت
                      </span>
                    </div>

                    {/* انتخاب دسته‌بندی پروژه با پیل‌های استودیویی */}
                    <div className="space-y-2.5">
                      <label className="block text-xs font-medium text-stone-600 dark:text-stone-400">
                        حوزه و زمینه پروژه
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {projectTypes.map((t) => {
                          const active = t === type;
                          return (
                            <button
                              key={t}
                              type="button"
                              onClick={() => setType(t)}
                              className={`relative rounded-xl px-3.5 py-1.5 text-xs font-medium transition-all duration-200 ${
                                active
                                  ? "text-stone-900 dark:text-stone-900 font-bold"
                                  : "text-stone-600 dark:text-stone-400 bg-stone-100/70 dark:bg-stone-800/60 hover:text-stone-900 dark:hover:text-stone-100 border border-stone-200/60 dark:border-stone-700/60"
                              }`}
                            >
                              {active && (
                                <motion.span
                                  layoutId="activePill"
                                  transition={{
                                    type: "spring",
                                    stiffness: 380,
                                    damping: 30,
                                  }}
                                  className="absolute inset-0 rounded-xl bg-amber-400 shadow-xs"
                                />
                              )}
                              <span className="relative z-10">{t}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* فیلدهای نام و ایمیل */}
                    <div className="grid gap-4 sm:grid-cols-2">
                      <MinimalField
                        id="name"
                        label="نام شما / سازمان"
                        value={name}
                        onChange={setName}
                      />
                      <MinimalField
                        id="reach"
                        label="شماره تماس یا ایمیل شما"
                        value={reach}
                        onChange={setReach}
                      />
                    </div>

                    {/* توضیحات پروژه */}
                    <MinimalField
                      id="message"
                      label="خلاصه‌ای از ایده، اهداف یا نیازمندی‌ها بنویسید..."
                      value={message}
                      onChange={setMessage}
                      multiline
                    />

                    {/* فوتر فرم و دکمه ارسال */}
                    <div className="flex flex-col-reverse items-start gap-4 pt-3 sm:flex-row sm:items-center sm:justify-between border-t border-stone-100 dark:border-stone-800/80">
                      <div className="flex items-center gap-1.5 text-[11px] text-stone-600 dark:text-stone-400">
                        <ShieldCheck className="w-4 h-4 text-stone-600 dark:text-stone-300" />
                        <span>اطلاعات شما محفوظ و خصوصی خواهد ماند</span>
                      </div>

                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.98 }}
                        className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-stone-900 dark:bg-stone-100 px-7 py-3 text-xs sm:text-sm font-bold text-stone-100 dark:text-stone-900 shadow-sm transition-all duration-300 hover:bg-amber-800 dark:hover:bg-amber-400 sm:w-auto"
                      >
                        <span>انتقال متن به ایمیل</span>
                        <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
                      </motion.button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
