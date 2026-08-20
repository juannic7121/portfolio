import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { careerGoals, opportunities, whyHire } from "@/data/opportunities";

export function Opportunities() {
  return (
    <section id="opportunities" className="py-24 lg:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Opportunities"
            title={
              <>
                Open to <span className="gradient-text">full-time roles</span>
              </>
            }
            description="Looking for product teams that need an engineer who can start soon — remote, hybrid, or on-site."
          />
        </Reveal>

        <div className="mt-4">
          <span className="inline-flex items-center gap-2 border border-border bg-card px-3 py-1.5 font-[family-name:var(--font-mono)] text-xs font-bold uppercase tracking-[0.12em] text-muted-foreground">
            <span className="h-2 w-2 animate-pulse bg-primary" />
            Available now
          </span>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {opportunities.map((role, index) => (
            <Reveal key={role.id} delay={index * 0.06}>
              <article className="glass-card-hover flex h-full flex-col p-6">
                <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold">
                  {role.title}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground">{role.description}</p>
                <ul className="mt-4 space-y-1 text-sm text-muted-foreground">
                  {role.skills.map((skill) => (
                    <li key={skill}>• {skill}</li>
                  ))}
                </ul>
                <p className="mt-4 text-xs text-muted-foreground">
                  Experience: {role.experience} · Availability: {role.availability}
                </p>
                <p className="mt-2 text-sm text-foreground">{role.note}</p>
                <div className="mt-auto pt-5">
                  <Button href="#contact" variant="outline">
                    Get My Resume <ArrowRight size={16} />
                  </Button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="glass-card p-6 sm:p-8">
              <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold">
                Why hire me?
              </h3>
              <ul className="mt-6 space-y-5">
                {whyHire.map((item) => (
                  <li key={item.title}>
                    <p className="font-semibold text-foreground">{item.title}</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="glass-card p-6 sm:p-8">
              <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold">
                Career goals
              </h3>
              <ul className="mt-6 space-y-5">
                {careerGoals.map((goal) => (
                  <li key={goal.number} className="flex gap-4">
                    <span className="bg-gradient-to-br from-primary to-accent bg-clip-text font-[family-name:var(--font-mono)] text-sm font-bold text-transparent">
                      {goal.number}
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">{goal.title}</p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {goal.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
