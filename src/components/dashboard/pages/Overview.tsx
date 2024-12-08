import React from 'react';
import { KPICard } from '../KPICard';
import { FilterBar } from '../FilterBar';
import { AlertBanner } from '../AlertBanner';
import { RegionalDistribution } from '../RegionalDistribution';
import { GraduationCap, Users, BookOpen, UserMinus } from 'lucide-react';
import { Line } from 'react-chartjs-2';
import { schoolData } from '../../../data/mockData';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const mockAlerts = [
  { type: 'danger', message: '3 alunos com risco alto de evasão na 8ª série' },
  { type: 'warning', message: 'Queda de 15% no desempenho em Matemática no 9º ano' },
];

export function Overview() {
  const performanceData = {
    labels: schoolData.performance.months,
    datasets: Object.entries(schoolData.performance.subjects).map(([subject, data]) => ({
      label: subject,
      data: data,
      borderColor: subject === 'Matemática' ? '#E63946' : undefined,
      tension: 0.4,
    })),
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-[#1D1D1D]">Dashboard</h1>
          <p className="text-gray-600">Visão geral dos indicadores educacionais</p>
        </div>
      </div>

      <FilterBar />
      
      <div className="mt-8">
        <AlertBanner alerts={mockAlerts} />
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <KPICard
          title="Taxa de Aprovação"
          value="85%"
          trend={2.5}
          icon={<GraduationCap />}
        />
        <KPICard
          title="Frequência Média"
          value="92%"
          trend={-1.2}
          icon={<Users />}
        />
        <KPICard
          title="Desempenho Médio"
          value="7.8"
          trend={0.8}
          icon={<BookOpen />}
        />
        <KPICard
          title="Taxa de Evasão"
          value="4.2%"
          trend={-0.5}
          icon={<UserMinus />}
        />
      </div>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Evolução do Desempenho</h3>
          <Line data={performanceData} />
        </div>
        
        <RegionalDistribution metric="performance" title="Desempenho" />
      </div>
    </div>
  );
}