'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'
import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import Footer from './Footer'

const Sidebar = ({user}: SiderbarProps) => {
  const pathname = usePathname()
  const [isCollapsed, setIsCollapsed] = useState(true)

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed)
  }

  return (
    <section
      className={cn(
        "sidebar fixed top-0 left-0 h-screen z-30 flex flex-col justify-between !bg-[#030712] shadow-2xl transition-all duration-300 ease-in-out",
        {
          "w-16 md:w-20 p-2 md:p-3": isCollapsed,
          "w-full max-w-xs md:max-w-[320px] p-4 md:p-6": !isCollapsed,
        }
      )}
      style={{ minHeight: '100vh' }}
    >
      <div>
        <div className={cn(
          "flex items-center mb-10 md:mb-12",
          {
            "flex-col": !isCollapsed,
            "justify-center": isCollapsed,
          }
        )}>
          <Image
            src="/icons/logo.svg"
            width={isCollapsed ? 40 : 56}
            height={isCollapsed ? 40 : 56}
            alt="Nighto"
            className="invert mb-2 md:mb-3"
          />
          {!isCollapsed && (
            <h1 className="text-2xl md:text-4xl font-extrabold text-white tracking-wide mb-1 md:mb-2">Nighto</h1>
          )}
        </div>
        
        <nav className="flex flex-col gap-5 md:gap-6">
          {sidebarLinks.map((item) => {
            const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);
            return (
              <Link
                href={item.route}
                key={item.label}
                className={cn(
                  'flex items-center transition-all duration-200 font-bold',
                  {
                    'gap-3 md:gap-4 px-4 md:px-5 py-2.5 md:py-3 text-base md:text-lg': !isCollapsed,
                    'justify-center px-2 py-2.5 md:py-3 text-sm': isCollapsed,
                    'bg-gradient-to-r from-red-800 via-red-500 to-pink-400 text-white shadow-lg scale-105 rounded-r-xl rounded-l-none pl-0': isActive && !isCollapsed,
                    'bg-gradient-to-r from-red-800 via-red-500 to-pink-400 text-white shadow-lg scale-105 rounded-xl': isActive && isCollapsed,
                    'hover:bg-[#23242a]/70 hover:text-white text-gray-300 rounded-xl': !isActive,
                  }
                )}
                style={isActive && !isCollapsed ? { borderLeft: '5px solid #fff' } : {}}
                title={isCollapsed ? item.label : undefined}
              >
                <div className={cn("relative size-6 md:size-7", {
                  'text-white': isActive,
                  'text-gray-400': !isActive,
                  ...(item.label === 'Socials' && { 'flex items-center justify-center': true }),
                })}>
                  {item.label === 'Socials' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                      <path d="M13 8c0-2.21-1.79-4-4-4S5 5.79 5 8s1.79 4 4 4s4-1.79 4-4zm2 2v2h3v3h2v-3h3v-2h-3V7h-2v3h-3zM1 18v2h16v-2c0-2.66-5.33-4-8-4s-8 1.34-8 4z" />
                    </svg>
                  ) : (
                    <Image
                      src={item.imgURL}
                      alt={item.label}
                      fill
                      className={cn({ 'brightness-[3] invert-0': isActive })}
                    />
                  )}
                </div>
                {!isCollapsed && (
                  <span className="font-semibold">{item.label}</span>
                )}
              </Link>
            );
          })}
        </nav>
      </div>
      
      {/* Bottom section with toggle button and footer */}
      <div className="flex flex-col gap-3">
        {/* Toggle Button - positioned at bottom */}
        <button
          onClick={toggleSidebar}
          className={cn(
            "bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg p-2 transition-all duration-200 flex items-center justify-center",
            {
              "w-full": !isCollapsed,
              "w-12 h-10 mx-auto": isCollapsed,
            }
          )}
          title={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
        >
          <Image
            src="/icons/arrow-left.svg"
            width={18}
            height={18}
            alt="Toggle Sidebar"
            className={cn(
              "transition-transform duration-300 invert",
              {
                "rotate-180": isCollapsed,
              }
            )}
          />
          {!isCollapsed && (
            <span className="ml-2 text-white font-medium text-sm">Collapse</span>
          )}
        </button>

        {/* Footer/Logout - always visible */}
        <div className={cn(
          "border-t border-gray-800 pt-3",
          {
            "flex items-center gap-3": !isCollapsed,
            "flex justify-center": isCollapsed,
          }
        )}>
          <Footer user={user} type={isCollapsed ? 'minimized' : 'desktop'} />
        </div>
      </div>
    </section>
  )
}

export default Sidebar
