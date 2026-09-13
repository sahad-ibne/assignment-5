export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-slate-100 mt-16 pt-12 pb-8 text-slate-500 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 text-center md:text-left">
          

          <div className="md:col-span-2 max-w-sm flex flex-col items-center md:items-start space-y-4 mx-auto md:mx-0">
            <div className="flex items-center space-x-2">
              <span className="bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold px-2 py-1 rounded-lg text-sm">
                DS
              </span>
              <span className="text-xl font-bold text-slate-900">
                Dev <span className="text-pink-500">Stack</span>
              </span>
            </div>
            <p className="text-slate-500 text-sm">
              Curated tools, technologies, and resources for developers building modern software.
            </p>
            <div className="flex items-center space-x-4 pt-1 text-slate-700 font-medium">
              <a href=" ">GitHub</a>
              <span className="text-slate-300 md:hidden">•</span>
              <a href=" ">Twitter</a>
              <span className="text-slate-300 md:hidden">•</span>
              <a href=" ">LinkedIn</a>
            </div>
          </div>

          <div className="hidden md:grid md:col-span-3 grid-cols-3 gap-12 lg:gap-16 pt-1">
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-slate-900">PRODUCT</h4>
              <ul className="space-y-2">
                <li><a href=" ">Home</a></li>
                <li><a href=" ">Technologies</a></li>
                <li><a href=" ">Projects</a></li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-bold text-slate-900">COMPANY</h4>
              <ul className="space-y-2">
                <li><a href=" ">About</a></li>
                <li><a href=" ">Contact</a></li>
                <li><a href=" ">Careers</a></li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-bold text-slate-900">LEGAL</h4>
              <ul className="space-y-2">
                <li><a href=" ">Privacy Policy</a></li>
                <li><a href=" ">Terms of Service</a></li>
              </ul>
            </div>
          </div>

        </div>
        <div className="border-t border-slate-100 my-8"></div>

        <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-slate-400 gap-4">
          <p>@ 2026 Dev Stack. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href=" ">Privacy</a>
            <a href=" ">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}