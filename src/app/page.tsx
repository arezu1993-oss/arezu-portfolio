import { Hero } from "@/components/hero";
import  About  from "@/components/about";
import Projects from "@/components/projects"
import Footer from "@/components/footer";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main
      className="min-h-screen"
      style={{ backgroundColor: "var(--color-bg)", color: "var(--color-text)" }}
    >
      <Hero />

     <About />
     
     <Projects />

<Contact />

     <Footer />
    </main>
  );
}
