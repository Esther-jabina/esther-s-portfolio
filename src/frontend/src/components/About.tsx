import { useEffect, useRef } from "react";

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("animate-fadeInUp");
          el.style.opacity = "1";
          observer.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    el.style.opacity = "0";
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

export { useScrollReveal };

export default function About() {
  const ref = useScrollReveal();

  return (
    <section
      id="about"
      data-ocid="about.section"
      className="bg-background py-24 px-6"
    >
      <div ref={ref} className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          {/* Left: label + heading */}
          <div className="md:w-1/3 flex-shrink-0">
            <span className="text-xs font-body font-semibold tracking-widest uppercase text-primary mb-3 block">
              About Me
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground leading-tight">
              Who I Am
            </h2>
            <div className="mt-4 w-12 h-1 rounded-full bg-gradient-to-r from-primary to-accent" />
          </div>

          {/* Right: content */}
          <div className="md:w-2/3 space-y-5">
            <p className="font-body text-base sm:text-lg text-foreground/80 leading-relaxed">
              Dedicated and passionate web developer with a strong foundation in{" "}
              <span className="text-primary font-semibold">HTML and CSS</span>,
              complemented by hands-on experience in{" "}
              <span className="text-primary font-semibold">Java</span>.
            </p>
            <p className="font-body text-base sm:text-lg text-foreground/80 leading-relaxed">
              I thrive in collaborative environments and am committed to
              creating{" "}
              <span className="text-primary font-semibold">
                user-friendly, efficient, and visually appealing
              </span>{" "}
              web solutions that make a real impact.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
              {[
                { label: "Degree", value: "B.E Computer Science" },
                { label: "Graduation", value: "2025" },
                { label: "Location", value: "Chennai, India" },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  className="bg-card border border-border rounded-lg p-4 shadow-xs"
                >
                  <p className="text-xs font-body text-muted-foreground uppercase tracking-wide mb-1">
                    {label}
                  </p>
                  <p className="font-display text-sm font-semibold text-foreground">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
