import Image from "next/image";
import Card from "@/components/ui/Card";
import Badge, { statusToVariant } from "@/components/ui/Badge";
import ToggleSwitch from "@/components/ui/ToggleSwitch";
import { JOB_APPLICATIONS } from "@/constants/mockData";
import { SlidersHorizontal } from "lucide-react";

export default function JobApplicationTable() {
  return (
    <Card padding="lg">
      <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
        <h2 className="text-lg font-semibold">Job Application Status</h2>
        <div className="flex items-center gap-4 flex-wrap">
          <ToggleSwitch label="New" defaultChecked color="bg-primary" />
          <ToggleSwitch label="In Progress" defaultChecked color="bg-success" />
          <ToggleSwitch label="Pending Task" color="bg-warning" />
          <button className="inline-flex items-center gap-1.5 text-sm border border-border rounded-lg px-3 py-1.5 hover:bg-gray-50 transition-colors">
            Sort By
            <SlidersHorizontal className="h-3.5 w-3.5 text-text-muted" />
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 pr-4 font-medium text-text-secondary">
                Job title
              </th>
              <th className="text-left py-3 pr-4 font-medium text-text-secondary">
                Company
              </th>
              <th className="text-left py-3 pr-4 font-medium text-text-secondary">
                Applied on
              </th>
              <th className="text-left py-3 font-medium text-text-secondary">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {JOB_APPLICATIONS.map((app) => (
              <tr
                key={app.id}
                className="border-b border-border last:border-b-0 hover:bg-gray-50/50 transition-colors"
              >
                <td className="py-3 pr-4 font-medium">{app.title}</td>
                <td className="py-3 pr-4">
                  <div className="flex items-center gap-2">
                    <div className="h-6 w-6 rounded bg-gray-100 flex items-center justify-center overflow-hidden shrink-0">
                      <Image
                        src={app.companyLogo}
                        alt={app.company}
                        width={16}
                        height={16}
                        className="object-contain"
                      />
                    </div>
                    <span>{app.company}</span>
                  </div>
                </td>
                <td className="py-3 pr-4 text-text-secondary">{app.appliedOn}</td>
                <td className="py-3">
                  <Badge variant={statusToVariant(app.status)}>
                    {app.status}
                  </Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
