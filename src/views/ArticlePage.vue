<script setup lang="ts">
import { computed } from 'vue'
import type { IBreadcrumb } from '@/types/types.ts'
import HeroBlock from '@/layout/HeroBlock.vue'
import TitleCardForHero from '@/components/cards/TitleCardForHero.vue'
import StatisticIcon from '@/assets/icons/StatisticIcon.vue'
import FacebookIcon from '@/assets/icons/FacebookIcon.vue'
import TwitterIcon from '@/assets/icons/TwitterIcon.vue'
import PinterestIcon from '@/assets/icons/PinterestIcon.vue'
import { useLanguageStore } from '@/stores/store.ts'
import ShareIcon from '@/assets/icons/ShareIcon.vue'
import { translations } from '../data/dataArticle.ts'
import FooterBlock from '@/layout/FooterBlock.vue'

const store = useLanguageStore()
type Language = 'en' | 'es';
const currentLang = computed<Language>(() => store.getLang as Language);

const breadcrumbs = computed<IBreadcrumb[]>(() => {
  return [
    { name: currentLang.value === 'en' ? 'Home' : 'Inicio', path: '/' },
    { name: currentLang.value === 'en' ? 'Growth' : 'Crecimiento', path: '/' },
    {
      name:
        currentLang.value === 'en'
          ? '5 Efficient Rules How to Organize Your Working Place'
          : '5 Reglas Eficientes para Organizar Tu Espacio de Trabajo',
      path: '/article',
    },
  ];
});
</script>

<template>
  <section class="page">
    <HeroBlock class="page__article-img" :breadcrumbs="breadcrumbs">
      <TitleCardForHero
        :title="
          currentLang === 'en'
            ? '5 Efficient Rules How to Organize Your Working Place'
            : '5 Reglas Eficientes para Organizar Tu Espacio de Trabajo'
        "
        shares="1.2K"
        author="Joanna Wellick"
        :description="
          currentLang === 'en'
            ? 'Relationship tips couples therapists are giving all the time'
            : 'Consejos de relación que los terapeutas de pareja dan todo el tiempo'
        "
        :time="currentLang === 'en' ? '2 minute' : '2 minutos'"
        views="1.6K"
      />
    </HeroBlock>
    <main class="page__article">
      <ul class="page__article-socials">
        <li class="page__article-info">
          <StatisticIcon class="page__article-icon" />
          <span class="page__article-span">{{ currentLang === 'en' ? 'views' : 'vistas' }}</span>
          <span class="page__article-span">1.6K</span>
        </li>
        <li class="page__article-info page__article-info_type-medium-margin">
          <ShareIcon class="page__article-icon" />
          <span class="page__article-span">{{ currentLang === 'en' ? 'shares' : 'compartidos' }}</span>
          <span class="page__article-span">996K</span>
        </li>
        <li class="page__article-info page__article-info_type-small-margin">
          <FacebookIcon class="page__article-icon" />
          <span class="page__article-span">125</span>
        </li>
        <li class="page__article-info page__article-info_type-small-margin">
          <TwitterIcon class="page__article-icon" />
        </li>
        <li class="page__article-info page__article-info_type-small-margin">
          <PinterestIcon class="page__article-icon" />
          <span class="page__article-span">425</span>
        </li>
      </ul>
      <article class="page__article-content">
        <p class="page__article-description">
          {{ translations[currentLang].description1 }}
        </p>
        <p class="page__article-description page__article-description_type-margin">
          {{ translations[currentLang].description2 }}
        </p>
        <div class="page__blockquote-container">
          <div class="page__blockquote-img"></div>
          <blockquote class="page__blockquote">
            {{ translations[currentLang].quote }}
          </blockquote>
        </div>

        <p class="page__article-description">
          {{ translations[currentLang].description3 }}
        </p>
        <p class="page__article-description page__article-description_type-margin">
          {{ translations[currentLang].description4 }}
        </p>
        <h4 class="page__article-strong">{{ translations[currentLang].h4 }}</h4>
        <p class="page__article-description">
          {{ translations[currentLang].description5 }}
        </p>
        <ul class="page__article-list">
          <li class="page__article-list-item">{{ translations[currentLang].listItem1 }}</li>
          <li class="page__article-list-item">{{ translations[currentLang].listItem2 }}</li>
          <li class="page__article-list-item">
            {{ translations[currentLang].listItem3 }}
          </li>
        </ul>
        <p class="page__article-description">
          {{ translations[currentLang].description6 }}
        </p>
      </article>
    </main>
    <FooterBlock />
  </section>
</template>

<style scoped>
.page {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
}

.page__article-img {
  background-image: url('@/assets/images/Rectangle 1312(1).webp');
  margin-bottom: 69px;
}

.page__article-socials {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
  padding-left: 3px;
  width: 100%;
}

.page__article {
  display: grid;
  grid-template-columns: 45px minmax(auto, 1080px);
  gap: 72px;
  font-family: 'Europa', 'Arial', sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 33px;
  color: #121416;
  margin-bottom: 208px;
}

.page__blockquote {
  font-size: 48px;
  font-weight: 700;
  line-height: 130%;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: #121416;
}

.page__blockquote-container {
  display: flex;
  align-items: start;
  margin-bottom: 40px;
}

.page__blockquote-img {
  background-image: url('@/assets/icons/quote.svg');
  background-repeat: no-repeat;
  background-size: contain;
  min-width: 41px;
  height: 38px;
  margin-right: 35px;
  margin-top: 12px;
}

.page__article-description {
  margin-bottom: 34px;
}

.page__article-description_type-margin {
  margin-bottom: 91px;
}

.page__article-strong {
  font-size: 40px;
  font-weight: 700;
  line-height: 100%;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  margin-bottom: 27px;
}

.page__article-list {
  padding-left: 92px;
  padding-top: 25px;
  margin-bottom: 55px;
}

.page__article-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  margin-bottom: 58px;
}

.page__article-icon {
  margin-bottom: 8px;
}

.page__article-info_type-medium-margin {
  margin-bottom: 40px;
}

.page__article-info_type-small-margin {
  margin-bottom: 10px;
}
</style>
