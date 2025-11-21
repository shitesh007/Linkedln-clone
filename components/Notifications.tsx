import React from 'react';
import { NotificationItem } from '../types';
import { MoreHorizontal } from 'lucide-react';

const NOTIFICATIONS: NotificationItem[] = [
  {
    id: '1',
    type: 'view',
    actor: { name: 'Alice Smith', avatarUrl: 'https://picsum.photos/id/65/100/100' },
    message: 'viewed your profile',
    time: '2h',
    isRead: false
  },
  {
    id: '2',
    type: 'job',
    actor: { name: 'Google', avatarUrl: 'https://logo.clearbit.com/google.com' },
    message: 'posted a new job: Senior Frontend Engineer',
    time: '5h',
    isRead: true
  },
  {
    id: '3',
    type: 'like',
    actor: { name: 'Bob Jones', avatarUrl: 'https://picsum.photos/id/68/100/100' },
    message: 'liked your post: "Just shipped a major update..."',
    time: '1d',
    isRead: true
  },
  {
    id: '4',
    type: 'connection',
    actor: { name: 'Carol White', avatarUrl: 'https://picsum.photos/id/72/100/100' },
    message: 'accepted your connection request',
    time: '2d',
    isRead: true
  },
  {
    id: '5',
    type: 'comment',
    actor: { name: 'David Brown', avatarUrl: 'https://picsum.photos/id/76/100/100' },
    message: 'commented on your post: "Great work on this!"',
    time: '3d',
    isRead: true
  },
  {
    id: '6',
    type: 'view',
    actor: { name: 'Recruiter at Meta', avatarUrl: 'https://picsum.photos/id/88/100/100' },
    message: 'viewed your profile',
    time: '4d',
    isRead: true
  },
];

export const Notifications: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
      {/* Sidebar */}
      <div className="hidden md:block md:col-span-3 lg:col-span-3">
        <div className="bg-white rounded-lg shadow-[0_0_0_1px_rgba(0,0,0,0.08)] py-2">
           <h3 className="px-4 py-2 text-base font-semibold text-gray-900">Manage your notifications</h3>
           <div className="px-4 py-2 text-sm text-[#0a66c2] font-semibold hover:bg-gray-100 cursor-pointer">
             View Settings
           </div>
        </div>
      </div>

      {/* Main Feed */}
      <div className="col-span-1 md:col-span-9 lg:col-span-6">
        <div className="bg-white rounded-lg shadow-[0_0_0_1px_rgba(0,0,0,0.08)] overflow-hidden">
           {NOTIFICATIONS.map(item => (
              <div key={item.id} className={`flex gap-4 px-4 py-4 border-b border-gray-100 cursor-pointer hover:bg-[#EDF3F8] transition-colors ${!item.isRead ? 'bg-[#edf3f8]' : 'bg-white'}`}>
                 <img src={item.actor.avatarUrl} className="w-12 h-12 rounded-full object-cover" alt={item.actor.name} />
                 <div className="flex-grow pr-8">
                    <p className="text-sm text-gray-900 leading-snug">
                       <span className="font-semibold">{item.actor.name}</span> {item.message}
                    </p>
                    {item.type === 'job' && (
                       <div className="mt-2 border border-gray-200 rounded p-2 flex items-center gap-2">
                          <span className="text-xs font-semibold text-gray-600">Job Alert</span>
                       </div>
                    )}
                    <div className="text-xs text-gray-500 mt-1">{item.time}</div>
                 </div>
                 <div className="flex flex-col items-end gap-2">
                    <div className="text-xs text-gray-500">{item.time}</div>
                    <button className="p-1 hover:bg-gray-200 rounded-full">
                       <MoreHorizontal className="w-5 h-5 text-gray-600" />
                    </button>
                    {!item.isRead && (
                       <div className="w-3 h-3 bg-[#0a66c2] rounded-full"></div>
                    )}
                 </div>
              </div>
           ))}
        </div>
      </div>

       {/* Right Widgets */}
      <div className="hidden lg:block lg:col-span-3">
         <div className="bg-white rounded-lg shadow-[0_0_0_1px_rgba(0,0,0,0.08)] p-4 text-center">
            <div className="text-xs text-gray-500 mb-2">Ad</div>
            <div className="font-semibold text-gray-700 text-sm">See who's hiring</div>
            <div className="flex justify-center my-4">
               <img src="https://picsum.photos/id/100/80/80" className="rounded-full" />
            </div>
            <button className="border border-[#0a66c2] text-[#0a66c2] px-4 py-1 rounded-full font-semibold text-sm hover:bg-[#edf3f8]">Explore jobs</button>
         </div>
      </div>
    </div>
  );
};