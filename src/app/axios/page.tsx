"use Client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
    const api = axios.create({
        baseURL: "http://localhost:8080"
    })
    const [name, setName] = useState("")
    const [schoolId, setSchoolId] = useState(1)
    const [studentList, setStudentList] = useState([])
    const [schoolList, setSchoolList] = useState([])

    function getStudentList() {
        api.get('/get-student-list').then(res => {
            setStudentList(res.data)
        }).catch(error => console.log(error))
    }

    // async function getStudentList() {
    //     setStudentList((await api.get('/get-student-list')).data)
    // }

    function addStudent() {
        api.post('/add-student', {
            name: name,
            schoolId: schoolId
        })
    }

    useEffect(() => {
        api.get('/get-school-list').then(res => {
            setSchoolList(res.data)
        }).catch(error => console.log(error))
    }, [])

    return (
        <div className="p-8">
            <div className="pb-4">
                <div>학생 이름을 입력하세요.</div>
                <Input type="text" value={name} onChange={event => setName(event.target.value)}/>
            </div>

            <div>학교를 고르세요.</div>
            <div className="space-x-2">
                {schoolList.map((ele, i) => (
                    <button key={i} onClick={() => setSchoolId(ele.id)}
                        className={cn('bg-green-700 text-white text-xl rounded-2xl p-2',
                            ele.id === schoolId ? 'bg-red-400')}>
                        {ele.name}
                    </button>
                ))}
            </div>
            <div>
                <Button onClick={addStudent}>학생 생성</Button>
            </div>

            <div className="mt-8">
                <Button size='lg' onClick={getStudentList}>학생 목록 출력</Button>
                <div>{JSON.stringify(studentList)}</div>
            </div>
        </div>
    )
}