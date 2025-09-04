export default function OurContributions() {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Contributions</h2>
          <p className="text-xl text-gray-600">Companies/People We Serve!</p>
          <div className="w-24 h-1 bg-amber-800 mx-auto mt-4"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Racetracks/Agricultural Supply Stores */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                          <div className="h-64 bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-amber-800 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <div className="w-32 h-16 bg-white rounded border-2 border-amber-300 flex items-center justify-center">
                    <span className="text-xs font-bold text-amber-800">SILVER DOLLAR</span>
                  </div>
                </div>
              </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Racetracks/Agricultural Supply Stores</h3>
              <p className="text-gray-600">
                Wood shavings make stall clean-up easy and they promote animal health by keeping feet dry.
              </p>
            </div>
          </div>

          {/* Zoos and Large Farms */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="h-64 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div className="text-4xl">🦒</div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Zoos and Large Farms</h3>
              <p className="text-gray-600">
                Our shavings are trusted by some of the largest zoos in the SW region of the US. Ask about their benefits today!
              </p>
            </div>
          </div>

          {/* Post Fire Clean-Up and Construction */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="h-64 bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <div className="w-24 h-8 bg-orange-400 rounded-full"></div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Post Fire Clean-Up and Construction</h3>
              <p className="text-gray-600">
                Run-off after fires or construction projects can be dangerous and hazardous to water health. Wattles can help!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
