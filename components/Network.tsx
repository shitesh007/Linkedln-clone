import React from 'react';
import { Users, UserPlus, ChevronDown } from 'lucide-react';

export const Network: React.FC = () => {
  const sidebarItems = [
    { label: 'Connections', count: 1543 },
    { label: 'Contacts', count: 412 },
    { label: 'Following & Followers', count: '' },
    { label: 'Groups', count: 12 },
    { label: 'Events', count: 4 },
    { label: 'Pages', count: 33 },
    { label: 'Newsletters', count: 5 },
    { label: 'Hashtags', count: 8 },
  ];

  const people = [
    { name: 'Sarah Williams', role: 'UX Designer at Google', mutual: 12, img: 'https://picsum.photos/id/101/200/200' },
    { name: 'Michael Brown', role: 'Senior Frontend Dev', mutual: 45, img: 'https://picsum.photos/id/102/200/200' },
    { name: 'Emily Chen', role: 'Product Manager', mutual: 8, img: 'https://picsum.photos/id/103/200/200' },
    { name: 'David Wilson', role: 'Full Stack Engineer', mutual: 23, img: 'https://picsum.photos/id/104/200/200' },
    { name: 'Jessica Lee', role: 'Recruiter at Amazon', mutual: 2, img: 'https://picsum.photos/id/106/200/200' },
    { name: 'Ryan Miller', role: 'Software Architect', mutual: 67, img: 'https://picsum.photos/id/107/200/200' },
    { name: 'Amanda Taylor', role: 'Data Scientist', mutual: 15, img: 'https://picsum.photos/id/108/200/200' },
    { name: 'James Anderson', role: 'DevOps Engineer', mutual: 31, img: 'https://picsum.photos/id/109/200/200' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
      {/* Sidebar */}
      <div className="md:col-span-4 lg:col-span-3">
        <div className="bg-white rounded-lg shadow-[0_0_0_1px_rgba(0,0,0,0.08)] overflow-hidden">
          <h3 className="px-4 py-3 text-base text-gray-900 font-semibold border-b border-gray-100">Manage my network</h3>
          <div>
            {sidebarItems.map((item, idx) => (
              <div key={idx} className="flex justify-between items-center px-4 py-3 hover:bg-gray-100 cursor-pointer text-gray-600 hover:text-gray-900">
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5" />
                  <span className="text-sm">{item.label}</span>
                </div>
                <span className="text-sm font-light">{item.count}</span>
              </div>
            ))}
          </div>
          <div className="px-4 py-3 border-t border-gray-100 text-center">
             <button className="text-sm text-gray-500 font-semibold hover:underline flex items-center justify-center w-full gap-1">
               Show less <ChevronDown className="w-4 h-4 rotate-180" />
             </button>
          </div>
        </div>
        
        {/* Ad placeholder */}
        <div className="mt-2 bg-white rounded-lg shadow-[0_0_0_1px_rgba(0,0,0,0.08)] p-4 text-center hidden md:block">
           <span className="text-xs text-gray-500">Ad</span>
           <div className="mt-2 mb-4 font-semibold text-gray-700">Master your skills</div>
           <div className="w-16 h-16 bg-gray-200 mx-auto rounded-md mb-3"></div>
           <button className="text-[#0a66c2] border border-[#0a66c2] rounded-full px-4 py-1 font-semibold text-sm hover:bg-[#edf3f8]">Learn more</button>
        </div>
      </div>

      {/* Main Content */}
      <div className="md:col-span-8 lg:col-span-9 space-y-4">
        {/* Invitations */}
        <div className="bg-white rounded-lg shadow-[0_0_0_1px_rgba(0,0,0,0.08)] p-4">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-gray-900 font-semibold">Invitations</h3>
            <button className="text-sm font-semibold text-gray-500 hover:bg-gray-100 px-2 py-1 rounded">Manage</button>
          </div>
          <div className="py-3 border-t border-gray-100 flex items-center justify-between">
             <div className="flex items-center gap-3">
                <img src="https://picsum.photos/id/201/80/80" className="w-16 h-16 rounded-full object-cover" alt="Inviter"/>
                <div>
                   <div className="font-semibold text-gray-900">Robert Fox</div>
                   <div className="text-sm text-gray-500">Head of Engineering at TechFlow</div>
                   <div className="text-xs text-gray-400 mt-1">🎥 In common: React Summit</div>
                </div>
             </div>
             <div className="flex gap-2">
                <button className="font-semibold text-gray-500 hover:bg-gray-100 px-4 py-1.5 rounded-full transition-colors">Ignore</button>
                <button className="font-semibold text-[#0a66c2] border border-[#0a66c2] hover:bg-[#edf3f8] px-4 py-1.5 rounded-full transition-colors">Accept</button>
             </div>
          </div>
        </div>

        {/* People you may know */}
        <div className="bg-white rounded-lg shadow-[0_0_0_1px_rgba(0,0,0,0.08)] p-4">
           <div className="flex justify-between items-center mb-4">
            <h3 className="text-gray-900 font-semibold">People you may know</h3>
            <button className="text-sm font-semibold text-gray-500 hover:bg-gray-100 px-2 py-1 rounded">See all</button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
             {people.map((person, i) => (
                <div key={i} className="border border-gray-200 rounded-lg relative flex flex-col items-center pb-4 hover:shadow-md transition-shadow">
                   {/* Banner */}
                   <div className="h-14 w-full bg-[#A0B4B7] rounded-t-lg relative">
                     <button className="absolute top-2 right-2 bg-black/40 hover:bg-black/60 text-white rounded-full p-1">
                       <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                     </button>
                   </div>
                   {/* Avatar */}
                   <div className="w-[72px] h-[72px] rounded-full border-2 border-white overflow-hidden shadow-sm bg-white absolute top-4">
                      <img src={person.img} className="w-full h-full object-cover" alt={person.name} />
                   </div>
                   {/* Info */}
                   <div className="mt-10 text-center px-2 flex-grow">
                      <div className="font-semibold text-gray-900 hover:underline cursor-pointer truncate">{person.name}</div>
                      <div className="text-xs text-gray-500 line-clamp-2 h-8 mt-1">{person.role}</div>
                      <div className="text-xs text-gray-500 mt-2 flex items-center justify-center gap-1">
                         <Users className="w-3 h-3" /> {person.mutual} mutual connections
                      </div>
                   </div>
                   {/* Button */}
                   <div className="mt-4 px-4 w-full">
                      <button className="w-full border border-[#0a66c2] text-[#0a66c2] font-semibold rounded-full py-1 hover:bg-[#edf3f8] flex items-center justify-center gap-1 transition-colors">
                        <UserPlus className="w-4 h-4" /> Connect
                      </button>
                   </div>
                </div>
             ))}
          </div>
        </div>
      </div>
    </div>
  );
};