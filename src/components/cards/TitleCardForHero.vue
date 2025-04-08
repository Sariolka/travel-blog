<script setup lang="ts">
import StatisticIcon from '@/assets/icons/StatisticIcon.vue'
import FacebookIcon from '@/assets/icons/FacebookIcon.vue'
import PinterestIcon from '@/assets/icons/PinterestIcon.vue'
import TwitterIcon from '@/assets/icons/TwitterIcon.vue'
import { useLanguageStore } from '@/stores/store.ts'
import { computed } from 'vue'

const store = useLanguageStore()
const currentLang = computed(() => store.getLang)

const props = defineProps<{
  title: string
  description: string
  author: string
  time: string
  views: string
  shares: string
}>()
</script>

<template>
  <div class="title-card">
    <h1 class="title-card__title">{{ title }}</h1>
    <p class="title-card__description">{{ description }}</p>
    <div class="title-card__article-info">
      <p class="title-card__author">{{currentLang === 'en' ? 'by' : 'por'}} {{ author }}</p>
      <hr class="title-card__line" />
      <div class="title-card__info">
        <div class="title-card__icon title-card__time-icon"></div>
        <p class="title-card__span">{{ time }} {{ currentLang === 'en' ? 'read' : 'leer' }}</p>
      </div>
      <hr class="title-card__line title-card__line_type-xs" />
      <div class="title-card__info">
        <StatisticIcon class="title-card__icon" />
        <p class="title-card__span title-card__span_type-l">{{ views }} {{ currentLang === 'en' ? 'views' : 'vistas' }}</p>
      </div>
      <hr class="title-card__line title-card__line_type-xs" />
      <div class="title-card__info">
        <FacebookIcon class="title-card__icon title-card__icon_type-f" />
        <TwitterIcon class="title-card__icon title-card__icon_type-f" />
        <PinterestIcon class="title-card__icon title-card__icon_type-f" />
        <p class="title-card__span title-card__span_type-l">{{ shares }} {{ currentLang === 'en' ? 'shares' : 'compartidos' }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.title-card {
  display: flex;
  flex-direction: column;
  color: #fff;
  position: relative;
  z-index: 2;
  max-width: 1050px;
  margin-top: auto;
  margin-bottom: 60px;
  margin-left: 130px;
  @media screen and (max-width: 1599px) {
    max-width: 850px;
    margin-bottom: 20px;
    margin-left: 0;
  }
}

.title-card__title {
  font-family: 'Europa', 'Arial', sans-serif;
  font-size: 64px;
  font-weight: 700;
  line-height: 103%;
  letter-spacing: 0.4px;
  text-transform: uppercase;
  margin-bottom: 15px;

  @media screen and (max-width: 1599px) {
    font-size: clamp(24px, 4vw, 52px);
  }
}

.title-card__description {
  font-family: 'Europa', 'Arial', sans-serif;
  font-size: 48px;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: -1.2px;
  margin-bottom: 21px;
  max-width: 990px;
  @media screen and (max-width: 1599px) {
    font-size: clamp(24px, 2vw, 52px);
  }
}

.title-card__author {
  font-family: 'Europa', 'Arial', sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 40px;
  margin-right: 9px;
}

.title-card__span {
  font-family: 'Europa', 'Arial', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: 0.45px;
  margin-top: 2px;
}

.title-card__span_type-l {
  letter-spacing: 0.2px;
}

.title-card__time-icon {
  background-image: url('@/assets/icons/time.svg');
  width: 16px;
  height: 16px;
}

.title-card__article-info {
  display: flex;
  align-items: center;
}

.title-card__info {
  display: flex;
  align-items: center;
  margin-right: 9px;
}

.title-card__line {
  width: 20px;
  height: 1px;
  margin-right: 14px;
}

.title-card__line_type-xs {
  margin-right: 10px;
}

.title-card__icon:not(:last-of-type) {
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  margin-right: 10px;
}

.title-card__icon:last-of-type {
  margin-right: 7px;
}

.title-card__icon_type-f {
  width: 16px;
  height: 16px;
}
.title-card__icon_type-f:last-of-type {
  margin-right: 5px;
}
</style>
