import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { heatmapData } from '../../data/mockData';

ChartJS.register(ArcElement, Tooltip, Legend);

interface RegionalDistributionProps {
  metric: 'evasion' | 'attendance' | 'performance';
  title: string;
}

const metricLabels = {
  evasion: 'Taxa de Evasão',
  attendance: 'Frequência',
  performance: 'Desempenho',
};

const colors = [
  '#E63946',
  '#457B9D',
  '#1D3557',
  '#A8DADC',
  '#F1FAEE',
];

export function RegionalDistribution({ metric, title }: RegionalDistributionProps) {
  const data = {
    labels: heatmapData.regions.map(r => r.name),
    datasets: [
      {
        data: heatmapData.regions.map(r => r[metric]),
        backgroundColor: colors,
        borderColor: colors.map(c => c + '80'),
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom' as const,
      },
      title: {
        display: true,
        text: `${title} por Região`,
      },
    },
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">{metricLabels[metric]} por Região</h3>
      <div className="aspect-square">
        <Pie data={data} options={options} />
      </div>
      <div className="mt-4 grid grid-cols-2 gap-4">
        {heatmapData.regions.map((region, index) => (
          <div key={region.name} className="flex items-center gap-2">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: colors[index] }}
            />
            <span className="text-sm text-gray-600">
              {region.name}: {region[metric]}
              {metric === 'evasion' ? '%' : metric === 'attendance' ? '%' : ''}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}