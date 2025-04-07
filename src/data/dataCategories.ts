import type { ICard, IMediumCardProps, ITabItem } from '@/types/types.ts'
import p1 from '@/assets/images/Rectangle 6(2)(1).png'
import p2 from '@/assets/images/Rectangle 6(3).png'
import p3 from '@/assets/images/Rectangle 6(1)(1).png'
import p4 from '@/assets/images/Rectangle 6(3)(1).png'
import p5 from '@/assets/images/Rectangle 6(4)(1).png'
import p6 from '@/assets/images/Rectangle 6(5)(1).png'
import p7 from '@/assets/images/Rectangle 6(6)(1).png'
import p8 from '@/assets/images/Rectangle 33(1).png'

export const tabsEn: ITabItem[] = [
  {
    text: 'Category name',
    status: 'active',
  },
  {
    text: 'Category name',
    status: 'default',
  },
  {
    text: 'Category name',
    status: 'default',
  },
  {
    text: 'Category name',
    status: 'default',
  },
  {
    text: 'Category name',
    status: 'default',
  },
  {
    text: 'Category name',
    status: 'default',
  },
]

export const cards2En: ICard[] = [
  {
    title:
      'Tick one more destination off of your bucket list with one of our most popular vacations in 2022',
    image: p1,
    date: '21 March 2021',
    link: '/article',
  },
  {
    title:
      'Tick one more destination off of your bucket list with one of our most popular vacations in 2022',
    image: p2,
    date: '21 March 2021',
    link: '/article',
  },
  {
    title:
      'Tick one more destination off of your bucket list with one of our most popular vacations in 2022',
    image: p3,
    date: '21 March 2021',
    link: '/article',
  },
]

export const cards1En: ICard[] = [
  {
    title: 'Akame Ga Kill: Season finale',
    image: p4,
    date: '21 March 2021',
    link: '/article',
  },
  {
    title: 'Naruto Uzumaki: Hidden Village',
    image: p5,
    date: '21 March 2021',
    link: '/article',
  },
  {
    title: 'Love juice Season Priemere',
    image: p6,
    date: '21 March 2021',
    link: '/article',
  },
  {
    title: 'Love juice Season Priemere',
    image: p7,
    date: '21 March 2021',
    link: '/article',
  },
]

export const cardEn: IMediumCardProps = {
  image: p8,
  title:
    'Tick one more destination off of your bucket list with one of our most popular vacations in 2022',
  text: 'lit. Phasellus aliquet nibh id iaculis pharetra. Maecenas  eleifend sed ex. Donec quis magna sed felis elementum blandit nec quis sem. Maecen.',
  date: '1 Month Ago',
  link: '/article',
}

// Данные на испанском
export const tabsEs: ITabItem[] = [
  {
    text: 'Nombre de la categoría',
    status: 'active',
  },
  {
    text: 'Nombre de la categoría',
    status: 'default',
  },
  {
    text: 'Nombre de la categoría',
    status: 'default',
  },
  {
    text: 'Nombre de la categoría',
    status: 'default',
  },
  {
    text: 'Nombre de la categoría',
    status: 'default',
  },
  {
    text: 'Nombre de la categoría',
    status: 'default',
  },
]

export const cards2Es: ICard[] = [
  {
    title:
      'Marca un destino más de tu lista de deseos con una de nuestras vacaciones más populares en 2022',
    image: p1,
    date: '21 de Marzo de 2021',
    link: '/article',
  },
  {
    title:
      'Marca un destino más de tu lista de deseos con una de nuestras vacaciones más populares en 2022',
    image: p2,
    date: '21 de Marzo de 2021',
    link: '/article',
  },
  {
    title:
      'Marca un destino más de tu lista de deseos con una de nuestras vacaciones más populares en 2022',
    image: p3,
    date: '21 de Marzo de 2021',
    link: '/article',
  },
]

export const cards1Es: ICard[] = [
  {
    title: 'Akame Ga Kill: Final de temporada',
    image: p4,
    date: '21 de Marzo de 2021',
    link: '/article',
  },
  {
    title: 'Naruto Uzumaki: Aldea Oculta',
    image: p5,
    date: '21 de Marzo de 2021',
    link: '/article',
  },
  {
    title: 'Love juice: Estreno de temporada',
    image: p6,
    date: '21 de Marzo de 2021',
    link: '/article',
  },
  {
    title: 'Love juice: Estreno de temporada',
    image: p7,
    date: '21 de Marzo de 2021',
    link: '/article',
  },
]

export const cardEs: IMediumCardProps = {
  image: p8,
  title:
    'Marca un destino más de tu lista de deseos con una de nuestras vacaciones más populares en 2022',
  text: 'lit. Phasellus aliquet nibh id iaculis pharetra. Maecenas eleifend sed ex. Donec quis magna sed felis elementum blandit nec quis sem. Maecen.',
  date: 'Hace 1 mes',
  link: '/article',
}
