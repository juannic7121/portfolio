import { Container } from "@/components/ui/Container";
import { contact, navLinks, site, socialLinks } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <Container className="grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="brand-name text-3xl sm:text-4xl">
            {site.firstName}{" "}
            <span className="name-accent">{site.accentName}</span>
          </p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            {site.summary}
          </p>
        </div>

        <div>
          <p className="mb-4 font-[family-name:var(--font-mono)] text-[10px] tracking-[0.22em] text-muted-foreground uppercase">
            Navigate
          </p>
          <ul className="space-y-2.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-muted-foreground transition hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-4 font-[family-name:var(--font-mono)] text-[10px] tracking-[0.22em] text-muted-foreground uppercase">
            Contact
          </p>
          <ul className="space-y-2.5">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground transition hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={`mailto:${contact.email}`}
                className="text-sm text-muted-foreground transition hover:text-foreground"
              >
                {contact.email}
              </a>
            </li>
            <li>
              <a
                href={`tel:${contact.phone}`}
                className="text-sm text-muted-foreground transition hover:text-foreground"
              >
                {contact.phone}
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-border">
        <Container className="flex flex-col gap-2 py-6 font-[family-name:var(--font-mono)] text-[10px] tracking-[0.16em] text-muted-foreground uppercase sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}
          </p>
          <p>Web · AI · Mobile · 8+ years</p>
        </Container>
      </div>
    </footer>
  );
}
