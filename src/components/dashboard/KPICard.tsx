import React from 'react';
import { motion } from 'framer-motion';

interface KPICardProps {
  title: string;
  value: string | number;
  trend?: number;
  icon: React.ReactNode;
}

export function KPICard({ title, value, trend, icon }: KPICardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg p-6 shadow-md transition-shadow hover:shadow-lg cursor-pointer"
    >
      <div className="flex items-center justify-between mb-4">
        <span className="text-gray-600">{title}</span>
        <motion.div
          whileHover={{ rotate: 15 }}
          className="text-[#E63946]"
        >
          {icon}
        </motion.div>
      </div>
      <div className="flex items-end gap-4">
        <motion.span
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
          className="text-2xl font-bold text-[#1D1D1D]"
        >
          {value}
        </motion.span>
        {trend && (
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className={`text-sm ${trend > 0 ? 'text-green-500' : 'text-red-500'}`}
          >
            {trend > 0 ? '+' : ''}{trend}%
          </motion.span>
        )}
      </div>
    </motion.div>
  );
}