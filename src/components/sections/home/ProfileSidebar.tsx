import Avatar from "@/components/ui/Avatar";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import ProgressBar from "@/components/ui/ProgressBar";
import { CURRENT_USER, CONNECTIONS_CHART_DATA } from "@/constants/mockData";
import { Pencil } from "lucide-react";

export default function ProfileSidebar() {
  return (
    <div className="space-y-4">
      <Card className="flex flex-col items-center text-center" padding="lg">
        <Avatar src={CURRENT_USER.avatar} alt={CURRENT_USER.name} size="xl" />
        <h2 className="mt-3 text-lg font-semibold text-primary">
          {CURRENT_USER.name}
        </h2>
        <p className="text-sm text-text-secondary">{CURRENT_USER.role}</p>

        <div className="w-full mt-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-text-secondary">
              {CURRENT_USER.profileCompletion}% Completed
            </span>
            <button className="inline-flex items-center gap-1 text-xs text-primary hover:underline">
              <Pencil className="h-3 w-3" />
              Update profile
            </button>
          </div>
          <ProgressBar value={CURRENT_USER.profileCompletion ?? 0} />
        </div>

        <div className="flex gap-2 mt-4 w-full">
          <Button variant="outline" size="sm" className="flex-1 text-xs">
            View Full Profile
          </Button>
          <Button variant="outline" size="sm" className="flex-1 text-xs">
            Share Profile
          </Button>
        </div>
      </Card>

      <Card padding="md">
        <h3 className="text-sm font-semibold mb-3">Analytics</h3>
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-text-secondary">Connections</span>
        </div>
        <div className="h-24 bg-gradient-to-br from-primary-50 to-teal/10 rounded-lg flex items-end p-3 gap-1 relative overflow-hidden">
          <svg
            viewBox="0 0 200 80"
            className="w-full h-full absolute inset-0"
            preserveAspectRatio="none"
          >
            <polyline
              points="0,60 50,40 100,50 150,20 200,30"
              fill="none"
              stroke="#5B2EFF"
              strokeWidth="2"
              opacity="0.6"
            />
            <polyline
              points="0,70 50,55 100,45 150,35 200,15"
              fill="none"
              stroke="#2DD4BF"
              strokeWidth="2"
              opacity="0.6"
            />
            <polyline
              points="0,50 50,60 100,35 150,45 200,25"
              fill="none"
              stroke="#9675FF"
              strokeWidth="1.5"
              opacity="0.3"
            />
          </svg>
          <div className="absolute top-2 left-3">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-primary rounded text-white text-2xs font-medium">
              <span className="h-1.5 w-1.5 bg-white rounded-full" />
              Analytics
            </span>
          </div>
          <div className="absolute bottom-1 left-0 right-0 flex justify-between px-3">
            {CONNECTIONS_CHART_DATA.map((d) => (
              <span key={d.month} className="text-2xs text-text-muted">
                {d.month}
              </span>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
}
