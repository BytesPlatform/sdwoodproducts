export default function AboutUs() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Us</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Over 30 years of experience serving agricultural customers
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              We are a leader in the manufacturing and distribution of quality wood shavings and wood-filled erosion control wattles. We utilize environmentally friendly harvesting procedures to protect our forests from fire and unhealthy run-off by working closely with local forest agencies during harvesting.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We look forward to doing business with you! Fill out a new customer form below to get started.
            </p>
            <a
              href="#contact"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              New Customer Form
            </a>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">30+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">1000+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-3xl font-bold text-yellow-600 mb-2">24/7</div>
              <div className="text-gray-600">Support</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">Eco</div>
              <div className="text-gray-600">Friendly</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
