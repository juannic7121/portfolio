"use client";

import { MessageSquare } from "lucide-react";
import { useState } from "react";
import { MessageModal } from "@/components/layout/MessageModal";

export function FloatingWidgets() {
  const [messageOpen, setMessageOpen] = useState(false);

  return (
    <>
      <div className="pointer-events-none fixed inset-x-0 bottom-5 z-40 flex items-end justify-end gap-3 px-4 sm:bottom-7 sm:px-7">
        <button
          type="button"
          onClick={() => setMessageOpen(true)}
          aria-label="Write a message"
          className="pointer-events-auto flex h-12 w-12 items-center justify-center border border-foreground bg-foreground text-background transition hover:bg-primary hover:border-primary hover:text-primary-foreground"
        >
          <MessageSquare size={18} />
        </button>
      </div>

      <MessageModal open={messageOpen} onClose={() => setMessageOpen(false)} />
    </>
  );
}
