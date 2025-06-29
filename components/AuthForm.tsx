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
    <section className='auth-form'>
      <header className='flex flex-col gap-5 md:gap-8'>
        <Link href="/" className='cursor-pointer items-center gap-1 flex'>
          <Image
            src="/icons/logo.svg"
            width={34}
            height={34}
            alt='Nighto'
          />
          <h1 className='text-26 font-ibm-plex-serif font-bold text-black-1'>
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
                        <FormLabel className='form-label'>
                          First Name
                        </FormLabel>
                        <div className='flex w-full flex-col'>
                          <FormControl>
                            <Input
                              placeholder='Enter Your First Name'
                              className='input-class'
                              {...field}
                            />
                          </FormControl>
                          <FormMessage
                            className='form-message mt-2'
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
                        <FormLabel className='form-label'>
                          Last Name
                        </FormLabel>
                        <div className='flex w-full flex-col'>
                          <FormControl>
                            <Input
                              placeholder='Enter Your Last Name'
                              className='input-class'
                              {...field}
                            />
                          </FormControl>
                          <FormMessage
                            className='form-message mt-2'
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
                        <FormLabel className='form-label'>
                          Crypto Address
                        </FormLabel>
                        <div className='flex w-full flex-col'>
                          <FormControl>
                            <Input
                              placeholder='Enter Your EVM (ETH, BSC, Polygon) Address'
                              className='input-class'
                              {...field}
                            />
                          </FormControl>
                          <FormMessage
                            className='form-message mt-2'
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
                    <FormLabel className='form-label'>
                      Email
                    </FormLabel>
                    <div className='flex w-full flex-col'>
                      <FormControl>
                        <Input
                          placeholder='Enter Your Email'
                          className='input-class'
                          {...field}
                        />
                      </FormControl>
                      <FormMessage
                        className='form-message mt-2'
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
                    <FormLabel className='form-label'>
                      Password
                    </FormLabel>
                    <div className='flex w-full flex-col'>
                      <FormControl>
                        <Input
                          placeholder='Enter Your Password'
                          className='input-class'
                          type='password'
                          {...field}
                        />
                      </FormControl>
                      <FormMessage
                        className='form-message mt-2'
                      />
                    </div>
                  </div>
                )}
              />
              <div className='flex flex-col gap-4'>
                <Button type="submit" disabled={IsLoading} className='form-btn'>
                  {IsLoading ? (
                    <>
                      <Loader2 size={20} className='animate-spin' /> &nbsp;
                      Loading...
                    </>
                  ) : type === "sign-in" ? 'Sign In' : 'Sign Up'}
                </Button>
              </div>
            </form>
          </Form>
          <footer className='flex justify-center gap-1'>
            <p className='text-14 font-normal text-gray-600'>{type === 'sign-in'
              ? "Don't have an account?"
              : "Already have an account?"}
            </p>
            <Link href={type === "sign-in" ? "/sign-up" : "/sign-in"}
              className='form-link'>
              {type === "sign-in" ? "Sign Up" : "Sign In"}
            </Link>
          </footer>
        </>
      )}
    </section>
  )
}

export default AuthForm