import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

type Props = {
  imageUrl: string,
  imageAlt: string,
  isNetflixOriginal: boolean,
  isTop10: boolean,
  id: string,
}

export const Item: FC<Props> = ({ isNetflixOriginal, isTop10, imageAlt, imageUrl }) => {
  return (
    <li className="flex-shrink-0 h-max relative">
      {
        isNetflixOriginal && (
          <div className="absolute right-0 top-0">
            <svg xmlns="http://www.w3.org/2000/svg" width={25} height={32} viewBox="0 0 25 32" fill="none">
              <path d="M23.828 30.7233L1.1848 28.5011V0.880964H23.828V30.7233Z" fill="#EE1520" stroke="#EE1520" strokeWidth="0.905726" />
            </svg>
            <div className="info absolute top-0 bottom-0 left-0 right-0 flex flex-col justify-start items-center">
              <span className="text-[10px] font-bold uppercase">Top</span>
              <span className="text-xs font-bold leading-[2px]">10</span>
            </div>
          </div>
        )
      }
      {
        isTop10 && (
          <div className="absolute left-2 top-2">
            <Image
              src="/images/logos/netflix.png" className="w-[20px] h-[36px]" width={20} height={36} alt="Netflix original"
            />
          </div>
        )
      }
      <Link href="/movies/id_movie/hash">
        <Image className="h-[207px]" width={115} height={207} src={imageUrl} alt={imageAlt} />
      </Link>
    </li>
  )
}
