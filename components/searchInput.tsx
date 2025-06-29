"use client";

import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const SearchInput = () => {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search/${query}`);
    }
  };

  return (
    <div className="flex justify-center items-center w-full h-20">
      <form onSubmit={handleSearch} className="flex w-full max-w-lg items-center space-x-2 bg-white rounded-full shadow-lg p-2">
        <Input 
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..." 
          className="flex-1 rounded-full border-none focus:ring-0"
        />
        <Button 
          type="submit" 
          className="bg-blue-600 text-white rounded-full px-6 py-2 hover:bg-blue-700"
        >
          Search
        </Button>
      </form>
    </div>
  );
}

export default SearchInput;
