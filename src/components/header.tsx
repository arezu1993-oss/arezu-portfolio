"use client";

import { useEffect, useState, type MouseEvent } from "react";
import {
  AnimatePresence,
  MotionConfig,
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from "framer-motion";
import {
  ArrowLeft,
  Briefcase,
  Mail,
  MessageCircle,
  Phone,
  Sparkles,
  UserRound,
} from "lucide-react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTelegramPlane,
} from "react-icons/fa";

interface NavLink {
  id: string;
  label: string;
  enLabel: string;
  Icon: typeof UserRound;
}

const links: NavLink[] = [
  {
    id: "projects",
    label: "پروژه‌ها و آثار",
    enLabel: "WORKS",
    Icon: Briefcase,
  },
  { id: "about", label: "درباره من", enLabel: "PROFILE", Icon: UserRound },
  {
    id: "contact",
    label: "شروع همکاری",
    enLabel: "CONTACT",
    Icon: MessageCircle,
  },
];

const PHONE = "+989351465780";
const EMAIL = "arezufrontend.developer@gmail.com";

const socials = [
  { label: "تلگرام", href: `https://t.me/${PHONE}`, Icon: FaTelegramPlane },
  {
    label: "لینکدین",
    href: "https://www.linkedin.com/in/arezoo-nemati",
    Icon: FaLinkedinIn,
  },
  {
    label: "اینستاگرام",
    href: "https://www.instagram.com/arezu_design25",
    Icon: FaInstagram,
  },
  {
    label: "گیت‌هاب",
    href: "https://github.com/arezu1993-oss",
    Icon: FaGithub,
  },
  { label: "ایمیل", href: `mailto:${EMAIL}`, Icon: Mail },
];

