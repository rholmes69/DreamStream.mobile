
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { User } from '../types.ts';
import { TrendingUp, Award, Star, MessageSquare, Zap } from 'lucide-react';

interface DashboardProps {
  user: User;
}

const PERFORMANCE_DATA = [
  { time: '00:01', score: 65 },
  { time: '00:02', score: 85 },
  { time: '00:03', score: 72 },
  { time: '00:04', score: 90 },
  { time: '00:05', score: 88 },
  { time: '00:06', score: 95 },
  { time: '00:07', score: 92 },
];

const JUDGE_COMMENTS = [
  { id: 1, name: "Master Kaiden", rating: 5, comment: "EXCELLENT EXECUTION!", img: "https://picsum.photos/seed/k1/100/100" },
  { id: 2, name: "Sensei Jada", rating: 5, comment: "FLAWLESS TECHNIQUE!", img: "https://picsum.photos/seed/s1/100/100" },
  { id: 3, name: "Master Ken", rating: 4, comment: "Great power, watch your form.", img: "https://picsum.photos/seed/m1/100/100" },
];

export const Dashboard: React.FC<DashboardProps> = ({ user }) => {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* HUD - Student Performance Analyzer */}
      <div className="relative overflow-hidden rounded-[2.5rem] bg-slate-900 border-4 border-slate-800 shadow-2xl p-6">
        {/* HUD Grid Overlay */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(circle, #22d3ee 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
        
        {/* HUD Header */}
        <div className="relative z-10 flex flex-col items-center mb-6">
          <div className="w-full flex justify-between items-center px-4 mb-2">
            <span className="text-[10px] dragon-font text-cyan-400 font-bold opacity-70">SYSTEM V2.5.0</span>
            <span className="text-[10px] dragon-font text-cyan-400 font-bold opacity-70">SYNC: ACTIVE</span>
          </div>
          <div className="border-t border-b border-cyan-500/30 w-full py-2 flex justify-center">
            <h2 className="dragon-font text-sm font-black text-cyan-400 tracking-[0.2em] text-center">
              STUDENT PERFORMANCE ANALYZER
            </h2>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="relative z-10 grid grid-cols-5 gap-2 mb-6">
          {[
            { val: '92', label: 'PWR' },
            { val: '05', label: 'VFX' },
            { val: '07', label: 'AGL' },
            { val: '81', label: 'FRM' },
            { val: '07', label: 'SPR' }
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center border border-cyan-500/20 bg-cyan-950/20 rounded-lg p-2">
              <span className="text-cyan-400 dragon-font text-lg font-bold">{stat.val}</span>
              <span className="text-[8px] text-cyan-700 font-black uppercase tracking-tighter">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Chart Area */}
        <div className="relative z-10 bg-black/40 rounded-2xl p-4 border border-cyan-500/20 mb-6">
          <div className="flex justify-between items-end mb-4">
            <div>
              <p className="text-[10px] dragon-font text-cyan-700 font-black uppercase">Overall Score</p>
              <h3 className="text-4xl dragon-font text-white font-black italic">A+</h3>
            </div>
            <div className="text-right">
              <Zap className="w-6 h-6 text-cyan-400 animate-pulse ml-auto" />
              <p className="text-[10px] dragon-font text-cyan-400 font-bold">STABILITY: 98.2%</p>
            </div>
          </div>
          
          <div className="h-40 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={PERFORMANCE_DATA}>
                <defs>
                  <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#22d3ee" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#22d3ee" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#164e63" vertical={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#082f49', borderColor: '#22d3ee', color: '#fff' }}
                  itemStyle={{ color: '#22d3ee' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="score" 
                  stroke="#22d3ee" 
                  strokeWidth={3}
                  fillOpacity={1} 
                  fill="url(#colorScore)" 
                  animationDuration={2000}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Judge Feedback List */}
        <div className="relative z-10 space-y-3">
          <div className="flex items-center gap-2 mb-2">
            <MessageSquare className="w-4 h-4 text-cyan-400" />
            <span className="text-[10px] dragon-font text-cyan-400 font-bold uppercase tracking-widest">Master Evaluations</span>
          </div>
          
          {JUDGE_COMMENTS.map((judge) => (
            <div key={judge.id} className="bg-slate-800/80 backdrop-blur-md rounded-2xl p-3 border border-slate-700 flex items-center gap-4 group hover:border-cyan-500 transition-all cursor-pointer">
              <div className="relative">
                <img src={judge.img} className="w-12 h-12 rounded-full border-2 border-cyan-500/50" />
                <div className="absolute -bottom-1 -right-1 bg-cyan-500 rounded-full p-0.5">
                  <Award className="w-3 h-3 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <p className="text-sm font-bold text-white dragon-font">{judge.name}</p>
                  <div className="flex gap-0.5">
                    {[...Array(judge.rating)].map((_, i) => (
                      <Star key={i} className="w-2.5 h-2.5 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                </div>
                <p className="text-[10px] text-cyan-400 font-black uppercase mt-1 tracking-tighter italic">
                  {judge.comment}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Legacy Stats Quick View */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 shadow-sm border border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-amber-100 dark:bg-amber-900/30 rounded-xl">
              <TrendingUp className="w-5 h-5 text-amber-600" />
            </div>
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Global Ranking</p>
              <p className="text-xl font-black dark:text-white">#{user.ranking}</p>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 shadow-sm border border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-cyan-100 dark:bg-cyan-900/30 rounded-xl">
              <Award className="w-5 h-5 text-cyan-600" />
            </div>
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Dragon Points</p>
              <p className="text-xl font-black dark:text-white">{user.points.toLocaleString()}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
