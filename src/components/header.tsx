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

// نقطه شروع دایره منوی موبایل (روی دکمه همبرگر)
const CLIP_ORIGIN = "at 44px 42px";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [hovered, setHovered] = useState<string | null>(null);

  const { scrollY, scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 25 });

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 20);
    if (y < 200) setActive("");
  });

  // تشخیص بخش فعال
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    links.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // قفل اسکرول، بستن با Esc و بستن هنگام بزرگ شدن صفحه
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
        if (id)
          document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        else window.scrollTo({ top: 0, behavior: "smooth" });
      },
      wasOpen ? 350 : 0,
    );
  };

  return (
    <MotionConfig reducedMotion="user">
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3 sm:px-4 md:pt-4"
      >
        <div
          className={`relative flex w-full items-center justify-between rounded-full border transition-all duration-500 ${
            scrolled && !open
              ? "max-w-4xl border-white/60 bg-white/70 py-2 pl-2 pr-4 shadow-[0_10px_40px_-12px_rgba(155,135,245,0.45)] backdrop-blur-xl sm:pr-5"
              : "max-w-6xl border-transparent bg-transparent py-3 pl-3 pr-4 sm:pr-5"
          }`}
        >
          {/* لوگو */}
          <a
            href="#"
            onClick={(e) => goTo(e)}
            aria-label="آرزو نعمتی، بازگشت به بالا"
            className={`group flex items-center text-xl font-black transition-colors sm:text-2xl ${
              open ? "text-white" : ""
            }`}
          >
            آرزو
            {/* نام خانوادگی هنگام هاور تایپ می‌شود */}
            <span className="grid grid-cols-[0fr] transition-[grid-template-columns] duration-500 ease-out group-hover:grid-cols-[1fr]">
              <span className="overflow-hidden whitespace-nowrap">
                &nbsp;نعمتی
              </span>
            </span>
            {/* مکان‌نمای چشمک‌زن */}
            <span
              className="cursor-blink ms-1 inline-block h-[1.1em] w-[3px] rounded-full"
              style={{ backgroundColor: "var(--color-accent)" }}
            />
          </a>

          {/* منوی دسکتاپ */}
          <nav
            className="hidden items-center gap-1 md:flex"
            onMouseLeave={() => setHovered(null)}
          >
            {links.map((l) => {
              const highlighted = (hovered ?? active) === l.id;
              return (
                <a
                  key={l.id}
                  href={`#${l.id}`}
                  onClick={(e) => goTo(e, l.id)}
                  onMouseEnter={() => setHovered(l.id)}
                  aria-current={active === l.id ? "page" : undefined}
                  className="relative isolate flex items-center gap-1.5 rounded-full px-3 py-2 text-sm font-bold transition-colors lg:px-4"
                  style={{
                    color: highlighted ? "var(--color-accent)" : undefined,
                  }}
                >
                  {highlighted && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full"
                      style={{ backgroundColor: "rgba(155,135,245,0.14)" }}
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                  <l.Icon className="h-4 w-4" />
                  {l.label}
                </a>
              );
            })}
          </nav>

          {/* دکمه تماس دسکتاپ */}
          <a
            href="#contact"
            onClick={(e) => goTo(e, "contact")}
            className="group hidden items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold text-white shadow-[0_8px_24px_-8px_rgba(155,135,245,0.9)] transition-transform hover:scale-105 md:inline-flex"
            style={{ backgroundColor: "var(--color-accent)" }}
          >
            بیا حرف بزنیم
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          </a>

          {/* دکمه همبرگر */}
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "بستن منو" : "باز کردن منو"}
            className="relative flex h-11 w-11 items-center justify-center rounded-full transition-colors md:hidden"
            style={{
              backgroundColor: open
                ? "rgba(255,255,255,0.1)"
                : "var(--color-accent)",
            }}
          >
            <motion.span
              animate={open ? { rotate: 45, y: 0 } : { rotate: 0, y: -4 }}
              className="absolute h-0.5 w-5 rounded-full bg-white"
            />
            <motion.span
              animate={
                open
                  ? { rotate: -45, y: 0, width: 20 }
                  : { rotate: 0, y: 4, width: 14 }
              }
              className="absolute h-0.5 rounded-full bg-white"
            />
          </button>

          {/* نوار پیشرفت اسکرول */}
          <motion.div
            className={`absolute inset-x-8 -bottom-px h-0.5 rounded-full transition-opacity duration-500 ${
              scrolled && !open ? "opacity-100" : "opacity-0"
            }`}
            style={{
              scaleX: progress,
              transformOrigin: "right",
              background: "linear-gradient(to left, #9B87F5, #F0ABFC)",
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
            initial={{ clipPath: `circle(0% ${CLIP_ORIGIN})` }}
            animate={{ clipPath: `circle(150% ${CLIP_ORIGIN})` }}
            exit={{ clipPath: `circle(0% ${CLIP_ORIGIN})` }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 flex flex-col overflow-y-auto px-6 pb-8 pt-28 sm:px-10 md:hidden"
            style={{ backgroundColor: "#1E1B24" }}
          >
            {/* هاله‌های رنگی */}
            <div className="pointer-events-none absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-[#9B87F5] opacity-30 blur-3xl" />
            <div className="pointer-events-none absolute -right-20 bottom-10 h-64 w-64 rounded-full bg-[#F0ABFC] opacity-20 blur-3xl" />

            <nav className="relative flex flex-col">
              {links.map((l, i) => (
                <motion.a
                  key={l.id}
                  href={`#${l.id}`}
                  onClick={(e) => goTo(e, l.id)}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20, transition: { duration: 0.2 } }}
                  transition={{
                    delay: 0.3 + i * 0.08,
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group flex items-center gap-4 border-b border-white/10 py-5"
                >
                  <span
                    className="w-4 text-sm font-bold"
                    style={{ color: "var(--color-accent)" }}
                  >
                    {toFa(i + 1)}
                  </span>
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-white ring-1 ring-white/10 transition-colors group-hover:bg-[#9B87F5]">
                    <l.Icon className="h-5 w-5" />
                  </span>
                  <span className="text-3xl font-black text-white sm:text-4xl">
                    {l.label}
                  </span>
                  <ArrowLeft className="ms-auto h-5 w-5 text-white/30 transition-all group-hover:-translate-x-1 group-hover:text-white" />
                </motion.a>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, transition: { duration: 0.15 } }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="relative mt-auto pt-12"
            >
              <p className="mb-4 text-xs text-white/40">راه‌های ارتباطی</p>
              <div className="mb-6 flex flex-col gap-3 text-sm text-white/80">
                <a
                  href={`tel:${PHONE}`}
                  className="flex items-center gap-3 hover:text-white"
                >
                  <Phone
                    className="h-4 w-4"
                    style={{ color: "var(--color-accent)" }}
                  />
                  <span dir="ltr">۰۹۳۵ ۱۴۶ ۵۷۸۰</span>
                </a>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-3 break-all hover:text-white"
                >
                  <Mail
                    className="h-4 w-4 shrink-0"
                    style={{ color: "var(--color-accent)" }}
                  />
                  {EMAIL}
                </a>
              </div>
              <div className="flex flex-wrap gap-3">
                {socials.map((s) => {
                  const external = s.href.startsWith("http");
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      aria-label={s.label}
                      title={s.label}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noopener noreferrer" : undefined}
                      className="flex h-11 w-11 items-center justify-center rounded-full bg-white/5 text-white ring-1 ring-white/10 transition-all hover:-translate-y-1 hover:bg-[#9B87F5]"
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