const toFa = (n: number) => n.toLocaleString("fa-IR");

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [hovered, setHovered] = useState<string | null>(null);

  const { scrollY, scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 28 });

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 20);
    if (y < 120) setActive("");
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-35% 0px -55% 0px" },
    );

    links.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const mq = window.matchMedia("(min-width: 768px)");
    const onResize = () => mq.matches && setOpen(false);

    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onResize);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onResize);
    };
  }, [open]);

  const goTo = (e: MouseEvent, id?: string) => {
    e.preventDefault();
    const wasOpen = open;
    setOpen(false);

    setTimeout(
      () => {
        if (id) {
          const el = document.getElementById(id);
          if (el) {
            el.scrollIntoView({ behavior: "smooth" });
          }
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      },
      wasOpen ? 280 : 0,
    );
  };

  return (
    <MotionConfig reducedMotion="user">
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-3.5 sm:px-8 md:pt-5"
      >
        <div
          className={`relative flex w-full items-center justify-between transition-all duration-500 ${
            scrolled && !open
              ? "max-w-5xl rounded-full border border-[var(--color-border)] bg-[var(--color-bg)]/85 px-4 py-2.5 shadow-[0_12px_32px_rgb(0,0,0,0.06)] backdrop-blur-md sm:px-6 dark:bg-[#1a1918]/85"
              : "max-w-7xl rounded-2xl border-b border-[var(--color-border)]/40 bg-transparent px-2 py-3 sm:px-4"
          }`}
        >
          {/* لوگوتایپ ادیتوریال */}
          <a
            href="#"
            onClick={(e) => goTo(e)}
            aria-label="آرزو نعمتی، صفحه اصلی"
            className="group flex items-center gap-2.5"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-sub-accent)] border border-[var(--color-accent)]/30 text-[var(--color-accent)] transition-transform duration-300 group-hover:scale-105">
              <Sparkles className="h-4 w-4" />
            </div>
            <div className="flex flex-col">
              <span className="text-base font-black tracking-tight text-[var(--color-text)] sm:text-lg">
                آرزو نعمتی
              </span>
              <span className="font-mono text-[9px] font-semibold uppercase tracking-wider text-[var(--color-muted-foreground)]">
                Frontend • Editorial
              </span>
            </div>
          </a>

          {/* منوی ناوبری دسکتاپ */}
          <nav
            className="hidden items-center gap-1 rounded-full border border-[var(--color-border)]/80 bg-[var(--color-card)]/70 px-2 py-1 shadow-xs backdrop-blur-sm md:flex"
            onMouseLeave={() => setHovered(null)}
          >
            {links.map((l) => {
              const isSelected = (hovered ?? active) === l.id;
              return (
                <a
                  key={l.id}
                  href={`#${l.id}`}
                  onClick={(e) => goTo(e, l.id)}
                  onMouseEnter={() => setHovered(l.id)}
                  aria-current={active === l.id ? "page" : undefined}
                  className={`relative isolate flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-semibold transition-colors duration-200 ${
                    isSelected
                      ? "text-[var(--color-accent)]"
                      : "text-[var(--color-muted-foreground)] hover:text-[var(--color-text)]"
                  }`}
                >
                  {isSelected && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-[var(--color-sub-accent)] border border-[var(--color-accent)]/20"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 32,
                      }}
                    />
                  )}
                  <span>{l.label}</span>
                </a>
              );
            })}
          </nav>

          {/* اکشن دسکتاپ */}
          <div className="hidden items-center gap-3 md:flex">
            <a
              href="#contact"
              onClick={(e) => goTo(e, "contact")}
              className="group inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-card)] px-4 py-2 text-xs font-semibold text-[var(--color-text)] shadow-xs transition-all duration-200 hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-white"
            >
              <span>شروع گفتگو</span>
              <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-x-1" />
            </a>
          </div>

          {/* دکمه منوی همبرگری موبایل */}
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "بستن منو" : "باز کردن منو"}
            className="relative flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-card)] text-[var(--color-text)] shadow-xs transition-colors hover:border-[var(--color-accent)] md:hidden"
          >
            <motion.span
              animate={open ? { rotate: 45, y: 0 } : { rotate: 0, y: -3.5 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="absolute h-[1.75px] w-4.5 rounded-full bg-current"
            />
            <motion.span
              animate={
                open
                  ? { rotate: -45, y: 0, width: "18px" }
                  : { rotate: 0, y: 3.5, width: "13px" }
              }
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="absolute h-[1.75px] rounded-full bg-current"
            />
          </button>

          {/* نوار مویی پیشرفت اسکرول */}
          <motion.div
            className={`absolute inset-x-6 -bottom-px h-[2px] rounded-full transition-opacity duration-300 ${
              scrolled && !open ? "opacity-100" : "opacity-0"
            }`}
            style={{
              scaleX: progress,
              transformOrigin: "right",
              backgroundColor: "var(--color-accent)",
            }}
          />
        </div>
      </motion.header>

      {/* منوی تمام‌صفحه موبایل */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="منوی اصلی"
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 flex flex-col justify-between bg-[var(--color-bg)]/98 px-6 pb-8 pt-24 backdrop-blur-xl md:hidden"
          >
            <nav className="flex flex-col divide-y divide-[var(--color-border)]/70">
              {links.map((l, i) => (
                <motion.a
                  key={l.id}
                  href={`#${l.id}`}
                  onClick={(e) => goTo(e, l.id)}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{
                    delay: 0.08 + i * 0.06,
                    duration: 0.35,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="group flex items-center justify-between py-4 text-[var(--color-text)] transition-colors active:text-[var(--color-accent)]"
                >
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-xs font-semibold text-[var(--color-accent)]">
                      {toFa(i + 1).padStart(2, "۰")}
                    </span>
                    <span className="text-xl font-bold tracking-tight">
                      {l.label}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--color-muted-foreground)]">
                      {l.enLabel}
                    </span>
                    <ArrowLeft className="h-4 w-4 text-[var(--color-muted-foreground)] transition-transform duration-200 group-hover:-translate-x-1 group-hover:text-[var(--color-accent)]" />
                  </div>
                </motion.a>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.28, duration: 0.35 }}
              className="space-y-5 rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)]/80 p-5 shadow-xs"
            >
              <div className="flex items-center justify-between text-xs">
                <span className="font-medium text-[var(--color-muted-foreground)]">
                  راه‌های مستقیم تماس
                </span>
                <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-emerald-600 dark:text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Remote Available
                </span>
              </div>

              <div className="flex flex-col gap-2 pt-1">
                <a
                  href={`tel:${PHONE}`}
                  className="flex items-center gap-2 text-xs font-medium text-[var(--color-text)] hover:text-[var(--color-accent)]"
                >
                  <Phone className="h-3.5 w-3.5 text-[var(--color-accent)]" />
                  <span dir="ltr" className="font-mono">
                    ۰۹۳۵ ۱۴۶ ۵۷۸۰
                  </span>
                </a>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-2 text-xs text-[var(--color-text)] hover:text-[var(--color-accent)]"
                >
                  <Mail className="h-3.5 w-3.5 text-[var(--color-accent)]" />
                  <span className="font-mono truncate">{EMAIL}</span>
                </a>
              </div>

              <div className="flex items-center gap-2.5 pt-2 border-t border-[var(--color-border)]">
                {socials.map((s) => {
                  const external = s.href.startsWith("http");
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      aria-label={s.label}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noopener noreferrer" : undefined}
                      className="flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-text)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                    >
                      <s.Icon className="h-3.5 w-3.5" />
                    </a>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </MotionConfig>
  );
}

export default Header;
