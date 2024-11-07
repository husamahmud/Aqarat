import { Link } from 'react-router-dom'
import { BiSolidMap } from 'react-icons/bi'
import { PiBathtub } from 'react-icons/pi'
import { IoBedOutline } from 'react-icons/io5'

import { CardProps } from '@/types/types.ts'
import { formatPrice } from '@/lib/utils/formatPrice.ts'

export default function Card({
  type,
  image,
  title,
  tag,
  location,
  bathrooms,
  rooms,
  price,
}: CardProps) {
  return (
    <Link
      to=""
      className="overflow-hidden rounded-2xl bg-[#FCF9F2] transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl"
    >
      {/* image */}
      <img
        src={image}
        alt=""
        className="h-64 w-full object-cover object-center"
      />

      {/* content */}
      <div className="flex flex-col gap-3 px-3 py-5">
        {/* tag */}
        <div className="flex justify-between gap-1">
          {tag && (
            <span className="text-nowrap rounded-full bg-[#FCCD36] px-3 py-1 text-xs font-bold">
              {tag}
            </span>
          )}

          {/* title & type */}
          <p className="ml-auto mr-0 text-nowrap font-bold [direction:rtl]">
            {type} - {title}
          </p>
        </div>

        {/* location */}
        <p className="ml-auto mr-0 flex items-center gap-1">
          <span className="text-gold-darker">{location}</span>
          <BiSolidMap
            className="text-gold"
            size={20}
          />
        </p>

        {/* bathrooms & rooms */}
        <div className="ml-auto mr-0 flex gap-5 text-[#5A5F69]">
          <p className="flex items-center gap-1">
            <span className="text-lg">{bathrooms} حمام</span>
            <PiBathtub size={23} />
          </p>

          <p className="flex items-center gap-1">
            <span className="text-lg"> {rooms} غرف</span>
            <IoBedOutline size={20} />
          </p>
        </div>

        {/* price */}
        <p className="ml-auto mr-0 flex gap-1 font-bold">
          <span className="font-normal text-gold-darker">ر.س</span>
          {formatPrice(price)}
        </p>
      </div>
    </Link>
  )
}
