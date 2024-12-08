import React from 'react';
import { FilterBar } from '../FilterBar';
import { Bar } from 'react-chartjs-2';
import { HeatMap } from '../../maps/HeatMap';
import { schoolData, heatmapData } from '../../../data/mockData';

const evasionMapData = heatmapData.regions.map(region => ({
  name: region.name,
  coordinates: [-22.5645 + Math.random() * 0.02, -47.4004 + Math.random() * 0.02] as [number, number],
  value: region.evasion * 10, // Scale up for better visibility
  metric: 'Risco de Evasão'
}));

export function Predictive() {
  const riskData = {
    labels: schoolData.predictive.riskFactors.map(rf => rf.factor),
    datasets: [{
      label: 'Fatores de Risco (%)',
      data: schoolData.predictive.riskFactors.map(rf => rf.risk),
      backgroundColor: '#E63946',
    }]
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-[#1D1D1D]">Análise Preditiva</h1>
        <p className="text-gray-600">Previsões e identificação de riscos</p>
      </div>

      <FilterBar />

      <div className="mt-8 grid gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Fatores de Risco</h3>
          <Bar data={riskData} />
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Mapa de Risco de Evasão</h3>
          <HeatMap data={evasionMapData} />
        </div>
      </div>
    </div>
  );
}