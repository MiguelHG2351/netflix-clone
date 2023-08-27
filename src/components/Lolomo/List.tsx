import { Item } from './Item'
import type { LolomoItemProps } from './Item'

export const LolomoList = ({ lolomoData }: { lolomoData: LolomoItemProps[] }) => {

  return (
    <ul className="hidden-scroll flex gap-x-3 items-center whitespace-nowrap overflow-x-auto">
      {
        lolomoData!.map((lolomoItemData: LolomoItemProps) => (
          <Item
            key={lolomoItemData.id}
            isNetflixOriginal={lolomoItemData.isNetflixOriginal}
            isTop10={lolomoItemData.isTop10}
            imageAlt={lolomoItemData.imageAlt}
            imageUrl={lolomoItemData.imageUrl}
            id={lolomoItemData.id}
          />
        ))
      }
    </ul>
  )
}
