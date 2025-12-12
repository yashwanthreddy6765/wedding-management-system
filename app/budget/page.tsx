'use client';

import { useState } from 'react';

const BudgetPage = () => {
  const [budgetItems, setBudgetItems] = useState([
    { id: 1, category: 'Venue', estimated: 5000, actual: 5200, status: 'Over Budget' },
    { id: 2, category: 'Catering', estimated: 6000, actual: 5800, status: 'On Track' },
    { id: 3, category: 'Decor', estimated: 2000, actual: 2100, status: 'Over Budget' },
    { id: 4, category: 'Photography', estimated: 2500, actual: 2500, status: 'On Track' },
    { id: 5, category: 'Music & Entertainment', estimated: 1500, actual: 1400, status: 'Under Budget' },
    { id: 6, category: 'Invitations', estimated: 400, actual: 350, status: 'Under Budget' },
  ]);

  const [newItem, setNewItem] = useState({
    category: '',
    estimated: '',
  });

  const totalEstimated = budgetItems.reduce((sum, item) => sum + item.estimated, 0);
  const totalActual = budgetItems.reduce((sum, item) => sum + item.actual, 0);
  const difference = totalEstimated - totalActual;
  const percentageUsed = (totalActual / totalEstimated) * 100;

  const getStatusColor = (status) => {
    switch(status) {
      case 'On Track': return 'bg-green-100 text-green-800';
      case 'Over Budget': return 'bg-red-100 text-red-800';
      case 'Under Budget': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleAddItem = () => {
    if (newItem.category && newItem.estimated) {
      setBudgetItems([...budgetItems, {
        id: Math.max(...budgetItems.map(i => i.id), 0) + 1,
        category: newItem.category,
        estimated: parseFloat(newItem.estimated),
        actual: 0,
        status: 'Not Started',
      }]);
      setNewItem({ category: '', estimated: '' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-pink-600 to-rose-600 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Budget Tracker</h1>
          <p className="text-pink-100 text-lg">Manage your wedding expenses</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Budget Summary */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-blue-600">
            <div className="text-gray-600 text-sm font-semibold uppercase">Total Estimated</div>
            <div className="text-3xl font-bold text-blue-600 mt-2 ">💵 ${totalEstimated.toLocaleString()}</div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-orange-600">
            <div className="text-gray-600 text-sm font-semibold uppercase">Total Spent</div>
            <div className="text-3xl font-bold text-orange-600 mt-2">💰 ${totalActual.toLocaleString()}</div>
          </div>
          <div className={`bg-white rounded-lg shadow-lg p-6 border-t-4 ${difference >= 0 ? 'border-green-600' : 'border-red-600'}`}>
            <div className="text-gray-600 text-sm font-semibold uppercase">Remaining</div>
            <div className={`text-3xl font-bold mt-2 ${difference >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              ${Math.abs(difference).toLocaleString()}
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-purple-600">
            <div className="text-gray-600 text-sm font-semibold uppercase">% Budget Used</div>
            <div className="text-3xl font-bold text-purple-600 mt-2">{Math.round(percentageUsed)}%</div>
          </div>
        </div>

        {/* Budget Progress Bar */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Budget Overview</h2>
          <div className="w-full bg-gray-200 rounded-full h-6 overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-500 ${
                percentageUsed > 100 ? 'bg-red-500' : 'bg-gradient-to-r from-pink-600 to-rose-600'
              }`}
              style={{ width: `${Math.min(percentageUsed, 100)}%` }}
            />
          </div>
          <p className="text-gray-600 mt-3 text-sm">
            {difference >= 0
              ? `You have $${difference.toLocaleString()} left in your budget`
              : `You are $${Math.abs(difference).toLocaleString()} over budget`}
          </p>
        </div>

        {/* Add Budget Item Form */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Add Budget Item</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="Category (e.g., Flowers)"
              value={newItem.category}
              onChange={(e) => setNewItem({...newItem, category: e.target.value})}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-pink-600"
            />
            <input
              type="number"
              placeholder="Estimated Cost"
              value={newItem.estimated}
              onChange={(e) => setNewItem({...newItem, estimated: e.target.value})}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-pink-600"
            />
          </div>
          <button
            onClick={handleAddItem}
            className="w-full bg-gradient-to-r from-pink-600 to-rose-600 text-white py-2 rounded-lg font-semibold hover:shadow-lg transition"
          >
            Add Item
          </button>
        </div>

        {/* Budget Items List */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 border-b">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Category</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Estimated</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Actual</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Difference</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Status</th>
                </tr>
              </thead>
              <tbody>
                {budgetItems.map((item) => {
                  const diff = item.estimated - item.actual;
                  return (
                    <tr key={item.id} className="border-b hover:bg-gray-50 transition">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">{item.category}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">${item.estimated.toLocaleString()}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">${item.actual.toLocaleString()}</td>
                      <td className={`px-6 py-4 text-sm font-semibold ${diff >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                        ${Math.abs(diff).toLocaleString()}
                      </td>
                      <td className="px-6 py-4 text-sm">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(item.status)}`}>
                          {item.status}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BudgetPage;
