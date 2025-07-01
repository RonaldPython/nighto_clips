'use client';
import { useState } from 'react';
import { Instagram, Plus, X, Youtube, Music2 } from 'lucide-react';
import { Dialog, DialogTrigger, DialogContent } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const PLATFORM_OPTIONS = [
  {
    label: 'Instagram',
    value: 'instagram',
    icon: Instagram,
    color: 'from-pink-500 to-yellow-400',
    bg: 'bg-gradient-to-r from-pink-500 to-yellow-400',
  },
  {
    label: 'TikTok',
    value: 'tiktok',
    icon: Music2,
    color: 'from-black to-pink-500',
    bg: 'bg-gradient-to-r from-black to-pink-500',
  },
  {
    label: 'YouTube',
    value: 'youtube',
    icon: Youtube,
    color: 'from-red-600 to-red-400',
    bg: 'bg-gradient-to-r from-red-600 to-red-400',
  },
];

function parseAccount(link: string) {
  // Instagram
  if (/instagram\.com\/(?:@)?([A-Za-z0-9_.]+)/.test(link)) {
    const match = link.match(/instagram\.com\/(?:@)?([A-Za-z0-9_.]+)/);
    return match ? { username: match[1], platform: 'instagram' } : null;
  }
  // TikTok
  if (/tiktok\.com\/@([A-Za-z0-9_.]+)/.test(link)) {
    const match = link.match(/tiktok\.com\/@([A-Za-z0-9_.]+)/);
    return match ? { username: match[1], platform: 'tiktok' } : null;
  }
  // YouTube (user or channel)
  if (/youtube\.com\/(?:@|user\/|channel\/)([A-Za-z0-9_.-]+)/.test(link)) {
    const match = link.match(/youtube\.com\/(?:@|user\/|channel\/)([A-Za-z0-9_.-]+)/);
    return match ? { username: match[1], platform: 'youtube' } : null;
  }
  return null;
}

const initialAccounts = [
  {
    username: 'foot_legends0',
    date: 'April 24, 2025',
    platform: 'instagram',
  },
  {
    username: 'csgoclipero',
    date: 'June 15, 2025',
    platform: 'instagram',
  },
  {
    username: 'csgoclipmo',
    date: 'June 16, 2025',
    platform: 'instagram',
  },
];

