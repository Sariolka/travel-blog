<script setup lang="ts">
import BigCard, { type IBigCardProps } from '@/components/cards/BigCard.vue'
import wave from '@/assets/images/Rectangle 1317(1).webp'
import wave2 from '@/assets/images/Rectangle 1317.webp'
import wave3 from '@/assets/images/Rectangle 1317(2).webp'
import avatar from '@/assets/images/Ellipse 162(1).png'
const cards: IBigCardProps[] = [
  {
    icon: 'img',
    image: wave,
    title: 'Integer Maecenas Eget Viverra\n',
    text: 'Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.\n',
    author: 'Joanna Wellick',
    author_icon: avatar,
    date: 'June 28, 2018',
    count: 1,
    link: '/',
    tags: ['Aenean Eleifend', 'Aliquam'],
  },
  {
    icon: 'video',
    image: wave2,
    title: 'Aenean eleifend ante maecenas\n',
    text: 'Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.\n',
    author: 'Joanna Wellick',
    author_icon: avatar,
    date: 'June 28, 2018',
    count: 1,
    link: '/',
    tags: ['Aenean Eleifend', 'Aliquam'],
  },
  {
    icon: 'img',
    image: wave3,
    title: 'Integer Maecenas Eget Viverra\n',
    text: 'Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.\n',
    author: 'Joanna Wellick',
    author_icon: avatar,
    date: 'June 28, 2018',
    count: 1,
    link: '/',
    tags: ['Aenean Eleifend', 'Aliquam'],
  },
]
</script>

<template>
  <section class="blog">
    <BigCard v-for="(card, index) in cards" :key="index" :card="card" />
  </section>
</template>

<style scoped>
.blog {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  align-items: center;
  gap: 40px;

  @media screen and (max-width: 1599px) {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
