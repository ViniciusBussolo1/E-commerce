import Image from 'next/image'

import { Search } from 'lucide-react'

import Logo from '../../../public/Logo.svg'
import ShoppingCatalog from '../../../public/Header/ShoppingCatalog.svg'
import UserAvatar from '../../../public/Header/UserAvatar.svg'
import MenuBar from '../../../public/Header/MenuBar.svg'

export default function Header() {
  return (
    <header className="max-[420px]:h-[7.5rem] max-[420px]:relative w-full max-[420px]:border-none border-b border-grayText-400 min-[420px]:pb-3 max-[420px]:px-2">
      {/* MINERAÇÃO */}
      <div className="max-[420px]:hidden w-full bg-orange flex justify-center items-center py-2">
        <h1 className="text-xl leading-[1.299rem] font-bold text-black">
          Mineração revolucionando a moda Brasileira!
        </h1>
      </div>

      {/* HEADER */}
      <div className="h-[4.75rem] w-full flex justify-center items-center px-4 pt-2">
        <div className="max-w-[78.125rem] w-full flex justify-between items-center max-[469px]:gap-4 min-[470px]:gap-10">
          {/* LOGO */}
          <Image src={Logo} alt="Image Logo" height={42} width={120} />

          {/* INPUT */}
          <div className="max-[420px]:absolute max-[420px]:bottom-0 max-[420px]:w-full max-[420px]:max-w-[20.625rem] max-[1181px]:w-full min-[1182px]:max-w-[15rem] w-full flex items-center justify-between rounded border border-grayText-400 px-2 focus-within:outline focus-within:outline-[1px] focus-within:outline-black">
            <input
              type="text"
              className="px-[0.375rem] py-[0.375rem] outline-none"
            />
            <Search className="text-orange cursor-pointer" />
          </div>

          {/* NAVEGATION */}
          <nav className="max-w-[29.144rem] w-full max-[1181px]:hidden">
            <ul className="flex justify-between items-center gap-5">
              <li className="text-xl leading-normal font-normal text-black cursor-pointer hover:font-semibold">
                Básicos
              </li>
              <li className="text-xl leading-normal font-normal text-black cursor-pointer hover:font-semibold">
                Feminino
              </li>
              <li className="text-xl leading-normal font-normal text-black cursor-pointer hover:font-semibold">
                Masculino
              </li>
              <li className="text-xl leading-normal font-normal text-black cursor-pointer hover:font-semibold">
                Jeans
              </li>
              <li className="text-xl leading-normal font-normal text-black cursor-pointer hover:font-semibold">
                Acessórios
              </li>
            </ul>
          </nav>

          {/* LINE */}
          <div className="h-[2.461rem] w-[0.063rem] bg-black max-[1181px]:hidden"></div>

          {/* SHOPPING / USER LOGIN */}
          <div className="max-[700px]:hidden max-w-[14.375rem] w-full flex justify-between items-center gap-4">
            <Image
              src={ShoppingCatalog}
              alt="Icon Shopping Catalog"
              className="cursor-pointer"
            />
            <div className="max-w-[10.813rem] w-full flex gap-2">
              <Image
                src={UserAvatar}
                alt="Icon User Avatar"
                className="cursor-pointer
              "
              />
              <div className="max-w-[7.875rem] w-full flex flex-col">
                <span className="text-xs leading-normal font-normal text-grayText-800 cursor-pointer">
                  Olá, faça seu
                </span>
                <span className="text-base leading-normal font-extrabold text-orange cursor-pointer">
                  Login / Cadastro
                </span>
              </div>
            </div>
          </div>

          {/* MENU BAR ICON */}
          <Image
            src={MenuBar}
            alt="Menu Bar Icon"
            className="max-[1181px]:block hidden"
          />
        </div>
      </div>
    </header>
  )
}
