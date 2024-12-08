import React from 'react';
import { FilterBar } from '../FilterBar';
import { Bar } from 'react-chartjs-2';
import { schoolData } from '../../../data/mockData';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export function Performance() {
  const performanceData = {
    labels: Object.keys(schoolData.performance.subjects),
    datasets: [{
      label: 'Média por Disciplina',
      data: Object.values(schoolData.performance.subjects).map(values => 
        values.reduce((a, b) => a + b) / values.length
      ),
      backgroundColor: '#E63946',
    }]
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-[#1D1D1D]">Desempenho Acadêmico</h1>
        <p className="text-gray-600">Análise detalhada do desempenho por disciplina</p>
      </div>

      <FilterBar />

      <div className="mt-8 grid gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Média por Disciplina</h3>
          <Bar data={performanceData} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(schoolData.performance.subjects).map(([subject, values]) => (
            <div key={subject} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-4">{subject}</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Média Atual</span>
                  <span className="font-bold">{(values.reduce((a, b) => a + b) / values.length).toFixed(1)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Maior Nota</span>
                  <span className="font-bold text-green-500">{Math.max(...values)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Menor Nota</span>
                  <span className="font-bold text-red-500">{Math.min(...values)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}