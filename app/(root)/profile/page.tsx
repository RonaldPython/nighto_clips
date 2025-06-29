import React from 'react'
import HeaderBox from '@/components/HeaderBox'
import { getLoggedInUser } from '@/lib/actions/user.actions';
import PaymentTransferForm from '@/components/PaymentTransferForm'
import { Video, DollarSign, Eye, BarChart3, Coins } from 'lucide-react';


const RegisterAirdrop = async () => {
  const loggedIn = await getLoggedInUser();


  return (
    <section className="payment-transfer">
      <HeaderBox 
        title="Profile Statistics"
        subtext="Access your profile statistics and manage your account settings."
      />

      <section className="flex flex-col items-center pb-8 mt-6">
        <div className="profile-banner" />
        <div className="profile flex flex-col items-center gap-4 ">
          <div className="profile-img flex items-center justify-center w-20 h-20 rounded-full bg-red-900 text-black text-5xl font-bold">
            {loggedIn?.name?.[0] || "U"}
          </div>
          <div className="profile-details text-center">
            <h1 className="profile-name text-2xl font-bold">{loggedIn?.name}</h1>
            <p className="profile-email text-gray-400">{loggedIn?.email}</p>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="mt-12 w-full max-w-5xl mx-auto">
        <h2 className="flex items-center gap-2 text-xl font-bold text-gray-900 mb-6">
          <BarChart3 className="h-6 w-6 text-red-500" />
          Statistics
        </h2>
        <div className="flex flex-row gap-8 justify-center">
          {/* Total Videos Card */}
          <div className="w-80">
            <div className="relative group bg-white rounded-xl p-6 shadow-lg transition-transform hover:scale-105 cursor-pointer border border-gray-100">
              <span className="text-gray-500 text-sm flex items-center gap-2">Total videos
                <Video className="inline ml-1 text-red-500" size={20} strokeWidth={2} />
              </span>
              <div className="mt-4 text-3xl font-bold text-red-500 group-hover:text-red-400 transition">54</div>
              <div className="absolute bottom-0 right-0 w-20 h-20 bg-red-500 opacity-10 rounded-full -mb-8 -mr-8" />
            </div>
          </div>
          {/* Money Earned Card */}
          <div className="w-80">
            <div className="relative group bg-white rounded-xl p-6 shadow-lg transition-transform hover:scale-105 cursor-pointer border border-gray-100">
              <span className="text-gray-500 text-sm flex items-center gap-2">Money earned
                <DollarSign className="inline ml-1 text-red-500" size={20} strokeWidth={2} />
              </span>
              <div className="mt-4 text-3xl font-bold text-red-500 group-hover:text-red-400 transition">$49</div>
              <div className="absolute bottom-0 right-0 w-20 h-20 bg-red-500 opacity-10 rounded-full -mb-8 -mr-8" />
            </div>
          </div>
          {/* Total Views Card */}
          <div className="w-80">
            <div className="relative group bg-white rounded-xl p-6 shadow-lg transition-transform hover:scale-105 cursor-pointer border border-gray-100">
              <span className="text-gray-500 text-sm flex items-center gap-2">Total views
                <Eye className="inline ml-1 text-red-500" size={20} strokeWidth={2} />
              </span>
              <div className="mt-4 text-3xl font-bold text-red-500 group-hover:text-red-400 transition">984,820</div>
              <div className="absolute bottom-0 right-0 w-20 h-20 bg-red-500 opacity-10 rounded-full -mb-8 -mr-8" />
            </div>
          </div>
        </div>
      </section>

      {/* Payment & Password Section */}
      <section className="mt-16 w-full max-w-5xl mx-auto flex flex-col md:flex-row gap-8">
        {/* Payment Information */}
        <div className="flex-1 bg-white rounded-2xl p-8 shadow-xl border-t-4 border-red-500">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-red-100 rounded-full p-2">
              <Coins className="w-8 h-8 text-red-500" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">Payment Information</h3>
              <span className="text-gray-500 text-sm">USDT (ERC20) Wallet</span>
            </div>
          </div>
          <div className="mb-4">
            <div className="bg-gray-100 rounded-lg px-4 py-2 text-gray-800 font-mono text-sm break-all border border-gray-200">
              {loggedIn?.address || '0x000...000'}
            </div>
          </div>
          <form className="flex flex-col gap-4 mt-2">
            <input
              type="text"
              className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-400"
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
        <div className="flex-1 bg-white rounded-2xl p-8 shadow-xl border-t-4 border-red-500">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Change Password</h3>
          <form className="flex flex-col gap-4 mt-2">
            <input
              type="password"
              className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none"
              placeholder="Current Password"
            />
            <input
              type="password"
              className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none"
              placeholder="New Password"
            />
            <input
              type="password"
              className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none"
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
