"use client";

import Card from "@/components/ui/Card";
import ToggleSwitch from "@/components/ui/ToggleSwitch";
import { VACANCY_CHART_DATA } from "@/constants/mockData";
import { ChevronDown } from "lucide-react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

interface ChartTooltipProps {
  active?: boolean;
  payload?: Array<{ dataKey: string; value: number }>;
  label?: string;
}

function CustomTooltip({ active, payload }: ChartTooltipProps) {
  if (!active || !payload?.length) return null;

  const appSent = payload.find((p) => p.dataKey === "applicationSent");
  const interviews = payload.find((p) => p.dataKey === "interviews");

  return (
    <div className="bg-navy text-white px-3 py-2 rounded-lg text-xs shadow-lg">
      <p className="text-text-muted text-2xs mb-1">August 22, 2025</p>
      <div className="flex items-center gap-3">
        <span className="flex items-center gap-1">
          <span className="h-2 w-2 rounded-full bg-primary" />
          <strong>{appSent?.value ?? 0}</strong>
          <span className="text-gray-400 text-2xs">Application Sent</span>
        </span>
        <span className="flex items-center gap-1">
          <span className="h-2 w-2 rounded-full bg-success" />
          <strong>{interviews?.value ?? 0}</strong>
          <span className="text-gray-400 text-2xs">Interviews</span>
        </span>
      </div>
    </div>
  );
}

export default function VacancyStats() {
  return (
    <Card padding="lg">
      <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
        <h2 className="text-lg font-semibold">Vacancy Stats</h2>
        <div className="flex items-center gap-4 flex-wrap">
          <ToggleSwitch label="Application Sent" defaultChecked color="bg-primary" />
          <ToggleSwitch label="Interviews" defaultChecked color="bg-success" />
          <ToggleSwitch label="Rejected" color="bg-danger" />
          <button className="inline-flex items-center gap-1 text-sm border border-border rounded-lg px-3 py-1.5 hover:bg-gray-50 transition-colors">
            This Year
            <ChevronDown className="h-3.5 w-3.5 text-text-muted" />
          </button>
        </div>
      </div>

      <div className="h-[280px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={VACANCY_CHART_DATA} margin={{ top: 8, right: 8, bottom: 0, left: -20 }}>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#E5E7EB"
              vertical={false}
            />
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#9CA3AF" }}
              dy={8}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#9CA3AF" }}
              tickFormatter={(v: number) => (v >= 1000 ? `${v / 1000}k` : String(v))}
            />
            <Tooltip content={<CustomTooltip />} />
            <Line
              type="monotone"
              dataKey="applicationSent"
              stroke="#5B2EFF"
              strokeWidth={2.5}
              dot={false}
              activeDot={{ r: 5, fill: "#5B2EFF", stroke: "#fff", strokeWidth: 2 }}
            />
            <Line
              type="monotone"
              dataKey="interviews"
              stroke="#10B981"
              strokeWidth={2.5}
              dot={false}
              activeDot={{ r: 5, fill: "#10B981", stroke: "#fff", strokeWidth: 2 }}
            />
            <Line
              type="monotone"
              dataKey="rejected"
              stroke="#EF4444"
              strokeWidth={2}
              dot={false}
              strokeDasharray="6 3"
              activeDot={{ r: 4, fill: "#EF4444", stroke: "#fff", strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="flex items-center justify-center gap-6 mt-3">
        <span className="flex items-center gap-1.5 text-xs text-text-secondary">
          <span className="h-2 w-2 rounded-full bg-primary" />
          Application Sent
        </span>
        <span className="flex items-center gap-1.5 text-xs text-text-secondary">
          <span className="h-2 w-2 rounded-full bg-success" />
          Interviews
        </span>
        <span className="flex items-center gap-1.5 text-xs text-text-secondary">
          <span className="h-2 w-2 rounded-full bg-danger" />
          Rejected
        </span>
      </div>
    </Card>
  );
}
