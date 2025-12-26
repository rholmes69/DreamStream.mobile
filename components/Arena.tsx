
import React, { useState } from 'react';
import { Play, Share2, Heart, Flame, Gift, Trophy } from 'lucide-react';
import { LiveChat } from './Chat';

interface ArenaProps {
  onPredict: () => void;
}

export const Arena: React.FC<ArenaProps> = ({ onPredict }) => {
  const [likes, setLikes] = useState(124);
  const [hasLiked, setHasLiked] = useState(false);

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20">
      <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl bg-black border-2 border-amber-500/30">
        <img 
          src="https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&q=80&w=800" 
          className="w-full h-full object-cover opacity-90"
          alt="Karate Kids Action"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/20" />
        
        <div className="absolute inset-0 flex items-center justify-center">
          <button className="p-5 bg-amber-500/90 text-white rounded-full hover:scale-110 transition-transform shadow-2xl backdrop-blur-sm group">
            <Play className="w-10 h-10 fill-current group-hover:text-cyan-400 transition-colors" />
          </button>
        </div>

        <div className="absolute top-4 left-4 bg-amber-500 text-white text-[10px] font-black px-2 py-1 rounded flex items-center gap-1 animate-pulse">
          <div className="w-1.5 h-1.5 bg-white rounded-full" /> LIVE COMPETITION
        </div>

        <div className="absolute bottom-4 left-4 right-4">
          <p className="dragon-font text-white text-base font-black uppercase italic tracking-tighter leading-tight">
            VFX FINALS: <span className="text-cyan-400">ENERGY CIRCLE</span> CHALLENGE
          </p>
          <div className="flex items-center gap-4 mt-2">
             <button 
              onClick={() => { setLikes(prev => hasLiked ? prev - 1 : prev + 1); setHasLiked(!hasLiked); }}
              className={`flex items-center gap-1 text-xs font-black ${hasLiked ? 'text-red-500' : 'text-white'}`}
            >
              <Heart className={`w-4 h-4 ${hasLiked ? 'fill-current' : ''}`} /> {likes}
            </button>
            <button className="flex items-center gap-1 text-white text-xs font-black uppercase">
              <Share2 className="w-4 h-4" /> Share
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-xl border border-amber-200 dark:border-amber-900/30 overflow-hidden relative">
        <div className="absolute top-0 right-0 p-3 bg-amber-500 text-white rounded-bl-2xl">
          <Gift className="w-5 h-5 animate-pulse" />
        </div>
        <h3 className="dragon-font text-lg font-bold mb-2 dark:text-white flex items-center gap-2">
          <Flame className="w-5 h-5 text-amber-500" /> Predict & Earn
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 font-medium">Who will unleash the best VFX combo? Correct predictions earn 500 Dragon Points!</p>
        
        <div className="grid grid-cols-2 gap-4">
          <button 
            onClick={onPredict}
            className="group p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl border-2 border-transparent hover:border-amber-500 transition-all text-center"
          >
            <div className="w-16 h-16 rounded-full mx-auto mb-3 border-2 border-slate-200 dark:border-slate-700 overflow-hidden group-hover:scale-105 transition-transform">
              <img src="https://picsum.photos/seed/ryu/100/100" />
            </div>
            <p className="font-bold text-slate-800 dark:text-white text-sm">Team Blaze</p>
            <p className="text-[10px] text-amber-600 font-bold mt-1 uppercase tracking-widest">WIN RATE: 65%</p>
          </button>

          <button 
            onClick={onPredict}
            className="group p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl border-2 border-transparent hover:border-amber-500 transition-all text-center"
          >
            <div className="w-16 h-16 rounded-full mx-auto mb-3 border-2 border-slate-200 dark:border-slate-700 overflow-hidden group-hover:scale-105 transition-transform">
              <img src="https://picsum.photos/seed/ken/100/100" />
            </div>
            <p className="font-bold text-slate-800 dark:text-white text-sm">Team Frost</p>
            <p className="text-[10px] text-amber-600 font-bold mt-1 uppercase tracking-widest">WIN RATE: 35%</p>
          </button>
        </div>
      </div>

      <div className="mb-20">
        <h3 className="dragon-font text-lg font-bold mb-4 dark:text-white flex items-center gap-2">
          <Trophy className="w-5 h-5 text-amber-500" /> Judges Box
        </h3>
        <LiveChat />
      </div>
    </div>
  );
};
