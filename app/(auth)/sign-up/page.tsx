import AuthForm from '@/components/AuthForm'
import { getLoggedInUser } from '@/lib/actions/user.actions';
import { redirect } from 'next/navigation';

const SignUp = async () => {
  const loggedInUser = await getLoggedInUser();


  if(!loggedInUser) {
    return (
    <section className='flex-center size-full max-sm:px-6'>
      <AuthForm type="sign-up"/>

    </section>
  )
  }

  if(loggedInUser) {
    redirect("/")
  }
  
}

export default SignUp
