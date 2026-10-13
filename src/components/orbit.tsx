"use client";

import type { IconType } from "react-icons";
import {
  SiTypescript,
  SiTailwindcss,
  SiReact,
  SiNextdotjs,
  SiHtml5,
  SiJavascript,
} from "react-icons/si";
import { TbSeo } from "react-icons/tb";
import { HiSparkles } from "react-icons/hi2";

type Skill = { name: string; Icon: IconType; color: string };

const innerSkills: Skill[] = [
  { name: "React", Icon: SiReact, color: "#61DAFB" },
  { name: "Next.js 16", Icon: SiNextdotjs, color: "#000000" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" },
];

const outerSkills: Skill[] = [
  { name: "JavaScript", Icon: SiJavascript, color: "#E8C500" },
  { name: "HTML5 / CSS3", Icon: SiHtml5, color: "#E34F26" },
  { name: "Technical SEO", Icon: TbSeo, color: "#16A34A" },
  { name: "AI-Assisted Dev", Icon: HiSparkles, color: "#9B87F5" },
];

function Ring({
  skills,
  size,
  duration,
  reverse = false,
  offset = 0,
}: {
  skills: Skill[];
  size: string;
  duration: number;
  reverse?: boolean;
  offset?: number;
}) {
  return (
    <div
      className={`orbit-spin absolute rounded-full border border-dashed ${reverse ? "orbit-reverse" : ""}`}
      style={{
        width: size,
        height: size,
        borderColor: "rgba(155,135,245,0.35)",
        animationDuration: `${duration}s`,
      }}
    >
      {skills.map((s, i) => {
        const rad = (((360 / skills.length) * i + offset) * Math.PI) / 180;
        const left = (50 + 50 * Math.cos(rad)).toFixed(3);
        const top = (50 + 50 * Math.sin(rad)).toFixed(3);

        return (
          // جای آیکون روی مدار
          <div
            key={s.name}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${left}%`, top: `${top}%` }}
          >
            {/* چرخش خلاف مدار تا آیکون همیشه صاف بماند */}
            <div
              className={`orbit-spin ${reverse ? "" : "orbit-reverse"}`}
              style={{ animationDuration: `${duration}s` }}
            >
              <div
                aria-label={s.name}
                className="group relative flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-[0_6px_20px_-4px_rgba(155,135,245,0.45)] ring-1 ring-black/5 transition-transform duration-300 hover:scale-125 sm:h-11 sm:w-11 md:h-12 md:w-12"
              >
                <s.Icon
                  className="h-5 w-5 md:h-6 md:w-6"
                  style={{ color: s.color }}
                />
                <span className="pointer-events-none absolute top-full mt-2 whitespace-nowrap rounded-full bg-[#1E1B24] px-2.5 py-1 text-[10px] font-bold text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                  {s.name}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

const stars = [
  { top: "6%", left: "22%", d: "0s" },
  { top: "16%", left: "90%", d: "1.2s" },
  { top: "86%", left: "10%", d: "0.6s" },
  { top: "94%", left: "72%", d: "1.8s" },
  { top: "48%", left: "0%", d: "2.4s" },
];

export function Orbit() {
  return (
    <div className="orbit-wrap relative mx-auto flex aspect-square w-[min(86vw,22rem)] items-center justify-center sm:w-[26rem] lg:w-[32rem]">
      {/* هاله نور */}
      <div
        className="absolute aspect-square w-[62%] animate-pulse rounded-full opacity-60 blur-3xl"
        style={{
          background: "radial-gradient(circle, #9B87F5 0%, #FCE7F3 70%)",
        }}
      />

      {/* ستاره‌های چشمک‌زن */}
      {stars.map((s, i) => (
        <span
          key={i}
          className="absolute h-1.5 w-1.5 animate-pulse rounded-full"
          style={{
            top: s.top,
            left: s.left,
            animationDelay: s.d,
            backgroundColor: "var(--color-accent)",
          }}
        />
      ))}

      {/* مدار بیرونی: ساعتگرد */}
      <Ring skills={outerSkills} size="98%" duration={70} offset={45} />
      {/* مدار داخلی: پادساعتگرد */}
      <Ring skills={innerSkills} size="64%" duration={50} reverse />

      {/* حلقه گرادیانی چرخان دور عکس */}
      <div className="relative aspect-square w-[46%]">
        <div
          className="orbit-spin absolute -inset-1.5 rounded-full"
          style={{
            animationDuration: "8s",
            background:
              "conic-gradient(from 0deg, #9B87F5, #FCE7F3, #ffffff, #9B87F5)",
          }}
        />
        <div
          className="absolute inset-0 overflow-hidden rounded-full shadow-2xl ring-4 ring-white"
          style={{
            background:
              "linear-gradient(160deg, var(--color-accent), var(--color-sub-accent))",
          }}
        >
          <img
            src="/images/avatar.png"
            alt="آرزو نعمتی"
            className="absolute bottom-0 left-1/2 w-[95%] max-w-none -translate-x-1/2"
          />
        </div>
      </div>
    </div>
  );
}
