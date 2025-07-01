import React from 'react'
import HeaderBox from '@/components/HeaderBox'
import { getLoggedInUser } from '@/lib/actions/user.actions';
import PaymentTransferForm from '@/components/PaymentTransferForm'
import { Video, DollarSign, Eye, BarChart3, Coins } from 'lucide-react';

const RegisterAirdrop = async () => {
  const loggedIn = await getLoggedInUser();

  return (
    <section className="payment-transfer min-h-screen " style={{ background: '#18181b', minHeight: '100vh' }}>
      <div className='!items-center !justify-center !flex'>
        <HeaderBox 
        title="Profile Statistics"
        subtext="Access your profile statistics and manage your account settings."
        
      />
      </div>
      

      <section className="flex flex-col items-center pb-8 mt-6">
        <div
          className="profile-banner rounded-xl w-full h-32 relative overflow-hidden"
          style={{
            background: 'linear-gradient(90deg, #18181b 0%, #232a3d 60%, #2d1a3a 100%)',
          }}
        >
          {/* Blurred accent shape */}
          <div
            className="absolute -bottom-10 -right-10 w-60 h-32 rounded-full"
            style={{
              background: 'radial-gradient(circle at 80% 60%, rgba(120,119,198,0.35) 0%, rgba(40,40,60,0.0) 70%)',
              filter: 'blur(24px)',
              zIndex: 1,
            }}
          />
        </div>
        <div className="profile flex flex-col items-center gap-4 ">
          <div className="profile-img flex items-center justify-center w-20 h-20 rounded-full bg-red-900 text-black text-5xl font-bold shadow-lg shadow-black/30 -mt-5 border-4 border-[#18181b]">
            {loggedIn?.name?.[0] || "U"}
          </div>
          <div className="profile-details text-center">
            <h1 className="profile-name text-2xl font-bold !text-white">{loggedIn?.name}</h1>
            <p className="profile-email text-gray-400">{loggedIn?.email}</p>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="mt-12 w-full max-w-5xl mx-auto">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-6">
          <BarChart3 className="h-6 w-6 text-red-400" />
          Statistics
        </h2>
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 justify-center items-center md:items-stretch">
          {/* Total Videos Card */}
          <div className="w-full md:w-80">
            <div className="relative group bg-[#23242a] rounded-xl p-6 shadow-lg shadow-black/30 transition-transform hover:scale-105 cursor-pointer border border-gray-700">
              <span className="text-gray-300 text-sm flex items-center gap-2">Total videos
                <Video className="inline ml-1 text-red-400" size={20} strokeWidth={2} />
              </span>
              <div className="mt-4 text-3xl font-bold text-red-400 group-hover:text-red-300 transition">54</div>
              <div className="absolute bottom-0 right-0 w-20 h-20 bg-red-400 opacity-10 rounded-full -mb-8 -mr-8" />
            </div>
          </div>
          {/* Money Earned Card */}
          <div className="w-full md:w-80">
            <div className="relative group bg-[#23242a] rounded-xl p-6 shadow-lg shadow-black/30 transition-transform hover:scale-105 cursor-pointer border border-gray-700">
              <span className="text-gray-300 text-sm flex items-center gap-2">Money earned
                <DollarSign className="inline ml-1 text-red-400" size={20} strokeWidth={2} />
              </span>
              <div className="mt-4 text-3xl font-bold text-red-400 group-hover:text-red-300 transition">$49</div>
              <div className="absolute bottom-0 right-0 w-20 h-20 bg-red-400 opacity-10 rounded-full -mb-8 -mr-8" />
            </div>
          </div>
          {/* Total Views Card */}
          <div className="w-full md:w-80">
            <div className="relative group bg-[#23242a] rounded-xl p-6 shadow-lg shadow-black/30 transition-transform hover:scale-105 cursor-pointer border border-gray-700">
              <span className="text-gray-300 text-sm flex items-center gap-2">Total views
                <Eye className="inline ml-1 text-red-400" size={20} strokeWidth={2} />
              </span>
              <div className="mt-4 text-3xl font-bold text-red-400 group-hover:text-red-300 transition">984,820</div>
              <div className="absolute bottom-0 right-0 w-20 h-20 bg-red-400 opacity-10 rounded-full -mb-8 -mr-8" />
            </div>
          </div>
        </div>
      </section>

      {/* Payment & Password Section */}
      <section className="mt-16 w-full max-w-5xl mx-auto flex flex-col md:flex-row gap-8">
        {/* Payment Information */}
        <div className="w-full md:flex-1 bg-[#23242a] rounded-2xl p-8 shadow-xl shadow-black/30 border-t-4 border-red-500">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-red-900 rounded-full p-2">
              <Coins className="w-8 h-8 text-red-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Payment Information</h3>
              <span className="text-gray-400 text-sm">USDT (ERC20) Wallet</span>
            </div>
          </div>
          <div className="mb-4">
            <div className="bg-[#18181b] rounded-lg px-4 py-2 text-gray-200 font-mono text-sm break-all border border-gray-700">
              {loggedIn?.address || '0x000...000'}
            </div>
          </div>
          <form className="flex flex-col gap-4 mt-2">
            <input
              type="text"
              className="bg-[#18181b] border border-gray-700 rounded-lg px-4 py-3 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-400"
              placeholder="Enter payment details"
              defaultValue={loggedIn?.address || ''}
              // onChange handler here
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold rounded-lg py-3 mt-2 hover:opacity-90 transition"
            >
              Update Payment Method
            </button>
          </form>
        </div>
        {/* Change Password */}
        <div className="w-full md:flex-1 bg-[#23242a] rounded-2xl p-8 shadow-xl shadow-black/30 border-t-4 border-red-500">
          <h3 className="text-xl font-bold text-white mb-4">Change Password</h3>
          <form className="flex flex-col gap-4 mt-2">
            <input
              type="password"
              className="bg-[#18181b] border border-gray-700 rounded-lg px-4 py-3 text-gray-100 placeholder-gray-500 focus:outline-none"
              placeholder="Current Password"
            />
            <input
              type="password"
              className="bg-[#18181b] border border-gray-700 rounded-lg px-4 py-3 text-gray-100 placeholder-gray-500 focus:outline-none"
              placeholder="New Password"
            />
            <input
              type="password"
              className="bg-[#18181b] border border-gray-700 rounded-lg px-4 py-3 text-gray-100 placeholder-gray-500 focus:outline-none"
              placeholder="Confirm Password"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold rounded-lg py-3 mt-2 hover:opacity-90 transition"
            >
              Update Password
            </button>
          </form>
        </div>
      </section>
    </section>
  )
}

export default RegisterAirdrop
