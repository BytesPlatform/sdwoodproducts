export default function MapSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Find Us</h2>
          <p className="text-xl text-gray-600">Visit our location or get directions</p>
          <div className="w-24 h-1 bg-amber-800 mx-auto mt-4"></div>
        </div>
        
        <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-xl">
          <div className="h-96 bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Silver Dollar Wood Products LLC</h3>
              <p className="text-gray-600 mb-4">Your trusted wood products supplier</p>
                              <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-amber-800 text-white px-6 py-3 rounded-lg hover:bg-amber-900 transition-colors font-medium"
                >
                  Get Directions
                </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
