import { ReactNode } from "react";
import { cn } from "../../lib/style/util";

interface ButtonProps {
  variant: "solid" | "surface" | "outline" | "soft" | "ghost";
  size?: "1" | "2" | "3" | "4";
  children: ReactNode;
}

export default function Button({ variant, size = "1", children }: ButtonProps) {
  return (
    <button
      className={cn(`flex rounded-xl px-4 py-2 text-white font-semibold 
        ${variant === "solid" ? "bg-blue-500" : ""}
        ${variant === "soft" ? "bg-blue-200 text-blue-600" : ""}
        ${
          variant === "surface"
            ? "border-1 border-blue-300 bg-blue-50 text-blue-500"
            : ""
        }
        ${
          variant === "outline"
            ? "border-1 border-blue-800 bg-white text-blue-600"
            : ""
        }
        ${variant === "ghost" ? "text-blue-600" : ""}
        ${size === "1" ? "text-sm p-1" : ""}
        ${size === "2" ? "px-2 py-1 text-base" : ""}
        ${size === "3" ? "px-4 py-2 text-lg" : ""}
        ${size === "4" ? "pa-5 -y03 text-3xl" : ""}
        `)}
    >
      {children}
    </button>
    //   <button className= {twMerge(clsx(
    //     'rounded-xl px-4 py-2 text-white font-semibold',
    //     {
    //       'bg-blue-500' : variant === 'solid',
    //       'bg-blue-200 text-blue-600' : variant === 'soft',
    //   }))
    // }
    //   >

    //   </button>
  );
}
