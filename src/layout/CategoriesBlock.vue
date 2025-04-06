<script setup lang="ts">
import TabItem, { type ITabItem } from '@/components/items/TabItem.vue'
import SmallCard, { type ICard } from '@/components/cards/SmallCard.vue'
import p1 from '@/assets/images/Rectangle 6(2)(1).png'
import p2 from '@/assets/images/Rectangle 6(3).png'
import p3 from '@/assets/images/Rectangle 6(1)(1).png'
import p4 from '@/assets/images/Rectangle 6(3)(1).png'
import p5 from '@/assets/images/Rectangle 6(4)(1).png'
import p6 from '@/assets/images/Rectangle 6(5)(1).png'
import p7 from '@/assets/images/Rectangle 6(6)(1).png'
import p8 from '@/assets/images/Rectangle 33(1).png'
import MediumCard from '@/components/cards/MediumCard.vue'

const tabs: ITabItem[] = [
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
const cards2: ICard[] = [
  {
    title: 'Tick one more destination off of your bucket list with one of our most popular vacations in 2022',
    image: p1,
    date: '21 March 2021',
    link: '/article',
  },
  {
    title: 'Tick one more destination off of your bucket list with one of our most popular vacations in 2022',
    image: p2,
    date: '21 March 2021',
    link: '/article',
  },
  {
    title: 'Tick one more destination off of your bucket list with one of our most popular vacations in 2022',
    image: p3,
    date: '21 March 2021',
    link: '/article',
  },
]
const cards1: ICard[] = [
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

const card = {
  image: p8,
  title: 'Tick one more destination off of your bucket list with one of our most popular vacations in 2022',
  text: 'lit. Phasellus aliquet nibh id iaculis pharetra. Maecenas  eleifend sed ex. Donec quis magna sed felis elementum blandit nec quis sem. Maecen.',
  date:  '1 Month Ago',
  link: '/article',
}
</script>

<template>
  <section class="categories-block">
    <ul class="categories-block__list">
      <li class="categories-block__item" v-for="(tab, index) in tabs" :key="index">
        <TabItem :text="tab.text" :status="tab.status" />
      </li>
    </ul>
    <div class="categories-block__container">
      <div class="categories-block__cat-list">
       <MediumCard :card="card"/>
        <ul class="categories-block__cat-container">
          <li class="categories-block__container-item"  v-for="(card,index) in cards1" :key="index">
            <SmallCard :title="card.title" :date="card.date" :image="card.image" :link="card.link" type="xs"/>
          </li>
        </ul>
      </div>
      <div class="categories-block__manga">
        <h3 class="categories-block__manga-title">
          Manga reads
        </h3>
        <ul class="categories-block__manga-list">
          <li  v-for="(card,index) in cards2" :key="index">
            <SmallCard :title="card.title" :date="card.date" :image="card.image" :link="card.link"/>
          </li>
        </ul>

      </div>
    </div>
  </section>
</template>

<style scoped>
.categories-block__container {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 46px;
  padding-right: 5px;
  @media screen and (max-width: 1700px) {
    grid-template-columns: 1fr;
  }
}

.categories-block__manga {
  display: flex;
  flex-direction: column;
  padding: 15px 15px 30px 41px;
  border: 1px solid rgba(18, 20, 22, 0.2);
  align-items: start;
}

.categories-block__list {
  display: flex;
  align-items: center;
  gap: 24px;
  list-style: none;
  padding-left: 0;
  border-bottom: 1px solid #D6D6D6;
  margin-bottom: 30px;
  @media screen and (max-width: 1279px) {
    gap: 5px;
  }
}

.categories-block__manga-list {
  list-style: none;
  padding-left: 0;
  display: flex;
  flex-direction: column;
  gap: 46px;
}

.categories-block__cat-list {
  list-style: none;
  display: grid;
  grid-template-columns: 1.75fr 1fr;
  padding: 25px 20px 14px 21px;
  border: 1px solid rgba(18, 20, 22, 0.2);
  gap: 40px;
}

.categories-block__manga-title {
  font-family: 'Europa', 'Arial', sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  color: #121416;
  letter-spacing: .5px;
  margin-bottom: 20px;
}


.categories-block__cat-container {
  list-style: none;
  padding-left: 0;
  display: flex;
  flex-direction: column;
  gap: 31px;
}
</style>
