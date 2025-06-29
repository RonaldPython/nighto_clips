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
    <section
      className="sidebar w-full max-w-xs md:max-w-[320px] p-4 md:p-6 flex flex-col justify-between mx-auto !bg-[#030712] shadow-2xl min-h-[70vh] md:min-h-[80vh]"
    >
      <div>
        <div className="flex flex-col items-center mb-10 md:mb-12">
          <Image
            src="/icons/logo.svg"
            width={56}
            height={56}
            alt="Nighto"
            className="invert mb-2 md:mb-3"
          />
          <h1 className="text-2xl md:text-4xl font-extrabold text-white tracking-wide mb-1 md:mb-2">Nighto</h1>
        </div>
        <nav className="flex flex-col gap-5 md:gap-6">
          {sidebarLinks.map((item) => {
            const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);
            return (
              <Link
                href={item.route}
                key={item.label}
                className={cn(
                  'flex items-center gap-3 md:gap-4 px-4 md:px-5 py-2.5 md:py-3 font-bold text-base md:text-lg transition-all duration-200',
                  {
                    'bg-gradient-to-r from-red-800 via-red-500 to-pink-400 text-white shadow-lg scale-105 rounded-r-xl rounded-l-none pl-0': isActive,
                    'hover:bg-[#23242a]/70 hover:text-white text-gray-300 rounded-xl': !isActive,
                  }
                )}
                style={isActive ? { borderLeft: '5px solid #fff' } : {}}
              >
                <div className="relative size-6 md:size-7">
                  <Image
                    src={item.imgURL}
                    alt={item.label}
                    fill
                    className={cn({ 'brightness-[3] invert-0': isActive })}
                  />
                </div>
                <span className="font-semibold">{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
      <div className="mt-10 md:mt-16 pt-6 md:pt-8 border-t border-gray-800 flex items-center gap-3">
        <Footer user={user} />
      </div>
    </section>
  )
}

export default Sidebar
