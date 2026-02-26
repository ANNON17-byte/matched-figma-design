import Image from "next/image";
import { cn } from "@/lib/utils";

type AvatarSize = "xs" | "sm" | "md" | "lg" | "xl";

interface AvatarProps {
  src?: string;
  alt: string;
  size?: AvatarSize;
  className?: string;
  showStatus?: boolean;
}

const sizeMap: Record<AvatarSize, string> = {
  xs: "h-6 w-6",
  sm: "h-8 w-8",
  md: "h-10 w-10",
  lg: "h-14 w-14",
  xl: "h-20 w-20",
};

const pxMap: Record<AvatarSize, number> = {
  xs: 24,
  sm: 32,
  md: 40,
  lg: 56,
  xl: 80,
};

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

export default function Avatar({
  src,
  alt,
  size = "md",
  className,
  showStatus,
}: AvatarProps) {
  return (
    <div className={cn("relative inline-flex shrink-0", className)}>
      {src ? (
        <Image
          src={src}
          alt={alt}
          width={pxMap[size]}
          height={pxMap[size]}
          className={cn(
            "rounded-full object-cover border-2 border-white",
            sizeMap[size]
          )}
        />
      ) : (
        <div
          className={cn(
            "rounded-full flex items-center justify-center bg-primary-100 text-primary font-semibold border-2 border-white",
            sizeMap[size],
            size === "xs" || size === "sm" ? "text-2xs" : "text-sm"
          )}
          aria-label={alt}
        >
          {getInitials(alt)}
        </div>
      )}
      {showStatus && (
        <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-success border-2 border-white" />
      )}
    </div>
  );
}
