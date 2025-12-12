'use client';

import { useState } from 'react';

export default function GuestsPage() {
  const [guests] = useState([
    { id: 1, name: 'Sarah Johnson', email: 'sarah@example.com', status: 'Confirmed', mealPreference: 'Vegetarian' },
    { id: 2, name: 'Michael Chen', email: 'michael@example.com', status: 'Confirmed', mealPreference: 'Regular' },
    { id: 3, name: 'Emma Davis', email: 'emma@example.com', status: 'Pending', mealPreference: 'Vegan' },
    { id: 4, name: 'James Wilson', email: 'james@example.com', status: 'Confirmed', mealPreference: 'Regular' },
    { id: 5, name: 'Olivia Martinez', email: 'olivia@example.com', status: 'Declined', mealPreference: null },
  ]);

  const confirmedCount = guests.filter((g: any) => g.status === 'Confirmed').length;
  const pendingCount = guests.filter((g: any) => g.status === 'Pending').length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50">
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Guest Management</h1>
          <p className="text-purple-100 text-lg">Track RSVPs and meal preferences</p>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center border-t-4 border-purple-600">
            <div className="text-4xl font-bold text-purple-600 mb-2">{guests.length}</div>
            <div className="text-gray-600">Total Guests</div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6 text-center border-t-4 border-green-600">
            <div className="text-4xl font-bold text-green-600 mb-2">{confirmedCount}</div>
            <div className="text-gray-600">Confirmed</div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6 text-center border-t-4 border-yellow-600">
            <div className="text-4xl font-bold text-yellow-600 mb-2">{pendingCount}</div>
            <div className="text-gray-600">Pending</div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-100 border-b-2 border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left font-semibold text-gray-800">Name</th>
                <th className="px-6 py-4 text-left font-semibold text-gray-800">Email</th>
                <th className="px-6 py-4 text-left font-semibold text-gray-800">Status</th>
                <th className="px-6 py-4 text-left font-semibold text-gray-800">Meal Preference</th>
              </tr>
            </thead>
            <tbody>
              {guests.map((guest: any) => (
                <tr key={guest.id} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="px-6 py-4">{guest.name}</td>
                  <td className="px-6 py-4">{guest.email}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      guest.status === 'Confirmed' ? 'bg-green-100 text-green-800' :
                      guest.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {guest.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">{guest.mealPreference || 'N/A'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
