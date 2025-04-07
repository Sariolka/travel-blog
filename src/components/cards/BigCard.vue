<script setup lang="ts">
import TagItem from '@/components/items/TagItem.vue'
import TagWithIconItem from '@/components/items/TagWithIconItem.vue'
import type { IBigCardProps } from '@/types/types.ts'
import { useLanguageStore } from '@/stores/store.ts'
import { computed } from 'vue'

const props = defineProps<{
  card: IBigCardProps
}>()

const store = useLanguageStore()
const currentLang = computed(() => store.getLang)
</script>

<template>
  <div class="blog-card">
    <div class="blog-card__image-container">
      <img :src="card.image" :alt="card.title" class="blog-card__image" />
      <div class="blog-card__image-icons">
        <div class="blog-card__tags">
          <TagItem v-for="(tag, index) in card.tags" :key="index" :text="tag" />
        </div>
        <TagWithIconItem :icon="card.icon" />
      </div>
    </div>
    <h3 class="blog-card__title">{{ card.title }}</h3>
    <div class="blog-card__author-container">
      <img :src="card.author_icon" :alt="card.author" class="blog-card__avatar" />
      <p class="blog-card__author">{{ card.author }}</p>
      <hr class="blog-card__line" />
      <div class="blog-card__right-side">
        <time class="blog-card__time">{{ card.date }}</time>
        <div class="blog-card__dot"></div>
        <button class="blog-card__share">
          <span class="blog-card__icon-share"></span> {{ card.count }}K shares
        </button>
      </div>
    </div>
    <p class="blog-card__description">{{ card.text }}</p>
    <router-link to="/article" class="blog-card__link">{{
      currentLang === 'en' ? 'View Post' : 'Ver publicación'
    }}</router-link>
  </div>
</template>

<style scoped>
.blog-card {
  display: flex;
  flex-direction: column;
  font-family: 'Europa', 'Arial', sans-serif;
  width: 100%;
  min-height: 788px;
  height: 100%;
}

.blog-card__image-container {
  position: relative;
  width: 100%;
  margin-bottom: 36px;
}

.blog-card__image {
  position: relative;
  z-index: 0;
  aspect-ratio: 560/420;
  object-fit: cover;
  object-position: center;
  width: 100%;
  vertical-align: bottom;
}

.blog-card__image-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.25);
  z-index: 1;
  vertical-align: bottom;
}

.blog-card__image-icons {
  position: absolute;
  z-index: 2;
  top: 30px;
  left: 0;
  padding-left: 30px;
  padding-right: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.blog-card__tags {
  display: flex;
  align-items: center;
  gap: 4px;
}

.blog-card__right-side {
  display: flex;
  align-items: center;
}

.blog-card__title {
  font-size: 42px;
  font-weight: 700;
  line-height: 40px;
  color: #121416;
  margin-bottom: 27px;
}

.blog-card__author-container {
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 25px;
  @media screen and (max-width: 1899px) {
    flex-direction: column;
  }
  @media screen and (max-width: 1599px) {
    flex-direction: row;
  }
}

.blog-card__author {
  font-size: 24px;
  font-weight: 700;
  line-height: 40px;
  color: #121416;
  margin-right: 10px;
}

.blog-card__time {
  font-size: 18px;
  font-weight: 400;
  line-height: 40px;
  color: #6c757d;
  font-family: 'EuropaNuova', 'Arial', sans-serif;
  margin-right: 10px;
}

.blog-card__avatar {
  width: 40px;
  height: 40px;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
  margin-right: 3px;
}

.blog-card__share {
  display: flex;
  align-items: center;
  gap: 2px;
  font-size: 18px;
  font-weight: 400;
  line-height: 40px;
  color: #6c757d;
  font-family: 'EuropaNuova', 'Arial', sans-serif;
  background-color: transparent;
  border: none;
  padding: 0;
}

.blog-card__line {
  width: 36px;
  height: 1px;
  color: rgba(108, 117, 125, 0.4);
  margin-right: 9px;
  @media screen and (max-width: 1899px) {
    display: none;
  }
}

.blog-card__dot {
  width: 30px;
  height: 40px;
  background-image: url('@/assets/icons/dot.svg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: 8px;
}

.blog-card__icon-share {
  background-image: url('@/assets/icons/share.svg');
  background-position: center;
  background-repeat: no-repeat;
  width: 17px;
  height: 18px;
}

.blog-card__description {
  font-size: 20px;
  font-weight: 400;
  line-height: 150%;
  color: #6c757d;
  margin-bottom: 30px;
}

.blog-card__link {
  font-size: 24px;
  font-weight: 700;
  line-height: 40px;
  color: #121416;
  text-underline-offset: 10px;
  width: min-content;
  white-space: nowrap;
}
</style>
