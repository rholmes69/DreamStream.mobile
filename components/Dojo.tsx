
import React from 'react';
import { Wand2, CheckCircle2, Clock, PlayCircle } from 'lucide-react';
import { Tutorial } from '../types.ts';

interface DojoProps {
  tutorials: Tutorial[];
  onToggleComplete: (id: number) => void;
}

export const Dojo: React.FC<DojoProps> = ({ tutorials, onToggleComplete }) => {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center justify-between">
        <h2 className="dragon-font text-xl font-bold dark:text-white flex items-center gap-2">
          <Wand2 className="w-6 h-6 text-amber-500" /> VFX Dojo
        </h2>
        <div className="bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 px-3 py-1 rounded-full text-xs font-bold">
          {tutorials.filter(t => t.completed).length} / {tutorials.length} COMPLETED
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {tutorials.map((t) => (
          <div key={t.id} className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row">
            <div className="relative w-full sm:w-40 aspect-video sm:aspect-square">
              <img src={t.thumbnail} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <PlayCircle className="w-10 h-10 text-white" />
              </div>
            </div>
            
            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-bold text-slate-800 dark:text-white leading-tight">{t.title}</h4>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    t.difficulty === 'Beginner' ? 'bg-green-100 text-green-600 dark:bg-green-900/20' :
                    t.difficulty === 'Intermediate' ? 'bg-amber-100 text-amber-600 dark:bg-amber-900/20' :
                    'bg-red-100 text-red-600 dark:bg-red-900/20'
                  }`}>
                    {t.difficulty}
                  </span>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400 mt-2">
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {t.duration}</span>
                  <span className="flex items-center gap-1 text-amber-500 font-bold">+50 XP</span>
                </div>
              </div>

              <button 
                onClick={() => onToggleComplete(t.id)}
                className={`mt-4 w-full flex items-center justify-center gap-2 py-2 rounded-xl text-sm font-bold transition-all ${
                  t.completed 
                    ? 'bg-green-500 text-white' 
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-amber-500 hover:text-white'
                }`}
              >
                {t.completed ? <><CheckCircle2 className="w-4 h-4" /> Watched</> : 'Mark as Watched'}
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-slate-100 dark:bg-slate-800 rounded-2xl p-6 text-center border-2 border-dashed border-slate-300 dark:border-slate-700">
        <p className="text-slate-500 dark:text-slate-400 text-sm italic">New Tutorials Arrive Every Friday!</p>
      </div>
    </div>
  );
};
