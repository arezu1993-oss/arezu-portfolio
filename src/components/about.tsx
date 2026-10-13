"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const statement = [
  { t: "من" },
  { t: "وب" },
  { t: "را" },
  { t: "می‌سازم؛", accent: true },
  { t: "سریع،" },
  { t: "تمیز" },
  { t: "و" },
  { t: "ماندگار.", accent: true },
];

const code = [
  "const arezoo = {",
  '  role: "Frontend Developer",',
  '  stack: ["Next.js", "Tailwind"],',
  '  focus: "fast & beautiful",',
  "};",
].join("\n");

const stack = [
  { name: "Next.js", icon: SiNextdotjs },
  { name: "React", icon: SiReact },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "TypeScript", icon: SiTypescript },
];

const steps = [
  { n: "۱", title: "شناخت", desc: "هدف و مخاطب را می‌فهمم." },
  { n: "۲", title: "طراحی", desc: "ساده، خوانا، هماهنگ با برند." },
  { n: "۳", title: "توسعه", desc: "کد تمیز، سریع و ریسپانسیو." },
  { n: "۴", title: "تحویل", desc: "انتشار و پشتیبانی بعد از لانچ." },
];

function Word({
  text,
  accent,
  progress,
  range,
}: {
  text: string;
  accent?: boolean;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.12, 1]);
  return (
    <motion.span
      style={{ opacity, color: accent ? "var(--color-accent)" : undefined }}
      className="mx-[0.14em] inline-block"
    >
      {text}
    </motion.span>
  );
}

function Statement() {
  const ref = useRef<HTMLHeadingElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.5"],
  });
  return (
    <h2
      ref={ref}
      className="mx-auto max-w-4xl text-center text-4xl font-black leading-[1.6] sm:text-5xl lg:text-6xl"
    >
      {statement.map((w, i) => (
        <Word
          key={i}
          text={w.t}
          accent={w.accent}
          progress={scrollYProgress}
          range={[i / statement.length, (i + 1) / statement.length]}
        />
      ))}
    </h2>
  );
}

function Highlight({ text }: { text: string }) {
  return (
    <>
      {text.split("\n").map((line, i, arr) => (
        <span key={i}>
          {line.split(/("[^"]*"?)/).map((part, j) => (
            <span
              key={j}
              style={{ color: part.startsWith('"') ? "#C4B5FD" : "#E7E3F0" }}
            >
              {part}
            </span>
          ))}
          {i < arr.length - 1 && "\n"}
        </span>
      ))}
    </>
  );
}

function CodeTyper() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView || count >= code.length) return;
    const t = setTimeout(() => setCount((c) => c + 1), 26);
    return () => clearTimeout(t);
  }, [inView, count]);

  return (
    <div ref={ref}>
      <pre
        dir="ltr"
        className="min-h-[8.5rem] whitespace-pre-wrap text-left font-mono text-xs leading-7 sm:text-sm"
      >
        <code>
          <Highlight text={code.slice(0, count)} />
        </code>
        <span
          className="cursor-blink ml-0.5 inline-block h-[1.1em] w-[2px] translate-y-[3px]"
          style={{ backgroundColor: "#C4B5FD" }}
        />
      </pre>
    </div>
  );
}

function Marquee() {
  const items = [...stack, ...stack, ...stack, ...stack];
  return (
    <div
      dir="ltr"
      className="relative overflow-hidden py-4"
      style={{
        maskImage:
          "linear-gradient(90deg, transparent, #000 15%, #000 85%, transparent)",
        WebkitMaskImage:
          "linear-gradient(90deg, transparent, #000 15%, #000 85%, transparent)",
      }}
    >
      <motion.div
        className="flex w-max gap-14"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 28, ease: "linear", repeat: Infinity }}
      >
        {items.map((s, i) => (
          <div
            key={i}
            className="flex items-center gap-3 text-lg font-black opacity-70 transition-opacity hover:opacity-100"
          >
            <s.icon
              className="h-6 w-6"
              style={{ color: "var(--color-accent)" }}
            />
            {s.name}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden px-5 py-24 sm:py-32"
    >
      {/* هاله‌های نورانی */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-20 right-[-8rem] h-[26rem] w-[26rem] rounded-full blur-[110px]"
        style={{ backgroundColor: "rgba(155,135,245,0.28)" }}
        animate={{ y: [0, 40, 0], x: [0, -30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-[-8rem] h-[24rem] w-[24rem] rounded-full blur-[110px]"
        style={{ backgroundColor: "rgba(240,171,252,0.28)" }}
        animate={{ y: [0, -40, 0], x: [0, 30, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-5xl">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-6 text-center text-sm font-bold tracking-wide"
          style={{ color: "var(--color-muted-foreground)" }}
        >
          درباره من
        </motion.p>

        <Statement />

        {/* کارت کد با حاشیهٔ درخشان */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto mt-20 max-w-xl"
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="rounded-[1.75rem] p-px shadow-[0_40px_80px_-30px_rgba(155,135,245,0.55)]"
            style={{
              background:
                "linear-gradient(135deg, #9B87F5, rgba(155,135,245,0.1) 40%, #F0ABFC)",
            }}
          >
            <div
              className="rounded-[1.7rem] p-6 sm:p-8"
              style={{ backgroundColor: "#1E1B24" }}
            >
              <div dir="ltr" className="mb-5 flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#FF6B6B]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#FFD166]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#6BCB77]" />
                <span className="ms-auto font-mono text-xs text-white/40">
                  about.ts
                </span>
              </div>
              <CodeTyper />
            </div>
          </motion.div>
        </motion.div>

        {/* ابزارها */}
        <div className="mt-16">
          <Marquee />
        </div>

        {/* روند کار */}
        <div className="mt-24 sm:mt-28">
          <h3 className="mb-14 text-center text-2xl font-black sm:text-3xl">
            روند <span style={{ color: "var(--color-accent)" }}>کار</span>
          </h3>

          <div className="relative grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            <motion.div
              aria-hidden
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.6, ease: "easeOut" }}
              className="absolute inset-x-0 top-[3.4rem] hidden h-px origin-right lg:block"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(155,135,245,0.6), transparent)",
              }}
            />
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.7 }}
                className="group text-center lg:text-start"
              >
                <div
                  className="text-8xl font-black leading-none transition-transform duration-500 group-hover:-translate-y-2"
                  style={{
                    color: "transparent",
                    WebkitTextStroke: "1.5px rgba(155,135,245,0.55)",
                  }}
                >
                  {s.n}
                </div>
                <h4 className="mt-5 text-lg font-black">{s.title}</h4>
                <p
                  className="mt-1 text-sm"
                  style={{ color: "var(--color-muted-foreground)" }}
                >
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
