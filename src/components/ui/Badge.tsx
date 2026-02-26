import { cn } from "@/lib/utils";
import type { ApplicationStatus } from "@/types";

type BadgeVariant = "success" | "warning" | "danger" | "info" | "neutral";

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  success: "bg-success-light text-success",
  warning: "bg-warning-light text-warning",
  danger: "bg-danger-light text-danger",
  info: "bg-primary-50 text-primary",
  neutral: "bg-gray-100 text-text-secondary",
};

export default function Badge({
  children,
  variant = "neutral",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}

export function statusToVariant(status: ApplicationStatus): BadgeVariant {
  const map: Record<ApplicationStatus, BadgeVariant> = {
    "In-progress": "warning",
    Applied: "info",
    Offered: "success",
    Rejected: "danger",
    Pending: "neutral",
  };
  return map[status];
}
