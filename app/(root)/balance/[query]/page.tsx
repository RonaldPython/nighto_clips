import { GetAirdropInfoSearch } from '@/lib/actions/user.actions';
import SearchResults from '@/components/SearchResults';
import { format } from 'date-fns';
import { SeeUserStar } from "@/lib/actions/user.actions"

const SearchResultsPage = async ({ params }: { params: { query: string } }) => {
  const { query } = params;

  try {
    const airdropData = await GetAirdropInfoSearch(query);
    const formattedAirdropTime = format(new Date(airdropData.airdropTime), "dd/MM/yyyy, hh:mm:ss a");

    const res = await SeeUserStar(query);

    let starr = false;
    if(res.total > 0) {
      starr = true;
    }

    return (
      <div className="p-8">
        <SearchResults data={{ ...airdropData, airdropTime: formattedAirdropTime }} query={query} starr={starr}/>
      </div>
    );
  } catch (error) {
    console.log(error);
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold">Your Airdrop ID Cannot be found</h1>
      </div>
    );
  }
};

export default SearchResultsPage;
