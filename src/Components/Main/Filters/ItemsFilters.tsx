interface ItemsFiltersProps {
  item: string
}

export default function ItemsFilters({ item }: ItemsFiltersProps) {
  return (
    <li className="text-base leading-normal font-normal text-blackGray cursor-pointer">
      {item}
    </li>
  )
}
