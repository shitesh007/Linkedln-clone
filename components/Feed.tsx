import React from 'react';
import { User, PostData } from '../types';
import { Post } from './Post';
import { Image, Calendar, Newspaper, Video } from 'lucide-react';

interface FeedProps {
  user: User;
}

const DUMMY_POSTS: PostData[] = [
  {
    id: '1',
    author: {
      name: 'TechCrunch',
      headline: 'Technology News and Analysis',
      avatarUrl: 'https://picsum.photos/id/20/150/150',
    },
    timestamp: '2h',
    content: 'Artificial Intelligence is reshaping the landscape of modern web development. New tools are emerging every day that help developers write cleaner, more efficient code.\n\nWhat are your thoughts on AI-assisted coding?',
    imageUrl: 'https://picsum.photos/id/4/800/500',
    likes: 1240,
    comments: 85,
    reposts: 42
  },
  {
    id: '2',
    author: {
      name: 'Sarah Jenkins',
      headline: 'Senior Frontend Engineer at Google',
      avatarUrl: 'https://picsum.photos/id/32/150/150',
    },
    timestamp: '5h',
    content: 'Just shipped a major update to our internal design system! 🚀\n\nConsistency is key when scaling UI across multiple teams. We utilized React Server Components and Tailwind CSS to achieve 99% Lighthouse scores.',
    likes: 892,
    comments: 120,
    reposts: 15
  },
  {
    id: '3',
    author: {
      name: 'David Chen',
      headline: 'Product Manager | ex-Meta',
      avatarUrl: 'https://picsum.photos/id/64/150/150',
    },
    timestamp: '1d',
    content: 'Hiring alert! 📢\n\nWe are looking for passionate Product Designers to join our remote team. If you love solving complex user problems, send me a DM!',
    likes: 3400,
    comments: 450,
    reposts: 800
  }
];

export const Feed: React.FC<FeedProps> = ({ user }) => {
  return (
    <div className="w-full">
      {/* Create Post Widget */}
      <div className="bg-white rounded-lg shadow-[0_0_0_1px_rgba(0,0,0,0.08)] mb-2 p-4">
        <div className="flex gap-3 mb-2">
          <img 
            src={user.avatarUrl} 
            alt="Me" 
            className="w-12 h-12 rounded-full object-cover cursor-pointer"
          />
          <button className="flex-grow text-left pl-4 border border-gray-400 rounded-[35px] hover:bg-gray-100 transition-colors text-sm font-semibold text-gray-500 h-12">
            Start a post
          </button>
        </div>
        <div className="flex justify-between items-center pt-1">
          <FeedAction icon={Image} label="Media" color="text-[#378FE9]" />
          <FeedAction icon={Calendar} label="Event" color="text-[#C37D16]" />
          <FeedAction icon={Newspaper} label="Write article" color="text-[#E06847]" />
        </div>
      </div>
      
      {/* Sorter */}
      <div className="flex items-center mb-2 px-1">
         <div className="h-[1px] bg-gray-300 flex-grow mr-2"></div>
         <span className="text-xs text-gray-600">Sort by: <strong className="text-gray-900 cursor-pointer">Top</strong></span>
      </div>

      {/* Posts */}
      <div>
        {DUMMY_POSTS.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

const FeedAction: React.FC<{icon: any, label: string, color: string}> = ({ icon: Icon, label, color }) => (
  <button className="flex items-center gap-2 sm:gap-3 px-2 sm:px-4 py-3 hover:bg-gray-100 rounded transition-colors">
    <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${color}`} />
    <span className="text-sm font-semibold text-gray-600 whitespace-nowrap">{label}</span>
  </button>
);