"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Orbit } from "@/components/orbit";

const roles = ["توسعه‌دهنده فرانت‌اند", "متخصص Next.js", "طراح تجربه کاربری"];

const stats = [
  { value: "۲+", label: "سال تجربه" },
  { value: "۲+", label: "پروژه موفق" },
  { value: "۱۰۰٪", label: "رضایت مشتری" },
];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setRoleIndex((i) => (i + 1) % roles.length),
      2800,
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative isolate flex min-h-screen items-center overflow-hidden px-6 pt-28 pb-16 md:py-24">
      {/* شبکه نقطه‌ای پس‌زمینه */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "radial-gradient(rgba(30,27,36,0.12) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />

      {/* Background blobs */}
      <motion.div
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-32 -top-32 -z-10 h-[28rem] w-[28rem] rounded-full opacity-40 blur-3xl"
        style={{ backgroundColor: "var(--color-accent)" }}
      />
      <motion.div
        animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-40 -right-20 -z-10 h-[30rem] w-[30rem] rounded-full opacity-30 blur-3xl"
        style={{ backgroundColor: "var(--color-sub-accent)" }}
      />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-2">
        {/* متن (سمت راست در RTL) */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="text-center md:text-right"
        >
          <motion.h1
            variants={item}
            className="mb-4 whitespace-nowrap text-4xl font-black leading-tight sm:text-5xl lg:text-6xl"
          >
            وب، به سبک{" "}
            <span style={{ color: "var(--color-accent)" }}>آرزو</span>
          </motion.h1>

          {/* نقش متغیر */}
          <motion.div
            variants={item}
            className="mb-6 h-9 overflow-hidden text-xl font-black md:h-10 md:text-2xl"
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={roles[roleIndex]}
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "-100%", opacity: 0 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="block"
              >
                {roles[roleIndex]}
              </motion.span>
            </AnimatePresence>
          </motion.div>

          <motion.p
            variants={item}
            className="mx-auto mb-10 max-w-md text-lg leading-relaxed md:mx-0"
            style={{ color: "var(--color-muted-foreground)" }}
          >
            وب‌سایت‌هایی می‌سازم که هم زیبا باشن، هم درست کار کنن.
          </motion.p>

          <motion.div
            variants={item}
            className="flex justify-center gap-4 md:justify-start"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-bold text-white shadow-[0_10px_30px_-8px_rgba(155,135,245,0.8)] transition-transform hover:scale-105"
              style={{ backgroundColor: "var(--color-accent)" }}
            >
              نمونه‌کارها
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            </a>
            <a
              href="#contact"
              className="rounded-full border bg-white/70 px-7 py-3 text-sm font-bold backdrop-blur transition-transform hover:scale-105"
              style={{ borderColor: "rgba(30,27,36,0.08)" }}
            >
              تماس با من
            </a>
          </motion.div>

          {/* آمار */}
          <motion.div
            variants={item}
            className="mx-auto mt-10 grid max-w-md grid-cols-3 gap-4 border-t pt-6 md:mx-0"
            style={{ borderColor: "var(--color-accent)" }}
          >
            {stats.map((s) => (
              <div key={s.label}>
                <div
                  className="text-2xl font-black md:text-3xl"
                  style={{ color: "var(--color-accent)" }}
                >
                  {s.value}
                </div>
                <div
                  className="mt-1 text-xs md:text-sm"
                  style={{ color: "var(--color-muted-foreground)" }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* عکس و مدار مهارت‌ها (در موبایل اول نمایش داده می‌شود) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="order-first md:order-none"
        >
          <Orbit />
        </motion.div>
      </div>

      {/* نشانگر اسکرول */}
      <a
        href="#about"
        aria-label="اسکرول به پایین"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block"
      >
        <div
          className="flex h-10 w-6 justify-center rounded-full border-2 pt-2"
          style={{ borderColor: "var(--color-border)" }}
        >
          <motion.span
            animate={{ y: [0, 10, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="h-2 w-1 rounded-full"
            style={{ backgroundColor: "var(--color-accent)" }}
          />
        </div>
      </a>
    </section>
  );
}
