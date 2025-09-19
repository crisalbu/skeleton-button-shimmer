import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "border border-[hsl(var(--btn-primary-border))] bg-[hsl(var(--btn-primary-bg))] text-[hsl(var(--btn-primary-text))] hover:opacity-90",
        destructive: "border border-[hsl(var(--btn-danger-border)/0.1)] bg-[hsl(var(--btn-danger-bg)/0.1)] text-[hsl(var(--btn-danger-text))] hover:border-[hsl(var(--btn-danger-border)/0.05)] hover:bg-[hsl(var(--btn-danger-bg)/0.3)]",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "border border-[hsl(var(--btn-secondary-border))] bg-transparent text-[hsl(var(--btn-secondary-text))] hover:border-[hsl(var(--btn-secondary-border-active))] hover:bg-[hsl(var(--btn-secondary-bg-active))]",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-8 min-w-16 px-4 py-1 gap-2 rounded",
        sm: "h-7 min-w-14 px-3 py-1 gap-1.5 rounded text-xs",
        lg: "h-9 min-w-20 px-6 py-1.5 gap-2.5 rounded text-base",
        icon: "h-8 w-8 rounded",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

const skeletonVariants = cva(
  "relative overflow-hidden bg-skeleton animate-shimmer",
  {
    variants: {
      size: {
        default: "h-8 min-w-16 px-4 py-1",
        sm: "h-7 min-w-14 px-3 py-1",
        lg: "h-9 min-w-20 px-6 py-1.5",
        icon: "h-8 w-8",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, loading = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    
    if (loading) {
      return (
        <div 
          className={cn(
            buttonVariants({ variant, size }),
            "relative pointer-events-none opacity-60"
          )}
        >
          <div 
            className={cn(
              skeletonVariants({ size }),
              "absolute inset-0 rounded"
            )}
            style={{
              background: "linear-gradient(90deg, hsl(var(--skeleton)) 0%, hsl(var(--skeleton-shine) / 0.8) 50%, hsl(var(--skeleton)) 100%)",
              backgroundSize: "200px 100%",
              backgroundRepeat: "no-repeat"
            }}
          />
          <span className="relative z-10 text-skeleton-foreground/70">{children}</span>
        </div>
      );
    }
    
    return (
      <Comp 
        className={cn(buttonVariants({ variant, size, className }))} 
        ref={ref} 
        {...props}
      >
        {children}
      </Comp>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };