import AuthForm from '@/components/AuthForm'
import React from 'react'
import { getLoggedInUser } from '@/lib/actions/user.actions';
import { redirect } from 'next/navigation';

const SignIn = async () => {
  
  const loggedInUser = await getLoggedInUser();

  if(!loggedInUser) {
    return (
        <section className='flex-center size-full max-sm:px-6'>
          <AuthForm type="sign-in"/>

        </section>
      )
  }

  if(loggedInUser) {
    
    redirect("/")
  }
}

export default SignIn
