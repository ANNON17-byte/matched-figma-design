import PageLayout from "@/components/layout/PageLayout";
import WelcomeHeader from "@/components/sections/dashboard/WelcomeHeader";
import StatsCards from "@/components/sections/dashboard/StatsCards";
import VacancyStats from "@/components/sections/dashboard/VacancyStats";
import JobApplicationTable from "@/components/sections/dashboard/JobApplicationTable";
import RecommendedJobs from "@/components/sections/dashboard/RecommendedJobs";

export const dynamic = "force-dynamic";

export default function DashboardPage() {
  return (
    <PageLayout>
      <div className="grid grid-cols-1 xl:grid-cols-[1fr_300px] gap-4 xl:gap-6 max-w-[1400px] mx-auto">
        <div className="space-y-4 min-w-0">
          <WelcomeHeader />
          <StatsCards />
          <VacancyStats />
          <JobApplicationTable />
        </div>

        <aside className="hidden xl:block">
          <RecommendedJobs />
        </aside>
      </div>
    </PageLayout>
  );
}
