import Card from "@/components/ui/Card";
import { RECOMMENDED_JOBS } from "@/constants/mockData";
import { MapPin, Monitor, Star, ArrowRight } from "lucide-react";

export default function RecommendedJobs() {
  return (
    <Card padding="md">
      <h2 className="text-lg font-semibold mb-1">Recommended Jobs</h2>
      <p className="text-2xs text-text-muted uppercase font-semibold tracking-wider mb-3">
        Today
      </p>

      <div className="space-y-4">
        {RECOMMENDED_JOBS.map((job) => (
          <div
            key={job.id}
            className="flex items-start gap-3 group cursor-pointer"
          >
            <div className="shrink-0 mt-0.5">
              <div className="flex -space-x-1">
                <span className="h-4 w-4 rounded-full bg-coral" />
                <span className="h-4 w-4 rounded-full bg-success" />
                <span className="h-4 w-4 rounded-full bg-primary" />
              </div>
            </div>

            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold group-hover:text-primary transition-colors truncate">
                {job.title}
              </p>
              <p className="text-xs text-text-muted truncate">{job.company}</p>
              <div className="flex items-center gap-2 mt-1 flex-wrap">
                <span className="inline-flex items-center gap-0.5 text-2xs text-text-secondary">
                  <Star className="h-3 w-3 fill-warning text-warning" />
                  {job.rating} Trusted
                </span>
                <span className="inline-flex items-center gap-0.5 text-2xs text-text-secondary">
                  <MapPin className="h-3 w-3" />
                  {job.location}
                </span>
                <span className="inline-flex items-center gap-0.5 text-2xs text-text-secondary">
                  <Monitor className="h-3 w-3" />
                  {job.type}
                </span>
              </div>
            </div>

            <span className="text-2xs text-text-muted shrink-0 mt-1">
              {job.postedAgo}
            </span>
          </div>
        ))}
      </div>

      <button className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-text-primary hover:text-primary transition-colors w-full justify-center">
        View all posts
        <ArrowRight className="h-4 w-4" />
      </button>
    </Card>
  );
}
