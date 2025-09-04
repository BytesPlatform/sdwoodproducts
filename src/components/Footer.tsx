export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Motto */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold mb-4">Our Mission</h3>
            <p className="text-gray-300 leading-relaxed">
              Providing quality animal bedding and erosion control devices for over 25 years!
            </p>
          </div>
          
          {/* Products */}
          <div>
            <h3 className="text-lg font-bold mb-4">Products</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Fine Wood Shavings</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Large Flake Shavings</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Wattles (erosion control devices)</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Other</a></li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact us</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <div className="space-y-2 text-gray-300">
              <p>Silver Dollar Wood Products LLC</p>
              <p>Family owned since 1993</p>
              <p>Quality & Service Guaranteed</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              Copyright © 2025 Silver Dollar Wood Products LLC
            </p>
            <p className="text-gray-400 text-sm mt-4 md:mt-0">
              Powered by Silver Dollar Wood Products LLC
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