export default function SocialsPage() {
  const [open, setOpen] = useState(false);
  const [accounts, setAccounts] = useState(initialAccounts);
  const [profileLink, setProfileLink] = useState('');
  const [error, setError] = useState('');
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState(PLATFORM_OPTIONS[0]);
  const [connectAnim, setConnectAnim] = useState(false);

  function handleStartVerification() {
    const parsed = parseAccount(profileLink);
    if (!parsed) {
      setError('Please enter a valid Instagram, TikTok, or YouTube profile link.');
      return;
    }
    // If user selected a platform, override auto-detect
    const platform = selectedPlatform.value || parsed.platform;
    setAccounts([
      ...accounts,
      {
        username: parsed.username,
        date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
        platform,
      },
    ]);
    setProfileLink('');
    setError('');
    setOpen(false);
  }

  function handleConnectClick() {
    setConnectAnim(true);
    setTimeout(() => {
      setConnectAnim(false);
      setOpen(true);
    }, 350); // match animation duration
  }

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 min-h-screen relative">
      {/* Modal Blur Overlay */}
      {open && (
        <div className="fixed inset-0 z-40 bg-black/60 backdrop-blur-[4px] animate-modal-overlay" />
      )}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10 gap-6">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500">Connected Accounts</h1>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button
              className={`bg-gradient-to-r from-red-500 to-pink-500 text-white font-bold px-8 py-3 rounded-full text-lg flex items-center gap-2 shadow-lg hover:from-red-600 hover:to-pink-400 transition relative overflow-hidden ${connectAnim ? 'animate-connect-pulse' : ''}`}
              onClick={handleConnectClick}
              type="button"
            >
              <span className="absolute inset-0 pointer-events-none flex items-center justify-center">
                {connectAnim && (
                  <span className="absolute w-32 h-32 rounded-full bg-white/20 animate-connect-ripple" />
                )}
              </span>
              <Plus size={20} /> Connect Account
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-[#18181b] border-0 shadow-2xl max-w-md z-50 animate-modal-in">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-extrabold bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">Connect Social Media Account</h2>
              <button onClick={() => setOpen(false)} className="text-gray-400 hover:text-white">
                <X size={22} />
              </button>
            </div>
            {/* Platform Filter Dropdown */}
            <div className="relative mb-4">
              <button
                className={`flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-700 bg-[#23242a] text-white font-semibold w-full transition ${filterOpen ? 'ring-2 ring-pink-400' : ''}`}
                onClick={() => setFilterOpen((v) => !v)}
                type="button"
              >
                {selectedPlatform.icon && (
                  <selectedPlatform.icon size={20} className="text-white" />
                )}
                {selectedPlatform.label}
                <span className="ml-auto text-gray-400">▼</span>
              </button>
              {filterOpen && (
                <div className="absolute left-0 right-0 mt-2 bg-[#23242a] border border-gray-700 rounded-lg shadow-lg z-10 animate-fade-in">
                  {PLATFORM_OPTIONS.map((opt) => (
                    <button
                      key={opt.value}
                      className={`flex items-center gap-2 px-4 py-2 w-full text-left hover:bg-[#18181b] transition ${selectedPlatform.value === opt.value ? 'bg-[#18181b]' : ''}`}
                      onClick={() => {
                        setSelectedPlatform(opt);
                        setFilterOpen(false);
                      }}
                      type="button"
                    >
                      <opt.icon size={20} className="text-white" />
                      {opt.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-white font-semibold mb-2">Profile Link</label>
              <Input
                className="bg-[#23242a] border border-gray-700 text-white placeholder-gray-500 focus:ring-2 focus:ring-red-400"
                placeholder="https://www.tiktok.com/@pawlash"
                value={profileLink}
                onChange={e => setProfileLink(e.target.value)}
                onFocus={() => setError('')}
              />
              {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
            </div>
            <Button
              className="w-full mt-2 bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold py-3 rounded-lg text-base shadow-md hover:from-red-600 hover:to-pink-400 transition"
              onClick={handleStartVerification}
            >
              Start Verification
            </Button>
          </DialogContent>
        </Dialog>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        {accounts.map((acc, i) => {
          const platform = PLATFORM_OPTIONS.find(p => p.value === acc.platform) || PLATFORM_OPTIONS[0];
          return (
            <div
              key={acc.username + acc.platform}
              className={`flex items-center justify-between bg-[#18181b] border border-gray-700 rounded-lg px-8 py-6 shadow-lg hover:scale-[1.02] transition group animate-fade-in`}
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="flex items-center gap-4">
                <span className={`${platform.bg} rounded-full p-2 flex items-center justify-center transition-all`}>
                  <platform.icon size={32} className="text-white" strokeWidth={2.2} />
                </span>
                <div>
                  <div className="text-lg font-bold text-white group-hover:text-pink-400 transition">
                    {acc.username}
                  </div>
                  <div className="text-gray-400 text-sm capitalize">{platform.label} • Connected {acc.date}</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-500 inline-block mr-1" />
                <span className="text-gray-300 font-semibold text-sm">Connected</span>
              </div>
            </div>
          );
        })}
      </div>
      <style jsx global>{`
        @keyframes fade-in {
          from { opacity: 0; transform: scale(0.97); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in {
          animation: fade-in 0.4s cubic-bezier(0.4,0,0.2,1) both;
        }
        @keyframes modal-overlay {
          from { opacity: 0; filter: blur(0px); }
          to { opacity: 1; filter: blur(4px); }
        }
        .animate-modal-overlay {
          animation: modal-overlay 0.5s cubic-bezier(0.4,0,0.2,1) both;
        }
        @keyframes modal-in {
          0% { opacity: 0; transform: scale(0.92) translateY(30px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        .animate-modal-in {
          animation: modal-in 0.45s cubic-bezier(0.4,0,0.2,1) both;
        }
        @keyframes connect-pulse {
          0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.2); }
          50% { transform: scale(1.07); box-shadow: 0 0 0 8px rgba(255, 255, 255, 0.12); }
          100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.0); }
        }
        .animate-connect-pulse {
          animation: connect-pulse 0.35s cubic-bezier(0.4,0,0.2,1);
        }
        @keyframes connect-ripple {
          0% { opacity: 0.7; transform: scale(0.2); }
          80% { opacity: 0.2; transform: scale(1.1); }
          100% { opacity: 0; transform: scale(1.3); }
        }
        .animate-connect-ripple {
          animation: connect-ripple 0.35s cubic-bezier(0.4,0,0.2,1);
        }
      `}</style>
    </div>
  );
}
