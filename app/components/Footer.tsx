'use client';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-pink-400">WedHub</h3>
            <p className="text-gray-300 text-sm">Making wedding planning beautiful and stress-free for every couple.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-pink-400">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="text-gray-300 hover:text-pink-400 transition">Home</a></li>
              <li><a href="/dashboard" className="text-gray-300 hover:text-pink-400 transition">Dashboard</a></li>
              <li><a href="/guests" className="text-gray-300 hover:text-pink-400 transition">Guests</a></li>
              <li><a href="/budget" className="text-gray-300 hover:text-pink-400 transition">Budget</a></li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-pink-400">Features</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/gallery" className="text-gray-300 hover:text-pink-400 transition">Gallery</a></li>
              <li><a href="/calendar" className="text-gray-300 hover:text-pink-400 transition">Calendar</a></li>
              <li><a href="#" className="text-gray-300 hover:text-pink-400 transition">Vendors</a></li>
              <li><a href="#" className="text-gray-300 hover:text-pink-400 transition">Templates</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-pink-400">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>📧 info@wedhub.com</li>
              <li>📞 +1 (555) 123-4567</li>
              <li>📍 123 Love Street, Wedding City</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2025 WedHub. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-pink-400 transition">Facebook</a>
              <a href="#" className="text-gray-400 hover:text-pink-400 transition">Instagram</a>
              <a href="#" className="text-gray-400 hover:text-pink-400 transition">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-pink-400 transition">Pinterest</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
