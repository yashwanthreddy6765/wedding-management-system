'use client';

export default function CalendarPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50">
      <div className="bg-gradient-to-r from-pink-600 to-rose-600 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Wedding Timeline</h1>
          <p className="text-pink-100 text-lg">All important dates and milestones</p>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center border-t-4 border-pink-600">
            <div className="text-4xl font-bold text-pink-600 mb-2">6</div>
            <div className="text-gray-600">Total Events</div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6 text-center border-t-4 border-blue-600">
            <div className="text-4xl font-bold text-blue-600 mb-2">4</div>
            <div className="text-gray-600">Completed</div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6 text-center border-t-4 border-purple-600">
            <div className="text-4xl font-bold text-purple-600 mb-2">67%</div>
            <div className="text-gray-600">Progress</div>
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-pink-500">
            <h3 className="font-bold text-pink-600">Engagement Day - Feb 14, 2024</h3>
            <p className="text-gray-600 text-sm">The beginning of our journey together</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-blue-500">
            <h3 className="font-bold text-blue-600">Venue Booking - Mar 01, 2024</h3>
            <p className="text-gray-600 text-sm">Successfully booked the beautiful venue</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-purple-500">
            <h3 className="font-bold text-purple-600">Send Invitations - Mar 15, 2024</h3>
            <p className="text-gray-600 text-sm">Invitations sent to all guests</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-orange-500">
            <h3 className="font-bold text-orange-600">Menu Tasting - Mar 20, 2024</h3>
            <p className="text-gray-600 text-sm">Finalized catering menu with the team</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-green-500">
            <h3 className="font-bold text-green-600">Final Fittings - Mar 25, 2024</h3>
            <p className="text-gray-600 text-sm">Wedding dress and suit final adjustments</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-pink-600">
            <h3 className="font-bold text-pink-700">Wedding Day - Apr 01, 2024</h3>
            <p className="text-gray-600 text-sm">Our special day - Let the celebration begin!</p>
          </div>
        </div>
      </div>
    </div>
  );
}
