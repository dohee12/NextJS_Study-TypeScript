"use client";

import {
  Table,
  TableHeader,
  TableHead,
  TableCaption,
  TableRow,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { useEffect, useState } from "react";
import { Api } from "@/lib/api";

interface Store {
  name: string;
  sigun: string;
  foodName: string;
  tel: string;
  addr: string;
}

export default function Home() {
  // const api = axios.create({
  //   baseURL: "http://localhost:8080",
  // });

  const [stores, setStores] = useState<Store[]>([]);
  const [stat, setStat] = useState<Map<string, number>>(new Map());

  useEffect(() => {
    (async () => {
      try {
        // const res = await api.get("/get-food-store", {
        //   params: {
        //     pIndex: 1,
        //     pSize: 300,
        //     SIGUN_NM: "",
        //   },
        // });
        const res = await Api().getStore(1, 300, "");

        setStores(res as Store[]);

        const map = new Map<string, number>();
        res.forEach((store) => {
          const value = map.get(store.sigun);
          if (value) {
            map.set(store.sigun, value + 1);
          } else {
            map.set(store.sigun, 1);
          }
        });
        setStat(map);
        console.log(map);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div className="p-8">
      <div className="w-[320px] mb-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>소재지</TableHead>
              <TableHead>음식점 수</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {stat.keys().map((key, i) => (
              <TableRow key={i}>
                <TableCell>{key}</TableCell>
                <TableCell>{stat.get(key)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div>
        <Table>
          <TableCaption>경기도 맛집을 알려줄게요!</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>음식점</TableHead>
              <TableHead>소재지</TableHead>
              <TableHead>메인음식</TableHead>
              <TableHead>전화번호</TableHead>
              <TableHead>주소</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {stores.map((store, i) => (
              <TableRow key={i}>
                <TableCell>{store.name}</TableCell>
                <TableCell>{store.sigun}</TableCell>
                <TableCell>{store.foodName}</TableCell>
                <TableCell>{store.tel}</TableCell>
                <TableCell>{store.addr}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
