'use client';

import { useState } from 'react';
import Link from 'next/link';

const Dashboard = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Book Venue', completed: true, category: 'Venue' },
    { id: 2, title: 'Send Invitations', completed: false, category: 'Invitations' },
    { id: 3, title: 'Plan Menu', completed: false, category: 'Catering' },
    { id: 4, title: 'Choose Photographer', completed: true, category: 'Photos' },
    { id: 5, title: 'Finalize Guest List', completed: false, category: 'Guests' },
  ]);

  const completedTasks = tasks.filter(t => t.completed).length;
  const totalTasks = tasks.length;
  const progressPercentage = (completedTasks / totalTasks) * 100;

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const upcomingEvents = [
    { date: '2024-03-15', event: 'Final Guest Confirmation', daysLeft: 12 },
    { date: '2024-03-20', event: 'Menu Tasting', daysLeft: 7 },
    { date: '2024-04-01', event: 'Wedding Day', daysLeft: 19 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-pink-600 to-rose-600 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Wedding Dashboard</h1>
          <p className="text-pink-100 text-lg">Your complete wedding planning companion</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-pink-600">
            <div className="text-gray-600 text-sm font-semibold uppercase">Total Tasks</div>
            <div className="text-3xl font-bold text-pink-600 mt-2">{totalTasks}</div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-green-600">
            <div className="text-gray-600 text-sm font-semibold uppercase">Completed</div>
            <div className="text-3xl font-bold text-green-600 mt-2">{completedTasks}</div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-blue-600">
            <div className="text-gray-600 text-sm font-semibold uppercase">Progress</div>
            <div className="text-3xl font-bold text-blue-600 mt-2">{Math.round(progressPercentage)}%</div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-purple-600">
            <div className="text-gray-600 text-sm font-semibold uppercase">Remaining</div>
            <div className="text-3xl font-bold text-purple-600 mt-2">{totalTasks - completedTasks}</div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Planning Progress</h2>
          <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
            <div
              className="bg-gradient-to-r from-pink-600 to-rose-600 h-full rounded-full transition-all duration-500"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
          <p className="text-gray-600 mt-2 text-sm">You're {Math.round(progressPercentage)}% through your wedding planning!</p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Checklist */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Planning Checklist</h2>
            <div className="space-y-3">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-pink-50 transition"
                >
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleTask(task.id)}
                    className="w-5 h-5 text-pink-600 cursor-pointer"
                  />
                  <span
                    className={`ml-3 flex-1 ${
                      task.completed
                        ? 'line-through text-gray-500'
                        : 'text-gray-800 font-medium'
                    }`}
                  >
                    {task.title}
                  </span>
                  <span className="text-xs bg-pink-100 text-pink-700 px-3 py-1 rounded-full">
                    {task.category}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Upcoming Events</h2>
            <div className="space-y-4">
              {upcomingEvents.map((event, idx) => (
                <div
                  key={idx}
                  className="border-l-4 border-pink-600 pl-4 py-3 hover:bg-pink-50 transition rounded"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-gray-800">{event.event}</h3>
                      <p className="text-gray-600 text-sm mt-1">{event.date}</p>
                    </div>
                    <span className="bg-rose-100 text-rose-700 text-xs font-semibold px-3 py-1 rounded-full">
                      {event.daysLeft} days
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="mt-12 bg-gradient-to-r from-pink-600 to-rose-600 rounded-lg shadow-lg p-8 text-white">
          <h2 className="text-2xl font-bold mb-6">Quick Links</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link
              href="/guests"
              className="bg-white bg-opacity-20 hover:bg-opacity-30 transition rounded-lg p-4 text-center font-semibold"
            >
              👥 Manage Guests
            </Link>
            <Link
              href="/budget"
              className="bg-white bg-opacity-20 hover:bg-opacity-30 transition rounded-lg p-4 text-center font-semibold"
            >
              💰 Budget Tracker
            </Link>
            <Link
              href="/gallery"
              className="bg-white bg-opacity-20 hover:bg-opacity-30 transition rounded-lg p-4 text-center font-semibold"
            >
              📸 Gallery
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
