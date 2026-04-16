import { Button } from "@/components/ui/button";
import { ArrowDown, Mail } from "lucide-react";
import { useEffect, useRef } from "react";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(16px)";
    const raf = requestAnimationFrame(() => {
      setTimeout(() => {
        el.style.transition =
          "opacity 0.8s cubic-bezier(0.4,0,0.2,1), transform 0.8s cubic-bezier(0.4,0,0.2,1)";
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, 80);
    });
    return () => cancelAnimationFrame(raf);
  }, []);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      data-ocid="hero.section"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/generated/hero-bg.dim_1400x700.jpg')",
        }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/50 to-accent/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />

      {/* Decorative orbs */}
      <div className="absolute top-1/4 right-1/4 w-72 h-72 rounded-full bg-accent/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/5 w-56 h-56 rounded-full bg-primary/25 blur-2xl pointer-events-none" />

      {/* Content */}
      <div
        ref={heroRef}
        className="relative z-10 text-center px-6 max-w-3xl mx-auto"
      >
        <p className="text-sm font-body font-medium tracking-widest uppercase text-primary-foreground/80 mb-4">
          Welcome to my portfolio
        </p>

        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold leading-tight mb-4">
          <span className="block text-primary-foreground/90">Hi, I'm</span>
          <span
            className="block text-gradient-primary"
            style={{ WebkitTextFillColor: undefined }}
          >
            <span
              className="bg-gradient-to-r from-white via-accent/90 to-white bg-clip-text"
              style={{
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Esther Jabina
            </span>
          </span>
        </h1>

        <p className="font-display text-xl sm:text-2xl font-semibold text-primary-foreground/85 mb-3">
          Web Developer
        </p>

        <p className="font-body text-base sm:text-lg text-primary-foreground/70 max-w-xl mx-auto leading-relaxed mb-10">
          Dedicated and passionate developer with a strong foundation in HTML &
          CSS, crafting user-friendly, efficient, and visually appealing web
          solutions.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            data-ocid="hero.view_work_button"
            onClick={() => scrollTo("projects")}
            className="bg-white text-primary hover:bg-white/90 font-display font-semibold px-8 shadow-elevated transition-smooth hover:shadow-hover"
          >
            View My Work
            <ArrowDown className="ml-2 h-4 w-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            data-ocid="hero.contact_button"
            onClick={() => scrollTo("contact")}
            className="border-primary-foreground/60 text-primary-foreground hover:bg-primary-foreground/15 font-display font-semibold px-8 backdrop-blur-sm transition-smooth"
          >
            Get in Touch
            <Mail className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-60">
        <span className="text-xs font-body text-primary-foreground/70 tracking-wider uppercase">
          Scroll
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-primary-foreground/60 to-transparent" />
      </div>
    </section>
  );
}
