"use client";

import { motion } from "framer-motion";
import {
  FiArrowLeft,
  FiGithub,
  FiHeart,
  FiMail,
  FiPhone,
} from "react-icons/fi";
import { FaInstagram, FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";

// ===== اطلاعات تماس و هویت =====
const CONTACT = {
  name: "آرزو نعمتی",
  phone: "+989351465780",
  phoneFa: "۰۹۳۵ ۱۴۶ ۵۷۸۰",
  email: "arezufrontend.developer@gmail.com",
};

// ===== شبکه‌های اجتماعی (فقط آیکون، بدون برچسب) =====
const socials = [
  {
    name: "Telegram",
    href: "https://t.me/+989351465780",
    Icon: FaTelegramPlane,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/arezoo-nemati",
    Icon: FaLinkedinIn,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/arezu_design25",
    Icon: FaInstagram,
  },
  { name: "GitHub", href: "https://github.com/arezu1993-oss", Icon: FiGithub },
];

// ===== لینک‌های دسترسی سریع (همان منوی صفحه) =====
const navLinks = [
  { label: "درباره من", href: "#about" },
  { label: "نمونه‌کارها", href: "#projects" },
  { label: "تماس", href: "#contact" },
];

// ===== انیمیشن ورود مشترک =====
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
});

// ===== عنوان ستون =====
function ColumnTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <span className="h-px w-6 bg-[oklch(90%_0.06_340)]" />
      <h4 className="text-sm font-black tracking-wide text-white/90">
        {children}
      </h4>
    </div>
  );
}

export default function Footer() {
  // اسکرول نرم برای لینک‌های داخلی
  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      role="contentinfo"
      className="relative overflow-hidden text-white bg-gradient-to-b from-[oklch(55%_0.10_290)] to-[oklch(44%_0.09_300)]"
    >
      {/* لکه‌های نور ثابت و محو (بدون انیمیشن سنگین) */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-[oklch(90%_0.06_340)] opacity-20 blur-[100px]" />
        <div className="absolute bottom-0 right-1/5 h-80 w-80 rounded-full bg-[oklch(80%_0.10_300)] opacity-20 blur-[110px]" />
        {/* الگوی نقطه‌ای بسیار ظریف */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 pb-10 pt-24">
        {/* ===== تیتر و CTA (وسط‌چین) ===== */}
        <motion.div
          {...fadeUp()}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          
          <h2 className="text-3xl font-black leading-snug md:text-5xl">
            هر ایده بزرگ با یک گفتگو شروع میشه
          </h2>
          <p className="mt-4 text-lg font-bold text-white/75 md:text-xl">
            پس بیاین با هم ایده‌هاتونو واقعی کنیم
          </p>

          <motion.a
            href="#contact"
            onClick={(e) => handleScroll(e, "#contact")}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.3 }}
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-white px-9 py-4 font-black text-[oklch(40%_0.09_295)] shadow-[0_18px_40px_-12px_rgba(40,20,80,0.45)] transition-shadow duration-300 hover:shadow-[0_22px_50px_-10px_rgba(40,20,80,0.55)]"
          >
            درخواست مشاوره رایگان  
            <FiArrowLeft className="text-lg" />
          </motion.a>
        </motion.div>

        {/* ===== سه ستون ===== */}
        <div className="grid grid-cols-1 gap-14 md:grid-cols-3 md:gap-10">
          {/* ستون ۱: هویت */}
          <motion.div {...fadeUp(0.05)} className="text-center md:text-right">
            <h3 className="inline-block bg-gradient-to-l from-white to-[oklch(90%_0.06_340)] bg-clip-text text-3xl font-black text-transparent">
              {CONTACT.name}
            </h3>
            <p className="mx-auto mt-4 max-w-xs text-sm leading-7 text-white/70 md:mx-0">
              توسعه‌دهنده فرانت‌اند با علاقه به طراحی‌های مدرن و تجربه کاربری
              روان.
            </p>
          </motion.div>

          {/* ستون ۲: دسترسی سریع */}
          <motion.div {...fadeUp(0.15)} className="text-center md:text-right">
            <ColumnTitle>دسترسی سریع</ColumnTitle>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.href)}
                  className="group inline-flex items-center justify-center gap-2 text-white/75 transition-colors duration-300 hover:text-white"
                >
                  <span className="h-px w-0 bg-white transition-all duration-300 group-hover:w-5" />
                  {link.label}
                </a>
              ))}
            </nav>
          </motion.div>

          {/* ستون ۳: ارتباط */}
          <motion.div {...fadeUp(0.25)} className="text-center md:text-right">
            <ColumnTitle>ارتباط با من</ColumnTitle>

            <div className="flex flex-col items-center gap-4 md:items-end">
              <a
                href={`tel:${CONTACT.phone}`}
                className="group inline-flex items-center gap-3 text-white/85 transition-colors hover:text-white"
              >
                <span dir="ltr" className="text-sm font-semibold">
                  {CONTACT.phoneFa}
                </span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20 transition-colors group-hover:bg-white/20">
                  <FiPhone />
                </span>
              </a>

              <a
                href={`mailto:${CONTACT.email}`}
                className="group inline-flex items-center gap-3 text-white/85 transition-colors hover:text-white"
              >
                <span dir="ltr" className="break-all text-sm font-semibold">
                  {CONTACT.email}
                </span>
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20 transition-colors group-hover:bg-white/20">
                  <FiMail />
                </span>
              </a>
            </div>

            {/* شبکه‌های اجتماعی */}
            <div className="mt-7 flex justify-center gap-3 md:justify-end">
              {socials.map(({ name, href, Icon }) => (
                <motion.a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.92 }}
                  transition={{ duration: 0.25 }}
                  className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-lg ring-1 ring-white/20 backdrop-blur-md transition-colors duration-300 hover:bg-white hover:text-[oklch(40%_0.09_295)]"
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ===== نوار پایین ===== */}
        <motion.div
          {...fadeUp(0.1)}
          className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-white/15 pt-8 text-xs text-white/80 md:flex-row"
        >
          <p>© ۱۴۰۵ {CONTACT.name}. تمامی حقوق محفوظ است.</p>
          <p className="inline-flex items-center gap-2">
            ساخته‌شده با
            <FiHeart className="text-[oklch(90%_0.06_340)]"/>و Next.js 
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
