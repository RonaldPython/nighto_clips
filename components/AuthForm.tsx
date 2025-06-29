'use client'

import Link from 'next/link'
import Image from 'next/image'
import React, { useState } from 'react'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Loader2 } from 'lucide-react'
import { signUp } from "@/lib/actions/user.actions"
import { signIn } from '@/lib/actions/user.actions'
import { useRouter } from 'next/navigation'
import { Toaster, toast } from 'sonner'

const formSchemaAuth = (type: string) => z.object({
  email: z.string().email(),
  password: z.string().min(8),
  firstName: type === "sign-in" ? z.string().optional() : z.string().min(3).max(7),
  lastName: type === "sign-in" ? z.string().optional() : z.string().min(3).max(7),
  address: type === "sign-in" ? z.string().optional() : z.string().min(42).max(42),
})

const AuthForm = ({ type }: { type: string }) => {
  const router = useRouter()
  const [user, setUser] = useState(null)
  const [IsLoading, setIsLoading] = useState(false)

  const formSchema = formSchemaAuth(type)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  })

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsLoading(true)

    try {
      if (type === "sign-up") {
        const newUser = await signUp(data)
        setUser(newUser), toast.success("You Successfully Signned Up!"),
        router.push("/")
      }

      if (type === "sign-in") {
        const response = await signIn({
          email: data.email,
          password: data.password,
        })

        if (response) {
          toast.success("You Successfully Logged In!")
          router.push("/")
        }
      }

    } catch (error) {
      toast.error("Invalid credentials. Please check the email and password.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className='auth-form bg-[#181A20] min-h-screen flex flex-col justify-center items-center'>
      <div className='w-full max-w-md p-10 bg-gradient-to-br from-[#23242a] to-[#181A20] rounded-2xl shadow-2xl border border-red-500/40'>
        <header className='flex flex-col items-center gap-3 md:gap-4 mb-10'>
          <Link href="/" className='flex flex-row items-center gap-2'>
            <Image
              src="/icons/logo.svg"
              width={48}
              height={48}
              alt='Nighto'
              className='invert drop-shadow-[0_2px_8px_rgba(239,68,68,0.5)]'
            />
            <h1 className='text-3xl font-ibm-plex-serif font-extrabold text-red-500'>
              Nighto
            </h1>
          </Link>
        </header>

        <Toaster position="top-left" richColors />

        {user ? (
          <div className='flex flex-col gap-4'>
            {/* PlaidLink */}
          </div>
        ) : (
          <>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                {type === "sign-up" && (
                  <>
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <div className='form-item'>
                          <FormLabel className='form-label text-white'>
                            First Name
                          </FormLabel>
                          <div className='flex w-full flex-col'>
                            <FormControl>
                              <Input
                                placeholder='Enter Your First Name'
                                className='bg-[#181A20] !text-white placeholder-red-300 !border !border-red-500 focus:!border-red-500 focus:!ring-2 focus:!ring-red-500 !shadow-lg rounded-2xl text-base px-4 py-3 mb-4 transition-all duration-200'
                                {...field}
                              />
                            </FormControl>
                            <FormMessage
                              className='form-message mt-2 text-red-400'
                            />
                          </div>
                        </div>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <div className='form-item'>
                          <FormLabel className='form-label text-white'>
                            Last Name
                          </FormLabel>
                          <div className='flex w-full flex-col'>
                            <FormControl>
                              <Input
                                placeholder='Enter Your Last Name'
                                className='bg-[#181A20] !text-white placeholder-red-300 !border !border-red-500 focus:!border-red-500 focus:!ring-2 focus:!ring-red-500 !shadow-lg rounded-2xl text-base px-4 py-3 mb-4 transition-all duration-200'
                                {...field}
                              />
                            </FormControl>
                            <FormMessage
                              className='form-message mt-2 text-red-400'
                            />
                          </div>
                        </div>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="address"
                      render={({ field }) => (
                        <div className='form-item'>
                          <FormLabel className='form-label text-white'>
                            Crypto Address
                          </FormLabel>
                          <div className='flex w-full flex-col'>
                            <FormControl>
                              <Input
                                placeholder='Enter Your EVM (ETH, BSC, Polygon) Address'
                                className='bg-[#181A20] !text-white placeholder-red-300 !border !border-red-500 focus:!border-red-500 focus:!ring-2 focus:!ring-red-500 !shadow-lg rounded-2xl text-base px-4 py-3 mb-4 transition-all duration-200'
                                {...field}
                              />
                            </FormControl>
                            <FormMessage
                              className='form-message mt-2 text-red-400'
                            />
                          </div>
                        </div>
                      )}
                    />
                  </>
                )}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <div className='form-item'>
                      <FormLabel className='form-label text-white'>
                        Email
                      </FormLabel>
                      <div className='flex w-full flex-col'>
                        <FormControl>
                          <Input
                            placeholder='Enter Your Email'
                            className='bg-[#181A20] !text-white placeholder-red-300 !border !border-red-500 focus:!border-red-500 focus:!ring-2 focus:!ring-red-500 !shadow-lg rounded-2xl text-base px-4 py-3 mb-4 transition-all duration-200'
                            {...field}
                          />
                        </FormControl>
                        <FormMessage
                          className='form-message mt-2 text-red-400'
                        />
                      </div>
                    </div>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <div className='form-item'>
                      <FormLabel className='form-label text-white'>
                        Password
                      </FormLabel>
                      <div className='flex w-full flex-col'>
                        <FormControl>
                          <Input
                            placeholder='Enter Your Password'
                            className='bg-[#181A20] !text-white placeholder-red-300 !border !border-red-500 focus:!border-red-500 focus:!ring-2 focus:!ring-red-500 !shadow-lg rounded-2xl text-base px-4 py-3 mb-4 transition-all duration-200'
                            type='password'
                            {...field}
                          />
                        </FormControl>
                        <FormMessage
                          className='form-message mt-2 text-red-400'
                        />
                      </div>
                    </div>
                  )}
                />
                <div className='flex flex-col gap-4'>
                  <button
                    type="submit"
                    disabled={IsLoading}
                    className='w-full !bg-red-500 !text-white !font-bold !rounded-2xl !py-3 !mt-2 !shadow-lg hover:!bg-red-600 hover:!shadow-red-500/40 transition-all duration-200 text-base ring-2 ring-transparent focus:ring-red-400 focus:ring-4'
                  >
                    {IsLoading ? (
                      <>
                        <Loader2 size={20} className='animate-spin' /> &nbsp;
                        Loading...
                      </>
                    ) : type === "sign-in" ? 'Sign In' : 'Sign Up'}
                  </button>
                </div>
              </form>
            </Form>
            <footer className='flex justify-center gap-1'>
              <p className='text-14 font-normal text-red-300 mt-4'>{type === 'sign-in'
                ? "Don't have an account?"
                : "Already have an account?"}
              </p>
              <Link
                href={type === "sign-in" ? "/sign-up" : "/sign-in"}
                className='text-red-500 !font-bold mt-3.5 hover:!text-red-600 transition text-base'
              >
                {type === "sign-in" ? "Sign Up" : "Sign In"}
              </Link>
            </footer>
            <hr className='my-8 border-t border-red-500/20' />
          </>
        )}
      </div>
    </section>
  )
}

export default AuthForm