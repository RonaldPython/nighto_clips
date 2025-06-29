import BankCard from '@/components/BankCard';
import HeaderBox from '@/components/HeaderBox'
import { getLoggedInUser } from '@/lib/actions/user.actions';
import { GetAirdropsInfo } from '@/lib/actions/user.actions';
import React from 'react'
import AirdropCardDemo from '@/components/AirdropCardDemo';

const MyBanks = async () => {
  const loggedIn = await getLoggedInUser();
  const airdrops = await GetAirdropsInfo();

  return (
    <section className='flex ' >
      <div className="my-banks !bg-[#18181b]">
        <HeaderBox 
          title="My Campaigns"
          subtext="Access your campaign statistics."
        />

        <div className="space-y-4">
          <AirdropCardDemo />
        </div>
      </div>
    </section>
  )
}

export default MyBanks;
