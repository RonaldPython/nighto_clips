import Image from "next/image";
import Link from "next/link";
import { formatAmount } from "@/lib/utils"


const AirdropCard = ({ airdropName, airdropType, airdropStatus, airdropLink, airdropClaim }: any) => {
  return (
    <div className="flex flex-col">
      <Link href={airdropLink} className="bank-card">
        <div className="bank-card_content p-2">
          <div>
            <h1 className="text-lg font-semibold text-white truncate">
              {airdropName}
            </h1>

            <p className="text-base font-ibm-plex-serif font-black text-white">
              {formatAmount(airdropClaim)}
            </p>
          </div>
          
          <article className="flex flex-col gap-1">
            <div className="flex justify-between">
              <h1 className="text-base font-semibold text-white">
                {airdropType}
              </h1>
              <h1 className="text-base font-semibold text-white">
                {airdropStatus ? 'Ongoing' : 'Inactive'}
              </h1>
            </div>
            <p className="text-sm text-white truncate">{airdropLink}</p>
          </article>
        </div>

        <div className="bank-card_icon flex justify-end gap-2 p-2">
          <Image 
            src="/icons/Paypass.svg"
            width={20}
            height={20}
            alt="pay"
            className=""
          />

          <Image 
            src="/icons/logo.svg"
            width={20}
            height={20}
            alt="logo"
            className=""
          />
        </div>
        <Image 
          src="/icons/lines.png"
          width={150}
          height={90}
          alt="lines"
          className="absolute top-0 left-0 "
        />
      </Link>
    </div>
  )
}

export default AirdropCard;
