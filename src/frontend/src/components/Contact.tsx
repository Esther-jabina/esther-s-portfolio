import { Mail, MapPin, Phone } from "lucide-react";
import { useEffect, useRef } from "react";

const CONTACT_ITEMS = [
  {
    icon: <Phone className="h-5 w-5 text-primary" />,
    label: "Phone",
    value: "+91 8248332359",
    href: "tel:+918248332359",
    ocid: "contact.phone_link",
  },
  {
    icon: <Mail className="h-5 w-5 text-primary" />,
    label: "Email",
    value: "esther2003jabina@gmail.com",
    href: "mailto:esther2003jabina@gmail.com",
    ocid: "contact.email_link",
  },
  {
    icon: <MapPin className="h-5 w-5 text-primary" />,
    label: "Location",
    value: "Chennai, Tamil Nadu, India",
    href: "https://maps.google.com/?q=Chennai",
    ocid: "contact.location",
  },
];

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const children = el.querySelectorAll<HTMLElement>("[data-contact]");
          let i = 0;
          for (const child of Array.from(children)) {
            child.style.transitionDelay = `${i * 100}ms`;
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
      el.querySelectorAll<HTMLElement>("[data-contact]"),
    )) {
      c.style.opacity = "0";
    }
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contact"
      data-ocid="contact.section"
      className="bg-background py-24 px-6"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-xs font-body font-semibold tracking-widest uppercase text-primary mb-3 block">
            Contact
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
            Get in Touch
          </h2>
          <div className="mt-4 w-12 h-1 rounded-full bg-gradient-to-r from-primary to-accent mx-auto" />
          <p className="font-body text-muted-foreground mt-5 max-w-xl mx-auto text-sm sm:text-base">
            I'm open to new opportunities and collaborations. Feel free to reach
            out!
          </p>
        </div>

        <div ref={ref} className="grid sm:grid-cols-3 gap-5 max-w-2xl mx-auto">
          {CONTACT_ITEMS.map((item) => {
            const inner = (
              <div
                data-contact
                data-ocid={item.ocid}
                key={item.label}
                className={`bg-card border border-border rounded-xl p-7 flex flex-col items-center text-center shadow-xs transition-smooth group ${
                  item.href
                    ? "hover:shadow-hover hover:-translate-y-1 cursor-pointer hover:border-primary/30"
                    : ""
                }`}
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-200">
                  {item.icon}
                </div>
                <p className="font-body text-xs text-muted-foreground uppercase tracking-wide mb-1.5">
                  {item.label}
                </p>
                <p className="font-display text-sm font-semibold text-foreground group-hover:text-primary transition-colors duration-200 break-all">
                  {item.value}
                </p>
              </div>
            );

            return item.href ? (
              <a
                key={item.label}
                href={item.href}
                className="no-underline"
                style={{ display: "contents" }}
              >
                {inner}
              </a>
            ) : (
              <div key={item.label} style={{ display: "contents" }}>
                {inner}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
