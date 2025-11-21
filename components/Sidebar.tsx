import React, { useState } from 'react';
import { User, SidebarStats } from '../types';
import { Bookmark, Plus } from 'lucide-react';
import { ProfileModal } from './ProfileModal';

interface SidebarProps {
  user: User;
  stats: SidebarStats;
}

export const Sidebar: React.FC<SidebarProps> = ({ user, stats }) => {
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

  return (
    <div className="space-y-2 w-full md:w-[225px] shrink-0">
      {/* Profile Card */}
      <div className="bg-white rounded-lg shadow-[0_0_0_1px_rgba(0,0,0,0.08)] overflow-hidden relative">
        {/* Banner Background */}
        <div className="h-14 relative bg-[#A0B4B7]">
          <img 
             src={user.bgUrl || "https://picsum.photos/800/200?grayscale"} 
             className="w-full h-full object-cover opacity-60"
             alt="Background"
          />
        </div>
        
        {/* Avatar - Clickable */}
        <div 
          className="absolute top-6 left-1/2 -translate-x-1/2 cursor-pointer group"
          onClick={() => setIsProfileModalOpen(true)}
        >
            <div className="w-[72px] h-[72px] rounded-full border-2 border-white overflow-hidden shadow-sm bg-white">
                <img 
                    src={user.avatarUrl} 
                    alt={user.name} 
                    className="w-full h-full object-cover"
                />
            </div>
        </div>

        <div className="pt-14 pb-4 text-center px-3 border-b border-gray-200">
          <div className="mt-2">
            <a href="#" className="font-semibold text-gray-900 hover:underline text-base block leading-tight">
              {user.name}
            </a>
          </div>
          <p className="text-xs text-gray-500 mt-1 leading-snug">{user.headline}</p>
        </div>

        <div className="py-3 border-b border-gray-200">
            <div className="flex justify-between items-center px-3 py-1 hover:bg-gray-100 cursor-pointer transition-colors">
                <span className="text-xs text-gray-500 font-semibold">Profile viewers</span>
                <span className="text-xs text-[#0a66c2] font-bold">{stats.profileViews}</span>
            </div>
            <div className="flex justify-between items-center px-3 py-1 hover:bg-gray-100 cursor-pointer transition-colors">
                <div className="flex flex-col">
                    <span className="text-xs text-gray-500 font-semibold">Connections</span>
                    <span className="text-xs text-gray-900 font-bold">Grow your network</span>
                </div>
                <span className="text-xs text-[#0a66c2] font-bold">{stats.connections}</span>
            </div>
        </div>

        <div className="px-3 py-3 hover:bg-gray-100 cursor-pointer border-b border-gray-200 text-left group">
           <span className="text-xs text-gray-500 block">Access exclusive tools & insights</span>
           <div className="flex items-center gap-1">
             <div className="w-3 h-3 bg-yellow-600 rounded-[1px]"></div>
             <span className="text-xs text-gray-900 font-semibold group-hover:text-[#0a66c2] underline decoration-transparent group-hover:decoration-[#0a66c2]">Try Premium for $0</span>
           </div>
        </div>

        <div className="px-3 py-3 hover:bg-gray-100 cursor-pointer flex items-center gap-2 text-gray-700">
           <Bookmark className="w-4 h-4 fill-gray-500 text-gray-500" />
           <span className="text-xs font-semibold">My items</span>
        </div>
      </div>

      {/* Recent Card */}
      <div className="bg-white rounded-lg shadow-[0_0_0_1px_rgba(0,0,0,0.08)] overflow-hidden py-2 sticky top-[70px]">
        <div className="px-3 pb-2">
           <p className="text-xs text-gray-900 font-normal">Recent</p>
        </div>
        
        <ul className="space-y-0">
           {[
               "React Developers", 
               "TypeScript Enthusiasts", 
               "Frontend Architecture", 
               "Tailwind CSS Community", 
               "Web Performance"
           ].map((item, idx) => (
               <li key={idx} className="flex items-center gap-2 px-3 py-1 hover:bg-gray-100 cursor-pointer text-xs text-gray-500 font-semibold group">
                   <span className="text-lg font-bold text-gray-500 group-hover:text-gray-900">#</span>
                   <span className="truncate group-hover:text-gray-900 group-hover:underline">{item.replace(/\s+/g, '').toLowerCase()}</span>
               </li>
           ))}
        </ul>
        
        <div className="px-3 pt-3 mt-1 border-t border-gray-100">
             <a href="#" className="text-xs text-[#0a66c2] font-semibold hover:underline">Groups</a>
        </div>
         <div className="px-3 pt-2 flex justify-between items-center hover:bg-gray-100 cursor-pointer py-1">
             <a href="#" className="text-xs text-[#0a66c2] font-semibold hover:underline">Events</a>
             <Plus className="w-4 h-4 text-gray-600" />
        </div>
        <div className="px-3 pt-1 pb-2">
             <a href="#" className="text-xs text-[#0a66c2] font-semibold hover:underline">Followed Hashtags</a>
        </div>

        <div className="border-t border-gray-200 pt-3 text-center hover:bg-gray-100 cursor-pointer py-3 transition-colors">
            <span className="text-sm text-gray-500 font-semibold">Discover more</span>
        </div>
      </div>

      <ProfileModal 
        isOpen={isProfileModalOpen} 
        onClose={() => setIsProfileModalOpen(false)} 
        imageUrl={user.avatarUrl}
        altText={user.name}
      />
    </div>
  );
};