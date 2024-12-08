import React from 'react';
import { Filter } from 'lucide-react';

export function FilterBar() {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm flex gap-4 items-center">
      <div className="flex items-center gap-2 text-gray-600">
        <Filter size={20} />
        <span>Filtros:</span>
      </div>
      
      <select className="bg-gray-50 border border-gray-200 rounded-md px-3 py-2">
        <option>Todas as Escolas</option>
      </select>
      
      <select className="bg-gray-50 border border-gray-200 rounded-md px-3 py-2">
        <option>Todas as Séries</option>
      </select>
      
      <select className="bg-gray-50 border border-gray-200 rounded-md px-3 py-2">
        <option>Todas as Disciplinas</option>
      </select>
      
      <select className="bg-gray-50 border border-gray-200 rounded-md px-3 py-2">
        <option>Último Semestre</option>
        <option>Último Ano</option>
      </select>
    </div>
  );
}