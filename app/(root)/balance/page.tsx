import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { DollarSign, Coins, CreditCard } from 'lucide-react';

export default function BalancePage() {
  return (
    <div className="max-w-5xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-8 text-white">My Balance</h1>
      <div className="flex flex-col md:flex-row gap-6 mb-10">
        {/* Campaign Balance Card */}
        <div className="w-full">
          <div className="relative group bg-[#23242a] rounded-xl p-8 shadow-lg shadow-black/30 border-t-4 border-red-500 overflow-hidden">
            <span className="absolute right-8 top-8 bg-gradient-to-r from-red-500 to-pink-500 rounded-full p-4 shadow-lg flex items-center justify-center">
              <DollarSign size={32} className="text-white" strokeWidth={2.5} />
            </span>
            <CardTitle className="text-white text-2xl mb-2">Campaign Balance</CardTitle>
            <div className="text-4xl font-bold text-red-400 mb-2">$12.34</div>
            <div className="text-gray-300 text-base mb-1">Minimum withdrawal amount is $50</div>
            <div className="text-gray-400 italic text-sm mb-6">Campaign earnings are added after campaigns end. If your payout is pending, please allow some time for processing.</div>
            <Button disabled className="w-full font-semibold bg-gradient-to-r from-red-500 to-pink-500 text-white opacity-70 cursor-not-allowed py-3 text-base rounded-lg mt-2 shadow-md">Request Campaign Payout</Button>
          </div>
        </div>
      </div>

      <div className="mb-10">
        <h2 className="text-xl font-bold text-white mb-4">Payment Information</h2>
        <div className="bg-[#23242a] rounded-xl p-8 shadow-lg shadow-black/30 border-t-4 border-red-500">
          <div className="flex items-start gap-5 mb-8">
            <div className="bg-gradient-to-r from-red-500 to-pink-500 rounded-full p-3 shadow-lg flex items-center justify-center">
              <CreditCard size={28} className="text-white" strokeWidth={2.5} />
            </div>
            <div>
              <div className="font-bold text-white text-lg mb-1">Minimum Withdrawal</div>
              <div className="text-gray-300 text-base">To keep payment operations efficient, a minimum withdrawal of $50 is required. This ensures fees remain fair and transactions are processed smoothly for everyone.</div>
            </div>
          </div>
          <div className="flex items-start gap-5">
            <div className="bg-gradient-to-r from-red-500 to-pink-500 rounded-full p-3 shadow-lg flex items-center justify-center">
              <Coins size={28} className="text-white" strokeWidth={2.5} />
            </div>
            <div>
              <div className="font-bold text-white text-lg mb-1">Payment Fees</div>
              <div className="text-gray-300 text-base">A 3% platform fee applies to all withdrawals. Additional fees may be charged by your payment provider depending on your region and method. We work to keep these as low as possible for you.</div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-10">
        <h2 className="text-xl font-bold text-white mb-4">Recent Transactions</h2>
        <div className="bg-[#23242a] rounded-xl p-8 shadow-lg shadow-black/30 border-t-4 border-red-500 text-center text-gray-400">
          Your recent transaction history will appear here once you have completed payments.
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold text-white mb-4">Need Help?</h2>
        <div className="bg-[#23242a] rounded-xl p-8 shadow-lg shadow-black/30 border-t-4 border-red-500">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="font-bold text-white mb-1 text-lg">If you have any questions about payments or need assistance, our support team is here to help.</div>
              <div className="text-gray-300 text-base">Contact us for quick help with your balance, withdrawals, or payment issues.</div>
            </div>
            <Button variant="secondary" className="mt-2 md:mt-0 flex items-center gap-2 bg-gradient-to-r from-red-500 to-pink-500 text-white border-0 shadow-md hover:from-red-600 hover:to-pink-400 py-3 text-base rounded-lg">
              Contact Support
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
