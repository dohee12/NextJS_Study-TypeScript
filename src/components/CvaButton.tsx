import { cn } from "../../lib/style/util";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  ["flex rounded-xl px-4 py-2 text-white font-semibold"],
  {
    variants: {
      variant: {
        solid: ["bg-blue-500"],
        surface: ["border-1 border-blue-300 bg-blue-50 text-blue-500"],
        outline: ["border-1 border-blue-800 bg-white text-blue-600"],
        soft: ["bg-blue-200 text-blue-600"],
        ghost: ["text-blue-600"],
      },
      size: {
        1: ["text-sm p-1"],
        2: ["px-2 py-1 text-base"],
        3: ["px-4 py-2 text-lg"],
        4: ["pa-5 -y03 text-3xl"],
      },
    },
    defaultVariants: {
      variant: "ghost",
      size: 2,
    },
  }
);

export default function CvaButton({
  variant,
  size,
  ...props
}: VariantProps<typeof buttonVariants>) {
  return (
    <button
      className={cn(buttonVariants({ variant, size }))}
      {...props}
    ></button>
  );
}
