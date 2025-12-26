
import React, { useState } from 'react';
import { X, Moon, Sun, Monitor, Shield, Settings, Info, Bell, Volume2, Globe, LogOut, Trash2 } from 'lucide-react';
import { Theme } from '../types.ts';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  theme: Theme;
  onThemeChange: (theme: Theme) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, theme, onThemeChange }) => {
  const [notifications, setNotifications] = useState(true);
  const [soundEffects, setSoundEffects] = useState(true);

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />
      
      {/* Sidebar Content */}
      <div className={`fixed top-0 left-0 h-full w-80 bg-white dark:bg-slate-900 shadow-2xl z-[70] transform transition-transform duration-500 cubic-bezier(0.4, 0, 0.2, 1) ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-6 flex flex-col h-full overflow-y-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
               <div className="bg-amber-500 p-2 rounded-xl shadow-lg shadow-amber-500/20">
                  <Settings className="w-5 h-5 text-white animate-spin-slow" />
               </div>
               <h2 className="dragon-font text-xl font-black text-slate-800 dark:text-white uppercase tracking-tighter">
                Settings
              </h2>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors border border-slate-100 dark:border-slate-800">
              <X className="w-5 h-5 dark:text-white" />
            </button>
          </div>

          <div className="space-y-8 flex-1">
            {/* Theme Section */}
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                <Sun className="w-3 h-3" /> Appearance
              </p>
              <div className="grid grid-cols-3 gap-2">
                {(['light', 'dark', 'system'] as Theme[]).map((t) => (
                  <button
                    key={t}
                    onClick={() => onThemeChange(t)}
                    className={`flex flex-col items-center gap-2 p-3 rounded-2xl border-2 transition-all ${
                      theme === t 
                        ? 'border-amber-500 bg-amber-50 text-amber-600 dark:bg-amber-900/20 shadow-lg shadow-amber-500/10' 
                        : 'border-slate-100 dark:border-slate-800 text-slate-500 hover:border-slate-200 dark:hover:border-slate-700'
                    }`}
                  >
                    {t === 'light' && <Sun className="w-4 h-4" />}
                    {t === 'dark' && <Moon className="w-4 h-4" />}
                    {t === 'system' && <Monitor className="w-4 h-4" />}
                    <span className="text-[9px] font-black uppercase tracking-tighter">{t}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Preferences Section */}
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                <Shield className="w-3 h-3" /> Preferences
              </p>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800/50">
                  <div className="flex items-center gap-3">
                    <Bell className="w-4 h-4 text-amber-500" />
                    <span className="text-sm font-bold dark:text-slate-200">Push Notifications</span>
                  </div>
                  <button 
                    onClick={() => setNotifications(!notifications)}
                    className={`w-10 h-5 rounded-full transition-colors relative ${notifications ? 'bg-amber-500' : 'bg-slate-300 dark:bg-slate-700'}`}
                  >
                    <div className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-all ${notifications ? 'left-6' : 'left-1'}`} />
                  </button>
                </div>

                <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800/50">
                  <div className="flex items-center gap-3">
                    <Volume2 className="w-4 h-4 text-amber-500" />
                    <span className="text-sm font-bold dark:text-slate-200">Sound Effects</span>
                  </div>
                  <button 
                    onClick={() => setSoundEffects(!soundEffects)}
                    className={`w-10 h-5 rounded-full transition-colors relative ${soundEffects ? 'bg-amber-500' : 'bg-slate-300 dark:bg-slate-700'}`}
                  >
                    <div className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-all ${soundEffects ? 'left-6' : 'left-1'}`} />
                  </button>
                </div>

                <button className="w-full flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                  <div className="flex items-center gap-3">
                    <Globe className="w-4 h-4 text-amber-500" />
                    <span className="text-sm font-bold dark:text-slate-200">Language</span>
                  </div>
                  <span className="text-[10px] font-black text-amber-600 uppercase">English</span>
                </button>
              </div>
            </div>

            {/* Account & Safety */}
            <div>
               <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                <Shield className="w-3 h-3" /> Security
              </p>
               <button className="w-full flex items-center gap-3 p-4 rounded-2xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-700 dark:text-slate-200 border border-transparent hover:border-slate-100 dark:hover:border-slate-800">
                <Shield className="w-5 h-5 text-amber-500" />
                <span className="font-bold text-sm">Privacy & Terms</span>
              </button>
              <button className="w-full flex items-center gap-3 p-4 rounded-2xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-700 dark:text-slate-200 border border-transparent hover:border-slate-100 dark:hover:border-slate-800">
                <Info className="w-5 h-5 text-amber-500" />
                <span className="font-bold text-sm">Help & Support</span>
              </button>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 space-y-3">
             <button className="w-full flex items-center justify-center gap-2 p-4 rounded-2xl bg-red-50 text-red-600 dark:bg-red-900/10 dark:text-red-400 font-bold text-sm hover:bg-red-100 dark:hover:bg-red-900/20 transition-all">
                <LogOut className="w-4 h-4" /> Sign Out
             </button>
             <button className="w-full flex items-center justify-center gap-2 p-2 rounded-xl text-slate-400 font-bold text-[10px] uppercase hover:text-slate-600 dark:hover:text-slate-300 transition-all">
                <Trash2 className="w-3 h-3" /> Clear App Cache
             </button>
             <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl text-center">
                <p className="text-[10px] font-black text-amber-600 uppercase mb-1 tracking-widest">DragonStream v2.5.0</p>
                <p className="text-[9px] text-slate-400">© 2024 Little Dragon VFX</p>
             </div>
          </div>
        </div>
      </div>
    </>
  );
};
