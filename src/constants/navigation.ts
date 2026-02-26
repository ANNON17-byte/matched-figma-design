import type { NavItem } from "@/types";

export const SIDEBAR_NAV_ITEMS: NavItem[] = [
  { icon: "Home", label: "Home", href: "/", isActive: true },
  { icon: "Users", label: "Network", href: "/network" },
  { icon: "Briefcase", label: "Jobs", href: "/dashboard" },
  { icon: "Settings", label: "Settings", href: "/settings" },
  { icon: "Target", label: "Goals", href: "/goals" },
];

export const DASHBOARD_NAV_ITEMS: NavItem[] = [
  { icon: "Home", label: "Home", href: "/" },
  { icon: "Briefcase", label: "Jobs", href: "/dashboard", isActive: true },
  { icon: "Users", label: "Network", href: "/network" },
  { icon: "UserPlus", label: "Connections", href: "/connections" },
];
