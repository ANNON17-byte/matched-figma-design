import Avatar from "@/components/ui/Avatar";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { STORY_USERS } from "@/constants/mockData";
import { MoreHorizontal } from "lucide-react";

export default function SosmedStories() {
  return (
    <Card padding="md">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold">Sosmed Stories</h3>
        <button className="p-1 rounded hover:bg-gray-100 transition-colors" aria-label="More options">
          <MoreHorizontal className="h-4 w-4 text-text-muted" />
        </button>
      </div>

      <div className="space-y-4">
        {STORY_USERS.map((user) => (
          <div key={user.id} className="flex flex-col gap-2">
            <div className="flex items-center gap-2.5">
              <Avatar src={user.avatar} alt={user.name} size="sm" />
              <div className="min-w-0">
                <p className="text-sm font-medium truncate">{user.name}</p>
                <p className="text-xs text-text-muted truncate">{user.role}</p>
              </div>
            </div>
            <div className="flex gap-2 pl-10">
              <Button variant="danger" size="sm" className="text-xs px-4 rounded-full">
                Follow
              </Button>
              <Button variant="outline" size="sm" className="text-xs px-4 rounded-full">
                Message
              </Button>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
