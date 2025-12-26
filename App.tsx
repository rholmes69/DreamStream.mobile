
import React, { useState, useEffect } from 'react';
import { LayoutDashboard, Play, Wand2, Trophy, Menu, Bell } from 'lucide-react';
import { Page, AppState, Theme } from './types.ts';
import { MOCK_USER, MOCK_LEADERBOARD, MOCK_TUTORIALS } from './constants.tsx';
import { Dashboard } from './components/Dashboard.tsx';
import { Arena } from './components/Arena.tsx';
import { Dojo } from './components/Dojo.tsx';
import { Leaderboard } from './components/Leaderboard.tsx';
import { Sidebar } from './components/Sidebar.tsx';
import { RewardOverlay } from './components/RewardOverlay.tsx';

const App: React.FC = () => {
  const [state, setState] = useState<AppState>({
    currentPage: 'dashboard',
    theme: 'dark',
    isSidebarOpen: false,
    user: MOCK_USER,
    leaderboard: MOCK_LEADERBOARD,
    tutorials: MOCK_TUTORIALS,
    showRewardOverlay: false
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (state.theme === 'dark' || (state.theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [state.theme]);

  const handlePageChange = (page: Page) => {
    setState(prev => ({ ...prev, currentPage: page }));
  };

  const toggleSidebar = () => {
    setState(prev => ({ ...prev, isSidebarOpen: !prev.isSidebarOpen }));
  };

  const handleThemeChange = (newTheme: Theme) => {
    setState(prev => ({ ...prev, theme: newTheme }));
  };

  const toggleTutorial = (id: number) => {
    setState(prev => ({
      ...prev,
      tutorials: prev.tutorials.map(t => t.id === id ? { ...t, completed: !t.completed } : t)
    }));
  };

  const renderPage = () => {
    switch (state.currentPage) {
      case 'dashboard': return <Dashboard user={state.user} />;
      case 'arena': return <Arena onPredict={() => setState(prev => ({ ...prev, showRewardOverlay: true }))} />;
      case 'dojo': return <Dojo tutorials={state.tutorials} onToggleComplete={toggleTutorial} />;
      case 'leaderboard': return <Leaderboard entries={state.leaderboard} currentUser={state.user.name} />;
      default: return <Dashboard user={state.user} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans transition-colors duration-300">
      <div className="max-w-[420px] mx-auto min-h-screen relative shadow-2xl bg-white dark:bg-slate-950 flex flex-col overflow-x-hidden">
        
        {/* Header */}
        <header className="sticky top-0 z-40 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md px-4 py-3 flex items-center justify-between border-b border-slate-100 dark:border-slate-800">
          <button onClick={toggleSidebar} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors">
            <Menu className="w-6 h-6 text-amber-500" />
          </button>
          <div className="flex items-center gap-2">
            <div className="flex flex-col items-center">
              <h1 className="dragon-font text-base font-black tracking-tighter text-amber-500 flex items-center gap-1">
                LITTLE DRAGON <span className="text-cyan-400">VFX</span>
              </h1>
              <p className="text-[8px] uppercase font-bold tracking-[0.2em] text-slate-400">DragonStream Platform</p>
            </div>
          </div>
          <button className="relative p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors">
            <Bell className="w-6 h-6 text-amber-500" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-950"></span>
          </button>
        </header>

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto p-6 scroll-smooth pb-32">
          {renderPage()}
        </main>

        {/* Mobile Navigation */}
        <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[420px] bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-t border-slate-200 dark:border-slate-800 px-6 py-4 flex items-center justify-between z-40">
          {[
            { id: 'dashboard', icon: LayoutDashboard, label: 'Dash' },
            { id: 'arena', icon: Play, label: 'Arena' },
            { id: 'dojo', icon: Wand2, label: 'Dojo' },
            { id: 'leaderboard', icon: Trophy, label: 'Global' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => handlePageChange(tab.id as Page)}
              className={`flex flex-col items-center gap-1 transition-all ${
                state.currentPage === tab.id ? 'text-amber-500 scale-110' : 'text-slate-400 hover:text-slate-500'
              }`}
            >
              <tab.icon className={`w-6 h-6 ${state.currentPage === tab.id ? 'fill-amber-500/10' : ''}`} />
              <span className="text-[10px] font-bold uppercase tracking-wider">{tab.label}</span>
            </button>
          ))}
        </nav>

        {/* Settings Sidebar */}
        <Sidebar 
          isOpen={state.isSidebarOpen} 
          onClose={toggleSidebar} 
          theme={state.theme}
          onThemeChange={handleThemeChange}
        />

        {/* Overlays */}
        {state.showRewardOverlay && (
          <RewardOverlay onClose={() => setState(prev => ({ ...prev, showRewardOverlay: false }))} />
        )}
      </div>
    </div>
  );
};

export default App;
