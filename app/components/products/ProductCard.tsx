"use client"

import { formatPrice } from "@/utils/price"
import { tranc } from "@/utils/truncate"
import { Rating } from "@mui/material"
import Image from "next/image"

interface ProductCartProps{
  data:any
}

const ProductCard :React.FC<ProductCartProps> = ({data}) => {
  const rating = data.reviews.reduce((acc,item)=> item.rating + acc ,0) / data.reviews.length
  return (
    <div className="col-span-1 cursor-pointer border-[1.2px] border-slate-200 bg-slate-50 p-2 transition hover:scale-105 text-center text-sm">
      <div className="flex flex-col items-center w-full gap-1">
        <div className=" aspect-square overflow-hidden relative w-full ">
          <Image fill src={data.images[0].image} alt={data.name} className="w-full h-full object-contain" />
        </div>
        <div className="mt-4">{tranc(data.name)}</div>
        <div><Rating value={rating} readOnly/></div>
        <div>{data.reviews.length} reviews</div>
        <div>{formatPrice(data.price)}</div>
      </div>
    </div>
  )
}

export default ProductCard