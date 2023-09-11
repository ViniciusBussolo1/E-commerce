'use client'

import { Heart } from 'lucide-react'
import { useState } from 'react'

import Image from 'next/image'

interface ColorsProps {
  color: string
  image: string
}

interface ProductsCardProps {
  news: boolean
  imageDefault: string
  name: string
  price: string
  colors: Array<ColorsProps>
}

export default function ProductsCard({
  news,
  name,
  price,
  colors,
  imageDefault,
}: ProductsCardProps) {
  const [colorImage, setColorImage] = useState('')

  const handleImageColor = (color: string) => {
    setColorImage(color)
  }

  return (
    <>
      <div className="max-w-[16.875rem] w-full">
        {/* NOVIDADE / FAVORITO */}
        <div className="w-full rounded-[0.375rem] relative">
          {news === true ? (
            <div className="w-full flex justify-between items-center absolute top-3 px-[0.663rem]">
              <div className="max-w-[3.313rem] w-full rounded-[0.375rem] bg-orange py-[0.313rem] px-[0.188rem] flex justify-center items-center text-[0.563rem] leading-[0.584rem] font-bold text-white">
                novidade
              </div>
              <div className="w-[1.406rem] h-[1.406rem] rounded-[50%] bg-grayText-400 flex justify-center items-center cursor-pointer">
                <Heart className="w-[1.069rem] h-[1.069rem]" />
              </div>
            </div>
          ) : (
            <div className="w-full flex justify-end items-center absolute top-3 px-[0.663rem]">
              <div className="w-[1.406rem] h-[1.406rem] rounded-[50%] bg-grayText-400 flex justify-center items-center cursor-pointer">
                <Heart className="w-[1.069rem] h-[1.069rem]" />
              </div>
            </div>
          )}
          {colorImage === '' ? (
            <Image
              src={`/Products/${imageDefault}`}
              alt={`image ${name}`}
              width={0}
              height={0}
              className="w-full"
            />
          ) : (
            <Image
              src={`/Products/${colorImage}`}
              alt={`image ${name}`}
              width={0}
              height={0}
              className="w-full"
            />
          )}
        </div>
        {/* INFOS */}
        <div className="w-full flex justify-center items-center pt-2">
          <div className="flex flex-col items-center gap-[0.563rem]">
            <span className="text-[0.813rem] leading-normal text-blackOrange font-medium">
              {name}
            </span>
            <span className="text-[0.813rem] leading-normal text-blackOrange font-bold">
              R$ {price}
            </span>
            <div className="flex items-center gap-1">
              {colors.map((item, index) => (
                <div
                  key={index}
                  className={`w-[0.9rem] h-[0.9rem] rounded-[50%] border border-black bg-${item.color} cursor-pointer`}
                  onClick={() => handleImageColor(item.image)}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
