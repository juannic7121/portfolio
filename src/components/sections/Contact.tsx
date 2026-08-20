import { Mail, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { contact, projectTypes, site, socialLinks } from "@/data/site";

export function Contact() {
  return (
    <section id="contact" className="py-28 lg:py-36">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Contact"
            title={
              <>
                Let&apos;s build something{" "}
                <span className="gradient-text">worth shipping</span>
              </>
            }
            description="Share a short brief. I reply within 24 hours with next steps and availability."
          />
        </Reveal>

        <div className="mt-14 grid items-stretch gap-5 lg:grid-cols-2">
          <Reveal className="h-full">
            <div className="glass-card flex h-full flex-col p-7 sm:p-9">
              <h3 className="font-[family-name:var(--font-display)] text-3xl tracking-tight">
                Start a conversation
              </h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Serious inquiries get a thoughtful reply — scope questions,
                timeline, and whether I&apos;m the right fit.
              </p>

              <div className="mt-10 flex flex-1 flex-col">
                <p className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
                  Common project types
                </p>
                <div className="mt-4 flex flex-wrap content-start gap-2">
                  {projectTypes.map((type) => (
                    <span key={type} className="skill-badge">
                      {type}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal className="h-full" delay={0.08}>
            <div className="flex h-full flex-col gap-4">
              <div className="glass-card flex flex-1 flex-col justify-center space-y-5 p-7 sm:p-9">
                <p className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
                  Direct contact
                </p>
                <ContactRow
                  icon={<Mail size={16} />}
                  label="Email"
                  value={contact.email}
                  href={`mailto:${contact.email}`}
                />
                <ContactRow
                  icon={<Phone size={16} />}
                  label="Phone"
                  value={contact.phone}
                  href={`tel:${contact.phone.replace(/\D/g, "")}`}
                />
              </div>

              <div className="glass-card flex flex-1 flex-col justify-center p-7 sm:p-9">
                <p className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
                  Online
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {socialLinks.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        {...(link.href.startsWith("http")
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                        className="btn-outline !px-4 !py-2"
                      >
                        {link.label === "GitHub"
                          ? `GitHub · ${site.github}`
                          : link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-center gap-3">
      <span className="flex h-10 w-10 items-center justify-center border border-border text-primary">
        {icon}
      </span>
      <div>
        <p className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.14em] text-muted-foreground uppercase">
          {label}
        </p>
        <p className="text-sm text-foreground">{value}</p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block transition hover:opacity-80">
        {content}
      </a>
    );
  }

  return content;
}
