
import React, { useState } from 'react';
import { X, Gift, Package, CreditCard, Send } from 'lucide-react';

interface RewardOverlayProps {
  onClose: () => void;
}

export const RewardOverlay: React.FC<RewardOverlayProps> = ({ onClose }) => {
  const [step, setStep] = useState<'selection' | 'form' | 'success'>('selection');
  const [reward, setReward] = useState<'tshirt' | 'giftcard' | null>(null);

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-[100] flex items-center justify-center p-4 animate-in fade-in duration-300">
      <div className="bg-white dark:bg-slate-900 rounded-3xl w-full max-w-sm overflow-hidden shadow-2xl relative animate-in zoom-in-95 duration-300">
        <button onClick={onClose} className="absolute top-4 right-4 p-2 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-500 hover:text-red-500 transition-colors">
          <X className="w-5 h-5" />
        </button>

        <div className="p-8">
          {step === 'selection' && (
            <div className="space-y-6 text-center">
              <div className="bg-amber-500 w-16 h-16 rounded-3xl flex items-center justify-center mx-auto shadow-lg shadow-amber-500/30">
                <Gift className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="dragon-font text-2xl font-black text-slate-800 dark:text-white">REWARD UNLOCKED!</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-2">Your prediction was correct. Choose your prize!</p>
              </div>
              <div className="grid grid-cols-1 gap-3">
                <button 
                  onClick={() => { setReward('tshirt'); setStep('form'); }}
                  className="flex items-center gap-4 p-4 rounded-2xl border-2 border-slate-100 dark:border-slate-800 hover:border-amber-500 dark:hover:border-amber-500 transition-all text-left group"
                >
                  <div className="bg-slate-100 dark:bg-slate-800 p-3 rounded-xl group-hover:bg-amber-100 dark:group-hover:bg-amber-900/30 transition-colors">
                    <Package className="w-6 h-6 text-amber-500" />
                  </div>
                  <div>
                    <p className="font-bold dark:text-white">Dragon T-Shirt</p>
                    <p className="text-xs text-slate-400">Exclusive 2024 VFX Edition</p>
                  </div>
                </button>
                <button 
                  onClick={() => { setReward('giftcard'); setStep('form'); }}
                  className="flex items-center gap-4 p-4 rounded-2xl border-2 border-slate-100 dark:border-slate-800 hover:border-amber-500 dark:hover:border-amber-500 transition-all text-left group"
                >
                  <div className="bg-slate-100 dark:bg-slate-800 p-3 rounded-xl group-hover:bg-amber-100 dark:group-hover:bg-amber-900/30 transition-colors">
                    <CreditCard className="w-6 h-6 text-amber-500" />
                  </div>
                  <div>
                    <p className="font-bold dark:text-white">$25 Gift Card</p>
                    <p className="text-xs text-slate-400">VFX Store Credits</p>
                  </div>
                </button>
              </div>
            </div>
          )}

          {step === 'form' && (
            <div className="space-y-6">
              <h3 className="dragon-font text-xl font-bold dark:text-white text-center">Shipping Details</h3>
              <form onSubmit={(e) => { e.preventDefault(); setStep('success'); }} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Full Name</label>
                  <input required className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-amber-500 dark:text-white" placeholder="Enter your name" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Address</label>
                  <textarea required className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-amber-500 dark:text-white" rows={2} placeholder="Street, City, Postcode" />
                </div>
                <button type="submit" className="w-full bg-amber-500 text-white font-black py-4 rounded-2xl shadow-lg shadow-amber-500/30 hover:bg-amber-600 transition-all flex items-center justify-center gap-2">
                  <Send className="w-5 h-5" /> COMPLETE CLAIM
                </button>
              </form>
            </div>
          )}

          {step === 'success' && (
            <div className="text-center space-y-6 animate-in zoom-in duration-500">
               <div className="bg-green-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto shadow-lg shadow-green-500/30">
                <CheckCircle2 className="w-10 h-10 text-white" />
              </div>
              <div>
                <h3 className="dragon-font text-2xl font-black text-slate-800 dark:text-white">CONGRATULATIONS!</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-2">Your reward is on the way. It should arrive within 7-10 business days.</p>
              </div>
              <button 
                onClick={onClose}
                className="w-full bg-slate-800 dark:bg-slate-700 text-white font-bold py-4 rounded-2xl"
              >
                RETURN TO ARENA
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Helper for success icon in RewardOverlay
const CheckCircle2 = ({ className }: { className: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M20 6 9 17l-5-5"/>
  </svg>
);
