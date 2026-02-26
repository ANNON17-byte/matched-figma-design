import Image from "next/image";
import Card from "@/components/ui/Card";
import { Star } from "lucide-react";
import { SUGGESTION_COURSES } from "@/constants/mockData";

export default function Suggestions() {
  return (
    <Card padding="md">
      <h3 className="text-lg font-bold text-primary mb-1">Suggestions</h3>
      <p className="text-xs text-text-secondary mb-3">
        Below courses are suggested based on your current skills &amp; curated to
        help you stay updated with the current market trends.
      </p>
      <div className="space-y-3">
        {SUGGESTION_COURSES.map((course) => (
          <div key={course.id} className="rounded-lg overflow-hidden">
            <div className="relative aspect-[16/10] bg-gradient-to-br from-primary-50 to-teal/10 overflow-hidden">
              <Image
                src={course.image}
                alt={course.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="pt-2 flex items-start justify-between">
              <div>
                <p className="text-sm font-semibold">{course.title}</p>
                <p className="text-xs text-text-muted">{course.instructor}</p>
              </div>
              <div className="flex items-center gap-0.5">
                <Star className="h-3 w-3 fill-warning text-warning" />
                <span className="text-xs font-medium">{course.rating}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
