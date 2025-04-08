<script setup lang="ts">
import BigCard from '@/components/cards/BigCard.vue';
import { useLanguageStore } from '@/stores/store.ts';
import { computed } from 'vue';
import { cardsEn, cardsEs, statistic } from '@/data/dataBlog.ts';
import type { IBigCardProps } from '@/types/types.ts';
import StatisticItem from '@/components/items/StatisticItem.vue';

const store = useLanguageStore();
const currentLang = computed(() => store.getLang);

const cards = computed<IBigCardProps[]>(() => {
  return currentLang.value === 'en' ? cardsEn : cardsEs;
});

const data = Object.entries(statistic);
</script>

<template>
  <section class="blog">
    <ul class="blog__statistic">
      <StatisticItem :count="item[1]" :type="item[0]" v-for="(item, index) in data" :key="index" />
    </ul>
    <ul class="blog__cards">
      <BigCard v-for="(card, index) in cards" :key="index" :card="card" class="blog__cards-item" />
    </ul>
  </section>
</template>

<style scoped>
.blog {
  display: flex;
  flex-direction: column;
}

.blog__cards {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  align-items: center;
  gap: 40px;
  padding-left: 0;
  list-style: none;

  @media screen and (max-width: 1599px) {
    display: flex;
    flex-wrap: wrap;
  }
}

.blog__statistic {
  display: flex;
  align-items: center;
  gap: 16px;
  align-self: end;
  padding-left: 0;
  list-style: none;
  margin-bottom: 41px;
}
</style>
