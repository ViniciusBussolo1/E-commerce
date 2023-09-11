import Filters from './Filters/Filters'
import ItemsFilters from './Filters/ItemsFilters'

import { Slider } from '@radix-ui/themes'
import Products from './Products/Products'

export default function Main() {
  return (
    <main className="w-full flex justify-center items-center mt-6 px-4 pb-[4.625rem]">
      <div className="max-w-[78.125rem] w-full flex gap-4">
        {/* FILTERS */}
        <div className="h-[28.75rem] max-w-[15.563rem] w-full bg-whiteOrange flex justify-center items-center border border-grayText-400 rounded-[0.313rem]">
          <div className="max-w-[12.313rem] w-full space-y-5">
            <Filters title="Categoria:" grid={true}>
              <ItemsFilters item="blusa" />
              <ItemsFilters item="sapato" />
              <ItemsFilters item="calça" />
              <ItemsFilters item="short" />
            </Filters>
            <Filters title="Tamanho:" grid={true}>
              <ItemsFilters item="pp" />
              <ItemsFilters item="m" />
              <ItemsFilters item="p" />
              <ItemsFilters item="gg" />
              <ItemsFilters item="g" />
            </Filters>
            <Filters title="Cor:" grid={true}>
              <ItemsFilters item="preto" />
              <ItemsFilters item="azul" />
              <ItemsFilters item="branco" />
              <ItemsFilters item="vermelho" />
              <ItemsFilters item="marrom" />
              <ItemsFilters item="verde" />
            </Filters>
            <Filters title="Faixa de preço (BRL)" grid={false}>
              <div className="w-full relative mt-2">
                <Slider
                  size="1"
                  defaultValue={[0, 500]}
                  color="orange"
                  radius="full"
                />
                <div className="w-full flex justify-between items-center mt-1">
                  <span className="text-[0.5rem] leading-normal font-semibold text-black ">
                    R$0
                  </span>
                  <span className="text-[0.5rem] leading-normal font-semibold text-black">
                    R$500
                  </span>
                </div>
              </div>
            </Filters>
          </div>
        </div>

        {/* PRODUCTS */}
        <Products />
      </div>
    </main>
  )
}
