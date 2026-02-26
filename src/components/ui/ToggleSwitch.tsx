"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";

interface ToggleSwitchProps {
  label?: string;
  defaultChecked?: boolean;
  color?: string;
  onChange?: (checked: boolean) => void;
  className?: string;
}

export default function ToggleSwitch({
  label,
  defaultChecked = false,
  color = "bg-primary",
  onChange,
  className,
}: ToggleSwitchProps) {
  const [checked, setChecked] = useState(defaultChecked);

  const handleToggle = () => {
    const next = !checked;
    setChecked(next);
    onChange?.(next);
  };

  return (
    <label className={cn("inline-flex items-center gap-2 cursor-pointer", className)}>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={handleToggle}
        className={cn(
          "relative inline-flex h-5 w-9 shrink-0 items-center rounded-full transition-colors duration-200",
          checked ? color : "bg-gray-300"
        )}
      >
        <span
          className={cn(
            "inline-block h-3.5 w-3.5 rounded-full bg-white shadow-sm transition-transform duration-200",
            checked ? "translate-x-[18px]" : "translate-x-[3px]"
          )}
        />
      </button>
      {label && <span className="text-sm text-text-primary">{label}</span>}
    </label>
  );
}
