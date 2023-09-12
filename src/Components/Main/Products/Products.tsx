'use client'

import { ProdutsItems } from '@/data/Products'

import ProductsCard from './ProductsCard'

export default function Products() {
  return (
    <div className="max-w-[60.875rem] w-full bg-whiteOrange rounded-[0.438rem] border border-grayText-400 flex justify-center items-center py-6 px-10">
      <div className="w-full grid grid-cols-3 gap-8">
        {/* CARD PRODUCT */}
        {ProdutsItems.map((product, index) => (
          <ProductsCard
            key={index}
            name={product.name}
            price={product.price}
            news={product.news}
            imageDefault={product.default}
            colors={product.colors}
            favorites={product.favorites}
          />
        ))}
      </div>
    </div>
  )
}
