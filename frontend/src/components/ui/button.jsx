import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-base font-bold transition-all duration-150 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-5 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 active:translate-y-1",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground button-shadow hover:bg-primary-hover active:shadow-none",
        destructive:
          "bg-destructive text-destructive-foreground shadow-[0_4px_0_hsl(0_72%_41%)] hover:bg-destructive/90 active:shadow-none",
        outline:
          "border-2 border-border bg-card text-foreground shadow-[0_4px_0_hsl(var(--border))] hover:bg-muted active:shadow-none",
        secondary:
          "bg-secondary text-secondary-foreground button-shadow-secondary hover:bg-secondary/90 active:shadow-none",
        accent:
          "bg-accent text-accent-foreground button-shadow-accent hover:bg-accent/90 active:shadow-none",
        ghost: "hover:bg-muted hover:text-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        success:
          "bg-success text-success-foreground button-shadow hover:bg-success/90 active:shadow-none",
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-10 rounded-lg px-4 text-sm",
        lg: "h-14 rounded-2xl px-8 text-lg",
        xl: "h-16 rounded-2xl px-10 text-xl",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
});
Button.displayName = "Button";

export { Button, buttonVariants };
