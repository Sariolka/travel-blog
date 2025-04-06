<script setup lang="ts">
import CardDestinations, { type ICardDestination } from '@/components/cards/CardDestinations.vue'
import p1 from '@/assets/images/1.png'
import p2 from '@/assets/images/2.png'
import p3 from '@/assets/images/3.png'
import p4 from '@/assets/images/4.png'
import p5 from '@/assets/images/5.png'

const cards: ICardDestination[] = [
  {
    title: 'Dominican Republic',
    image: p1,
    link: '/article',
  },
  {
    title: 'Maecenas Tincidunt',
    image: p2,
    link: '/article',
  },
  {
    title: 'Dominican Republic',
    image: p3,
    link: '/article',
  },
  {
    title: 'Dominican Republic',
    image: p4,
    link: '/article',
  },
  {
    title: 'Dominican Republic',
    image: p5,
    link: '/article',
  },
]
</script>

<template>
  <section class="destinations">
    <h2 class="destinations__title">Top Destinations</h2>
    <p class="destinations__description">
      Tick one more destination off of&nbsp;your bucket list with one of&nbsp;our most popular
      vacations in&nbsp;2022
    </p>
    <ul class="destinations__list">
      <li class="destinations__item" v-for="(card, index) in cards" :key="index">
        <CardDestinations :card="card" />
      </li>
    </ul>
  </section>
</template>

<style scoped>
.destinations {
  display: flex;
  flex-direction: column;
}

.destinations__title {
  font-family: 'Europa', 'Arial', sans-serif;
  font-size: 32px;
  font-weight: 700;
  line-height: 20px;
  color: #121416;
  margin-bottom: 15px;
}

.destinations__description {
  font-family: 'Europa', 'Arial', sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  color: #121416;
  margin-bottom: 47px;
}

.destinations__list {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  list-style: none;
  gap: 40px;
  padding-left: 0;
}
</style>
