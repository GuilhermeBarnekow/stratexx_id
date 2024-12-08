import React from 'react';
import { FilterBar } from '../FilterBar';
import { Bar, Doughnut } from 'react-chartjs-2';
import { mockStudents, mockSchools } from '../../../data/mockData';
import { AlertBanner } from '../AlertBanner';

export function Students() {
  const alerts = mockStudents
    .filter(student => student.attendance < 75)
    .map(student => ({
      type: 'danger' as const,
      message: `${student.name} (${student.grade}) está com frequência abaixo de 75%`,
    }));

  const uniformSizes = mockStudents.reduce((acc, student) => {
    acc[student.uniformSize] = (acc[student.uniformSize] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const transportStats = {
    uses: mockStudents.filter(s => s.usesTransport).length,
    doesntUse: mockStudents.filter(s => !s.usesTransport).length,
  };

  const uniformData = {
    labels: Object.keys(uniformSizes),
    datasets: [
      {
        data: Object.values(uniformSizes),
        backgroundColor: ['#E63946', '#457B9D', '#1D3557'],
      },
    ],
  };

  const transportData = {
    labels: ['Utiliza Transporte', 'Não Utiliza'],
    datasets: [
      {
        data: [transportStats.uses, transportStats.doesntUse],
        backgroundColor: ['#E63946', '#457B9D'],
      },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-[#1D1D1D]">Gestão de Alunos</h1>
        <p className="text-gray-600">Análise e acompanhamento do corpo discente</p>
      </div>

      <FilterBar />

      {alerts.length > 0 && (
        <div className="mt-8">
          <AlertBanner alerts={alerts} />
        </div>
      )}

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Distribuição de Uniformes</h3>
          <div className="aspect-square">
            <Doughnut data={uniformData} />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Uso de Transporte Escolar</h3>
          <div className="aspect-square">
            <Doughnut data={transportData} />
          </div>
        </div>
      </div>

      <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-4">Alunos em Risco</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Nome
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Matrícula
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Série
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Frequência
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {mockStudents
                .filter(student => student.attendance < 75)
                .map(student => (
                  <tr key={student.id}>
                    <td className="px-6 py-4 whitespace-nowrap">{student.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{student.registration}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{student.grade}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-red-500 font-semibold">{student.attendance}%</span>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}