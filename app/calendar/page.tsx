'use client';

import { useState } from 'react';

const CalendarPage = () => {
  const timeline = [
    { date: '2024-02-14', title: 'Engagement Day', description: 'The beginning of our journey together', color: 'from-pink-500 to-rose-500' },
    { date: '2024-03-01', title: 'Venue Booking', description: 'Successfully booked the beautiful venue', color: 'from-blue-500 to-blue-600' },
    { date: '2024-03-15', title: 'Send Invitations', description: 'Invitations sent to all guests', color: 'from-purple-500 to-purple-600' },
    { date: '2024-03-20', title: 'Menu Tasting', description: 'Finalized catering menu with the team', color: 'from-orange-500 to-orange-600' },
    { date: '2024-03-25', title: 'Final Fittings', description: 'Wedding dress and suit final adjustments', color: 'from-green-500 to-green-600' },
    { date: '2024-04-01', title: 'Wedding Day', description: 'Our special day - Let the celebration begin!', color: 'from-pink-600 to-rose-600' },
  ];

  const totalEvents = timeline.length;
  const completedEvents = Math.floor(timeline.length * 0.6);
  const progressPercentage = (completedEvents / totalEvents) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-pink-600 to-rose-600 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Wedding Timeline</h1>
          <p className="text-pink-100 text-lg">All important dates and milestones</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center border-t-4 border-pink-600">
            <div className="text-4xl font-bold text-pink-600 mb-2">{totalEvents}</div>
            <div className="text-gray-600">Total Events</div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center border-t-4 border-blue-600">
            <div className="text-4xl font-bold text-blue-600 mb-2">{completedEvents}</div>
            <div className="text-gray-600">Completed</div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center border-t-4 border-green-600">
            <div className="text-4xl font-bold text-green-600 mb-2">{Math.round(progressPercentage)}%</div>
            <div className="text-gray-600">Progress</div>
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
          <p className="text-gray-600 mt-2 text-sm">You are {Math.round(progressPercentage)}% through your wedding planning</p>
        </div>

        {/* Timeline */}
        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Important Dates</h2>
          {timeline.map((event, index) => (
            <div key={index} className="flex gap-6 items-start">
              {/* Timeline Dot */}
              <div className="flex flex-col items-center">
                <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${event.color} shadow-lg`} />
                {index !== timeline.length - 1 && <div className="w-1 h-16 bg-gray-300 mt-2" />}
              </div>
              {/* Event Content */}
              <div className="flex-1 bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-800">{event.title}</h3>
                  <span className="text-sm font-semibold text-gray-600">{event.date}</span>
                </div>
                <p className="text-gray-600">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CalendarPage;
