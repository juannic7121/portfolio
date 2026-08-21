import { Mail, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { contact, projectTypes, socialLinks } from "@/data/site";

export function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Contact"
            title={
              <>
                Ready to <span className="gradient-text">start?</span>
              </>
            }
            description="Send a short brief or email me directly. I usually reply within a day."
          />
        </Reveal>

        <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-2">
          <Reveal className="h-full">
            <div className="glass-card flex h-full flex-col p-6 sm:p-8">
              <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold">
                Let&apos;s start a conversation
              </h3>
              <p className="mt-3 text-muted-foreground">
                I respond to every serious inquiry within 24 hours. Projects of
                all sizes welcome.
              </p>

              <div className="mt-8 flex flex-1 flex-col">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  Common project types
                </p>
                <div className="mt-3 flex flex-wrap content-start gap-2">
                  {projectTypes.map((type) => (
                    <span key={type} className="skill-badge">
                      {type}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal className="h-full" delay={0.09}>
            <div className="flex h-full flex-col gap-4">
              <div className="glass-card flex flex-1 flex-col justify-center space-y-5 p-6 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
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
                  href={`tel:+${contact.phone.replace(/\D/g, "")}`}
                />
              </div>

              <div className="glass-card flex flex-1 flex-col justify-center p-6 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  Find me online
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {socialLinks.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline !px-4 !py-2"
                      >
                        {link.label === "GitHub"
                          ? "GitHub · juannic7121"
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
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
        {icon}
      </span>
      <div>
        <p className="text-xs text-muted-foreground">{label}</p>
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
