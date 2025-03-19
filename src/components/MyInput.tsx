import { Ref } from "react";

export default function MyInput({
  ref,
}: {
  ref: Ref<HTMLInputElement> | undefined;
}) {
  return <input ref={ref} className="bg-red-50 px-2 shadow-2xl"></input>;
}
