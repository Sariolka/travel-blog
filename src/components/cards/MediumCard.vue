<script setup lang="ts">
import type { IMediumCardProps } from '@/types/types.ts';
import { useLanguageStore } from '@/stores/store.ts';
import { computed } from 'vue';

const props = defineProps<{
  card: IMediumCardProps;
}>();

const store = useLanguageStore();
const currentLang = computed(() => store.getLang);
</script>

<template>
  <div class="medium-card">
    <img :src="card.image" :alt="card.title" class="medium-card__image" />
    <time class="medium-card__time">{{ card.date }}</time>
    <h3 class="medium-card__title">{{ card.title }}</h3>
    <p class="medium-card__description">{{ card.text }}</p>
    <router-link to="/article" class="medium-card__link">{{
      currentLang === 'en' ? 'View Post' : 'Ver publicación'
    }}</router-link>
  </div>
</template>

<style scoped>
.medium-card {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.medium-card__image {
  aspect-ratio: 600/289;
  object-fit: cover;
  object-position: center;
  width: 100%;
  margin-bottom: 30px;
}

.medium-card__title {
  font-size: 18px;
  font-weight: 700;
  line-height: 125%;
  letter-spacing: -0.3px;
  color: #121416;
  margin-bottom: 15px;
  vertical-align: middle;
}

.medium-card__description {
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0.1px;
  color: #6e6e6e;
  font-family: 'Poppins', 'Arial', sans-serif;
  margin-bottom: 16px;
}

.medium-card__link {
  font-size: 16px;
  font-weight: 700;
  line-height: 40px;
  color: #121416;
  letter-spacing: -0.2px;
  text-underline-offset: 14px;
  width: min-content;
  white-space: nowrap;
}

.medium-card__time {
  font-size: 12px;
  font-weight: 500;
  line-height: 100%;
  color: #6e6e6e;
  font-family: 'Poppins', 'Arial', sans-serif;
  margin-bottom: 19px;
}
</style>
