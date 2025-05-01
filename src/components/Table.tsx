import { cn } from "../../lib/style/util";
import { cva, type VariantProps } from "class-variance-authority";

const tableVariants = cva(" ", {
  variants: {
    variant: {
      surface: "border-[2px] border-neutral-200",
      ghost: "bg-white",
    },
    size: {
      "1": "p-1",
      "2": "p-2",
      "3": "p-3",
    },
    defaultVariants: {
      variant: "surface",
      size: "1",
    },
  },
});

interface header {
  key: string;
  text: string;
}

interface Item {
  key: string;
  fullName: string;
}

interface TableProps {
  headers: header[];
  items: Item[];
}

export default function Table({
  variant,
  size,
  headers,
  items,
}: VariantProps<typeof tableVariants> & TableProps) {
  return (
    <div>
      <table className={cn(tableVariants({ variant, size }))}>
        <thead className="bg-neutral-50">
          <tr className="border-b-[2px] border-b-neutral-200">
            {headers.map((ele, i) => (
              <th key={i} className="p-2">
                {ele.text}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {items.map((row, i) => (
            <tr key={i} className="border-b-[2px] border-b-neutral-200">
              {headers.map((header, j) => (
                <td key={j} className="p-2">
                  {row[header.key as "key"]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
