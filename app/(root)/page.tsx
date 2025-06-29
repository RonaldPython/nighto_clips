import HeaderBox from '@/components/HeaderBox'
import RightSideBar from '@/components/RightSideBar';
import TotalCompleated from '@/components/TotalCompleted';
import { GetAirdropsInfo, getLoggedInUser, GetUserBalance } from '@/lib/actions/user.actions';


const Home = async () => {


  const loggedIn = await getLoggedInUser()


  const ui = await GetUserBalance()

  const airdropsCurrent = await GetAirdropsInfo()

  const airdropNames = airdropsCurrent.documents.map(doc => doc.airdropName);
  const airdropClaims = airdropsCurrent.documents.map(doc => doc.AirdropClaim);
  

  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox
            type="greeting"
            title='Welcome'
            user={loggedIn?.name || 'Guest'}
            subtext= "Access Your Acccount And See All Your Campaigns."
          />

          <TotalCompleated
            names={airdropNames}
            claims={airdropClaims}
            airdrops={airdropsCurrent.total}
            TotalCurrentBalance={ui!.balance}
          />

        </header>
        
        COMING SOON....

      </div>
      
      
    </section>
  )
}

export default Home