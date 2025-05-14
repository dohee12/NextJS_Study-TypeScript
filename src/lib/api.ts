import axios from "axios";
import { Student } from "../../types/school";
import { IdAndName } from "../../types/base";
import { FoodStore } from "../../types/food";

export interface ApiInterface {
  getStudentList: () => Promise<Student[]>;
  addStudent: (name: string, schoolId: number) => Promise<string>;
  getSchoolList: () => Promise<IdAndName[]>;
  getStore: (
    pIndex: number,
    pSize: number,
    SIGUN_NM: string
  ) => Promise<FoodStore[]>;
}

export function Api(): ApiInterface {
  const api = axios.create({
    baseURL: "http://localhost:8080",
  });

  api.interceptors.request.use((config) => {
    config.headers["X-DAELIM-TOKEN"] = "dkdjjdkjkdjfkjdkf";
    return config;
  });

  api.interceptors.response.use((res) => {
    return res.data;
  });

  return {
    async getStudentList() {
      return await api.get("/get-student-list");
    },
    async addStudent(name: string, schoolId: number) {
      return (
        await api.post("/add-student", {
          name: name,
          schoolId: schoolId,
        })
      ).data;
    },
    async getSchoolList() {
      return await api.get("/get-school-list");
    },
    async getStore(pIndex: number, pSize: number, SIGUN_NM: string) {
      return (
        await api.get("/get-food-store", {
          params: {
            pIndex,
            pSize,
            SIGUN_NM,
          },
        })
      ).data;
    },
  };
}
