import { Bell } from "lucide-react";
import Button from "../../components/Button";
import CvaButton from "@/components/CvaButton";
import Table from "@/components/Table";

export default function Home() {
  const headers = [
    { key: "fullName", text: "Full Name" },
    { key: "email", text: "Email" },
    { key: "group", text: "Group" },
  ];

  const items = [
    {
      fullName: "Danilo Sousa",
      email: "danilo@example.com",
      group: "Developer",
    },
    {
      fullName: "Zahra Ambessa",
      email: "zahra@example.com",
      group: "Admin",
    },
    {
      fullName: "Jasper Eriksson",
      email: "jasper@example.com",
      group: "Developer",
    },
  ];

  return (
    <div className="p-8 space-y-2">
      <div className="p-8">
        <div>Table Components</div>
        <Table variant="ghost" headers={headers} items={items} />
        <div className="py-8">
          <Table headers={headers} items={items} />
        </div>
      </div>
      <div className="py-8">
        <div> CVA Button </div>
        <CvaButton variant="solid" />
        <CvaButton variant="surface" />
        <CvaButton variant="soft" size={3} />
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
