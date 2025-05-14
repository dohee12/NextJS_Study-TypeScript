export interface School {
  id: number;
  name: string;
}
export interface Student {
  id: number;
  name: string;
  schoolId: number;
  schoolDto: School;
}
