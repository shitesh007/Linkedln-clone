export interface User {
  name: string;
  headline: string;
  avatarUrl: string;
  bgUrl?: string;
}

export interface PostData {
  id: string;
  author: User;
  timestamp: string;
  content: string;
  imageUrl?: string;
  likes: number;
  comments: number;
  reposts: number;
}

export interface SidebarStats {
  profileViews: number;
  connections: number;
}

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  logoUrl: string;
  postedTime: string;
  applicants: number;
}

export interface NotificationItem {
  id: string;
  type: 'view' | 'like' | 'comment' | 'connection' | 'job';
  actor: {
    name: string;
    avatarUrl: string;
  };
  message: string;
  time: string;
  isRead: boolean;
}

export interface Conversation {
  id: string;
  contact: User;
  lastMessage: string;
  timestamp: string;
  unreadCount: number;
  active: boolean;
}

export interface Message {
  id: string;
  text: string;
  sender: 'me' | 'them';
  timestamp: string;
}