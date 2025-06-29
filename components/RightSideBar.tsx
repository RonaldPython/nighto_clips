import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import AirdropCard from './AirdropCard'

const RightSideBar = ({ user, airdrops }: RightSidebarProps) => {
  return (
    <aside className='right-sidebar'>
      <section className='flex flex-col pb-8'>
        <div className='profile-banner' />
        <div className='profile'>
          <div className='profile-img'>
            <span className='text-5xl font-bold text-red-500'>
              {user?.name[0]}
            </span>
          </div>
          <div className='profile-details'>
            <h1 className='profile-name !text-white'>
              {user?.name}
            </h1>
            <p className='profile-email !text-white'>
              {user?.email}
            </p>
          </div>
        </div>
      </section>

      <section className='banks'>
        <div className='flex w-full justify-between'>
          <h2 className='header-2 !text-white'>My Campaigns</h2>
          <Link href="/my-campaigns" className='flex gap-2'>
            <Image 
              src="/icons/plus.svg"
              width={20}
              height={20}
              alt='plus'
            />
            <h2 className='text-14 font-semibold text-white'>
              All Campaigns
            </h2>
          </Link>
        </div>

        {airdrops.total > 0 && (
          <div className='relative flex flex-1 flex-col items-center justify-center gap-5'>
            {airdrops.documents.slice(0, 2).map((airdrop: any, index: number) => (
              <AirdropCard 
                key={airdrop.$id}
                airdropName={airdrop.airdropName}
                airdropType={airdrop.airdropType}
                airdropStatus={airdrop.airdropStatus}
                airdropLink={airdrop.airdropLink}
                airdropClaim={airdrop.AirdropClaim}
              />
            ))}
          </div>
        )}
      </section>
    </aside>
  )
}

export default RightSideBar
