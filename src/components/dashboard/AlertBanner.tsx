import React from 'react';
import { AlertTriangle } from 'lucide-react';

interface Alert {
  type: 'warning' | 'danger';
  message: string;
}

export function AlertBanner({ alerts }: { alerts: Alert[] }) {
  if (alerts.length === 0) return null;

  return (
    <div className="bg-[#E63946] bg-opacity-10 rounded-lg p-4">
      <div className="flex items-center gap-2 text-[#E63946]">
        <AlertTriangle size={20} />
        <h3 className="font-semibold">Alertas Importantes</h3>
      </div>
      <div className="mt-2 space-y-2">
        {alerts.map((alert, index) => (
          <div
            key={index}
            className="flex items-center gap-2 text-sm text-gray-700"
          >
            <span className="w-2 h-2 rounded-full bg-[#E63946]" />
            {alert.message}
          </div>
        ))}
      </div>
    </div>
  );
}