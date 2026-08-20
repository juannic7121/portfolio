import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { caseStudies } from "@/data/case-studies";

export function CaseStudies() {
  return (
    <section id="case-studies" className="py-24 lg:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Case Studies"
            title={
              <>
                Real problems. <span className="gradient-text">Real results.</span>
              </>
            }
            description="Deep dives into flagship transformations — challenge, solution, and measurable outcome."
          />
        </Reveal>

        <div className="mt-14 space-y-8">
          {caseStudies.map((study, index) => (
            <Reveal key={study.id} delay={index * 0.08}>
              <article className="glass-card overflow-hidden">
                <div className="h-0.5 w-full bg-gradient-to-r from-primary to-accent" />
                <div className="grid gap-8 p-6 lg:grid-cols-[140px_1fr] lg:p-8">
                  <div>
                    <p className="bg-gradient-to-br from-primary to-accent bg-clip-text font-[family-name:var(--font-display)] text-5xl font-bold italic text-transparent opacity-80">
                      {study.number}
                    </p>
                    <p className="mt-3 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                      {study.industry}
                    </p>
                  </div>

                  <div>
                    <h3 className="font-[family-name:var(--font-display)] text-3xl font-bold">
                      {study.title}
                    </h3>
                    <p className="mt-2 text-muted-foreground">{study.subtitle}</p>
                    <p className="mt-3 text-sm text-muted-foreground">
                      {study.duration} · {study.team} · {study.audience}
                    </p>

                    <div className="mt-6 grid gap-5 md:grid-cols-3">
                      <Block label="Challenge" text={study.challenge} />
                      <Block label="Solution" text={study.solution} />
                      <Block label="Outcome" text={study.outcome} />
                    </div>

                    <dl className="mt-6 grid grid-cols-3 gap-4">
                      {study.metrics.map((metric) => (
                        <div key={metric.label} className="rounded-2xl border border-border/40 bg-secondary/40 p-3">
                          <dt className="text-xs text-muted-foreground">{metric.label}</dt>
                          <dd className="stat-number mt-1 text-xl">{metric.value}</dd>
                        </div>
                      ))}
                    </dl>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {study.tags.map((tag) => (
                        <span key={tag} className="skill-badge">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="glass-card mt-12 flex flex-col items-start justify-between gap-4 p-6 sm:flex-row sm:items-center">
            <p className="text-muted-foreground">
              Ready for a similar transformation on your product or ops stack?
            </p>
            <Button href="#contact">
              Start Your Project <ArrowRight size={16} />
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

function Block({ label, text }: { label: string; text: string }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
        {label}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
    </div>
  );
}
