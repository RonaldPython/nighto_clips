import React from 'react'
import HeaderBox from '@/components/HeaderBox'
import { getLoggedInUser } from '@/lib/actions/user.actions';
import PaymentTransferForm from '@/components/PaymentTransferForm'


const RegisterAirdrop = async () => {
  const loggedIn = await getLoggedInUser();


  return (
    <section className="payment-transfer">
      <HeaderBox 
        title="Register Airdrop"
        subtext="Please provide any specific details or notes related to the register airdrop"
      />

      <section className="size-full pt-5">
        <PaymentTransferForm type={''}  />
      </section>
    </section>
  )
}


export default RegisterAirdrop
