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
  UserRound,
} from "lucide-react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTelegramPlane,
} from "react-icons/fa";

const links = [
  { id: "about", label: "درباره من", Icon: UserRound },
  { id: "projects", label: "نمونه‌کارها", Icon: Briefcase },
  { id: "contact", label: "تماس", Icon: MessageCircle },
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

// خاستگاه انیمیشن منوی موبایل
const CLIP_ORIGIN = "at 44px 42px";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [hovered, setHovered] = useState<string | null>(null);

  const { scrollY, scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 28 });

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 20);
    if (y < 150) setActive("");
  });

  // مانیتور کردن سکشن‌های فعال بر اساس دید اسکرول
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-35% 0px -55% 0px" },
    );
    links.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // کنترل قفل اسکرول و بستن منو
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
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
          document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      },
      wasOpen ? 300 : 0,
    );
  };

  return (
    <MotionConfig reducedMotion="user">
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-3 sm:px-6 md:pt-5"
      >
        <div
          className={`relative flex w-full items-center justify-between rounded-full border transition-all duration-500 ${
            scrolled && !open
              ? "max-w-4xl border-[var(--color-border)] bg-[var(--color-bg)]/85 py-2 pl-2 pr-4 shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-md sm:pr-5 dark:border-white/10 dark:bg-[#1a1918]/85"
              : "max-w-6xl border-transparent bg-transparent py-3 pl-3 pr-4 sm:pr-5"
          }`}
        >
          {/* لوگوتایپ معمارانه و مینیمال */}
          <a
            href="#"
            onClick={(e) => goTo(e)}
            aria-label="آرزو نعمتی، صفحه اصلی"
            className="group flex items-center text-lg font-black tracking-tight text-[var(--color-text)] sm:text-xl"
          >
            <span className="font-serif">آرزو</span>
            <span className="grid grid-cols-[0fr] transition-[grid-template-columns] duration-500 ease-out group-hover:grid-cols-[1fr]">
              <span className="overflow-hidden whitespace-nowrap text-muted-foreground font-normal">
                &nbsp;نعمتی
              </span>
            </span>
            <span className="ms-1.5 inline-block h-2 w-2 rounded-full bg-[var(--color-accent)] opacity-85 transition-transform duration-300 group-hover:scale-125" />
          </a>

          {/* منوی مدرن و مینیمال دسکتاپ */}
          <nav
            className="hidden items-center gap-1 rounded-full border border-[var(--color-border)]/60 bg-[var(--color-card)]/50 px-2 py-1 backdrop-blur-sm md:flex"
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
                  className={`relative isolate flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors ${
                    isSelected
                      ? "text-[var(--color-accent)] font-semibold"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {isSelected && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-[var(--color-sub-accent)]/80 dark:bg-white/10"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 32,
                      }}
                    />
                  )}
                  <l.Icon className="h-3.5 w-3.5" />
                  {l.label}
                </a>
              );
            })}
          </nav>

          {/* دکمه ارتباط مستقیم (Call to Action) */}
          <a
            href="#contact"
            onClick={(e) => goTo(e, "contact")}
            className="group hidden items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-card)] px-4 py-2 text-xs font-semibold text-[var(--color-text)] shadow-xs transition-all hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-white md:inline-flex"
          >
            <span>شروع گفتگو</span>
            <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-x-1" />
          </a>

          {/* دکمه منوی موبایل با خطوط مینیمال */}
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "بستن منو" : "باز کردن منو"}
            className="relative flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-card)] text-[var(--color-text)] transition-colors md:hidden"
          >
            <motion.span
              animate={open ? { rotate: 45, y: 0 } : { rotate: 0, y: -3.5 }}
              className="absolute h-[1.5px] w-4.5 rounded-full bg-current"
            />
            <motion.span
              animate={
                open
                  ? { rotate: -45, y: 0, width: 18 }
                  : { rotate: 0, y: 3.5, width: 12 }
              }
              className="absolute h-[1.5px] rounded-full bg-current"
            />
          </button>

          {/* نوار باریک پیشرفت اسکرول با رنگ سفالی */}
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

      {/* کشوی منوی تمام‌صفحه موبایل با تم ادیتوریال و گرم */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="منوی اصلی"
            initial={{ clipPath: `circle(0% ${CLIP_ORIGIN})` }}
            animate={{ clipPath: `circle(150% ${CLIP_ORIGIN})` }}
            exit={{ clipPath: `circle(0% ${CLIP_ORIGIN})` }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 flex flex-col justify-between bg-[var(--color-bg)] px-7 pb-10 pt-28 sm:px-10 md:hidden"
          >
            <nav className="relative flex flex-col divide-y divide-[var(--color-border)]">
              {links.map((l, i) => (
                <motion.a
                  key={l.id}
                  href={`#${l.id}`}
                  onClick={(e) => goTo(e, l.id)}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10, transition: { duration: 0.15 } }}
                  transition={{
                    delay: 0.2 + i * 0.08,
                    duration: 0.4,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="group flex items-center justify-between py-5 text-[var(--color-text)]"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs text-[var(--color-accent)]">
                      {toFa(i + 1).padStart(2, "۰")}
                    </span>
                    <span className="text-2xl font-bold tracking-tight">
                      {l.label}
                    </span>
                  </div>
                  <ArrowLeft className="h-5 w-5 text-muted-foreground transition-transform group-hover:-translate-x-1 group-hover:text-[var(--color-accent)]" />
                </motion.a>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.45, duration: 0.4 }}
              className="space-y-6 pt-8 border-t border-[var(--color-border)]"
            >
              <div className="space-y-2 text-sm">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  کانال‌های مستقیم
                </p>
                <div className="flex flex-col gap-2">
                  <a
                    href={`tel:${PHONE}`}
                    className="flex items-center gap-2.5 text-[var(--color-text)] hover:text-[var(--color-accent)]"
                  >
                    <Phone className="h-4 w-4 text-[var(--color-accent)]" />
                    <span dir="ltr" className="font-mono text-xs">
                      ۰۹۳۵ ۱۴۶ ۵۷۸۰
                    </span>
                  </a>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="flex items-center gap-2.5 text-xs text-[var(--color-text)] hover:text-[var(--color-accent)]"
                  >
                    <Mail className="h-4 w-4 text-[var(--color-accent)]" />
                    <span className="font-mono">{EMAIL}</span>
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                {socials.map((s) => {
                  const external = s.href.startsWith("http");
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      aria-label={s.label}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noopener noreferrer" : undefined}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-card)] text-[var(--color-text)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                    >
                      <s.Icon className="h-4 w-4" />
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
