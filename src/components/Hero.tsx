export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-800/60 z-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1200 800\"%3E%3Cdefs%3E%3ClinearGradient id=\"grad\" x1=\"0%25\" y1=\"0%25\" x2=\"100%25\" y2=\"100%25\"%3E%3Cstop offset=\"0%25\" style=\"stop-color:%236b7280;stop-opacity:1\" /%3E%3Cstop offset=\"100%25\" style=\"stop-color:%23374151;stop-opacity:1\" /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width=\"1200\" height=\"800\" fill=\"url(%23grad)\"/%3E%3Crect x=\"0\" y=\"600\" width=\"1200\" height=\"200\" fill=\"%23a3a3a3\"/%3E%3Ccircle cx=\"200\" cy=\"500\" r=\"50\" fill=\"%238b5cf6\"/%3E%3Ccircle cx=\"400\" cy=\"450\" r=\"40\" fill=\"%23f59e0b\"/%3E%3Ccircle cx=\"600\" cy=\"480\" r=\"45\" fill=\"%2310b981\"/%3E%3Ccircle cx=\"800\" cy=\"460\" r=\"35\" fill=\"%23ef4444\"/%3E%3Ccircle cx=\"1000\" cy=\"490\" r=\"42\" fill=\"%236b7280\"/%3E%3C/svg%3E')"
        }}
      ></div>
      
      <div className="relative z-20 text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Silver Dollar Wood Products LLC
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200">
          Family Owned and operated since 1993!
        </p>
        <div className="flex justify-center">
          <div className="w-8 h-8 border-2 border-white rounded-full flex items-center justify-center animate-bounce">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
