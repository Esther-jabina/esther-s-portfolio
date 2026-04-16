import { Calendar, GraduationCap } from "lucide-react";
import { useEffect, useRef } from "react";

const EDUCATION = [
  {
    institution: "Jaya Engineering College",
    degree: "B.E Computer Science",
    period: "2021 – 2025",
    score: "86%",
    type: "Bachelor's Degree",
  },
  {
    institution: "I.H.M Girls Higher Secondary School",
    degree: "12th Standard",
    period: "2019 – 2021",
    score: "84%",
    type: "Higher Secondary",
  },
];

export default function Education() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const children = el.querySelectorAll<HTMLElement>("[data-edu]");
          let i = 0;
          for (const child of Array.from(children)) {
            child.style.transitionDelay = `${i * 120}ms`;
            child.classList.add("animate-fadeInUp");
            child.style.opacity = "1";
            i++;
          }
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    for (const c of Array.from(
      el.querySelectorAll<HTMLElement>("[data-edu]"),
    )) {
      c.style.opacity = "0";
    }
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="education"
      data-ocid="education.section"
      className="bg-background py-24 px-6"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-xs font-body font-semibold tracking-widest uppercase text-primary mb-3 block">
            Education
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
            Academic Background
          </h2>
          <div className="mt-4 w-12 h-1 rounded-full bg-gradient-to-r from-primary to-accent mx-auto" />
        </div>

        <div ref={ref} className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-primary/20 to-transparent hidden sm:block" />

          <div className="flex flex-col gap-8">
            {EDUCATION.map((edu, idx) => (
              <div
                key={edu.institution}
                data-edu
                data-ocid={`education.item.${idx + 1}`}
                className="sm:pl-16 relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-4 top-6 w-5 h-5 rounded-full bg-primary border-4 border-background shadow-sm hidden sm:block" />

                <div className="bg-card border border-border rounded-xl p-6 shadow-xs hover:shadow-elevated transition-smooth">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <span className="text-xs font-body font-semibold text-primary uppercase tracking-wide">
                        {edu.type}
                      </span>
                      <h3 className="font-display text-lg font-bold text-foreground mt-1">
                        {edu.institution}
                      </h3>
                      <p className="font-body text-muted-foreground text-sm mt-0.5">
                        {edu.degree}
                      </p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <div className="inline-flex items-center gap-1.5 text-xs font-body text-muted-foreground mb-2">
                        <Calendar className="h-3 w-3" />
                        {edu.period}
                      </div>
                      <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-display font-bold text-right">
                        {edu.score}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground text-xs font-body">
                    <GraduationCap className="h-3.5 w-3.5 text-primary" />
                    Academic achievement
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
