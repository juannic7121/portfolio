import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "ghost";
  className?: string;
  external?: boolean;
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  external,
}: ButtonProps) {
  return (
    <a
      href={href}
      className={cn(
        variant === "primary" && "btn-primary",
        variant === "outline" && "btn-outline",
        variant === "ghost" &&
          "inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground underline-offset-4 transition hover:text-foreground hover:underline",
        className,
      )}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : undefined)}
    >
      {children}
    </a>
  );
}
