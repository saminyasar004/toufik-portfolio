import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 dark:focus-visible:ring-neutral-300",
    {
        variants: {
            variant: {
                default:
                    "border border-transparent bg-primary-500 text-text-950 shadow-sm hover:bg-primary-500/80",
                destructive:
                    "border border-transparent bg-red-500 text-neutral-50 shadow-sm hover:bg-red-500/80",
                outline:
                    "border border-primary-500 bg-transparent text-primary-500 shadow-sm hover:bg-primary-500 hover:text-text-950",
                secondary:
                    "border border-transparent bg-secondary-900 text-text-100 shadow-sm hover:bg-secondary-800/80",
                ghost: "border border-transparent bg-transparent hover:bg-secondary-800/70 hover:text-text-100",
                link: "border border-transparent bg-transparent text-text-100 underline-offset-4 hover:underline",
            },
            size: {
                default: "h-12 px-8 py-3 text-base font-semibold",
                sm: "h-9 rounded-md px-4 py-2 text-sm font-medium",
                lg: "h-14 rounded-md px-8 text-lg font-semibold",
                icon: "h-9 w-9",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button";
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button, buttonVariants };
