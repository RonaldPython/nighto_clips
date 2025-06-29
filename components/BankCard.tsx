"use client";

import { formatAmount } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React, { ChangeEvent, useState } from 'react'
import Copy from './Copy'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { UpdateAirdropInfo } from '@/lib/actions/user.actions';
import { DeleteAirdrop } from '@/lib/actions/user.actions';
import { UpdateUserBalance } from '@/lib/actions/user.actions';
import { Loader2 } from "lucide-react";
import {
  IconBrandBumble,
  IconSquareRoundedX,
  IconBrandTelegram,
  IconBrandX,
  IconBrandDiscord
} from "@tabler/icons-react";
import { Toaster, toast } from 'sonner'



interface BankCardData {
  airdropName: string;
  airdropClaim: number;
  airdropType: string;
  airdropStatus: boolean;
  airdropLink: string;
  airdropTime: string;
  airdropInfo: string;
  airdropId: string
  AirdropStars: any,
  Telegram: any,
  Discord: any,
  Glaxe: any,
  Twitter: any
}



const BankCard = ({...data}: BankCardData) => {

  const [isLoading, setIsLoading] = useState(false);
  const showBalance = true;

  const [isOpen, setIsOpen] = useState(false)

  const handleClose = () => setIsOpen(false)
  const handleOpen = () => setIsOpen(true)

  const socialsData = {
    telegram: "",
    discord: "",
    twitter: "",
    galxe: ""
  }

  console.log(data)
  const [inputs, setInputs] = useState({
    airdropName: data.airdropName,
    airdropLink: data.airdropLink,
    airdropInfo: data.airdropInfo,
    airdropClaim: data.airdropClaim,
    airdropStatus: data.airdropStatus ? 'Ongoing' : 'Ended',
    airdropType: data.airdropType,
  });

  const [inputs_socials, setInputsSocials] = useState({
    Telegram: socialsData.telegram,
    Discord: socialsData.discord,
    Twitter: socialsData.twitter,
    Glaxe: socialsData.galxe
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setInputs((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleStatusChange = (value: string) => {
    setInputs((prev) => ({
      ...prev,
      airdropStatus: value === 'Ongoing',
    }));
  };

  const handleTypeChange = (value: string) => {
    setInputs((prev) => ({
      ...prev,
      airdropType: value,
    }));
  };

  const handleInputChangeSocial = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setInputsSocials((prev) => ({
      ...prev,
      [id]: value,
    }));
  };
  

  const handleDelete = async () => {
    setIsLoading(true)

    try {
      const res = await DeleteAirdrop(data.airdropId) 

      console.log(res)
    } catch (error) {
      console.log(error)
      
    } finally {
      setIsLoading(false)
      toast.success("The Airdrop Is Deleted !")
    }

  }

  const handleSubmit = async () => {
    setIsLoading(true)
    console.log("Inputs:", inputs);
    
      try {
        const updatedData = {
          airdropName: inputs.airdropName,
          airdropLink: inputs.airdropLink,
          dailyActivity: inputs.airdropInfo,
          airdropType: inputs.airdropType,
          airdropStatus: inputs.airdropStatus === 'Ongoing',
          AirdropClaim: parseFloat(inputs.airdropClaim),
        };
  
        await UpdateAirdropInfo(data.airdropId, updatedData);
        await UpdateUserBalance(parseFloat(inputs.airdropClaim))
        console.log("Airdrop updated successfully");
        toast.success("Airdrop updated successfully")
  
      } catch (error) {
        console.error("Failed to update airdrop:", error);
      } finally {
        setIsLoading(false)
      }
    };
    // Handle the inputs values here (e.g., send to an API, update state elsewhere, etc.)


  const handleSubmitSocials = async () => {
    setIsLoading(true)
    console.log("Inputs:", inputs_socials);
    
    try {
      
      const updatedDataSocial = {
        Telegram: inputs_socials.Telegram,
        Discord: inputs_socials.Discord,
        Twitter: inputs_socials.Twitter,
        Glaxe: inputs_socials.Glaxe,
        SocialsEnabled: true
      };

      await UpdateAirdropInfo(data.airdropId, updatedDataSocial);
      console.log("Airdrop updated successfully");
      toast.success("Airdrop Socials updated successfully")

    } catch (error) {
      console.error("Failed to update airdrop:", error);
      
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <HoverCard>
      <div className="flex flex-col">
        <div className="relative flex h-[190px] justify-between rounded-[20px] border border-white bg-violet-800 shadow-creditCard backdrop-blur-[6px]">
          <div className="relative z-10 flex flex-col justify-between rounded-l-[20px] px-5 pb-4 pt-5">
            <div>
              <HoverCardTrigger>
                <h1 className="text-16 font-semibold text-white">
                  {data.airdropName}
                </h1>
              </HoverCardTrigger>

              <HoverCardContent className='bg-slate-300 p-4 rounded-lg shadow-md w-80 max-h-96 overflow-y-auto'>
                <div className="text-black">
                  <p className="text-sm font-bold">Airdrop Name: <span className="font-normal">{data.airdropName}</span></p>
                  <p className="text-sm font-bold">Claimed Amount: <span className="font-normal">{formatAmount(data.airdropClaim)}</span></p>
                  <p className="text-sm font-bold">Airdrop Type: <span className="font-normal">{data.airdropType}</span></p>
                  <p className="text-sm font-bold">Status: <span className="font-normal">{data.airdropStatus ? 'Ongoing' : 'Ended'}</span></p>
                  <p className="text-sm font-bold">Airdrop Link: <span className="font-normal">
                    <Link href={data.airdropLink} className="text-blue-500 underline">
                      {data.airdropLink}
                    </Link>
                  </span></p>
                  <p className="text-sm font-bold">Time: <span className="font-normal">{new Date(data.airdropTime).toLocaleString()}</span></p>
                  <p className="text-sm font-bold">Airdrop Info: <span className="font-normal">{data.airdropInfo}</span></p>
                  <p className="text-sm font-bold">Airdrop Stars: <span className="font-normal">{data.AirdropStars}</span></p>
                  {/* Social Links Container */}
                 
                    <a href={data.Telegram} className="text-blue-500 hover:text-blue-700" aria-label="Telegram">
                      <IconBrandTelegram size={30} />
                    </a>
                    <a href={data.Discord} className="text-[#7289DA] hover:text-[#4F5D73]" aria-label="Discord">
                      <IconBrandDiscord size={30} />
                    </a>
                    <a href={data.Twitter} className="text-[#1DA1F2] hover:text-[#1A91DA]" aria-label="Twitter">
                      <IconBrandX size={30} />
                    </a>
                  
                </div>
              </HoverCardContent>

              <p className="font-ibm-plex-serif font-black text-white">
                {formatAmount(data.airdropClaim)}
              </p>
            </div>

            <Toaster position="top-left" richColors />

            <article className="flex flex-col gap-2">
              <div className="flex justify-between">
                <h1 className="text-12 font-semibold text-white">
                  {data.airdropType}
                </h1>
                <h2 className="text-12 font-semibold text-white">
                  {data.airdropStatus ? 'Ongoing' : 'Ended'}
                </h2>
              </div>
              <p className="text-14 font-semibold tracking-[1.1px] text-white overflow-hidden text-ellipsis whitespace-nowrap max-w-[180px]">
                {data.airdropLink}
              </p>
            </article>
          </div>

          <div className="flex h-full w-full flex-col items-end justify-between rounded-r-[20px] py-5 pr-5 relative">
            <Popover>
              <PopoverTrigger asChild> 
                <button 
                  className="bg-transparent text-white rounded-full p-2 shadow-md hover:bg-gray-400 transition duration-200 ease-in-out absolute top-2 left-0 z-10 flex items-center justify-center"
                  aria-label="Edit"
                >
                  <svg 
                    className="feather feather-edit" 
                    fill="none" 
                    height="24" 
                    stroke="currentColor" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    viewBox="0 0 24 24" 
                    width="24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                  </svg>
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-80 bg-slate-300">
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium leading-none">Edit Airdrop Details</h4>
                    <p className="text-sm text-muted-foreground">
                      Update the details for the airdrop.
                    </p>
                  </div>
                  <div className="grid gap-4">
                    <div className="grid grid-cols-3 items-center gap-4">
                      <Label htmlFor="airdropName">Airdrop Name</Label>
                      <Input
                        id="airdropName"
                        value={inputs.airdropName}
                        onChange={handleInputChange}
                        className="col-span-2 h-8"
                      />
                    </div>
                    <div className="grid grid-cols-3 items-center gap-4">
                      <Label htmlFor="airdropLink">Airdrop Link</Label>
                      <Input
                        id="airdropLink"
                        value={inputs.airdropLink}
                        onChange={handleInputChange}
                        className="col-span-2 h-8"
                      />
                    </div>
                    <div className="grid grid-cols-3 items-center gap-4">
                      <Label htmlFor="airdropClaim">Claimed Amount</Label>
                      <Input
                        id="airdropClaim"
                        type="number"
                        value={inputs.airdropClaim}
                        onChange={handleInputChange}
                        className="col-span-2 h-8"
                      />
                    </div>
                    <div className="grid grid-cols-3 items-center gap-4">
                      <Label htmlFor="airdropInfo">Airdrop Info</Label>
                      <textarea
                        id="airdropInfo"
                        value={inputs.airdropInfo}
                        onChange={handleInputChange}
                        className="col-span-2 h-24 p-2 border rounded-md"
                      />
                    </div>
                    <div className="grid grid-cols-3 items-center gap-4">
                      <Label htmlFor="airdropType">Airdrop Type</Label>
                      <Select
                        id="airdropType"
                        value={inputs.airdropType}
                        onValueChange={handleTypeChange}
                        className="col-span-2 "
                      >
                        <SelectTrigger className="h-8 w-full col-span-2">
                          <SelectValue placeholder="Select Type" />
                        </SelectTrigger>
                        <SelectContent className='bg-slate-300'>
                          <SelectItem value="telegram">Telegram</SelectItem>
                          <SelectItem value="website">Website</SelectItem>
                          <SelectItem value="testNet">TestNet</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid grid-cols-3 items-center gap-4">
                      <Label htmlFor="airdropStatus">Airdrop Status</Label>
                      <Select
                        id="airdropStatus"
                        value={inputs.airdropStatus ? 'Ongoing' : 'Ended'}
                        onValueChange={handleStatusChange}
                        className="col-span-2"
                      >
                        <SelectTrigger className="h-8 w-full col-span-2">
                          <SelectValue placeholder="Select Status" />
                        </SelectTrigger>
                        <SelectContent className='bg-slate-300'>
                          <SelectItem value="Ongoing">Ongoing</SelectItem>
                          <SelectItem value="Ended">Ended</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Button onClick={handleSubmit} disabled={isLoading} className="mt-4 bg-cyan-500">
                      {isLoading ? (
                        <>
                          <Loader2 size={20} className="animate-spin" /> &nbsp; Sending...
                        </>
                      ) : (
                        "Register Airdrops"
                      )}
                    </Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
            
          
            <Popover>
              <PopoverTrigger asChild>
                <button 
                  className=" bg-transparent text-white rounded-full shadow-md hover:bg-gray-400 transition duration-200 ease-in-out absolute top-2 right-24 z-10 flex items-center justify-center"
                  aria-label="Socials"
                >
                  <IconBrandBumble className="mt-2 text-white dark:text-neutral-300 size-7" />
                </button>
              </PopoverTrigger> 

              <PopoverContent className="w-80 bg-slate-300">
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium leading-none">Edit Airdrop Socials</h4>
                    <p className="text-sm text-muted-foreground">
                      Update the socials for the airdrop.
                    </p>
                  </div>
                  <div className="grid gap-4">
                    <div className="grid grid-cols-3 items-center gap-4">
                      <Label htmlFor="Telegram-label">Telegram</Label>
                      <Input
                        id="Telegram"
                        type="url"
                        value={inputs_socials.Telegram}
                        onChange={handleInputChangeSocial}
                        className="col-span-2 h-8"
                        required
                        placeholder="https://t.me/yourchannel"
                      />
                    </div>

                    <div className="grid grid-cols-3 items-center gap-4">
                      <Label htmlFor="DiscordSocial">Discord</Label>
                      <Input
                        id="Discord"
                        type="url"
                        value={inputs_socials.Discord}
                        onChange={handleInputChangeSocial}
                        className="col-span-2 h-8"
                        required
                        placeholder="https://discord.com/invite/yourinvite"
                      />
                    </div>
                    <div className="grid grid-cols-3 items-center gap-4">
                      <Label htmlFor="TwitterSocial">Twitter</Label>
                      <Input
                        id="Twitter"
                        type="url"
                        value={inputs_socials.Twitter}
                        onChange={handleInputChangeSocial}
                        className="col-span-2 h-8"
                        required
                        placeholder="https://twitter.com/yourprofile"
                      />
                    </div>
                    <div className="grid grid-cols-3 items-center gap-4">
                      <Label htmlFor="GlaxeSocial">Galxe</Label>
                      <Input
                        id="Glaxe"
                        type="url"
                        value={inputs_socials.Glaxe}
                        onChange={handleInputChangeSocial}
                        className="col-span-2 h-8"
                        required
                        placeholder="https://galxe.com/yourprofile"
                      />
                    </div>
                    <Button onClick={handleSubmitSocials} disabled={isLoading} className="mt-4 bg-cyan-500">
                      {isLoading ? (
                        <>
                          <Loader2 size={20} className="animate-spin" /> &nbsp; Sending...
                        </>
                      ) : (
                        "Register Socials"
                      )}
                    </Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>

            
            <Popover open={isOpen} onOpenChange={setIsOpen}>
              <PopoverTrigger asChild>
                  <button
                    className="bg-transparent text-white rounded-full shadow-md hover:bg-gray-400 transition duration-200 ease-in-out absolute top-3.5 right-36 z-10 flex items-center justify-center"
                    aria-label="Delete"
                  >
                    <IconSquareRoundedX className=" text-white dark:text-neutral-300  size-8" />
                  </button>
                </PopoverTrigger>

                <PopoverContent className="w-80 bg-slate-300 p-4 rounded-lg shadow-md">
                  <div className="space-y-4">
                    <h4 className="font-medium leading-none">Confirm Deletion</h4>
                    <p className="text-sm text-muted-foreground">
                      Are you sure you want to delete this airdrop? This action cannot be undone.
                    </p>
                    <div className="flex gap-4">
                      <Button
                        onClick={() => {
                          handleDelete()
                          handleClose()
                        }}
                        className="bg-red-500 hover:bg-red-600"
                      >
                        {isLoading ? (
                        <>
                          <Loader2 size={20} className="animate-spin" /> &nbsp; Sending...
                        </>
                      ) : (
                        "Delete"
                      )}
                      </Button>
                      <Button
                        className="bg-gray-500 hover:bg-gray-600"
                        onClick={handleClose}
                      >
                        Cancel
                      </Button>
                    </div>
                  </div>
                </PopoverContent>
            </Popover>

            <Image 
              src="/icons/Paypass.svg"
              width={20}
              height={24}
              alt="pay"
            />
            <Image 
              src="/icons/logo.svg"
              width={45}
              height={32}
              alt="logo"
              className="ml-5 text-white"
            />
          </div>

          <Image 
            src="/icons/lines.png"
            width={316}
            height={190}
            alt="lines"
            className="absolute top-0 left-0"
          />
        </div>

        {showBalance && <Copy title={data.airdropId} />}
      </div>
    </HoverCard>
  )
}

export default BankCard

