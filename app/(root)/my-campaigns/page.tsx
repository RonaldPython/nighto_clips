import BankCard from '@/components/BankCard';
import HeaderBox from '@/components/HeaderBox'
import { getLoggedInUser } from '@/lib/actions/user.actions';
import { GetAirdropsInfo } from '@/lib/actions/user.actions';
import React from 'react'

const MyBanks = async () => {
  const loggedIn = await getLoggedInUser();
  const airdrops = await GetAirdropsInfo();

  return (
    <section className='flex'>
      <div className="my-banks">
        <HeaderBox 
          title="My Airdrops"
          subtext="Effortlessly manage your airdrops activities."
        />

        <div className="space-y-4">
          
          <div className="flex flex-wrap gap-6">
            {airdrops.documents.map((airdrop) => (
              
              <BankCard 
                key={airdrop.$id}
                airdropId={airdrop.$id}
                airdropName={airdrop.airdropName}
                airdropClaim={airdrop.AirdropClaim}
                airdropType={airdrop.airdropType}
                airdropStatus={airdrop.airdropStatus}
                airdropLink={airdrop.airdropLink}
                airdropInfo={airdrop.dailyActivity}
                airdropTime={airdrop.airdropTime}
                AirdropStars={airdrop.AirdropStars}
                Telegram= {airdrop.Telegram}
                Discord = {airdrop.Discord}
                Twitter= {airdrop.Twitter}
                Glaxe = {airdrop.Glaxe}
              />
            ))}
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default MyBanks;
