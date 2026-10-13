import { Hero } from "@/components/hero";
import  About  from "@/components/about";
export default function Home() {
  return (
    <main
      className="min-h-screen"
      style={{ backgroundColor: "var(--color-bg)", color: "var(--color-text)" }}
    >
      <Hero />

     <About />
     
      {/* Projects */}
      <section id="projects" className="max-w-4xl mx-auto px-6 py-24">
        <h2 className="text-2xl font-black mb-10">نمونه‌کارها</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          <div
            className="rounded-2xl p-6 border"
            style={{
              backgroundColor: "var(--color-card)",
              borderColor: "var(--color-border)",
            }}
          >
            <h3 className="font-black mb-2">پلتفرم شیمی گستر سولفات</h3>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--color-muted-foreground)" }}
            >
              پلتفرم صنعتی با کاتالوگ محصولات، فرم‌های تخصصی و رابط کاربری RTL.
            </p>
          </div>

          <div
            className="rounded-2xl p-6 border"
            style={{
              backgroundColor: "var(--color-card)",
              borderColor: "var(--color-border)",
            }}
          >
            <h3 className="font-black mb-2">لندینگ‌پیج سازمانی تعاملی</h3>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--color-muted-foreground)" }}
            >
              لندینگ‌پیج سازمانی با انیمیشن‌های تعاملی و طراحی ریسپانسیو.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="max-w-2xl mx-auto px-6 py-24 text-center"
      >
        <h2 className="text-2xl font-black mb-4">تماس</h2>
        <p className="mb-8" style={{ color: "var(--color-muted-foreground)" }}>
          برای پروژه‌های فریلنس یا همکاری، پیامم بده.
        </p>
        <a
          href="mailto:hello@arezu.dev"
          className="text-lg font-black transition-opacity hover:opacity-70"
          style={{ color: "var(--color-accent)" }}
        >
          hello@arezu.dev
        </a>
      </section>
    </main>
  );
}
