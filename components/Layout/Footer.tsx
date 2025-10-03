export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center mb-4">
              <img src="/Teilor.png" alt="Teilor Logo" className="w-[7rem] h-[3rem]" />
            </div>
            <p className="text-gray-400">Streamlining tailoring businesses worldwide.</p>
          </div>
          
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 text-center md:text-left">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
            <a href="mailto:support@hallatechnologies.com" className="text-gray-400 hover:text-white transition-colors">support@hallatechnologies.com</a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} Teilor. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};