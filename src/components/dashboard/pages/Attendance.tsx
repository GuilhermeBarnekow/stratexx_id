import React from 'react';
import { FilterBar } from '../FilterBar';
import { Line } from 'react-chartjs-2';
import { HeatMap } from '../../maps/HeatMap';
import { schoolData, heatmapData } from '../../../data/mockData';

const attendanceMapData = heatmapData.regions.map(region => ({
  name: region.name,
  coordinates: [-22.5645 + Math.random() * 0.02, -47.4004 + Math.random() * 0.02] as [number, number],
  value: region.attendance,
  metric: 'Frequência'
}));

export function Attendance() {
  const attendanceData = {
    labels: schoolData.attendance.weekDays,
    datasets: [{
      label: 'Frequência Diária (%)',
      data: schoolData.attendance.daily,
      borderColor: '#E63946',
      tension: 0.4,
      fill: true,
      backgroundColor: 'rgba(230, 57, 70, 0.1)',
    }]
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-[#1D1D1D]">Monitoramento de Frequência</h1>
        <p className="text-gray-600">Análise de presença e padrões de ausência</p>
      </div>

      <FilterBar />

      <div className="mt-8 grid gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Frequência Semanal</h3>
          <Line data={attendanceData} />
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Mapa de Frequência por Região</h3>
          <HeatMap data={attendanceMapData} />
        </div>
      </div>
    </div>
  );
}