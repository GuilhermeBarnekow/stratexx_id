import React from 'react';
import { FilterBar } from '../FilterBar';
import { Doughnut } from 'react-chartjs-2';
import { schoolData } from '../../../data/mockData';
import { ArcElement } from 'chart.js';
import { Chart as ChartJS } from 'chart.js';

ChartJS.register(ArcElement);

export function Resources() {
  const teachersData = {
    labels: Object.keys(schoolData.resources.teachers),
    datasets: [{
      data: Object.values(schoolData.resources.teachers),
      backgroundColor: ['#E63946', '#457B9D', '#1D3557', '#A8DADC'],
    }]
  };

  const classroomsData = {
    labels: Object.keys(schoolData.resources.classrooms),
    datasets: [{
      data: Object.values(schoolData.resources.classrooms),
      backgroundColor: ['#E63946', '#457B9D'],
    }]
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-[#1D1D1D]">Gestão de Recursos</h1>
        <p className="text-gray-600">Distribuição e alocação de recursos escolares</p>
      </div>

      <FilterBar />

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Professores por Área</h3>
          <div className="aspect-square">
            <Doughnut data={teachersData} />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Ocupação das Salas</h3>
          <div className="aspect-square">
            <Doughnut data={classroomsData} />
          </div>
        </div>
      </div>
    </div>
  );
}