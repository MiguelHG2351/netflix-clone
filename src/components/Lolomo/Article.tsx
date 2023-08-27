import type { LolomoItemProps } from './Item'

interface ArticleLolomoProps {
  title: string
  items: LolomoItemProps[]
}

export default function LolomoArticle(props: ArticleLolomoProps) {
  
  return (
    <article className="px-2">
      <h2 className="text-base font-medium mb-4">{ props.title }</h2>
      
    </article>
  )
}
