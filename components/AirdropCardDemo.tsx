import React from 'react';

const demoCards = [
  {
    id: 1,
    banner: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    title: 'Nebula Quest',
    badge: 'Gaming',
    earnings: '$12.34',
    status: 'Paid Out',
    statusColor: 'text-green-400',
    description: 'Complete daily missions in Nebula Quest and earn exclusive rewards. Join the adventure now!',
  },
  {
    id: 2,
    banner: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
    title: 'Crypto Galaxy',
    badge: 'Airdrop',
    earnings: '$7.89',
    status: 'Processing',
    statusColor: 'text-yellow-400',
    description: 'Participate in the Crypto Galaxy airdrop and get a chance to win rare tokens. Limited time only!',
  },
  {
    id: 3,
    banner: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    title: 'Pixel Art Challenge',
    badge: 'Art',
    earnings: '$3.21',
    status: 'Paid Out',
    statusColor: 'text-green-400',
    description: 'Show off your pixel art skills and earn rewards in our weekly challenge. All levels welcome!',
  },
  {
    id: 4,
    banner: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    title: 'Stellar Drops',
    badge: 'Airdrop',
    earnings: '$15.00',
    status: 'Processing',
    statusColor: 'text-yellow-400',
    description: 'Claim your Stellar Drops and be part of the next big thing in DeFi. Fast and easy participation!',
  },
  {
    id: 5,
    banner: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
    title: 'Code Sprint',
    badge: 'Coding',
    earnings: '$25.50',
    status: 'Paid Out',
    statusColor: 'text-green-400',
    description: 'Join the Code Sprint hackathon and win amazing prizes for your innovative solutions.',
  },
  {
    id: 6,
    banner: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    title: 'NFT Showcase',
    badge: 'NFT',
    earnings: '$8.75',
    status: 'Processing',
    statusColor: 'text-yellow-400',
    description: 'Display your NFT collection and earn rewards for the most creative digital art pieces.',
  },
  {
    id: 7,
    banner: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    title: 'Social Buzz',
    badge: 'Social',
    earnings: '$5.00',
    status: 'Paid Out',
    statusColor: 'text-green-400',
    description: 'Engage with the community and earn by sharing your experiences on social media.',
  },
  {
    id: 8,
    banner: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    title: 'Social Buzz',
    badge: 'Social',
    earnings: '$5.00',
    status: 'Paid Out',
    statusColor: 'text-green-400',
    description: 'Engage with the community and earn by sharing your experiences on social media.',
  },
  {
    id: 9,
    banner: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    title: 'Social Buzz',
    badge: 'Social',
    earnings: '$5.00',
    status: 'Paid Out',
    statusColor: 'text-green-400',
    description: 'Engage with the community and earn by sharing your experiences on social media.',
  },
  {
    id: 10,
    banner: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    title: 'Social Buzz',
    badge: 'Social',
    earnings: '$5.00',
    status: 'Paid Out',
    statusColor: 'text-green-400',
    description: 'Engage with the community and earn by sharing your experiences on social media.',
  }
];

const AirdropCardDemo = () => {
  return (
    <div className="flex flex-wrap gap-8 justify-center">
      {demoCards.map(card => (
        <div
          key={card.id}
          className="w-80 bg-gradient-to-br from-[#23242a] to-[#18181b] rounded-2xl shadow-xl border border-[#23242a] hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden relative"
        >
          {/* Banner */}
          <div className="h-32 w-full overflow-hidden">
            <img
              src={card.banner}
              alt={card.title}
              className="object-cover w-full h-full"
            />
            <span className="absolute top-3 left-3 bg-pink-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">{card.badge}</span>
          </div>

          {/* Content */}
          <div className="p-5 flex flex-col gap-2">
            <h3 className="text-lg font-bold text-white mb-1">{card.title}</h3>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-gray-400 text-xs">Your Earnings</span>
              <span className={`ml-auto font-semibold ${card.statusColor}`}>{card.status}</span>
            </div>
            <div className="text-2xl font-extrabold text-pink-400 mb-2">{card.earnings}</div>
            <p className="text-gray-400 text-sm mb-4 min-h-[48px]">{card.description}</p>
            <button className="mt-auto bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold rounded-lg py-2 w-full hover:opacity-90 transition">View Details</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AirdropCardDemo; 