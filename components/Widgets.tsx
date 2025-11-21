import React from 'react';
import { Info, Plus } from 'lucide-react';

export const Widgets: React.FC = () => {
  const newsItems = [
    { title: "AI regulation talks heat up", time: "1d ago", readers: "10,934 readers" },
    { title: "Tech hiring stabilizes in Q3", time: "12h ago", readers: "5,211 readers" },
    { title: "Remote work trends 2025", time: "2h ago", readers: "8,120 readers" },
    { title: "Startup funding rounds", time: "4h ago", readers: "2,300 readers" },
    { title: "New CSS features released", time: "18h ago", readers: "15,455 readers" },
  ];

  return (
    <div className="hidden lg:block w-[300px] shrink-0 space-y-2">
      {/* News Card */}
      <div className="bg-white rounded-lg shadow-[0_0_0_1px_rgba(0,0,0,0.08)] p-4 pb-2">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-base font-semibold text-gray-900">LinkedIn News</h2>
          <Info className="w-4 h-4 text-gray-900 cursor-pointer fill-current" />
        </div>
        
        <ul className="space-y-4">
          {newsItems.map((item, idx) => (
            <li key={idx} className="cursor-pointer group">
              <div className="flex gap-2 items-start">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 group-hover:bg-gray-900 shrink-0"></div>
                <div>
                   <div className="text-sm font-semibold text-gray-900 group-hover:text-[#0a66c2] group-hover:underline line-clamp-2 leading-snug">
                     {item.title}
                   </div>
                   <div className="text-xs text-gray-500 mt-0.5">
                     {item.time} • {item.readers}
                   </div>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <button className="mt-4 mb-2 flex items-center gap-1 text-sm font-semibold text-gray-600 hover:bg-gray-100 px-2 py-1 rounded transition-colors">
          Show more <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor"><path d="M1 5l7 4.61L15 5v2.39L8 12 1 7.39z"/></svg>
        </button>
      </div>

      {/* Ad / Promo area */}
      <div className="bg-white rounded-lg shadow-[0_0_0_1px_rgba(0,0,0,0.08)] p-4 text-center relative overflow-hidden sticky top-[70px]">
        <div className="text-xs text-gray-500 absolute top-2 right-2">Ad</div>
        <div className="text-xs text-gray-500 mt-2">Master your future</div>
        <div className="flex justify-center items-center gap-4 my-4">
            <div className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden">
                <img src="https://picsum.photos/id/64/200/200" className="w-full h-full object-cover" />
            </div>
            <img 
                src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" 
                className="w-16 h-16 object-contain" 
                alt="Logo"
            />
        </div>
        <div className="text-sm text-gray-900 mb-4 px-4">
            See who's viewing your profile in the last 90 days
        </div>
        <button className="border border-[#0a66c2] text-[#0a66c2] font-semibold rounded-full px-6 py-1.5 hover:bg-[#eef3f8] hover:border-[#004182] hover:text-[#004182] transition-all">
            Try for free
        </button>
      </div>

      {/* Footer Links */}
      <div className="px-6 text-center">
        <div className="flex flex-wrap justify-center gap-x-3 gap-y-1 text-xs text-gray-500">
            <a href="#" className="hover:underline hover:text-[#0a66c2]">About</a>
            <a href="#" className="hover:underline hover:text-[#0a66c2]">Accessibility</a>
            <a href="#" className="hover:underline hover:text-[#0a66c2]">Help Center</a>
            <a href="#" className="hover:underline hover:text-[#0a66c2]">Privacy & Terms</a>
            <a href="#" className="hover:underline hover:text-[#0a66c2]">Ad Choices</a>
            <a href="#" className="hover:underline hover:text-[#0a66c2]">Advertising</a>
            <a href="#" className="hover:underline hover:text-[#0a66c2]">Business Services</a>
            <a href="#" className="hover:underline hover:text-[#0a66c2]">Get the LinkedIn app</a>
            <a href="#" className="hover:underline hover:text-[#0a66c2]">More</a>
        </div>
        <div className="mt-2 flex items-center justify-center gap-1">
           <span className="text-[#0a66c2] font-bold text-xs">Linked</span>
           <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" className="w-3 h-3" />
           <span className="text-xs text-gray-900">LinkedIn Corporation © 2023</span>
        </div>
      </div>
    </div>
  );
};