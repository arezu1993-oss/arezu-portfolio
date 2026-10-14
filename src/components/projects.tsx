"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { FiGithub, FiExternalLink, FiArrowUpRight } from "react-icons/fi";
import Image from "next/image";

// ===== تایپ‌ها =====
interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
  category: string;
}

// ===== دیتای پروژه‌ها =====
const projects: Project[] = [
  {
    title: "پلتفرم شیمی گستر سولفات",
    description:
      "سایت B2B تأمین و فروش مواد شیمیایی صنعتی با کاتالوگ محصول، سیستم استعلام آنلاین و بخش مشاوره تخصصی.",
    image: "/images/project1.png",
    tags: ["Next.js", "TypeScript"],
    category: "وب‌سایت تجاری",
    github: "https://github.com/yourusername/shimi-gostar",
    demo: "https://shimigostarsulfate.com",
  },
  {
    title: "سایت الفیکس - دکتر شادمانی",
    description:
      "لندینگ‌پیج تخصصی عیب‌یابی و تعمیر ECU و بردهای الکترونیکی ماشین‌آلات سنگین با معرفی سوابق علمی و نمونه‌کارها.",
    image: "/images/project2.png",
    tags: ["Next.js", "Framer Motion"],
    category: "لندینگ پیج",
    github: "https://github.com/yourusername/elefix",
    demo: "https://elefix.netlify.app",
  },
  {
    title: "پورتفولیو آرزو",
    description:
      "وب‌سایت شخصی با طراحی مینیمال و انیمیشن‌های ظریف، شامل نمایش پروژه‌ها، تجربیات و مهارت‌ها با جدیدترین تکنولوژی‌ها.",
    image: "/images/project3.png",
    tags: ["Next.js 15", "TypeScript"],
    category: "پورتفولیو شخصی",
    github: "https://github.com/yourusername/portfolio",
    demo: "#",
  },
];

// ===== کامپوننت کارت پروژه =====
const ProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative"
    >
      {/* کارت با Magazine Design */}
      <motion.div
        className="relative rounded-[2rem] overflow-hidden bg-white
                   shadow-[0_8px_30px_rgba(155,135,245,0.12)]
                   transition-all duration-500"
        whileHover={{
          y: -8,
          boxShadow: "0 20px 50px rgba(155,135,245,0.25)",
          transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
        }}
      >
        {/* Image Container - 16:9 Aspect Ratio */}
        <div
          className="relative w-full overflow-hidden bg-[oklch(96%_0.01_280)]"
          style={{ aspectRatio: "16 / 9" }}
        >
          {/* Corner Category Badge */}
          <div className="absolute top-4 right-4 z-20">
            <motion.div
              className="px-3 py-1.5 rounded-full
                         bg-white/95 backdrop-blur-sm
                         border border-[oklch(72%_0.14_290)]/20
                         shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 + 0.2 }}
            >
              <span className="text-xs font-bold text-[oklch(72%_0.14_290)]">
                {project.category}
              </span>
            </motion.div>
          </div>

          {/* تصویر با Zoom Subtle */}
          <motion.div
            className="relative w-full h-full"
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
            }}
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              unoptimized
            />
          </motion.div>
        </div>

        {/* Content Area - Stacked Below Image */}
        <div className="p-6 space-y-4">
          {/* تگ‌ها */}
          <motion.div
            className="flex flex-wrap gap-2"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 + 0.3 }}
          >
            {project.tags.slice(0, 2).map((tag) => (
              <Badge
                key={tag}
                className="px-3 py-1 text-xs font-semibold
                         bg-[oklch(72%_0.14_290)]/10
                         border border-[oklch(72%_0.14_290)]/20
                         text-[oklch(72%_0.14_290)]
                         hover:bg-[oklch(72%_0.14_290)]/20
                         transition-all duration-300"
              >
                {tag}
              </Badge>
            ))}
          </motion.div>

          {/* تایتل */}
          <motion.h3
            className="text-2xl font-black text-[oklch(20%_0.02_280)] leading-tight"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 + 0.4 }}
          >
            {project.title}
          </motion.h3>

          {/* توضیحات */}
          <motion.p
            className="text-base text-[oklch(45%_0.02_280)] leading-relaxed line-clamp-3"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 + 0.5 }}
          >
            {project.description}
          </motion.p>

          {/* دکمه‌های Action */}
          <motion.div
            className="flex gap-3 pt-2"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 + 0.6 }}
          >
            {project.demo && (
              <motion.a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl
                         bg-gradient-to-r from-[oklch(72%_0.14_290)] to-[oklch(80%_0.12_310)]
                         text-white font-bold text-sm
                         shadow-[0_4px_14px_rgba(155,135,245,0.4)]
                         hover:shadow-[0_6px_20px_rgba(155,135,245,0.5)]
                         transition-all duration-300"
              >
                <span>مشاهده پروژه</span>
                <FiArrowUpRight className="text-lg" />
              </motion.a>
            )}
            {project.github && (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl
                         bg-[oklch(96%_0.01_280)]
                         border border-[oklch(72%_0.14_290)]/20
                         text-[oklch(72%_0.14_290)] font-bold text-sm
                         hover:bg-[oklch(72%_0.14_290)]/10
                         hover:border-[oklch(72%_0.14_290)]/40
                         transition-all duration-300"
                aria-label="GitHub"
              >
                <FiGithub className="text-xl" />
              </motion.a>
            )}
          </motion.div>
        </div>

        {/* Decorative Corner Accent */}
        <div className="absolute bottom-0 left-0 w-20 h-20 pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity duration-500">
          <div className="absolute inset-0 bg-gradient-to-tr from-[oklch(72%_0.14_290)] to-transparent rounded-tr-full" />
        </div>
      </motion.div>
    </motion.article>
  );
};

