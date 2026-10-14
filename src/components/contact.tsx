"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { FiArrowLeft, FiCheck, FiLock, FiMail, FiPhone } from "react-icons/fi";
import { FaTelegramPlane } from "react-icons/fa";

// ===== اطلاعات تماس =====
const EMAIL = "arezufrontend.developer@gmail.com";

const channels = [
  {
    icon: FiPhone,
    label: "تماس تلفنی",
    value: "۰۹۳۵ ۱۴۶ ۵۷۸۰",
    href: "tel:+989351465780",
    ltr: true,
  },
  {
    icon: FiMail,
    label: "ایمیل",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
    ltr: true,
  },
  {
    icon: FaTelegramPlane,
    label: "تلگرام",
    value: "پیام مستقیم",
    href: "https://t.me/+989351465780",
    ltr: false,
  },
];

// ===== نوع پروژه =====
const projectTypes = [
  "سایت شرکتی",
  "فروشگاه آنلاین",
  "پلتفرم و داشبورد",
  "پورتفولیو",
  "سایر",
];

// ===== انیمیشن ورود =====
// منحنی easeOutQuint؛ as const تا تایپ آن tuple بماند نه number[]
const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: EASE },
  }),
};

// ===== فیلد با لیبل شناور =====
function Field({
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
  const base =
    "peer w-full rounded-2xl border border-[oklch(90%_0.02_290)] bg-white/70 px-5 pb-3 pt-7 text-[oklch(22%_0.02_280)] outline-none transition-[border-color,box-shadow,background-color] duration-300 placeholder:text-transparent focus:border-[oklch(72%_0.14_290)] focus:bg-white focus:shadow-[0_0_0_4px_oklch(72%_0.14_290/0.12)]";

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
          className={`${base} resize-none`}
        />
      ) : (
        <input
          id={id}
          type={type}
          required
          placeholder={label}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={base}
        />
      )}
      {/* لیبل وقتی فیلد خالی است وسط می‌نشیند و با فوکوس بالا می‌رود */}
      <label
        htmlFor={id}
        className="pointer-events-none absolute right-5 top-2.5 text-xs font-bold text-[oklch(55%_0.10_290)] transition-all duration-300 peer-placeholder-shown:top-[1.15rem] peer-placeholder-shown:text-sm peer-placeholder-shown:font-normal peer-placeholder-shown:text-[oklch(45%_0.02_280)] peer-focus:top-2.5 peer-focus:text-xs peer-focus:font-bold peer-focus:text-[oklch(55%_0.10_290)]"
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

  // فعلاً بک‌اند نداریم؛ پیام آماده در برنامه‌ی ایمیل کاربر باز می‌شود
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = `درخواست پروژه: ${type}`;
    const body = `نام: ${name}\nراه ارتباطی: ${reach}\nنوع پروژه: ${type}\n\n${message}`;
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
      className="relative overflow-hidden bg-gradient-to-b from-white via-[oklch(97%_0.015_290)] to-[oklch(96%_0.025_320)] py-24 md:py-32"
    >
      {/* نورهای ملایم پس‌زمینه */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -right-32 top-10 h-96 w-96 rounded-full bg-[oklch(72%_0.14_290)] opacity-20 blur-[120px]" />
        <div className="absolute -left-24 bottom-0 h-96 w-96 rounded-full bg-[oklch(85%_0.08_340)] opacity-30 blur-[120px]" />
        {/* شبکه‌ی نقطه‌ای ظریف */}
        <div className="absolute inset-0 bg-[radial-gradient(oklch(72%_0.14_290/0.18)_1px,transparent_1px)] [background-size:28px_28px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        {/* ===== ستون متن ===== */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-1.5 text-sm font-bold text-[oklch(55%_0.12_290)] shadow-sm ring-1 ring-[oklch(72%_0.14_290/0.2)]"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60 motion-reduce:hidden" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            پذیرش پروژه‌ی جدید
          </motion.span>

          <motion.h2
            variants={fadeUp}
            custom={1}
            className="mt-6 text-4xl font-black leading-[1.35] text-[oklch(21%_0.02_280)] md:text-5xl"
          >
            بریم یه چیز
            <br />
            <span className="relative inline-block text-[oklch(62%_0.15_290)]">
              خاص بسازیم
              {/* خط دست‌نویس زیر کلمه */}
              <svg
                aria-hidden
                viewBox="0 0 200 12"
                preserveAspectRatio="none"
                className="absolute -bottom-2 right-0 h-3 w-full text-[oklch(85%_0.08_340)]"
              >
                <motion.path
                  d="M2 8 Q 50 2, 100 7 T 198 5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
                />
              </svg>
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            custom={2}
            className="mt-6 max-w-md text-lg leading-8 text-[oklch(44%_0.02_280)]"
          >
            چند خط از ایده‌ت بنویس؛ بقیه‌ش رو با هم جلو می‌بریم.
          </motion.p>

          {/* کارت‌های راه ارتباطی */}
          <div className="mt-10 grid gap-3">
            {channels.map(({ icon: Icon, label, value, href, ltr }, i) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                variants={fadeUp}
                custom={3 + i}
                className="group flex items-center gap-4 rounded-2xl border border-white bg-white/60 p-4 backdrop-blur-md transition-[background-color,box-shadow] duration-300 hover:bg-white hover:shadow-[0_14px_34px_-14px_oklch(55%_0.12_290/0.35)]"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-[oklch(72%_0.14_290)] to-[oklch(80%_0.10_330)] text-lg text-white shadow-md">
                  <Icon />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-xs text-[oklch(45%_0.02_280)]">
                    {label}
                  </span>
                  <span
                    dir={ltr ? "ltr" : undefined}
                    className="block truncate text-right font-bold text-[oklch(22%_0.02_280)]"
                  >
                    {value}
                  </span>
                </span>
                <FiArrowLeft className="text-[oklch(62%_0.15_290)] opacity-0 transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* ===== کارت فرم ===== */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
          className="relative"
        >
          {/* حاشیه‌ی گرادیانی */}
          <div className="rounded-[1.75rem] bg-gradient-to-br from-[oklch(72%_0.14_290/0.6)] via-white to-[oklch(85%_0.08_340/0.7)] p-px shadow-[0_40px_80px_-30px_oklch(50%_0.12_290/0.35)]">
            <div className="relative overflow-hidden rounded-[calc(1.75rem-1px)] bg-white/85 p-6 backdrop-blur-xl md:p-10">
              <AnimatePresence mode="wait">
                {sent ? (
                  // ===== حالت موفقیت =====
                  <motion.div
                    key="sent"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="flex min-h-[460px] flex-col items-center justify-center text-center"
                  >
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 18,
                        delay: 0.1,
                      }}
                      className="grid h-20 w-20 place-items-center rounded-full bg-gradient-to-br from-[oklch(72%_0.14_290)] to-[oklch(80%_0.10_330)] text-3xl text-white shadow-lg"
                    >
                      <FiCheck />
                    </motion.span>
                    <h3 className="mt-6 text-2xl font-black text-[oklch(21%_0.02_280)]">
                      ممنون، {name || "دوست من"}!
                    </h3>
                    <p className="mt-3 max-w-xs leading-7 text-[oklch(44%_0.02_280)]">
                      پیامت توی برنامه‌ی ایمیلت آماده شد. فقط کافیه ارسالش کنی.
                    </p>
                    <button
                      type="button"
                      onClick={reset}
                      className="mt-8 text-sm font-bold text-[oklch(55%_0.12_290)] underline-offset-8 hover:underline"
                    >
                      ارسال یه پیام دیگه
                    </button>
                  </motion.div>
                ) : (
                  // ===== فرم =====
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-6"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="text-xl font-black text-[oklch(21%_0.02_280)]">
                        درباره‌ی پروژه‌ت بگو
                      </h3>
                      <span className="hidden rounded-full bg-[oklch(96%_0.03_340)] px-3 py-1 text-xs font-bold text-[oklch(50%_0.12_340)] sm:inline">
                        پاسخ در کمتر از ۲۴ ساعت
                      </span>
                    </div>

                    {/* چیپ‌های نوع پروژه با نشانگر لغزان */}
                    <fieldset>
                      <legend className="mb-3 text-sm text-[oklch(44%_0.02_280)]">
                        نوع پروژه
                      </legend>
                      <div className="flex flex-wrap gap-2">
                        {projectTypes.map((t) => {
                          const active = t === type;
                          return (
                            <button
                              key={t}
                              type="button"
                              aria-pressed={active}
                              onClick={() => setType(t)}
                              className={`relative rounded-full px-4 py-2 text-sm font-bold transition-colors duration-300 ${
                                active
                                  ? "text-white"
                                  : "bg-[oklch(97%_0.01_290)] text-[oklch(40%_0.02_280)] ring-1 ring-[oklch(92%_0.02_290)] hover:text-[oklch(55%_0.12_290)]"
                              }`}
                            >
                              {active && (
                                <motion.span
                                  layoutId="type-pill"
                                  transition={{
                                    type: "spring",
                                    stiffness: 400,
                                    damping: 32,
                                  }}
                                  className="absolute inset-0 rounded-full bg-gradient-to-l from-[oklch(68%_0.15_290)] to-[oklch(74%_0.12_320)] shadow-[0_8px_20px_-8px_oklch(60%_0.15_290/0.7)]"
                                />
                              )}
                              <span className="relative">{t}</span>
                            </button>
                          );
                        })}
                      </div>
                    </fieldset>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <Field
                        id="name"
                        label="نام شما"
                        value={name}
                        onChange={setName}
                      />
                      <Field
                        id="reach"
                        label="ایمیل یا شماره تماس"
                        value={reach}
                        onChange={setReach}
                      />
                    </div>
                    <Field
                      id="message"
                      label="ایده‌ت رو در چند خط بنویس"
                      value={message}
                      onChange={setMessage}
                      multiline
                    />

                    <div className="flex flex-col-reverse items-center gap-4 pt-2 sm:flex-row sm:justify-between">
                      <p className="flex items-center gap-2 text-xs text-[oklch(45%_0.02_280)]">
                        <FiLock />
                        اطلاعات شما محرمانه می‌مونه
                      </p>
                      <motion.button
                        type="submit"
                        whileTap={{ scale: 0.97 }}
                        className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-l from-[oklch(66%_0.15_290)] to-[oklch(72%_0.13_320)] px-8 py-4 font-black text-white shadow-[0_16px_34px_-12px_oklch(58%_0.15_290/0.6)] transition-shadow duration-300 hover:shadow-[0_20px_44px_-10px_oklch(58%_0.15_290/0.75)] sm:w-auto"
                      >
                        ارسال پیام
                        <FiArrowLeft className="transition-transform duration-300 group-hover:-translate-x-1" />
                      </motion.button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
