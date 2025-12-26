
import React from 'react';
import { Trophy, Medal, Star } from 'lucide-react';
import { LeaderboardEntry } from '../types.ts';

interface LeaderboardProps {
  entries: LeaderboardEntry[];
  currentUser: string;
}

export const Leaderboard: React.FC<LeaderboardProps> = ({ entries, currentUser }) => {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="text-center py-8">
        <div className="relative inline-block">
          <Trophy className="w-16 h-16 text-amber-500 mx-auto" />
          <Star className="w-6 h-6 text-amber-300 absolute -top-2 -right-2 animate-spin-slow" />
        </div>
        <h2 className="dragon-font text-2xl font-black mt-4 dark:text-white uppercase tracking-tight">World Rankings</h2>
        <p className="text-slate-500 text-sm mt-1">Only the strongest VFX warriors survive.</p>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl overflow-hidden border border-slate-100 dark:border-slate-800">
        <div className="space-y-0">
          {entries.map((entry, idx) => {
            const isMe = entry.name.includes(currentUser);
            return (
              <div 
                key={entry.rank} 
                className={`flex items-center gap-4 p-5 transition-all ${
                  isMe ? 'bg-amber-500 text-white' : 'hover:bg-slate-50 dark:hover:bg-slate-800 border-b border-slate-100 dark:border-slate-800'
                }`}
              >
                <div className={`w-10 h-10 flex items-center justify-center font-black rounded-xl ${
                  entry.rank === 1 ? 'bg-amber-100 text-amber-600' : 
                  entry.rank === 2 ? 'bg-slate-100 text-slate-600' :
                  entry.rank === 3 ? 'bg-orange-100 text-orange-600' :
                  'text-slate-400'
                }`}>
                  {entry.rank === 1 ? <Medal className="w-6 h-6" /> : entry.rank}
                </div>
                
                <div className="flex-1">
                  <p className={`font-bold ${isMe ? 'text-white' : 'dark:text-white'}`}>{entry.name}</p>
                  <p className={`text-[10px] uppercase font-bold tracking-widest ${isMe ? 'text-amber-100' : 'text-amber-600'}`}>
                    {entry.badge}
                  </p>
                </div>

                <div className="text-right">
                  <p className="font-black text-lg leading-none">{entry.points.toLocaleString()}</p>
                  <p className={`text-[10px] uppercase font-bold ${isMe ? 'text-amber-100' : 'text-slate-400'}`}>Points</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
