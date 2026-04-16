import { Award } from "lucide-react";
import { useEffect, useRef } from "react";

const CERTS = [
  {
    title: "Database Management Systems",
    issuer: "NPTEL",
    description:
      "Comprehensive course covering relational databases, SQL, normalization, transaction management, and query optimization.",
    badge: "DBMS",
    color: "primary",
  },
];

export default function Certifications() {
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
      id="certifications"
      data-ocid="certifications.section"
      className="bg-muted/40 py-24 px-6"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-xs font-body font-semibold tracking-widest uppercase text-primary mb-3 block">
            Certifications
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
            Credentials & Courses
          </h2>
          <div className="mt-4 w-12 h-1 rounded-full bg-gradient-to-r from-primary to-accent mx-auto" />
        </div>

        <div ref={ref} className="flex justify-center">
          {CERTS.map((cert, idx) => (
            <div
              key={cert.title}
              data-ocid={`certifications.item.${idx + 1}`}
              className="bg-card border border-border rounded-xl overflow-hidden shadow-elevated max-w-md w-full hover:shadow-hover hover:-translate-y-1 transition-smooth"
            >
              <div className="h-1 bg-gradient-to-r from-primary to-accent" />
              <div className="p-8 flex gap-5 items-start">
                {/* Badge */}
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-elevated">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <div>
                  <span className="text-xs font-body font-bold text-primary uppercase tracking-wider">
                    {cert.issuer}
                  </span>
                  <h3 className="font-display text-lg font-bold text-foreground mt-1 mb-2">
                    {cert.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {cert.description}
                  </p>
                  <div className="mt-4">
                    <span className="inline-block text-xs font-body font-semibold bg-primary/10 text-primary px-3 py-1 rounded-full border border-primary/20">
                      {cert.badge} Certified
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
