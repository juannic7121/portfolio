"use client";

import { MessageSquare } from "lucide-react";
import { useState } from "react";
import { MessageModal } from "@/components/layout/MessageModal";

export function FloatingWidgets() {
  const [messageOpen, setMessageOpen] = useState(false);

  return (
    <>
      <div className="pointer-events-none fixed inset-x-0 bottom-4 z-40 flex items-end justify-end gap-3 px-4 sm:bottom-6 sm:px-6">
        <div className="relative">
          <span
            aria-hidden
            className="absolute inset-0 animate-ping rounded-full bg-primary/25"
          />
          <button
            type="button"
            onClick={() => setMessageOpen(true)}
            aria-label="Write a message"
            className="pointer-events-auto relative flex h-14 w-14 items-center justify-center rounded-full border border-primary/30 bg-card/95 text-primary shadow-lg backdrop-blur-md transition hover:translate-y-[-2px] hover:border-primary/55 hover:bg-primary hover:text-primary-foreground"
          >
            <MessageSquare size={22} />
          </button>
        </div>
      </div>

      <MessageModal open={messageOpen} onClose={() => setMessageOpen(false)} />
    </>
  );
}
