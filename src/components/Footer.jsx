import { siteMeta } from '../data/siteData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* About */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-blue-400">About</h3>
              <p className="text-slate-400">
                A passionate full-stack developer creating beautiful web experiences with modern technologies.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-blue-400">Quick Links</h3>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a href="#home" className="hover:text-blue-400 transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-blue-400 transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#projects" className="hover:text-blue-400 transition-colors">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-blue-400 transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-blue-400">Follow Me</h3>
              <div className="flex gap-4">
                <a
                  href={siteMeta.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-blue-400 transition-colors text-xl"
                >
                  🐙
                </a>
                <a
                  href={siteMeta.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-blue-400 transition-colors text-xl"
                >
                  💼
                </a>
                <a
                  href={siteMeta.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-blue-400 transition-colors text-xl"
                >
                  🐦
                </a>
                <a
                  href={`mailto:${siteMeta.email}`}
                  className="text-slate-400 hover:text-blue-400 transition-colors text-xl"
                >
                  📧
                </a>
              </div>
            </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-8">
          {/* Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm text-center md:text-left">
              &copy; {currentYear} Mandiga Chandra Bhanu. All rights reserved.
            </p>
            <p className="text-slate-500 text-sm">
              Designed & Built with{' '}
              <span className="text-blue-400">❤️</span> using React, Vite & Tailwind CSS
            </p>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="mt-8 mx-auto block text-slate-400 hover:text-blue-400 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>
    </footer>
  );
}
