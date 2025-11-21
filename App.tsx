import React, { useState } from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Feed } from './components/Feed';
import { Widgets } from './components/Widgets';
import { Network } from './components/Network';
import { Jobs } from './components/Jobs';
import { Notifications } from './components/Notifications';
import { Messaging } from './components/Messaging';
import { User, SidebarStats } from './types';

const CURRENT_USER: User = {
  name: "Alex Johnson",
  headline: "Senior React Developer | UI/UX Enthusiast | Building scaleable frontend architectures",
  avatarUrl: "https://picsum.photos/id/64/300/300",
  bgUrl: "https://picsum.photos/id/132/1200/400"
};

const USER_STATS: SidebarStats = {
  profileViews: 342,
  connections: 1543
};

function App() {
  const [activePage, setActivePage] = useState('Home');

  const renderContent = () => {
    switch (activePage) {
      case 'Home':
        return (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Left Column */}
            <div className="hidden md:block md:col-span-4 lg:col-span-3">
              <Sidebar user={CURRENT_USER} stats={USER_STATS} />
            </div>
            
            {/* Middle Column (Feed) */}
            <div className="col-span-1 md:col-span-8 lg:col-span-6">
              <Feed user={CURRENT_USER} />
            </div>
            
            {/* Right Column */}
            <div className="hidden lg:block lg:col-span-3">
              <Widgets />
            </div>
          </div>
        );
      case 'My Network':
        return <Network />;
      case 'Jobs':
        return <Jobs />;
      case 'Notifications':
        return (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
             {/* Reuse Sidebar for Notifications page as LinkedIn does mostly */}
             <div className="hidden md:block md:col-span-4 lg:col-span-3">
                <Sidebar user={CURRENT_USER} stats={USER_STATS} />
             </div>
             <div className="col-span-1 md:col-span-8 lg:col-span-9">
                <Notifications />
             </div>
          </div>
        );
      case 'Messaging':
        return <Messaging />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#F3F2EF] font-sans pb-10">
      <Header 
        userAvatar={CURRENT_USER.avatarUrl} 
        activePage={activePage}
        onNavigate={setActivePage}
      />
      
      <main className="max-w-7xl mx-auto px-0 sm:px-4 pt-6">
        {renderContent()}
      </main>
    </div>
  );
}

export default App;