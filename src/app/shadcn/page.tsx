import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div className="p-8 space-y-2">
      <Button>버튼입니다</Button>
      <Checkbox></Checkbox>
      <Input></Input>
    </div>
  );
}
