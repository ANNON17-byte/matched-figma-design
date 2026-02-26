import Card from "@/components/ui/Card";
import { JOB_STATS } from "@/constants/mockData";
import { TrendingUp } from "lucide-react";

function MiniBarChart() {
  const bars = [14, 22, 18, 28, 20, 26, 16];
  const maxH = 28;

  return (
    <svg width="56" height="32" viewBox="0 0 56 32" className="shrink-0">
      {bars.map((h, i) => (
        <rect
          key={i}
          x={i * 8}
          y={maxH - h}
          width="5"
          height={h}
          rx="1.5"
          className={
            h === Math.max(...bars) ? "fill-primary" : "fill-primary/20"
          }
        />
      ))}
    </svg>
  );
}

export default function StatsCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
      {JOB_STATS.map((stat) => (
        <Card key={stat.label} padding="lg" className="flex items-start justify-between">
          <div>
            <p className="text-sm text-text-secondary font-medium">{stat.label}</p>
            <p className="text-3xl font-bold text-navy mt-1">
              {String(stat.count).padStart(2, "0")}
            </p>
            <p className="text-xs text-text-muted mt-1.5 flex items-center gap-1">
              <TrendingUp className="h-3 w-3 text-success" />
              {stat.change}
            </p>
          </div>
          <MiniBarChart />
        </Card>
      ))}
    </div>
  );
}
