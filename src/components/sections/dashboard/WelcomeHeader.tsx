import Button from "@/components/ui/Button";
import { ChevronDown } from "lucide-react";

export default function WelcomeHeader() {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div>
        <h1 className="text-2xl font-bold text-text-primary">
          Welcome back, Julie <span role="img" aria-label="wave">&#x1F44B;</span>
        </h1>
        <p className="text-sm text-text-secondary mt-0.5">
          Here&apos;s what you need to focus on today
        </p>
      </div>
      <div className="flex items-center gap-3">
        <button className="inline-flex items-center gap-1.5 px-4 py-2 text-sm border border-border rounded-lg hover:bg-gray-50 transition-colors">
          Last 30 Days
          <ChevronDown className="h-4 w-4 text-text-muted" />
        </button>
        <Button>Search Job</Button>
      </div>
    </div>
  );
}
