export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-100">
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center space-y-6">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-pink-900 mb-4">
            ✨ WedHub
          </h1>
          <p className="text-xl md:text-2xl text-pink-700 mb-6">
            A Beautiful, Modern Wedding Management Platform
          </p>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
            Plan your perfect wedding with our comprehensive management platform. Beautiful UI, smooth animations, and everything you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-all duration-300 font-semibold">
              Get Started
            </button>
            <button className="px-8 py-3 border-2 border-pink-600 text-pink-600 rounded-lg hover:bg-pink-50 transition-all duration-300 font-semibold">
              Learn More
            </button>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-3 gap-8">
        <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <div className="text-4xl mb-4">💎</div>
          <h3 className="text-2xl font-serif font-bold text-pink-900 mb-3">Beautiful Design</h3>
          <p className="text-gray-600">Elegant blush pink and rose gold color scheme with smooth animations and transitions.</p>
        </div>
        <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <div className="text-4xl mb-4">🚀</div>
          <h3 className="text-2xl font-serif font-bold text-pink-900 mb-3">Fast & Responsive</h3>
          <p className="text-gray-600">Built with Next.js 15, TypeScript, and Tailwind CSS for optimal performance.</p>
        </div>
        <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <div className="text-4xl mb-4">♿</div>
          <h3 className="text-2xl font-serif font-bold text-pink-900 mb-3">Accessible</h3>
          <p className="text-gray-600">WCAG 2.1 Level AA compliant with semantic HTML and proper ARIA labels.</p>
        </div>
      </section>

      <footer className="bg-pink-900 text-white text-center py-8 mt-16">
        <p>&copy; 2025 WedHub. Made with ❤️ for beautiful weddings. ✨</p>
      </footer>
    </main>
  )
}
