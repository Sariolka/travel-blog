<script setup lang="ts">
import CardDestinations from '@/components/cards/CardDestinations.vue'
import type { ICardDestination } from '@/types/types.ts'
import { computed } from 'vue'
import { useLanguageStore } from '@/stores/store.ts'
import { cardsDestEn, cardsDestEs } from '@/data/dataDestinations.ts'

const store = useLanguageStore()
const currentLang = computed(() => store.getLang)

const cards = computed<ICardDestination[]>(() => {
  return currentLang.value === 'en' ? cardsDestEn : cardsDestEs
})
</script>

<template>
  <section class="destinations">
    <h2 class="destinations__title">
      {{ currentLang === 'en' ? 'Top Destinations' : 'Destinos principales' }}
    </h2>
    <p class="destinations__description">
      {{
        currentLang === 'en'
          ? 'Tick one more destination off of\u00A0your bucket list with one of\u00A0our most popular vacations in\u00A02022'
          : 'Marca un destino más de\u00A0tu lista de\u00A0deseos con una de\u00A0nuestras vacaciones más populares en\u00A02022'
      }}
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
  justify-content: flex-start;
  gap: 40px;
  padding-left: 0;
}

.destinations__item {
  width: max-content;
  flex: 1 1 auto;
  min-width: 320px;
}
</style>
