import React from 'react';
import { Job } from '../types';
import { Bookmark, List, Settings, PlayCircle } from 'lucide-react';

const RECOMMENDED_JOBS: Job[] = [
  {
    id: '1',
    title: 'Senior Frontend Engineer',
    company: 'Netflix',
    location: 'Los Gatos, CA (Remote)',
    type: 'Remote',
    logoUrl: 'https://logo.clearbit.com/netflix.com',
    postedTime: '2h ago',
    applicants: 45
  },
  {
    id: '2',
    title: 'React Native Developer',
    company: 'Spotify',
    location: 'New York, NY',
    type: 'Hybrid',
    logoUrl: 'https://logo.clearbit.com/spotify.com',
    postedTime: '5h ago',
    applicants: 128
  },
  {
    id: '3',
    title: 'UI/UX Designer',
    company: 'Airbnb',
    location: 'San Francisco, CA',
    type: 'On-site',
    logoUrl: 'https://logo.clearbit.com/airbnb.com',
    postedTime: '1d ago',
    applicants: 340
  },
  {
    id: '4',
    title: 'Design Systems Engineer',
    company: 'GitHub',
    location: 'Remote',
    type: 'Remote',
    logoUrl: 'https://logo.clearbit.com/github.com',
    postedTime: '3d ago',
    applicants: 89
  },
];

export const Jobs: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
      {/* Left Sidebar */}
      <div className="hidden md:block md:col-span-3 lg:col-span-3 space-y-2">
        <div className="bg-white rounded-lg shadow-[0_0_0_1px_rgba(0,0,0,0.08)] py-2">
           <div className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 cursor-pointer text-gray-600 font-semibold text-sm">
              <Bookmark className="w-5 h-5 fill-current" />
              My jobs
           </div>
           <div className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 cursor-pointer text-gray-600 font-semibold text-sm">
              <List className="w-5 h-5" />
              Preferences
           </div>
           <div className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 cursor-pointer text-gray-600 font-semibold text-sm">
              <Settings className="w-5 h-5" />
              Application settings
           </div>
        </div>
        
        <button className="w-full border border-[#0a66c2] text-[#0a66c2] font-semibold rounded-full py-3 hover:bg-[#edf3f8] transition-colors">
            Post a free job
        </button>
      </div>

      {/* Main Feed */}
      <div className="col-span-1 md:col-span-9 lg:col-span-6">
         {/* Job Search Banner */}
         <div className="bg-white rounded-lg shadow-[0_0_0_1px_rgba(0,0,0,0.08)] p-6 mb-4 text-center md:text-left">
            <h2 className="text-xl font-semibold text-gray-900">Recommended for you</h2>
            <p className="text-gray-500 text-sm mt-1">Based on your profile and search history</p>
         </div>

         {/* Job List */}
         <div className="bg-white rounded-lg shadow-[0_0_0_1px_rgba(0,0,0,0.08)] overflow-hidden">
            {RECOMMENDED_JOBS.map((job) => (
               <div key={job.id} className="flex gap-4 p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer group relative">
                  <img src={job.logoUrl} alt={job.company} className="w-14 h-14 object-contain bg-white" />
                  <div className="flex-grow">
                     <h3 className="text-[#0a66c2] font-semibold text-base hover:underline leading-tight">{job.title}</h3>
                     <div className="text-sm text-gray-900 mt-0.5">{job.company}</div>
                     <div className="text-sm text-gray-500 mt-0.5">{job.location} ({job.type})</div>
                     <div className="flex items-center gap-1 text-xs text-gray-500 mt-2">
                        <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                           <svg className="w-3 h-3 text-green-700" fill="currentColor" viewBox="0 0 16 16"><path d="M8 16a8 8 0 100-16 8 8 0 000 16zm3.71-10.71l-4.42 4.42-1.99-2a1 1 0 00-1.41 1.42l2.7 2.7a1 1 0 001.41 0l5.12-5.12a1 1 0 00-1.41-1.42z"/></svg>
                        </div>
                        <span>Actively recruiting</span>
                     </div>
                     <div className="text-xs text-gray-500 mt-1">
                        {job.postedTime} • <span className="text-[#0a66c2] font-semibold">{job.applicants} applicants</span>
                     </div>
                  </div>
                  <button className="absolute top-4 right-4 text-gray-500 hover:bg-gray-200 p-2 rounded-full">
                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                  </button>
               </div>
            ))}
            <div className="p-3 text-center">
               <button className="text-sm font-semibold text-gray-600 hover:bg-gray-100 px-4 py-1 rounded transition-colors">Show all</button>
            </div>
         </div>
      </div>

      {/* Right Widgets */}
      <div className="hidden lg:block lg:col-span-3 space-y-2">
         <div className="bg-white rounded-lg shadow-[0_0_0_1px_rgba(0,0,0,0.08)] p-4">
            <h3 className="font-semibold text-gray-900 text-sm mb-3">Job seeker guidance</h3>
            <div className="text-xs text-gray-500 mb-2">Recommended based on your activity</div>
            <div className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded cursor-pointer">
               <span className="text-sm text-gray-900 font-medium flex-grow">I want to improve my resume</span>
               <img src="https://picsum.photos/id/1/40/40" className="rounded" />
            </div>
            <div className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded cursor-pointer">
               <span className="text-sm text-gray-900 font-medium flex-grow">Explore remote opportunities</span>
               <img src="https://picsum.photos/id/2/40/40" className="rounded" />
            </div>
         </div>
      </div>
    </div>
  );
};