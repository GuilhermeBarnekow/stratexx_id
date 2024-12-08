import { Student, School, FinancialRecord } from '../types';

export const schoolData = {
  performance: {
    subjects: {
      'Matemática': [65, 70, 68, 72, 75],
      'Português': [72, 75, 73, 78, 80],
      'Ciências': [70, 73, 75, 74, 76],
      'História': [78, 76, 79, 80, 82],
      'Geografia': [75, 77, 76, 79, 81],
      'Inglês': [82, 80, 83, 85, 84],
    },
    months: ['Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
  },
  attendance: {
    daily: [92, 94, 91, 93, 95, 90, 92],
    weekDays: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
  },
  resources: {
    teachers: {
      'Matemática': 12,
      'Português': 15,
      'Ciências': 8,
      'História': 10,
      'Geografia': 8,
      'Inglês': 6,
      'Educação Física': 8,
    },
    classrooms: {
      'Em uso': 85,
      'Disponíveis': 15,
      'Em manutenção': 5,
    },
  },
  predictive: {
    riskFactors: [
      { factor: 'Baixa Frequência', risk: 35 },
      { factor: 'Notas Baixas', risk: 28 },
      { factor: 'Comportamento', risk: 20 },
      { factor: 'Participação', risk: 17 },
    ],
  },
};

export const mockSchools: School[] = [
  { id: 1, name: 'E.E. Prof. João Silva', region: 'Centro' },
  { id: 2, name: 'E.E. Maria Santos', region: 'Nova Limeira' },
  { id: 3, name: 'E.E. Dr. Paulo Freire', region: 'Jardim Graminha' },
  { id: 4, name: 'E.E. Anísio Teixeira', region: 'Vila Cidade Jardim' },
  { id: 5, name: 'E.E. Cecília Meireles', region: 'Jardim Novo Horizonte' },
];

export const mockStudents: Student[] = [
  {
    id: 1,
    name: 'Ana Silva',
    registration: '2024001',
    grade: '9º ano',
    class: 'A',
    attendance: 95,
    absences: 3,
    uniformSize: 'M',
    usesTransport: true,
    socialProgram: true,
    schoolId: 1,
  },
  {
    id: 2,
    name: 'Pedro Santos',
    registration: '2024002',
    grade: '8º ano',
    class: 'B',
    attendance: 72,
    absences: 12,
    uniformSize: 'G',
    usesTransport: true,
    socialProgram: false,
    schoolId: 1,
  },
  {
    id: 3,
    name: 'Maria Oliveira',
    registration: '2024003',
    grade: '7º ano',
    class: 'A',
    attendance: 88,
    absences: 6,
    uniformSize: 'P',
    usesTransport: false,
    socialProgram: true,
    schoolId: 2,
  },
  {
    id: 4,
    name: 'João Costa',
    registration: '2024004',
    grade: '9º ano',
    class: 'C',
    attendance: 68,
    absences: 15,
    uniformSize: 'M',
    usesTransport: true,
    socialProgram: true,
    schoolId: 2,
  },
  {
    id: 5,
    name: 'Lucas Ferreira',
    registration: '2024005',
    grade: '8º ano',
    class: 'A',
    attendance: 93,
    absences: 4,
    uniformSize: 'G',
    usesTransport: false,
    socialProgram: false,
    schoolId: 3,
  },
  {
    id: 6,
    name: 'Beatriz Lima',
    registration: '2024006',
    grade: '7º ano',
    class: 'B',
    attendance: 71,
    absences: 14,
    uniformSize: 'P',
    usesTransport: true,
    socialProgram: true,
    schoolId: 3,
  },
];

export const mockFinancialRecords: FinancialRecord[] = [
  {
    id: 1,
    schoolId: 1,
    date: '2024-02-01',
    category: 'Material Escolar',
    amount: 15000,
    budgeted: 18000,
    description: 'Compra de livros didáticos',
  },
  {
    id: 2,
    schoolId: 1,
    date: '2024-02-05',
    category: 'Infraestrutura',
    amount: 25000,
    budgeted: 30000,
    description: 'Manutenção de salas de aula',
  },
  {
    id: 3,
    schoolId: 2,
    date: '2024-02-03',
    category: 'Tecnologia',
    amount: 42000,
    budgeted: 45000,
    description: 'Aquisição de computadores',
  },
  {
    id: 4,
    schoolId: 2,
    date: '2024-02-08',
    category: 'Alimentação',
    amount: 28000,
    budgeted: 30000,
    description: 'Merenda escolar - Fevereiro',
  },
  {
    id: 5,
    schoolId: 3,
    date: '2024-02-02',
    category: 'Material Escolar',
    amount: 12000,
    budgeted: 15000,
    description: 'Material didático complementar',
  },
  {
    id: 6,
    schoolId: 3,
    date: '2024-02-07',
    category: 'Infraestrutura',
    amount: 35000,
    budgeted: 40000,
    description: 'Reforma do laboratório',
  },
  {
    id: 7,
    schoolId: 4,
    date: '2024-02-04',
    category: 'Tecnologia',
    amount: 38000,
    budgeted: 40000,
    description: 'Equipamentos audiovisuais',
  },
  {
    id: 8,
    schoolId: 4,
    date: '2024-02-09',
    category: 'Alimentação',
    amount: 26000,
    budgeted: 28000,
    description: 'Merenda escolar - Fevereiro',
  },
  {
    id: 9,
    schoolId: 5,
    date: '2024-02-06',
    category: 'Material Escolar',
    amount: 14000,
    budgeted: 16000,
    description: 'Materiais para laboratório',
  },
  {
    id: 10,
    schoolId: 5,
    date: '2024-02-10',
    category: 'Infraestrutura',
    amount: 32000,
    budgeted: 35000,
    description: 'Manutenção da quadra esportiva',
  },
];

export const heatmapData = {
  regions: [
    { name: 'Centro', evasion: 3.2, attendance: 94, performance: 8.1 },
    { name: 'Nova Limeira', evasion: 4.8, attendance: 91, performance: 7.5 },
    { name: 'Jardim Graminha', evasion: 5.5, attendance: 89, performance: 7.2 },
    { name: 'Vila Cidade Jardim', evasion: 3.9, attendance: 92, performance: 7.8 },
    { name: 'Jardim Novo Horizonte', evasion: 6.1, attendance: 88, performance: 7.0 },
  ],
};