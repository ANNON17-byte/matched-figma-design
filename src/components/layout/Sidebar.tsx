"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Users,
  Briefcase,
  Settings,
  Target,
  UserPlus,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarItem {
  icon: LucideIcon;
  label: string;
  href: string;
}

const NAV_ITEMS: SidebarItem[] = [
  { icon: Home, label: "Home", href: "/" },
  { icon: Briefcase, label: "Jobs", href: "/dashboard" },
  { icon: Users, label: "Network", href: "/network" },
  { icon: UserPlus, label: "Connections", href: "/connections" },
  { icon: Settings, label: "Settings", href: "/settings" },
  { icon: Target, label: "Goals", href: "/goals" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-[60px] bg-navy flex flex-col items-center py-4 gap-1">
      <Link
        href="/"
        className="flex items-center justify-center w-10 h-10 mb-4"
        aria-label="SyncUp Home"
      >
        <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
          <span className="text-white text-sm font-bold">S</span>
        </div>
      </Link>

      <nav className="flex flex-col items-center gap-1 flex-1" aria-label="Main navigation">
        {NAV_ITEMS.map((item) => {
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "relative flex items-center justify-center w-10 h-10 rounded-xl transition-colors duration-150 group",
                isActive
                  ? "bg-primary text-white"
                  : "text-navy-200 hover:text-white hover:bg-navy-600"
              )}
              aria-label={item.label}
              aria-current={isActive ? "page" : undefined}
            >
              {isActive && (
                <span className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-[14px] w-1 h-6 bg-primary rounded-r-full" />
              )}
              <item.icon className="h-5 w-5" strokeWidth={1.8} />
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
