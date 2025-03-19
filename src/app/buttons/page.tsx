import { Bell } from "lucide-react";
import Button from "../../components/Button";
import CvaButton from "@/components/CvaButton";

export default function Home() {
  return (
    <div className="p-8 space-y-2">
      <div className="py-8">
        <div> CVA Button </div>
        <CvaButton />
      </div>
      <div className="">
        <Button variant="solid" size="4">
          <div className="pr-2">solid</div>
          <Bell size={20} />
        </Button>
      </div>
      <div className="">
        <Button variant="ghost">ghost</Button>
      </div>
      <div className="">
        <Button variant="soft" size="3">
          soft
        </Button>
      </div>
      <div className="">
        <Button variant="surface" size="2">
          surface
        </Button>
      </div>
      <div className="">
        <Button variant="outline" size="1">
          outline
        </Button>
      </div>
    </div>
  );
}
