import AnimatedCounter from './AnimatedCounter'
import DoughnutChart from './DoughnutChart'

const TotalCompleted = ({
  names, claims, airdrops, TotalCurrentBalance
}: TotalCompletedProps) => {
  return (
    <section className='flex w-full items-center gap-4 rounded-xl border border-gray-200 p-4 shadow-chart sm:gap-6 sm:p-6'>

      <div className='total-balance-chart'>
        <DoughnutChart names= {names}
        claims = {claims}
        />
      </div>

      <div className='flex flex-col gap-6'>
        <h2 className='header-2'>
        Total Campaigns: {airdrops } 
        </h2>

        <div className='flex flex-col gap-2'>
          <p className='total-balance-label'>
            Total Current Balance 
          </p>

          <div className='total-balance-amount flex-center gap-2'>
            <AnimatedCounter
            amount= {TotalCurrentBalance} />

           
          </div>
        </div>
      </div>
    </section>
  )
}

export default TotalCompleted
