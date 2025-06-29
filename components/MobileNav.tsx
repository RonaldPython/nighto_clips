'use client'

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { sidebarLinks } from "@/constants"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Footer from "./Footer"
  
const MobileNav = ({user}: MobileNavProps) => {
  const pathname = usePathname()


  return (
    <section className="w-full max-w-[264px]">
    <Sheet>
        <SheetTrigger>

            <Image 
                src='/icons/hamburger.svg'
                width={30}
                height={30}
                alt="menu"
                className="cursor-pointer"
            />

        </SheetTrigger>

        <SheetContent side="left" className="border-none !bg-[#181A20] p-0 flex flex-col h-full">
          <div className="flex flex-col items-center pt-6 pb-2">
            <Image
              src="/icons/logo.svg"
              width={40}
              height={40}
              alt="Nighto"
              className="invert mb-2"
            />
            <h1 className="text-2xl font-extrabold text-white tracking-wide mb-2">Nighto</h1>
          </div>
          <div className="flex flex-col h-full flex-1">
            <SheetClose asChild>
              <nav className="flex flex-col gap-5 px-4 pt-2">
                {sidebarLinks.map((item) => {
                  const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);
                  return (
                    <SheetClose asChild key={item.label}>
                      <Link
                        href={item.route}
                        className={cn(
                          'flex items-center gap-3 px-4 py-2.5 rounded-xl font-bold text-base transition-all duration-200',
                          {
                            'bg-gradient-to-r from-red-800 via-red-500 to-pink-400 text-white shadow-lg scale-105': isActive,
                            'hover:bg-[#23242a]/70 hover:text-white text-gray-300': !isActive,
                          }
                        )}
                        style={isActive ? { borderLeft: '5px solid #fff' } : {}}
                      >
                        <Image
                          src={item.imgURL}
                          alt={item.label}
                          width={22}
                          height={22}
                          className={cn({ 'brightness-[3] invert-0': isActive })}
                        />
                        <span className="font-semibold">{item.label}</span>
                      </Link>
                    </SheetClose>
                  );
                })}
              </nav>
            </SheetClose>
            <div className="mt-auto pt-6 border-t border-gray-800 px-4">
              <Footer user={user} type="mobile" />
            </div>
          </div>
        </SheetContent>
    </Sheet>

    </section>
  )
}

export default MobileNav
