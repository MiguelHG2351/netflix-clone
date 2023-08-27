import { useUser } from "@clerk/nextjs"

const data = {
  'continue-watching': [
    {
      id: 1,
      title: 'Demon Slayer: Kimetsu no Yaiba',
      image: {
        url: '/images/gender/anime/demon-slayer.webp',
        alt: 'Demon Slayer: Kimetsu no Yaiba',
      },
      isNetflixOriginal: true,
      isTop10: true,
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
      image: {
        url: '/images/anime/pokemon.jpg',
        alt: 'Pokemon Journeys: The Series',
      },
      isNetflixOriginal: true,
      isTop10: true,
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
      image: {
        url: '/images/anime/sonic.jpg',
        alt: 'Sonic boom',
      },
      isNetflixOriginal: true,
      isTop10: true,
      genre: 'Cartoon',
      rating: 'TV-Y7',
      description: 'Sonic, the fastest and bluest hedgehog in the world, teams up with his animal pals to stop Dr. Eggman from turning their island into a theme park.',
      year: 2014,
      duration: '2 Season',
      maturity: '7+',
      slug: 'sonic-boom',
    }
  ], 'myList': [
    {
      id: 1,
      title: 'Demon Slayer: Kimetsu no Yaiba',
      image: {
        url: '/images/gender/anime/demon-slayer.webp',
        alt: 'Demon Slayer: Kimetsu no Yaiba',
      },
      isNetflixOriginal: true,
      isTop10: true,
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
      image: {
        url: '/images/anime/pokemon.jpg',
        alt: 'Pokemon Journeys: The Series',
      },
      isNetflixOriginal: true,
      isTop10: true,
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
      image: {
        url: '/images/anime/sonic.jpg',
        alt: 'Sonic boom',
      },
      isNetflixOriginal: true,
      isTop10: true,
      genre: 'Cartoon',
      rating: 'TV-Y7',
      description: 'Sonic, the fastest and bluest hedgehog in the world, teams up with his animal pals to stop Dr. Eggman from turning their island into a theme park.',
      year: 2014,
      duration: '2 Season',
      maturity: '7+',
      slug: 'sonic-boom',
    }
  ], 'trends': [
    {
      id: 1,
      title: 'Demon Slayer: Kimetsu no Yaiba',
      image: {
        url: '/images/gender/anime/demon-slayer.webp',
        alt: 'Demon Slayer: Kimetsu no Yaiba',
      },
      isNetflixOriginal: true,
      isTop10: true,
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
      image: {
        url: '/images/anime/pokemon.jpg',
        alt: 'Pokemon Journeys: The Series',
      },
      isNetflixOriginal: true,
      isTop10: true,
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
      image: {
        url: '/images/anime/sonic.jpg',
        alt: 'Sonic boom',
      },
      isNetflixOriginal: true,
      isTop10: true,
      genre: 'Cartoon',
      rating: 'TV-Y7',
      description: 'Sonic, the fastest and bluest hedgehog in the world, teams up with his animal pals to stop Dr. Eggman from turning their island into a theme park.',
      year: 2014,
      duration: '2 Season',
      maturity: '7+',
      slug: 'sonic-boom',
    }
  ]
}

export default function LolomoSection() {
  const user = useUser()
  // Continue Watching for { user?.user?.username! }

  return (
    <div>Section</div>
  )
}