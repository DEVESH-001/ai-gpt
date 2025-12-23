// https://magicui.design/docs/components/grid-pattern
import { GridPattern } from "@/components/ui/grid-pattern";
import { cn } from "@/lib/utils";
import {
  Cpu,
  Fingerprint,
  Pencil,
  Settings2,
  Sparkles,
  Zap,
} from "lucide-react";

export function FeatureSection() {
  return (
    <div className="mx-auto w-full max-w-5xl space-y-8">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-balance font-medium text-2xl md:text-4xl lg:text-5xl">
          Powerful features to supercharge your workflow.
        </h2>
        <p className="mt-4 text-balance text-muted-foreground text-sm md:text-base">
          Designed to help you work smarter, faster, and more efficiently.
        </p>
      </div>
      <div className="overflow-hidden rounded-lg border">
        <div className="grid grid-cols-1 gap-px bg-border sm:grid-cols-2 md:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard feature={feature} key={feature.title} />
          ))}
        </div>
      </div>
    </div>
  );
}

export function FeatureCard({ feature, className, ...props }) {
  return (
    <div
      className={cn("relative overflow-hidden bg-background p-6", className)}
      {...props}
    >
      <div className="-mt-2 -ml-20 mask-[radial-gradient(farthest-side_at_top,white,transparent)] pointer-events-none absolute top-0 left-1/2 size-full">
        <GridPattern
          className="absolute inset-0 size-full stroke-foreground/20"
          height={40}
          width={40}
          x={5}
        />
      </div>
      <feature.icon
        aria-hidden
        className="size-6 text-foreground/75"
        strokeWidth={1}
      />
      <h3 className="mt-10 text-sm md:text-base">{feature.title}</h3>
      <p className="relative z-20 mt-2 font-light text-muted-foreground text-xs">
        {feature.description}
      </p>
    </div>
  );
}

const features = [
  {
    title: "Faaast",
    icon: Zap,
    description: "It supports an entire helping developers and innovate.",
  },
  {
    title: "Powerful",
    icon: Sparkles,
    description: "It supports an entire helping developers and businesses.",
  },
  {
    title: "Instant Model Switching",
    icon: Cpu,
    description:
      "Switch between AI models mid-conversation. Compare responses and find the best answer for your question.",
  },
  {
    title: "Customizable",
    icon: Pencil,
    description:
      "No API keys needed. No complex setup. Just open Vion and start chatting with any AI model instantly.",
  },
  {
    title: "Control",
    icon: Settings2,
    description: "It supports helping developers and businesses innovate.",
  },
  {
    title: "Completely Free",
    icon: Sparkles,
    description:
      "Built on OpenRouter's open-source infrastructure. No subscriptions, no hidden fees, no credit card required.",
  },
];
