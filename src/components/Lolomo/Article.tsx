'use client'

import { useUser } from "@clerk/nextjs"

const data = {
  'continue-watching': [
    {
      id: 1,
      title: 'Demon Slayer: Kimetsu no Yaiba',
      image:'/images/gender/anime/demon-slayer.webp',
      genre: 'Anime',
      rating: 'TV-MA',
      description: 'After a demon attack leaves his family slain and his sister cursed, Tanjiro embarks upon a perilous journey to find a cure and avenge those he\'s lost.',
      year: 2019,
      duration: '3 Season',
      maturity: '16+',
      slug: 'demon-slayer',
    }, {
      id: 2,
      title: 'Pokemon Journeys: The Series',
      image: '/images/anime/pokemon.jpg',
      genre: 'Anime',
      rating: 'TV-Y7',
      description: 'Young trainer Ash and his new friend Goh become research fellows at Professor Cerise\'s laboratory, traveling all over the world to learn about Pokémon.',
      year: 2019,
      duration: '3 Season',
      maturity: '7+',
      slug: 'pokemon-journeys',
    }, {
      id: 3,
      title: 'Sonic boom',
      image: '/images/anime/sonic.jpg',
      genre: 'Cartoon',
      rating: 'TV-Y7',
      description: 'Sonic, the fastest and bluest hedgehog in the world, teams up with his animal pals to stop Dr. Eggman from turning their island into a theme park.',
      year: 2014,
      duration: '2 Season',
      maturity: '7+',
      slug: 'sonic-boom',
    }
  ],
  'myList': [
    {
      id: 1,
      title: 'Demon Slayer: Kimetsu no Yaiba',
      image:'/images/gender/anime/demon-slayer.webp',
      genre: 'Anime',
      rating: 'TV-MA',
      description: 'After a demon attack leaves his family slain and his sister cursed, Tanjiro embarks upon a perilous journey to find a cure and avenge those he\'s lost.',
      year: 2019,
      duration: '3 Season',
      maturity: '16+',
      slug: 'demon-slayer',
    }, {
      id: 2,
      title: 'Pokemon Journeys: The Series',
      image: '/images/anime/pokemon.jpg',
      genre: 'Anime',
      rating: 'TV-Y7',
      description: 'Young trainer Ash and his new friend Goh become research fellows at Professor Cerise\'s laboratory, traveling all over the world to learn about Pokémon.',
      year: 2019,
      duration: '3 Season',
      maturity: '7+',
      slug: 'pokemon-journeys',
    }, {
      id: 3,
      title: 'Sonic boom',
      image: '/images/anime/sonic.jpg',
      genre: 'Cartoon',
      rating: 'TV-Y7',
      description: 'Sonic, the fastest and bluest hedgehog in the world, teams up with his animal pals to stop Dr. Eggman from turning their island into a theme park.',
      year: 2014,
      duration: '2 Season',
      maturity: '7+',
      slug: 'sonic-boom',
    }
  ],
  'trends': [
    {
      id: 1,
      title: 'Demon Slayer: Kimetsu no Yaiba',
      image:'/images/gender/anime/demon-slayer.webp',
      genre: 'Anime',
      rating: 'TV-MA',
      description: 'After a demon attack leaves his family slain and his sister cursed, Tanjiro embarks upon a perilous journey to find a cure and avenge those he\'s lost.',
      year: 2019,
      duration: '3 Season',
      maturity: '16+',
      slug: 'demon-slayer',
    }, {
      id: 2,
      title: 'Pokemon Journeys: The Series',
      image: '/images/anime/pokemon.jpg',
      genre: 'Anime',
      rating: 'TV-Y7',
      description: 'Young trainer Ash and his new friend Goh become research fellows at Professor Cerise\'s laboratory, traveling all over the world to learn about Pokémon.',
      year: 2019,
      duration: '3 Season',
      maturity: '7+',
      slug: 'pokemon-journeys',
    }, {
      id: 3,
      title: 'Sonic boom',
      image: '/images/anime/sonic.jpg',
      genre: 'Cartoon',
      rating: 'TV-Y7',
      description: 'Sonic, the fastest and bluest hedgehog in the world, teams up with his animal pals to stop Dr. Eggman from turning their island into a theme park.',
      year: 2014,
      duration: '2 Season',
      maturity: '7+',
      slug: 'sonic-boom',
    }
  ],
}

export default function LolomoArticle() {
  const user = useUser()
  
  return (
    <article className="px-2">
      <h2 className="text-base font-medium mb-4">Continue Watching for { user?.user?.username! }</h2>
      
    </article>
  )
}
