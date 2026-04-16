import { Code2, Tag, Utensils } from "lucide-react";
import { useEffect, useRef } from "react";

const PROJECTS = [
  {
    title: "Metro Ticketing System",
    icon: <Code2 className="h-6 w-6 text-primary" />,
    description:
      "A Java-based metro ticketing system that streamlines fare management and passenger experience.",
    tags: ["Java", "OOP", "CLI"],
    features: [
      "Smart balance recharge & top-up",
      "Automated fare calculation",
      "Digital receipt generation",
      "User-friendly interface design",
    ],
  },
  {
    title: "Recipe Collection",
    icon: <Utensils className="h-6 w-6 text-accent" />,
    description:
      "A responsive recipe management app with dynamic filtering, interactive components, and clean CSS design.",
    tags: ["HTML", "CSS", "JavaScript"],
    features: [
      "Responsive UI with modern CSS",
      "Dynamic recipe filtering & search",
      "Add, view & manage recipes",
      "Interactive component animations",
    ],
  },
];

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const children = el.querySelectorAll<HTMLElement>("[data-proj]");
          let i = 0;
          for (const child of Array.from(children)) {
            child.style.transitionDelay = `${i * 150}ms`;
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
      el.querySelectorAll<HTMLElement>("[data-proj]"),
    )) {
      c.style.opacity = "0";
    }
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      data-ocid="projects.section"
      className="bg-background py-24 px-6"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-xs font-body font-semibold tracking-widest uppercase text-primary mb-3 block">
            Portfolio
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
            Featured Projects
          </h2>
          <div className="mt-4 w-12 h-1 rounded-full bg-gradient-to-r from-primary to-accent mx-auto" />
        </div>

        <div ref={ref} className="grid md:grid-cols-2 gap-7">
          {PROJECTS.map((project, idx) => (
            <div
              key={project.title}
              data-proj
              data-ocid={`projects.item.${idx + 1}`}
              className="bg-card border border-border rounded-xl overflow-hidden shadow-xs hover:shadow-hover hover:-translate-y-1.5 transition-smooth group flex flex-col"
            >
              <div className="h-1 bg-gradient-to-r from-primary to-accent" />
              <div className="p-7 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-primary/8 flex items-center justify-center">
                    {project.icon}
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-200">
                    {project.title}
                  </h3>
                </div>

                <p className="font-body text-sm text-foreground/70 leading-relaxed mb-5">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 text-xs font-body font-medium bg-primary/10 text-primary px-2.5 py-0.5 rounded-full"
                    >
                      <Tag className="h-2.5 w-2.5" />
                      {tag}
                    </span>
                  ))}
                </div>

                <ul className="space-y-2 mt-auto">
                  {project.features.map((feat) => (
                    <li
                      key={feat}
                      className="flex items-start gap-2 text-xs font-body text-muted-foreground"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
