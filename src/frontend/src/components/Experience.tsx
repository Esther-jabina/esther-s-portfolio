import { Briefcase, Calendar, CheckCircle2 } from "lucide-react";
import { useEffect, useRef } from "react";

const RESPONSIBILITIES = [
  "Developed dynamic websites using WordPress CMS",
  "Customized themes and plugins to match client requirements",
  "Improved website performance through code optimization",
  "Implemented SEO best practices to boost search rankings",
];

export default function Experience() {
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
      { threshold: 0.1 },
    );
    el.style.opacity = "0";
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="experience"
      data-ocid="experience.section"
      className="bg-muted/40 py-24 px-6"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-xs font-body font-semibold tracking-widest uppercase text-primary mb-3 block">
            Experience
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
            Work Experience
          </h2>
          <div className="mt-4 w-12 h-1 rounded-full bg-gradient-to-r from-primary to-accent mx-auto" />
        </div>

        <div ref={ref} data-ocid="experience.item.1">
          <div className="bg-card border border-border rounded-xl overflow-hidden shadow-elevated">
            {/* Card header accent bar */}
            <div className="h-1 bg-gradient-to-r from-primary to-accent" />
            <div className="p-8">
              <div className="flex flex-wrap items-start gap-4 justify-between mb-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-foreground">
                      Web Developer Intern
                    </h3>
                    <p className="font-body text-primary font-semibold text-sm mt-0.5">
                      Klicknet Info Service Pvt. Ltd
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <div className="flex items-center gap-1.5 text-xs font-body text-muted-foreground">
                    <Calendar className="h-3 w-3" />1 Month Internship
                  </div>
                  <span className="text-xs font-body font-semibold bg-accent/15 text-accent-foreground px-3 py-1 rounded-full border border-accent/30">
                    Internship
                  </span>
                </div>
              </div>

              <h4 className="font-display text-sm font-semibold text-foreground/70 uppercase tracking-wide mb-4">
                Key Responsibilities
              </h4>
              <ul className="space-y-3">
                {RESPONSIBILITIES.map((item) => (
                  <li
                    key={item}
                    data-ocid={`experience.responsibility.${RESPONSIBILITIES.indexOf(item) + 1}`}
                    className="flex items-start gap-3 font-body text-sm text-foreground/80"
                  >
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
