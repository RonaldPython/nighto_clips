'use client'

import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import Footer from './Footer'

const Sidebar = ({user}: SiderbarProps) => {
  const pathname = usePathname()


  return (
    <section className='sidebar'>
      <nav className='flex flex-col gap-4'>
        <Link href="/" className='mb-12 cursor-pointer items-center gap-2 flex'>
            <Image
        src="/icons/logo.svg"
        width={50}
        height={50}
        alt='Nighto'
        className='size-[70px] max-xl:size-14'
            />
            <h1 className='2xl:text-35 font-ibm-plex-serif text-[35px] font-bold text-slate-950 max-xl:hidden'>
                Nighto
            </h1>
        </Link>

        {sidebarLinks.map((item) => {

        const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`)  

        return (
          <Link href={item.route} key={item.label} 
          className={cn('sidebar-link', {
            'bg-gradient-to-r from-red-800 via-red-500 to-pink-400': isActive
          })}>
            <div className='relative size-6'>
              <Image 
              src={item.imgURL}
              alt={item.label}
              fill
              className={cn({
                'brightness-[3] invert-0': isActive
              })}
              />
            </div>

            <p className={cn(
              'sidebar-label', {
                '!text-white': isActive
              }

           )}>
              {item.label}
            </p>
            
          </Link>
        )
      })}
        
        
      </nav>
        <Footer user={user}/>
    </section>
  )
}

export default Sidebar
