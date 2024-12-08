import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Menu,
  ChevronLeft,
  BarChart2,
  Users,
  Clock,
  BookOpen,
  Brain,
  LogOut,
  Wallet,
  GraduationCap,
} from 'lucide-react';
import { useAuthStore } from '../../store/authStore';

const menuItems = [
  { icon: BarChart2, label: 'Visão Geral', path: '/dashboard' },
  { icon: BookOpen, label: 'Desempenho', path: '/dashboard/performance' },
  { icon: Clock, label: 'Frequência', path: '/dashboard/attendance' },
  { icon: Users, label: 'Recursos', path: '/dashboard/resources' },
  { icon: Brain, label: 'Análise Preditiva', path: '/dashboard/predictive' },
  { icon: Wallet, label: 'Gestão de Verbas', path: '/dashboard/finance' },
  { icon: GraduationCap, label: 'Gestão de Alunos', path: '/dashboard/students' },
];

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const logout = useAuthStore((state) => state.logout);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <aside
      className={`bg-[#1D1D1D] text-white h-screen transition-all duration-300 ${
        isCollapsed ? 'w-16' : 'w-64'
      } fixed left-0 top-0 flex flex-col`}
    >
      <div className="p-4 flex items-center justify-between">
        {!isCollapsed && <h1 className="text-xl font-bold">Stratexx</h1>}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2 hover:bg-gray-800 rounded-lg"
        >
          {isCollapsed ? <Menu size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>

      <nav className="mt-8 flex-1">
        {menuItems.map((item) => (
          <button
            key={item.path}
            onClick={() => navigate(item.path)}
            className={`w-full p-4 flex items-center gap-4 hover:bg-gray-800 transition-colors ${
              location.pathname === item.path ? 'bg-gray-800' : ''
            }`}
          >
            <item.icon size={20} />
            {!isCollapsed && <span>{item.label}</span>}
          </button>
        ))}
      </nav>

      <button
        onClick={handleLogout}
        className="p-4 flex items-center gap-4 hover:bg-gray-800 transition-colors text-red-400"
      >
        <LogOut size={20} />
        {!isCollapsed && <span>Sair</span>}
      </button>
    </aside>
  );
}