interface FiltersProps {
  title: string
  grid: boolean
  children: React.ReactNode
}

export default function Filters({ title, children, grid }: FiltersProps) {
  return (
    <>
      {grid === true ? (
        <div className=" w-full ">
          <h3 className="text-lg leading-normal font-bold text-orange">
            {title}
          </h3>
          <div className="w-full grid grid-cols-2 grid-rows-2 pl-[0.125rem]">
            {children}
          </div>
        </div>
      ) : (
        <div className="max-w-[11.5rem] w-full ">
          <h3 className="text-lg leading-normal font-bold text-orange">
            {title}
          </h3>
          <div className="w-full pl-1">{children}</div>
        </div>
      )}
    </>
  )
}
