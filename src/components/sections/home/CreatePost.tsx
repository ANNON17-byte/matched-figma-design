import Avatar from "@/components/ui/Avatar";
import Card from "@/components/ui/Card";
import { CURRENT_USER } from "@/constants/mockData";
import { PenLine } from "lucide-react";

export default function CreatePost() {
  return (
    <Card padding="md">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold">Create a Post</h3>
        <button className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors" aria-label="Write post">
          <PenLine className="h-4 w-4 text-text-secondary" />
        </button>
      </div>
      <div className="flex items-center gap-3">
        <Avatar src={CURRENT_USER.avatar} alt={CURRENT_USER.name} size="sm" />
        <div className="flex-1 h-9 px-4 rounded-full border border-border bg-gray-50 flex items-center cursor-text">
          <span className="text-sm text-text-muted">What&apos;s on your mind?</span>
        </div>
      </div>
    </Card>
  );
}
