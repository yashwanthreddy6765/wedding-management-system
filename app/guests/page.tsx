'use client';

import { useState } from 'react';
import Link from 'next/link';

const GuestsPage = () => {
  const [guests, setGuests] = useState([
    { id: 1, name: 'Sarah Johnson', email: 'sarah@example.com', phone: '+1-555-0101', mealPreference: 'Vegetarian', rsvp: 'Confirmed', plus1: 'John Johnson' },
    { id: 2, name: 'Michael Chen', email: 'michael@example.com', phone: '+1-555-0102', mealPreference: 'Regular', rsvp: 'Confirmed', plus1: 'Emily Chen' },
    { id: 3, name: 'Emma Davis', email: 'emma@example.com', phone: '+1-555-0103', mealPreference: 'Vegan', rsvp: 'Pending', plus1: null },
    { id: 4, name: 'James Wilson', email: 'james@example.com', phone: '+1-555-0104', mealPreference: 'Regular', rsvp: 'Confirmed', plus1: null },
    { id: 5, name: 'Olivia Martinez', email: 'olivia@example.com', phone: '+1-555-0105', mealPreference: 'Vegetarian', rsvp: 'Declined', plus1: null },
  ]);

  const [newGuest, setNewGuest] = useState({
    name: '',
    email: '',
    phone: '',
    mealPreference: 'Regular',
  });

  const confirmedGuests = guests.filter(g => g.rsvp === 'Confirmed').length;
  const pendingGuests = guests.filter(g => g.rsvp === 'Pending').length;
  const declinedGuests = guests.filter(g => g.rsvp === 'Declined').length;

  const handleAddGuest = () => {
    if (newGuest.name && newGuest.email) {
      setGuests([...guests, {
        ...newGuest,
        id: Math.max(...guests.map(g => g.id), 0) + 1,
        rsvp: 'Pending',
        plus1: null,
      }]);
      setNewGuest({ name: '', email: '', phone: '', mealPreference: 'Regular' });
    }
  };

  const getRsvpColor = (rsvp) => {
    switch(rsvp) {
      case 'Confirmed': return 'bg-green-100 text-green-800';
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      case 'Declined': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-pink-600 to-rose-600 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Guest Management</h1>
          <p className="text-pink-100 text-lg">Track your guests and RSVPs</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-pink-600">
            <div className="text-gray-600 text-sm font-semibold uppercase">Total Guests</div>
            <div className="text-3xl font-bold text-pink-600 mt-2">{guests.length}</div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-green-600">
            <div className="text-gray-600 text-sm font-semibold uppercase">Confirmed</div>
            <div className="text-3xl font-bold text-green-600 mt-2">{confirmedGuests}</div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-yellow-600">
            <div className="text-gray-600 text-sm font-semibold uppercase">Pending</div>
            <div className="text-3xl font-bold text-yellow-600 mt-2">{pendingGuests}</div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-red-600">
            <div className="text-gray-600 text-sm font-semibold uppercase">Declined</div>
            <div className="text-3xl font-bold text-red-600 mt-2">{declinedGuests}</div>
          </div>
        </div>

        {/* Add Guest Form */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Add New Guest</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="Guest Name"
              value={newGuest.name}
              onChange={(e) => setNewGuest({...newGuest, name: e.target.value})}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-pink-600"
            />
            <input
              type="email"
              placeholder="Email Address"
              value={newGuest.email}
              onChange={(e) => setNewGuest({...newGuest, email: e.target.value})}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-pink-600"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={newGuest.phone}
              onChange={(e) => setNewGuest({...newGuest, phone: e.target.value})}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-pink-600"
            />
            <select
              value={newGuest.mealPreference}
              onChange={(e) => setNewGuest({...newGuest, mealPreference: e.target.value})}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-pink-600"
            >
              <option>Regular</option>
              <option>Vegetarian</option>
              <option>Vegan</option>
              <option>Gluten-Free</option>
            </select>
          </div>
          <button
            onClick={handleAddGuest}
            className="w-full bg-gradient-to-r from-pink-600 to-rose-600 text-white py-2 rounded-lg font-semibold hover:shadow-lg transition"
          >
            Add Guest
          </button>
        </div>

        {/* Guest List */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 border-b">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Guest Name</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Email</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Meal Preference</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Plus One</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">RSVP Status</th>
                </tr>
              </thead>
              <tbody>
                {guests.map((guest) => (
                  <tr key={guest.id} className="border-b hover:bg-gray-50 transition">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{guest.name}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{guest.email}</td>
                    <td className="px-6 py-4 text-sm text-gray-600"><span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs">{guest.mealPreference}</span></td>
                    <td className="px-6 py-4 text-sm text-gray-600">{guest.plus1 || '-'}</td>
                    <td className="px-6 py-4 text-sm">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getRsvpColor(guest.rsvp)}`}>
                        {guest.rsvp}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuestsPage;
