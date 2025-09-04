export default function Footer() {
  return (
    <footer className="text-white py-16" style={{ backgroundColor: '#7a360f' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Motto */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold mb-4">Our Mission</h3>
            <p className="text-white leading-relaxed">
              Providing quality animal bedding and erosion control devices for over 25 years!
            </p>
          </div>
          
          {/* Products */}
          <div>
            <h3 className="text-lg font-bold mb-4">Products</h3>
            <ul className="space-y-2 text-white">
              <li><a href="#" className="hover:text-gray-200 transition-colors">Fine Wood Shavings</a></li>
              <li><a href="#" className="hover:text-gray-200 transition-colors">Large Flake Shavings</a></li>
              <li><a href="#" className="hover:text-gray-200 transition-colors">Wattles (erosion control devices)</a></li>
              <li><a href="#" className="hover:text-gray-200 transition-colors">Other</a></li>
            </ul>
          </div>
          
                     {/* Company */}
           <div>
             <h3 className="text-lg font-bold mb-4">Company</h3>
             <ul className="space-y-2 text-white">
               <li><a href="#home" className="hover:text-gray-200 transition-colors">Home</a></li>
               <li><a href="#about" className="hover:text-gray-200 transition-colors">About Us</a></li>
               <li><a href="#products" className="hover:text-gray-200 transition-colors">Products</a></li>
               <li><a href="#contributions" className="hover:text-gray-200 transition-colors">Contributions</a></li>
               <li><a href="#contact" className="hover:text-gray-200 transition-colors">Contact us</a></li>
             </ul>
           </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <div className="space-y-2 text-white">
              <p><a href="https://www.google.com/maps/search/?api=1&query=100+N+Hwy+445+Maxwell,+NM+87728" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200 transition-colors">100 N Hwy 445 Maxwell, NM 87728</a></p>
              <p><a href="mailto:office@sdwoodproducts.com" className="hover:text-gray-200 transition-colors">office@sdwoodproducts.com</a></p>
              <p><a href="tel:+15753752636" className="hover:text-gray-200 transition-colors">+1 575-375-2636</a></p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white text-sm">
              Copyright © 2025 Silver Dollar Wood Products LLC
            </p>
            <p className="text-white text-sm mt-4 md:mt-0">
              Developed by Bytes Platform 
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
