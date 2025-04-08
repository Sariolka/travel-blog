<script setup lang="ts">
import type { ICard } from '@/types/types.ts';

const props = defineProps<ICard>();
</script>

<template>
  <router-link :to="link" class="card" :class="{ 'card_type-xs': type === 'xs' }">
    <img class="card__img" :src="image" alt="" />
    <div class="card__content">
      <h4 class="card__title">{{ title }}</h4>
      <time class="card__time" :class="{ 'card__time_type-xs': type === 'xs' }">{{ date }}</time>
    </div>
  </router-link>
</template>

<style scoped>
.card {
  display: grid;
  grid-template-columns: 0.85fr 1fr;
  width: 100%;
  height: 100%;
  gap: 37px;
  text-decoration: none;
}

.card_type-xs {
  grid-template-columns: 0.8fr 1fr;
  gap: 20px;
}

.card__img {
  object-fit: contain;
  object-position: center;
  width: 100%;
}

.card__content {
  display: flex;
  flex-direction: column;
  align-items: start;
}

.card__title {
  font-family: 'Europa', 'Arial', sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 24.58px;
  color: #121416;
}

.card__time {
  font-family: 'Europa', 'Arial', sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 15.24px;
  letter-spacing: 0.23px;
  color: #121416;
  opacity: 50%;
  margin-top: auto;
  margin-bottom: 5px;
}

.card__time_type-xs {
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.3px;
  margin-bottom: 21px;
}
</style>
