import React, { useState } from 'react';
import { Conversation, Message } from '../types';
import { Search, MoreHorizontal, Video, Star, Edit, Image, Paperclip, Send, Smile } from 'lucide-react';

const CONVERSATIONS: Conversation[] = [
  {
    id: '1',
    contact: { name: 'Sarah Jenkins', avatarUrl: 'https://picsum.photos/id/32/100/100', headline: 'Frontend Dev' },
    lastMessage: 'Thanks for sharing that article!',
    timestamp: 'Oct 24',
    unreadCount: 0,
    active: true
  },
  {
    id: '2',
    contact: { name: 'David Chen', avatarUrl: 'https://picsum.photos/id/64/100/100', headline: 'Product Manager' },
    lastMessage: 'When are you free for a call?',
    timestamp: 'Oct 22',
    unreadCount: 1,
    active: false
  },
  {
    id: '3',
    contact: { name: 'Recruiter Bot', avatarUrl: 'https://picsum.photos/id/11/100/100', headline: 'Talent Acquisition' },
    lastMessage: 'We have a new opening that matches...',
    timestamp: 'Oct 20',
    unreadCount: 0,
    active: false
  }
];

const MESSAGES: Message[] = [
  { id: '1', text: 'Hey, how is the project going?', sender: 'me', timestamp: '10:30 AM' },
  { id: '2', text: 'It is going great! Just finished the main dashboard component.', sender: 'them', timestamp: '10:32 AM' },
  { id: '3', text: 'That is awesome. Do you have the latest designs?', sender: 'me', timestamp: '10:33 AM' },
  { id: '4', text: 'Yes, I sent them over email yesterday. Check your inbox.', sender: 'them', timestamp: '10:35 AM' },
  { id: '5', text: 'Got it, thanks! Will review shortly.', sender: 'me', timestamp: '10:36 AM' },
  { id: '6', text: 'Perfect, let me know if you need anything else.', sender: 'them', timestamp: '10:38 AM' },
];

