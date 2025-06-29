import { logoutAccount } from '@/lib/actions/user.actions'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'
import { Toaster, toast } from 'sonner'



const Footer = ({ user, type = 'desktop'}: FooterProps) => {
  const router = useRouter()

  const handleLogout = async () => {
    const loggedOut = await logoutAccount();
  
    if (loggedOut) {
      toast.success("You Successfully Logged Out!");
      await new Promise(resolve => setTimeout(resolve, 500)); // Short delay before navigation
      router.push("/sign-in");
    }
  };
  

  return (
    <footer className='footer'>
      <div className={type === "mobile" ? 'footer_name-mobile flex items-center justify-center w-14 h-14 rounded-full bg-gray-200 border-2 border-white shadow-lg mr-4' : 'footer_name'}>
        <p className='text-3xl font-extrabold text-gray-900'>
            {user?.name[0]}
        </p>
      </div>

      <div className={type === "mobile" ? 'footer_email-mobile' : "footer_email"}>
        <h1 className='text-14 truncate text-gray-800 font-semibold'>
            {user?.name}
        </h1>
        <p className='text-12 truncate font-normal text-gray-600'>
            {user?.email}
        </p>
      </div>

      


      <div className='footer_image' onClick={handleLogout}>
        <Image 
        src="icons/logout.svg" fill alt='jsm'
        />
        <Toaster position="top-left" richColors />
      </div>
    </footer>
  )
}

export default Footer
