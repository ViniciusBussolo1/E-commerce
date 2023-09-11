import LogoFooter from '../../../public/Logo_Footer.svg'
import QRCode from '../../../public/QRCode.svg'

import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="w-full bg-orange flex justify-center items-center px-[6.25rem] pt-[0.688rem] pb-6">
      <div className="max-w-[77.5rem] w-full flex justify-between items-center">
        <Image src={LogoFooter} alt="Image Logo" height={56} width={144} />
        <div className="flex flex-col items-center">
          <span className="text-base leading-[1.875rem] font-bold text-black">
            baixe nosso app
          </span>
          <Image src={QRCode} alt="QRCode" />
        </div>
      </div>
    </footer>
  )
}
