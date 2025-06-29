"use client";

import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { formUrlQuery, formatAmount } from "@/lib/utils";

export const BankDropdown = () => {
  const [selectedValue, setSelectedValue] = useState('');
  
  return (
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

  );
};