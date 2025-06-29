import SearchInput from '@/components/searchInput'
import { CarouselSize } from '@/components/TopDrops'
import { TopDrops } from '@/lib/actions/user.actions'

const TransactionsHistory = async () => {

  const res = await TopDrops()

  console.log(res.total)

  return (
    <div className="min-h-screen flex flex-col items-center">
      {/* Search Input at the top */}
      <div className="sticky top-10 z-50 w-full flex justify-center">
        <SearchInput />
      </div>

      {/* Add spacing between Search Input and "Top Airdrops" */}
      <div className="mt-20 text-center w-full">
        <h1 className="text-4xl font-bold">Top Airdrops</h1>

        <div className="mt-10 flex justify-center">
          <CarouselSize 
          total = {res.total}
          />
        </div>
      </div>
    </div>
  )
}

export default TransactionsHistory
