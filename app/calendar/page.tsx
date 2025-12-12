'use client';

import { useState } from 'react';

const CalendarPage = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const timeline = [
    { date: '2024-02-14', title: 'Engagement Day', description: 'The beginning of our journey together', color: 'from-pink-500 to-rose-500' },
    { date: '2024-03-01', title: 'Venue Booking', description: 'Successfully booked the beautiful venue', color: 'from-blue-500 to-blue-600' },
    { date: '2024-03-15', title: 'Send Invitations', description: 'Invitations sent to all guests', color: 'from-purple-500 to-purple-600' },
    { date: '2024-03-20', title: 'Menu Tasting', description: 'Finalized catering menu with the team', color: 'from-orange-500 to-orange-600' },
    { date: '2024-03-25', title: 'Final Fittings', description: 'Wedding dress and suit final adjustments', color: 'from-green-500 to-green-600' },
    { date: '2024-04-01', title: 'Wedding Day', description: 'Our special day - Let the celebration begin!', color: 'from-pink-600 to-rose-600' },
  ];

  const upcomingEvents = timeline.filter(event => new Date(event.date) > new Date());

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
        {/* Timeline Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center border-t-4 border-pink-600">
            <div className="text-4xl font-bold text-pink-600 mb-2">{timeline.length}</div>
            <div className="text-gray-600">Total Events</div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center border-t-4 border-blue-600">
            <div className="text-4xl font-bold text-blue-600 mb-2">{upcomingEvents.length}</div>
            <div className="text-gray-600">Upcoming Events</div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center border-t-4 border-green-600">
            <div className="text-4xl font-bold text-green-600 mb-2">{Math.ceil((timeline.length - upcomingEvents.length) / timeline.length * 100)}%</div>
            <div className="text-gray-600">Completed</div>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-pink-300 via-pink-200 to-pink-100"></div>

          {/* Timeline Events */}
          <div className="space-y-12">
            {timeline.map((event, index) => {
              const isUpcoming = new Date(event.date) > new Date();
              return (
                <div key={index} className={`relative flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  {/* Content */}
                  <div className="w-1/2 px-6">
                    <div
                      className={`bg-gradient-to-r ${event.color} rounded-lg shadow-lg p-6 text-white transform transition hover:scale-105 ${
                        isUpcoming ? 'opacity-100' : 'opacity-90'
                      }`}
                    >
                      <div className="text-sm font-semibold mb-2 opacity-90">{event.date}</div>
                      <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                      <p className="text-sm opacity-90">{event.description}</p>
                      {isUpcoming && (
                        <div className="mt-4 inline-block bg-white bg-opacity-20 px-3 py-1 rounded-full text-xs font-semibold">
                          ⏰ Upcoming
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Dot */}
                  <div className="w-auto flex justify-center items-center">
                    <div className={`w-6 h-6 rounded-full border-4 border-white shadow-lg transform transition ${
                      isUpcoming
                        ? `bg-gradient-to-r ${event.color} scale-125`
                        : 'bg-gradient-to-r from-green-400 to-green-500'
                    }`}>
                    </div>
                  </div>

                  {/* Empty Space */}
                  <div className="w-1/2"></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Key Dates Section */}
        <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Key Dates to Remember</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {timeline.map((event, index) => (
              <div
                key={index}
                className="p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg border-l-4 border-pink-600 hover:shadow-lg transition"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-gray-800">{event.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{event.date}</p>
                  </div>
                  <span className={`${ isUpcoming ? 'inline-block bg-yellow-100 text-yellow-800' : 'inline-block bg-green-100 text-green-800'}`}                  }>
                    {new Date(event.date) > new Date() ? '✓ Upcoming' : '✓ Done'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarPage;
