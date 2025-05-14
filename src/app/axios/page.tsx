"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Api } from "@/lib/api";
import { Student } from "../../../types/school";
import { IdAndName } from "../../../types/base";

// 페이지마다 axios create 매번 실행하는 작업
// typescript 에러가 나는데 한번에 관리를 쉽게하고 싶다

export default function Home() {
  const [name, setName] = useState("");
  const [schoolId, setSchoolId] = useState(1);
  const [studentList, setStudentList] = useState<Student[]>([]);
  const [schoolList, setSchoolList] = useState<IdAndName[]>([]);

  async function getStudentList() {
    setStudentList(await Api().getStudentList());
  }

  async function addStudent() {
    await Api().addStudent(name, schoolId);
  }

  useEffect(() => {
    (async () => {
      setSchoolList(await Api().getSchoolList());
    })();

    // // const fetch123213xsxw = async () => {
    // // //   setSchoolList((await Api().getSchoolList());
    // // };
    // fetch123213xsxw();
  }, []);

  return (
    <div className="p-8">
      <div className="pb-4">
        <div>학생 이름을 입력하세요.</div>
        <Input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>

      <div> 학교를 고르세요. </div>
      <div className="space-x-2">
        {schoolList.map((ele, i) => (
          <button
            key={i}
            onClick={() => setSchoolId(ele.id)}
            className={cn(
              "bg-green-700 text-white text-xl rounded-2xl p-2",
              ele.id === schoolId && "bg-red-400"
            )}
          >
            {ele.name}
          </button>
        ))}
      </div>
      <div>
        <Button onClick={addStudent}> 학생 생성 </Button>
      </div>

      <div className="mt-8">
        <Button size="lg" onClick={getStudentList}>
          {" "}
          학생 목록 출력{" "}
        </Button>
        <div> {JSON.stringify(studentList)} </div>
      </div>
    </div>
  );
}
