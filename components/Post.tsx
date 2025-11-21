import React, { useState } from 'react';
import { PostData } from '../types';
import { 
  ThumbsUp, 
  MessageSquare, 
  Repeat, 
  Send, 
  Globe, 
  MoreHorizontal,
  X
} from 'lucide-react';

interface PostProps {
  post: PostData;
}

export const Post: React.FC<PostProps> = ({ post }) => {
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(post.likes);

  const handleLike = () => {
    if (liked) {
      setLikesCount(prev => prev - 1);
    } else {
      setLikesCount(prev => prev + 1);
    }
    setLiked(!liked);
  };

  return (
    <div className="bg-white rounded-lg shadow-[0_0_0_1px_rgba(0,0,0,0.08)] mb-2 overflow-hidden">
      {/* Header */}
      <div className="px-4 py-3 flex items-start justify-between">
        <div className="flex gap-3">
          <a href="#">
            <img 
              src={post.author.avatarUrl} 
              alt={post.author.name} 
              className="w-12 h-12 rounded-full object-cover"
            />
          </a>
          <div className="flex flex-col">
             <a href="#" className="text-sm font-semibold text-gray-900 hover:text-[#0a66c2] hover:underline leading-tight">
               {post.author.name}
             </a>
             <span className="text-xs text-gray-500 line-clamp-1 leading-tight">{post.author.headline}</span>
             <div className="flex items-center text-xs text-gray-500 mt-0.5">
               <span>{post.timestamp}</span>
               <span className="mx-1">•</span>
               <Globe className="w-3 h-3" />
             </div>
          </div>
        </div>
        <button className="text-gray-600 hover:bg-gray-100 p-1 rounded-full">
          <MoreHorizontal className="w-6 h-6" />
        </button>
      </div>

      {/* Content */}
      <div className="px-4 pb-2">
        <p className="text-sm text-gray-900 whitespace-pre-line">
          {post.content} <span className="text-gray-500 cursor-pointer hover:text-[#0a66c2] hover:underline">...see more</span>
        </p>
      </div>

      {/* Media */}
      {post.imageUrl && (
        <div className="w-full mt-2">
           <img 
             src={post.imageUrl} 
             alt="Post Content" 
             className="w-full object-cover border-t border-gray-100"
             loading="lazy"
           />
        </div>
      )}

      {/* Stats */}
      <div className="px-4 py-2 flex items-center justify-between border-b border-gray-100">
         <div className="flex items-center gap-1">
           <div className="flex -space-x-1">
             <div className="bg-[#1485BD] w-4 h-4 rounded-full flex items-center justify-center">
                <ThumbsUp className="w-2.5 h-2.5 text-white fill-white" />
             </div>
             <div className="bg-[#598D40] w-4 h-4 rounded-full flex items-center justify-center border border-white">
                <span className="text-[8px] text-white">👏</span>
             </div>
           </div>
           <span className="text-xs text-gray-500 hover:text-[#0a66c2] hover:underline cursor-pointer">
              {liked ? `You and ${likesCount - 1} others` : `${likesCount} likes`}
           </span>
         </div>
         <div className="text-xs text-gray-500 hover:text-[#0a66c2] hover:underline cursor-pointer">
           {post.comments} comments • {post.reposts} reposts
         </div>
      </div>

      {/* Actions */}
      <div className="px-2 py-1 flex items-center justify-between">
         <ActionButton 
            icon={ThumbsUp} 
            label="Like" 
            isActive={liked} 
            onClick={handleLike} 
            activeColor="text-[#0a66c2]"
            fill={liked}
         />
         <ActionButton icon={MessageSquare} label="Comment" />
         <ActionButton icon={Repeat} label="Repost" />
         <ActionButton icon={Send} label="Send" />
      </div>
    </div>
  );
};

interface ActionButtonProps {
  icon: React.FC<any>;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
  activeColor?: string;
  fill?: boolean;
}

const ActionButton: React.FC<ActionButtonProps> = ({ icon: Icon, label, isActive, onClick, activeColor, fill }) => (
  <button 
    onClick={onClick}
    className={`flex items-center justify-center gap-2 px-2 sm:px-4 py-3 rounded hover:bg-gray-100 flex-1 transition-colors ${isActive ? activeColor : 'text-gray-600'}`}
  >
    <Icon 
      className={`w-5 h-5 sm:w-6 sm:h-6 ${fill ? 'fill-current' : ''} transform ${isActive ? 'scale-110' : ''} transition-transform`} 
      strokeWidth={1.5} 
    />
    <span className="text-sm font-semibold hidden sm:block">{label}</span>
  </button>
);