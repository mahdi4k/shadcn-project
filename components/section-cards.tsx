
import { Card } from "@/components/ui/card";
import { DollarSign } from "lucide-react";

export function SectionCards() {
  return (
    <div className="grid grid-cols-1 gap-8 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
      <Card className="flex items-center flex-row gap-6 rounded-3xl bg-card px-6 py-8">
        {/* Icon container */}
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-yellow-100">
          <DollarSign className="h-10 w-10 text-yellow-500" />
        </div>

        {/* Text section */}
        <div>
          <div className="text-lg font-medium text-primary/70">My Balance</div>
          <div className="text-4xl font-bold text-foreground">$12,750</div>
        </div>
      </Card>
      <Card className="flex items-center flex-row gap-6 rounded-3xl bg-card px-6 py-8">
        {/* Icon container */}
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-100">
          <DollarSign className="h-10 w-10 text-blue-500" />
        </div>

        {/* Text section */}
        <div>
          <div className="text-lg font-medium text-primary/70">My Balance</div>
          <div className="text-4xl font-bold text-foreground">$12,750</div>
        </div>
      </Card>
      <Card className="flex items-center flex-row gap-6 rounded-3xl bg-card px-6 py-8">
        {/* Icon container */}
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-pink-100">
          <DollarSign className="h-10 w-10 text-pink-500" />
        </div>

        {/* Text section */}
        <div>
          <div className="text-lg font-medium text-primary/70">My Balance</div>
          <div className="text-4xl font-bold text-foreground">$12,750</div>
        </div>
      </Card>
      <Card className="flex items-center flex-row gap-6 rounded-3xl bg-card px-6 py-8">
        {/* Icon container */}
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
          <DollarSign className="h-10 w-10 text-green-500" />
        </div>

        {/* Text section */}
        <div>
          <div className="text-lg font-medium text-primary/70">My Balance</div>
          <div className="text-4xl font-bold text-foreground">$12,750</div>
        </div>
      </Card>
    </div>
  );
}
