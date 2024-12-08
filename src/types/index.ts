export interface School {
  id: number;
  name: string;
  region: string;
}

export interface Student {
  id: number;
  name: string;
  registration: string;
  grade: string;
  class: string;
  attendance: number;
  absences: number;
  uniformSize: 'P' | 'M' | 'G';
  usesTransport: boolean;
  socialProgram: boolean;
  schoolId: number;
}

export interface FinancialRecord {
  id: number;
  schoolId: number;
  date: string;
  category: string;
  amount: number;
  budgeted: number;
  description: string;
}