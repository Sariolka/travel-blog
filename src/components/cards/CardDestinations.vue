<script setup lang="ts">
import type { ICardDestination } from '@/types/types.ts';

const props = defineProps<{
  card: ICardDestination;
}>();
</script>

<template>
  <router-link class="card-destination" :to="card.link">
    <img :src="card.image" alt="" class="card-destination__image" />
    <h3 class="card-destination__title">{{ card.title }}</h3>
  </router-link>
</template>

<style scoped>
.card-destination {
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  width: 100%;
  min-height: 260px;
  text-decoration: none;
  flex: 1 1 auto;
}

.card-destination::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.25);
  z-index: 2;
  transition: transform 0.3s ease-in-out;
}

.card-destination:hover .card-destination__image,
.card-destination:hover::before {
  transform: scale(105%);
}

.card-destination__image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  object-fit: cover;
  object-position: center;
  transition: transform 0.3s ease-in-out;
}

.card-destination__title {
  font-family: 'Europa', 'Arial', sans-serif;
  font-size: 24px;
  font-weight: 700;
  line-height: 117%;
  color: #fff;
  position: relative;
  z-index: 2;
  margin-left: 2px;
}
</style>