export const Messaging: React.FC = () => {
  const [activeId, setActiveId] = useState('1');
  const activeConversation = CONVERSATIONS.find(c => c.id === activeId) || CONVERSATIONS[0];
  const [messages, setMessages] = useState(MESSAGES);
  const [inputText, setInputText] = useState('');

  const handleSend = () => {
    if(!inputText.trim()) return;
    const newMsg: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'me',
      timestamp: 'Now'
    };
    setMessages([...messages, newMsg]);
    setInputText('');
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-[calc(100vh-100px)]">
      {/* Left List */}
      <div className="md:col-span-4 lg:col-span-3 bg-white rounded-lg shadow-[0_0_0_1px_rgba(0,0,0,0.08)] flex flex-col overflow-hidden h-full">
         <div className="p-3 border-b border-gray-200 flex justify-between items-center">
            <h2 className="font-semibold text-gray-900">Messaging</h2>
            <div className="flex gap-2">
               <button className="p-1 hover:bg-gray-100 rounded-full"><MoreHorizontal className="w-5 h-5 text-gray-600" /></button>
               <button className="p-1 hover:bg-gray-100 rounded-full"><Edit className="w-5 h-5 text-gray-600" /></button>
            </div>
         </div>
         <div className="p-3">
            <div className="relative">
               <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-500" />
               <input type="text" placeholder="Search messages" className="w-full bg-[#EDF3F8] pl-9 pr-4 py-1.5 rounded text-sm outline-none border border-transparent focus:border-black transition-colors" />
            </div>
         </div>
         <div className="flex-grow overflow-y-auto">
            {CONVERSATIONS.map(conv => (
               <div 
                  key={conv.id} 
                  onClick={() => setActiveId(conv.id)}
                  className={`flex gap-3 p-3 cursor-pointer hover:bg-gray-50 border-l-4 ${activeId === conv.id ? 'border-[#057642] bg-[#edf3f8]' : 'border-transparent'}`}
               >
                  <div className="relative">
                     <img src={conv.contact.avatarUrl} className="w-12 h-12 rounded-full object-cover" />
                     <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-600 rounded-full border-2 border-white"></div>
                  </div>
                  <div className="flex-grow overflow-hidden">
                     <div className="flex justify-between items-baseline">
                        <h3 className="font-semibold text-gray-900 text-sm truncate">{conv.contact.name}</h3>
                        <span className="text-xs text-gray-500">{conv.timestamp}</span>
                     </div>
                     <p className={`text-xs truncate mt-0.5 ${conv.unreadCount > 0 ? 'font-bold text-gray-900' : 'text-gray-500'}`}>
                        {conv.lastMessage}
                     </p>
                  </div>
               </div>
            ))}
         </div>
      </div>

      {/* Right Chat Area */}
      <div className="hidden md:flex md:col-span-8 lg:col-span-9 bg-white rounded-lg shadow-[0_0_0_1px_rgba(0,0,0,0.08)] flex-col overflow-hidden h-full">
         {/* Chat Header */}
         <div className="px-4 py-3 border-b border-gray-200 flex justify-between items-center bg-white sticky top-0 z-10">
            <div className="flex flex-col">
               <h2 className="font-bold text-gray-900 text-sm">{activeConversation.contact.name}</h2>
               <span className="text-xs text-gray-500">{activeConversation.contact.headline}</span>
            </div>
            <div className="flex gap-2 text-gray-600">
               <button className="p-2 hover:bg-gray-100 rounded-full"><MoreHorizontal className="w-5 h-5" /></button>
               <button className="p-2 hover:bg-gray-100 rounded-full"><Video className="w-5 h-5" /></button>
               <button className="p-2 hover:bg-gray-100 rounded-full"><Star className="w-5 h-5" /></button>
            </div>
         </div>

         {/* Messages */}
         <div className="flex-grow overflow-y-auto p-4 space-y-4 bg-[#f9fafb]">
            {messages.map(msg => (
               <div key={msg.id} className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
                  {msg.sender === 'them' && (
                     <img src={activeConversation.contact.avatarUrl} className="w-8 h-8 rounded-full mr-2 mt-1" />
                  )}
                  <div className={`max-w-[70%] rounded-lg px-4 py-2 text-sm ${
                     msg.sender === 'me' 
                     ? 'bg-[#D3E3FD] text-gray-900 rounded-tr-none' 
                     : 'bg-white border border-gray-200 text-gray-900 rounded-tl-none'
                  }`}>
                     <p>{msg.text}</p>
                     <div className="text-[10px] text-gray-500 text-right mt-1">{msg.timestamp}</div>
                  </div>
               </div>
            ))}
         </div>

         {/* Input */}
         <div className="border-t border-gray-200 p-3 bg-white">
             <textarea 
               className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 resize-none h-20"
               placeholder="Write a message..."
               value={inputText}
               onChange={(e) => setInputText(e.target.value)}
               onKeyDown={(e) => { if(e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSend(); }}}
             />
             <div className="flex justify-between items-center mt-2">
                <div className="flex gap-2 text-gray-500">
                   <button className="p-2 hover:bg-gray-100 rounded-full"><Image className="w-5 h-5" /></button>
                   <button className="p-2 hover:bg-gray-100 rounded-full"><Paperclip className="w-5 h-5" /></button>
                   <button className="p-2 hover:bg-gray-100 rounded-full"><Smile className="w-5 h-5" /></button>
                </div>
                <div className="flex items-center gap-3">
                   <button 
                     onClick={handleSend}
                     className={`px-4 py-1.5 rounded-full font-semibold text-sm text-white transition-colors ${inputText.trim() ? 'bg-[#0a66c2] hover:bg-[#004182]' : 'bg-gray-300 cursor-not-allowed'}`}
                     disabled={!inputText.trim()}
                   >
                      Send
                   </button>
                </div>
             </div>
         </div>
      </div>
    </div>
  );
};