import Image from "next/image";
import Card from "@/components/ui/Card";

export default function HirePromo() {
  return (
    <Card padding="md" className="overflow-hidden">
      <h3 className="text-base font-bold text-text-primary mb-1">
        Hire faster with SyncUp!
      </h3>
      <p className="text-xs text-text-secondary mb-3">
        Network without limits and hire like a pro!
      </p>
      <div className="relative rounded-lg overflow-hidden">
        <div className="grid grid-cols-2 gap-1">
          <div className="relative aspect-[4/3] bg-gradient-to-br from-primary-100 to-primary-200 rounded-l-lg overflow-hidden">
            <Image
              src="/promo/team-1.jpg"
              alt="Team collaboration"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[4/3] bg-gradient-to-br from-teal/20 to-primary-100 rounded-r-lg overflow-hidden">
            <Image
              src="/promo/team-2.jpg"
              alt="Team celebration"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="absolute top-2 right-2 bg-primary text-white text-2xs font-bold px-2 py-0.5 rounded">
          30% OFF
        </div>
      </div>
    </Card>
  );
}
