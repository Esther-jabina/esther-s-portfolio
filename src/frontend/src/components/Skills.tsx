import { useEffect, useRef } from "react";

const SKILLS = [
  { name: "HTML5", emoji: "🌐", desc: "Semantic markup & structure" },
  { name: "CSS3", emoji: "🎨", desc: "Responsive styling & design" },
  { name: "Java", emoji: "☕", desc: "Object-oriented programming" },
  { name: "SQL", emoji: "🗄️", desc: "Database queries & design" },
  { name: "Manual Testing", emoji: "🧪", desc: "QA & test case execution" },
  { name: "WordPress", emoji: "📝", desc: "CMS & theme customization" },
];

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const children = el.querySelectorAll<HTMLElement>("[data-skill]");
          let i = 0;
          for (const child of Array.from(children)) {
            child.style.transitionDelay = `${i * 80}ms`;
            child.classList.add("animate-fadeInUp");
            child.style.opacity = "1";
            i++;
          }
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    for (const child of Array.from(
      el.querySelectorAll<HTMLElement>("[data-skill]"),
    )) {
      child.style.opacity = "0";
    }
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      data-ocid="skills.section"
      className="bg-muted/40 py-24 px-6"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-xs font-body font-semibold tracking-widest uppercase text-primary mb-3 block">
            Technical Skills
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
            What I Work With
          </h2>
          <div className="mt-4 w-12 h-1 rounded-full bg-gradient-to-r from-primary to-accent mx-auto" />
        </div>

        <div ref={ref} className="grid grid-cols-2 sm:grid-cols-3 gap-5">
          {SKILLS.map((skill, idx) => (
            <div
              key={skill.name}
              data-skill
              data-ocid={`skills.item.${idx + 1}`}
              className="bg-card border border-border rounded-xl p-6 shadow-xs hover:shadow-hover hover:-translate-y-1 transition-smooth cursor-default group"
            >
              <span className="text-3xl mb-3 block">{skill.emoji}</span>
              <h3 className="font-display font-semibold text-base text-foreground group-hover:text-primary transition-colors duration-200 mb-1">
                {skill.name}
              </h3>
              <p className="text-xs font-body text-muted-foreground leading-relaxed">
                {skill.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