// ===== کامپوننت اصلی Projects =====
export default function Projects() {
  return (
    <section
      className="relative py-24 px-4 overflow-hidden 
                 bg-gradient-to-b from-white via-[oklch(99%_0.01_290)] to-white"
      id="projects"
    >
      {/* Artistic Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `radial-gradient(circle, oklch(72% 0.14 290) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />

        {/* Floating Blobs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full blur-[120px]"
          style={{
            background:
              "radial-gradient(circle, oklch(72% 0.14 290 / 0.08), transparent 70%)",
          }}
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] rounded-full blur-[120px]"
          style={{
            background:
              "radial-gradient(circle, oklch(94% 0.04 340 / 0.08), transparent 70%)",
          }}
          animate={{
            x: [0, -20, 0],
            y: [0, 30, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Container */}
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header - Elegant & Minimal */}
        <motion.div
          className="text-center mb-16 space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Decorative Line Top */}
          <motion.div
            className="flex items-center justify-center gap-4 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="h-[2px] w-16 bg-gradient-to-r from-transparent via-[oklch(72%_0.14_290)] to-[oklch(72%_0.14_290)]"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <div className="w-2 h-2 rounded-full bg-[oklch(72%_0.14_290)]" />
            <motion.div
              className="h-[2px] w-16 bg-gradient-to-l from-transparent via-[oklch(94%_0.04_340)] to-[oklch(94%_0.04_340)]"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </motion.div>

          {/* Title */}
          <div className="space-y-4">
            <h2 className="text-5xl md:text-6xl font-black text-[oklch(18%_0.02_280)] leading-tight">
              نمونه‌کارها
            </h2>

            {/* Subtitle */}
            <p className="text-lg text-[oklch(45%_0.02_280)] max-w-2xl mx-auto leading-relaxed">
              مجموعه‌ای از پروژه‌های منتخب که با دقت و خلاقیت ساخته شده‌اند
            </p>
          </div>

          {/* Decorative Line Bottom */}
          <motion.div
            className="h-1 w-24 mx-auto rounded-full bg-gradient-to-r from-[oklch(72%_0.14_290)] to-[oklch(94%_0.04_340)]"
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* CTA - Minimal */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full
                     bg-gradient-to-r from-[oklch(72%_0.14_290)] to-[oklch(80%_0.12_310)]
                     text-white font-bold text-base
                     shadow-[0_10px_40px_rgba(155,135,245,0.3)]
                     hover:shadow-[0_15px_50px_rgba(155,135,245,0.4)]
                     transition-all duration-300
                     relative overflow-hidden group"
          >
            {/* Shimmer Effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

            <FiGithub className="text-xl relative z-10" />
            <span className="relative z-10">مشاهده تمام پروژه‌ها</span>
            <FiExternalLink className="text-lg relative z-10" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
