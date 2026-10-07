import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 select-none shadow-none",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary/10 text-primary border border-primary/20",
        secondary:
          "border-transparent bg-secondary/10 text-secondary border border-secondary/20",
        destructive:
          "border-transparent bg-destructive/10 text-destructive border border-destructive/20",
        outline: "text-slate-700 border-slate-300 bg-white",
        success:
          "border-transparent bg-emerald-50 text-emerald-800 border border-emerald-200",
        warning:
          "border-transparent bg-amber-50 text-amber-800 border border-amber-200",
        info:
          "border-transparent bg-blue-50 text-blue-800 border border-blue-200",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
