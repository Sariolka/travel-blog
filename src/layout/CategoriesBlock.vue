<script setup lang="ts">
import TabItem from '@/components/items/TabItem.vue';
import SmallCard from '@/components/cards/SmallCard.vue';
import MediumCard from '@/components/cards/MediumCard.vue';
import { useLanguageStore } from '@/stores/store.ts';
import { computed } from 'vue';
import type { ICard, IMediumCardProps, ITabItem } from '@/types/types.ts';
import {
  cardEn,
  cardEs,
  cards1En,
  cards1Es,
  cards2En,
  cards2Es,
  tabsEn,
  tabsEs,
} from '@/data/dataCategories.ts';
const store = useLanguageStore();
const currentLang = computed(() => store.getLang);
const tabs = computed<ITabItem[]>(() => (currentLang.value === 'en' ? tabsEn : tabsEs));
const cards2 = computed<ICard[]>(() => (currentLang.value === 'en' ? cards2En : cards2Es));
const cards1 = computed<ICard[]>(() => (currentLang.value === 'en' ? cards1En : cards1Es));
const card = computed<IMediumCardProps>(() => (currentLang.value === 'en' ? cardEn : cardEs));
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
        <MediumCard :card="card" />
        <ul class="categories-block__cat-container">
          <li class="categories-block__container-item" v-for="(card, index) in cards1" :key="index">
            <SmallCard
              :title="card.title"
              :date="card.date"
              :image="card.image"
              :link="card.link"
              type="xs"
            />
          </li>
        </ul>
      </div>
      <div class="categories-block__manga">
        <h3 class="categories-block__manga-title">
          {{ currentLang === 'en' ? 'Manga reads' : 'Lecturas de Manga' }}
        </h3>
        <ul class="categories-block__manga-list">
          <li v-for="(card, index) in cards2" :key="index">
            <SmallCard
              :title="card.title"
              :date="card.date"
              :image="card.image"
              :link="card.link"
            />
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
  border-bottom: 1px solid #d6d6d6;
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
  letter-spacing: 0.5px;
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
