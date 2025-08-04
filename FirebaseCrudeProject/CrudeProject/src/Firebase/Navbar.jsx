import React from 'react';

export default function Navbar({ theme,setTheme }) {
    const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }
  return (
    <nav
  className={
    theme === 'light'
      ? 'bg-white text-black shadow-md transition-all duration-300'
      : 'bg-gray-800 text-white shadow-md transition-all duration-300'
  }
>
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold">MyLogo</div>

        {/* Menu */}
        <ul className="flex space-x-8">
          {['Home', 'About', 'Services', 'Contact'].map((item, index) => (
            <li key={index} className="relative group">
              <a
                href="#"
                className="font-medium transition-colors duration-300 group-hover:text-indigo-600"
              >
                {item}
                {/* Underline Animation */}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>
        <button
          onClick={toggleTheme}
          className="ml-6 p-2 rounded-full hover:bg-purple-100 dark:hover:bg-purple-800 transition"
          aria-label="Toggle Theme"
        >
          {theme === 'light' ? (
            // Moon Icon for Dark Mode
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 12.79A9 9 0 0111.21 3 7 7 0 0012 21a9 9 0 009-8.21z"
              />
            </svg>
          ) : (
            // Sun Icon for Light Mode
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v1m0 16v1m8.66-9h-1M4.34 12h-1m15.36 4.95l-.71-.71M6.05 6.05l-.71-.71m12.02 0l-.71.71M6.76 17.24l-.71.71M12 8a4 4 0 100 8 4 4 0 000-8z"
              />
            </svg>
          )}
        </button>
      </div>
    </nav>
  );
}
