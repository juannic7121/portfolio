"use client";

import { Send, X } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";
import { contact, site } from "@/data/site";
import { cn } from "@/lib/utils";

type MessageModalProps = {
  open: boolean;
  onClose: () => void;
};

export function MessageModal({ open, onClose }: MessageModalProps) {
  const titleId = useId();
  const nameRef = useRef<HTMLInputElement>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);

  useEffect(() => {
    if (!open) return;

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const timer = window.setTimeout(() => nameRef.current?.focus(), 40);

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previous;
      window.clearTimeout(timer);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    setSending(true);
    const subject = encodeURIComponent(`Message from ${name.trim()} — ${site.brand}`);
    const body = encodeURIComponent(
      `${message.trim()}\n\n—\nFrom: ${name.trim()}\nEmail: ${email.trim()}`,
    );
    window.location.href = `mailto:${contact.inboxEmail}?subject=${subject}&body=${body}`;
    setSending(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center p-4 sm:items-center"
      role="presentation"
    >
      <button
        type="button"
        aria-label="Close message dialog"
        className="absolute inset-0 bg-background/70 backdrop-blur-sm"
        onClick={onClose}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative z-10 w-full max-w-md overflow-hidden rounded-[calc(var(--radius)+4px)] border border-border/70 bg-card shadow-[0_28px_80px_-28px_rgba(0,0,0,0.75)]"
      >
        <div className="flex items-start justify-between gap-4 border-b border-border/60 px-5 py-4">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-accent">
              New message
            </p>
            <h2
              id={titleId}
              className="mt-1 font-[family-name:var(--font-display)] text-xl font-semibold tracking-tight"
            >
              Send me a message
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-md p-2 text-muted-foreground transition hover:bg-secondary hover:text-foreground"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 px-5 py-5">
          <Field label="Name">
            <input
              ref={nameRef}
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className={fieldClass}
            />
          </Field>
          <Field label="Email">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              className={fieldClass}
            />
          </Field>
          <Field label="Message">
            <textarea
              required
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell me about your project…"
              className={cn(fieldClass, "resize-none")}
            />
          </Field>

          <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
            <p className="text-xs text-muted-foreground">
              Opens your email app to send to {contact.inboxEmail}
            </p>
            <button
              type="submit"
              disabled={sending}
              className="btn-primary !px-4 !py-2.5"
            >
              Send message <Send size={15} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
        {label}
      </span>
      {children}
    </label>
  );
}

const fieldClass =
  "w-full rounded-[var(--radius)] border border-border/70 bg-secondary/60 px-3.5 py-2.5 text-sm text-foreground outline-none transition placeholder:text-muted-foreground/70 focus:border-primary/50 focus:ring-2 focus:ring-primary/20";
