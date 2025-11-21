import React from 'react';
import { 
  Search, 
  Home, 
  Users, 
  Briefcase, 
  MessageSquare, 
  Bell, 
  Grid
} from 'lucide-react';

interface HeaderProps {
  userAvatar: string;
  activePage: string;
  onNavigate: (page: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ userAvatar, activePage, onNavigate }) => {
  const navItems = [
    { icon: Home, label: 'Home' },
    { icon: Users, label: 'My Network' },
    { icon: Briefcase, label: 'Jobs' },
    { icon: MessageSquare, label: 'Messaging' },
    { icon: Bell, label: 'Notifications' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 px-4 lg:px-0">
      <div className="max-w-7xl mx-auto h-[52px] flex items-center justify-between">
        {/* Logo & Search */}
        <div className="flex items-center gap-2">
          <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('Home'); }} className="text-[#0a66c2]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-9 h-9">
              <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
            </svg>
          </a>
          <div className="hidden md:flex items-center bg-[#EDF3F8] px-3 py-1.5 rounded-sm w-[280px] transition-all focus-within:w-[380px] focus-within:border-[#000] border border-transparent">
            <Search className="w-4 h-4 text-gray-600 mr-2" />
            <input 
              type="text" 
              placeholder="Search" 
              className="bg-transparent border-none outline-none text-sm w-full placeholder-gray-600 font-light"
            />
          </div>
          <div className="md:hidden flex items-center justify-center w-10 h-10 text-gray-600 hover:bg-gray-100 rounded-full cursor-pointer">
             <Search className="w-6 h-6" />
          </div>
        </div>

        {/* Nav Links */}
        <nav className="flex items-center h-full gap-1 sm:gap-6 md:gap-8">
          <ul className="flex h-full items-center gap-1 sm:gap-6 md:gap-8">
            {navItems.map((item) => (
              <li 
                key={item.label} 
                className={`flex flex-col items-center justify-center cursor-pointer h-full border-b-2 min-w-[50px] sm:min-w-[60px] px-1 ${
                  activePage === item.label 
                    ? 'border-black text-black' 
                    : 'border-transparent text-gray-500 hover:text-black'
                }`}
                onClick={() => onNavigate(item.label)}
              >
                <item.icon className={`w-6 h-6 ${activePage === item.label ? 'fill-current' : ''}`} strokeWidth={1.5} />
                <span className="text-[10px] sm:text-xs hidden md:block mt-0.5">{item.label}</span>
              </li>
            ))}
            
            {/* Me Menu */}
            <li className="flex flex-col items-center justify-center cursor-pointer h-full border-b-2 border-transparent text-gray-500 hover:text-black min-w-[50px] sm:min-w-[60px] px-1">
              <img 
                src={userAvatar} 
                alt="Me" 
                className="w-6 h-6 rounded-full object-cover border border-gray-200"
              />
              <div className="flex items-center mt-0.5">
                <span className="text-[10px] sm:text-xs hidden md:block mr-0.5">Me</span>
                <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor" className="hidden md:block w-3 h-3">
                  <path d="M8 11L3 6h10z" />
                </svg>
              </div>
            </li>

             {/* Work Menu */}
            <li className="flex flex-col items-center justify-center cursor-pointer h-full border-b-2 border-transparent text-gray-500 hover:text-black border-l border-gray-200 pl-6 hidden sm:flex">
              <Grid className="w-6 h-6" strokeWidth={1.5} />
              <div className="flex items-center mt-0.5">
                <span className="text-[10px] sm:text-xs hidden md:block mr-0.5">For Business</span>
                <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor" className="hidden md:block w-3 h-3">
                  <path d="M8 11L3 6h10z" />
                </svg>
              </div>
            </li>
          </ul>
          
          <div className="hidden lg:block text-xs text-[#915907] underline text-center w-24 cursor-pointer hover:text-[#915907]">
            Try Premium for $0
          </div>
        </nav>
      </div>
    </header>
  );
};