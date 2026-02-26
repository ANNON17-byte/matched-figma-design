import SearchInput from "@/components/ui/SearchInput";
import Avatar from "@/components/ui/Avatar";
import { Bell, MessageSquare, PanelLeftClose } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 h-14 bg-surface border-b border-border flex items-center px-4 gap-4 shadow-navbar">
      <div className="flex items-center gap-2 shrink-0">
        <button
          className="p-1.5 rounded-lg text-text-secondary hover:bg-gray-100 transition-colors lg:hidden"
          aria-label="Toggle sidebar"
        >
          <PanelLeftClose className="h-5 w-5" />
        </button>
      </div>

      <div className="flex-1 max-w-xl mx-auto">
        <SearchInput placeholder="Search" />
      </div>

      <div className="flex items-center gap-3 shrink-0">
        <button
          className="p-2 rounded-lg text-text-secondary hover:bg-gray-100 transition-colors relative"
          aria-label="Messages"
        >
          <MessageSquare className="h-5 w-5" />
        </button>
        <button
          className="p-2 rounded-lg text-text-secondary hover:bg-gray-100 transition-colors relative"
          aria-label="Notifications"
        >
          <Bell className="h-5 w-5" />
        </button>
        <button className="flex items-center gap-2" aria-label="User menu">
          <Avatar src="/avatars/minnie.jpg" alt="User" size="sm" />
          <svg
            className="h-3 w-3 text-text-muted"
            fill="none"
            viewBox="0 0 12 12"
          >
            <path
              d="M3 4.5L6 7.5L9 4.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
