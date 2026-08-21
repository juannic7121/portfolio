"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqItems } from "@/data/faq";
import { cn } from "@/lib/utils";

export function FAQ() {
  const [openId, setOpenId] = useState(faqItems[0]?.id ?? "");

  return (
    <section id="faq" className="py-24 lg:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="FAQ"
            title={
              <>
                Common <span className="gradient-text">questions</span>
              </>
            }
            description="Quick answers before we start working together."
          />
        </Reveal>

        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          {faqItems.map((item, index) => {
            const open = openId === item.id;
            return (
              <Reveal key={item.id} delay={index * 0.04}>
                <div className="glass-card overflow-hidden">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 p-5 text-left"
                    aria-expanded={open}
                    onClick={() => setOpenId(open ? "" : item.id)}
                  >
                    <span className="font-semibold text-foreground">
                      {item.question}
                    </span>
                    <ChevronDown
                      size={18}
                      className={cn(
                        "shrink-0 text-muted-foreground transition duration-300",
                        open && "rotate-180 text-primary",
                      )}
                    />
                  </button>
                  <div
                    className={cn(
                      "grid transition-[grid-template-rows] duration-300",
                      open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
