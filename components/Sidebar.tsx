
import React from 'react';
import { X, Moon, Sun, Monitor, Shield, Settings, Info } from 'lucide-react';
import { Theme } from '../types';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  theme: Theme;
  onThemeChange: (theme: Theme) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, theme, onThemeChange }) => {
  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />
      
      {/* Sidebar Content */}
      <div className={`fixed top-0 left-0 h-full w-72 bg-white dark:bg-slate-900 shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-6 flex flex-col h-full">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
               <img 
                src="https://i.ibb.co/VWVX574/dragon-logo-circular.png" 
                className="w-10 h-10 rounded-full"
                onError={(e) => { e.currentTarget.src = "https://picsum.photos/seed/logo/100/100" }}
                alt="Logo"
              />
               <h2 className="dragon-font text-base font-black text-amber-500 uppercase">
                Dragon<span className="text-slate-400 dark:text-white">Stream</span>
              </h2>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">
              <X className="w-6 h-6 dark:text-white" />
            </button>
          </div>

          <div className="space-y-6 flex-1">
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Display Theme</p>
              <div className="grid grid-cols-3 gap-2">
                {(['light', 'dark', 'system'] as Theme[]).map((t) => (
                  <button
                    key={t}
                    onClick={() => onThemeChange(t)}
                    className={`flex flex-col items-center gap-2 p-3 rounded-2xl border-2 transition-all ${
                      theme === t 
                        ? 'border-amber-500 bg-amber-50 text-amber-600 dark:bg-amber-900/20 shadow-lg shadow-amber-500/10' 
                        : 'border-slate-100 dark:border-slate-800 text-slate-500'
                    }`}
                  >
                    {t === 'light' && <Sun className="w-5 h-5" />}
                    {t === 'dark' && <Moon className="w-5 h-5" />}
                    {t === 'system' && <Monitor className="w-5 h-5" />}
                    <span className="text-[9px] font-black uppercase tracking-tighter">{t}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-1">
               <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2 mt-4">Account</p>
               <button className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-700 dark:text-slate-200">
                <Shield className="w-5 h-5 text-amber-500" />
                <span className="font-bold text-sm">Privacy & Security</span>
              </button>
              <button className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-700 dark:text-slate-200">
                <Info className="w-5 h-5 text-amber-500" />
                <span className="font-bold text-sm">About DragonStream</span>
              </button>
            </div>
          </div>

          <div className="mt-auto pt-6 border-t border-slate-100 dark:border-slate-800">
             <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl text-center">
                <p className="text-[10px] font-black text-amber-600 uppercase mb-1 tracking-widest">Version 2.5.0</p>
                <p className="text-[9px] text-slate-400">Mastered with Little Dragon VFX</p>
             </div>
          </div>
        </div>
      </div>
    </>
  );
};
