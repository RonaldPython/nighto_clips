"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";


import { DateTimePicker } from '@/components/ui/datetime-picker';

import { Button } from "./ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { RegisterAirdrop } from "@/lib/actions/user.actions"
import { Toaster, toast } from 'sonner'




const formSchema = z.object({
  airdropName: z.string().max(30, "Invalid name"),
  dailyActivity: z.string().min(4, "Transfer note is too short"),
  airdropType: z.string(),
  airdropTime: z.date(),
  airdropLink: z.string().url("Invalid URL"),
  airdropStatus: z.boolean(),
  airdropClaim: z.number(),
  AirdropStars: z.number()
});


const PaymentTransferForm = ({ type }: {type: string}) => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false);

  const [selectedValue, setSelectedValue] = useState('telegram');

  const now = new Date();
  const formattedDate = now.toISOString().slice(0, 16);

  const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        dailyActivity: "",
        airdropName: "",
        airdropType: "",
        airdropLink: "",
        airdropStatus: true,
        airdropClaim: 0.00,
        AirdropStars: 0
      },
    });
  

  const onSubmit = async (data: z.infer<typeof formSchema>) => {

      setIsLoading(true)
  
      try {
        console.log(data)

        // Step 1: Extract the original date string
        const originalDateString = data.airdropTime;

        // Step 2: Convert the original date string to ISO 8601 format
        const isoFormattedDate = new Date(originalDateString).toISOString();

        // Step 3: Update the data object with the new ISO 8601 formatted date
        data.airdropTime = isoFormattedDate;
        data.airdropType = selectedValue;
        data.AirdropStars = 0
        
        const newAirdrop = await RegisterAirdrop(data)

        console.log(newAirdrop)

        if(newAirdrop) toast.success("You Successfully Registered An Airdrop !"), router.push("/my-airdrops")

      }  catch (error) {
        console.log(error)

        toast.error("SomeThing Went Wrong.");


      } finally {
        setIsLoading(false)
      }
      
  
    }
  

  return (

    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col">
        <FormField
          control={form.control}
          name="airdropType"
          render={() => (
            <FormItem className="border-t border-gray-200">
              <div className="payment-transfer_form-item pb-6 pt-5">
                <div className="payment-transfer_form-content">
                  <FormLabel className="text-14 font-medium text-gray-700">
                    Select Airdrop Type
                  </FormLabel>
                  <FormDescription className="text-12 font-normal text-gray-600">
                    Select the airdrop type so you will see it
                  </FormDescription>
                </div>
                <div className="flex w-full flex-col">
                  <FormControl>
                  <Select value={selectedValue} onValueChange={setSelectedValue}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Theme" />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-300">
                        <SelectItem value="telegram">Telegram</SelectItem>
                        <SelectItem value="website">Website</SelectItem>
                        <SelectItem value="testNet">Test Net</SelectItem>
                    </SelectContent>
                  </Select>
                  </FormControl>
                  <FormMessage className="text-12 text-red-500" />
                </div>
              </div>
            </FormItem>
          )}
        />

        <Toaster position="top-left" richColors />

        <FormField
          control={form.control}
          name="dailyActivity"
          render={({ field }) => (
            <FormItem >
              <div className="payment-transfer_form-item pb-6 pt-5">
                <div className="payment-transfer_form-content">
                  <FormLabel className="text-14 font-medium text-gray-700">
                    Airdrop Info
                  </FormLabel>
                  <FormDescription className="text-12 font-normal text-gray-600">
                    Please provide any additional information or instructions
                    related to the airdrop
                  </FormDescription>
                </div>
                <div className="flex w-full flex-col">
                  <FormControl>
                    <Textarea
                      placeholder="Write additional information about the airdrop"
                      className="input-class"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-12 text-red-500" />
                </div>
              </div>
            </FormItem>
          )}
        />

      
        <FormField
          control={form.control}
          name="airdropName"
          render={({ field }) => (
            <FormItem className="border-t border-gray-200">
              <div className="payment-transfer_form-item py-5">
                <FormLabel className="text-14 w-full max-w-[280px] font-medium text-gray-700">
                  Airdrop Name
                </FormLabel>
                <div className="flex w-full flex-col">
                  <FormControl>
                    <Input
                      placeholder="ex: LayerZero"
                      className="input-class"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-12 text-red-500" />
                </div>
              </div>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="airdropLink"
          render={({ field }) => (
            <FormItem className="border-t border-gray-200">
              <div className="payment-transfer_form-item pb-5 pt-6">
                <FormLabel className="text-14 w-full max-w-[280px] font-medium text-gray-700">
                  Airdrop Link
                </FormLabel>
                <div className="flex w-full flex-col">
                  <FormControl>
                    <Input
                      placeholder="Enter the airdrop link"
                      className="input-class"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-12 text-red-500" />
                </div>
              </div>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="airdropTime"
          render={({ field }) => (
            <FormItem className="border-y border-gray-200">
              <div className="payment-transfer_form-item py-5">
                <FormLabel className="text-14 w-full max-w-[280px] font-medium text-gray-700">
                  Airdrop Time
                </FormLabel>
                <div className="flex w-full flex-col ">
                  <FormControl>
                    <DateTimePicker value={field.value} onChange={field.onChange} />
                  </FormControl>
                  <FormMessage className="text-12 text-red-500" />
                </div>
              </div>
            </FormItem>
          )}
        />


        


        <div className="payment-transfer_btn-box">
          <Button type="submit" className="payment-transfer_btn">
            {isLoading ? (
              <>
                <Loader2 size={20} className="animate-spin" /> &nbsp; Sending...
              </>
            ) : (
              "Register Airdrops"
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default PaymentTransferForm;