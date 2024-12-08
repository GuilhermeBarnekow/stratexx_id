import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Sidebar } from '../layout/Sidebar';
import { Overview } from './pages/Overview';
import { Performance } from './pages/Performance';
import { Attendance } from './pages/Attendance';
import { Resources } from './pages/Resources';
import { Predictive } from './pages/Predictive';
import { Finance } from './pages/Finance';
import { Students } from './pages/Students';

export function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      <main className="flex-1 ml-64 p-8">
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/performance" element={<Performance />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/predictive" element={<Predictive />} />
          <Route path="/finance" element={<Finance />} />
          <Route path="/students" element={<Students />} />
        </Routes>
      </main>
    </div>
  );
}