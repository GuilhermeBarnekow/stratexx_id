import React from 'react';
import { FilterBar } from '../FilterBar';
import { Line, Bar } from 'react-chartjs-2';
import { mockFinancialRecords, mockSchools } from '../../../data/mockData';
import { AlertBanner } from '../AlertBanner';

export function Finance() {
  const alerts = mockFinancialRecords
    .filter(record => record.amount > record.budgeted * 0.8)
    .map(record => ({
      type: 'warning' as const,
      message: `${mockSchools.find(s => s.id === record.schoolId)?.name} ultrapassou 80% do orçamento em ${record.category}`,
    }));

  const spendingByCategory = mockFinancialRecords.reduce((acc, record) => {
    acc[record.category] = (acc[record.category] || 0) + record.amount;
    return acc;
  }, {} as Record<string, number>);

  const chartData = {
    labels: Object.keys(spendingByCategory),
    datasets: [
      {
        label: 'Gastos por Categoria (R$)',
        data: Object.values(spendingByCategory),
        backgroundColor: '#E63946',
      },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-[#1D1D1D]">Gestão de Verbas</h1>
        <p className="text-gray-600">Controle e análise de gastos escolares</p>
      </div>

      <FilterBar />

      {alerts.length > 0 && (
        <div className="mt-8">
          <AlertBanner alerts={alerts} />
        </div>
      )}

      <div className="mt-8 grid gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Gastos por Categoria</h3>
          <Bar data={chartData} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mockSchools.map(school => {
            const schoolRecords = mockFinancialRecords.filter(r => r.schoolId === school.id);
            const totalSpent = schoolRecords.reduce((sum, r) => sum + r.amount, 0);
            const totalBudgeted = schoolRecords.reduce((sum, r) => sum + r.budgeted, 0);
            const percentage = (totalSpent / totalBudgeted) * 100;

            return (
              <div key={school.id} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-4">{school.name}</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Orçamento Total</span>
                    <span className="font-bold">R$ {totalBudgeted.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Gasto Total</span>
                    <span className="font-bold">R$ {totalSpent.toLocaleString()}</span>
                  </div>
                  <div className="relative pt-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold inline-block text-[#E63946]">
                        {percentage.toFixed(1)}% Utilizado
                      </span>
                    </div>
                    <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-200">
                      <div
                        style={{ width: `${percentage}%` }}
                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-[#E63946]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}