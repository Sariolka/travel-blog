<script setup lang="ts">
import { ref, onMounted, onUnmounted, defineAsyncComponent } from 'vue';
import HeroBlock from '@/layout/HeroBlock.vue';
import BlogCardsBlock from '@/layout/BlogCardsBlock.vue';
const BigPostBlock = defineAsyncComponent(() => import('@/layout/BigPostBlock.vue'));
const DestinationsBlock = defineAsyncComponent(() => import('@/layout/DestinationsBlock.vue'));
const CategoriesBlock = defineAsyncComponent(() => import('@/layout/CategoriesBlock.vue'));
import FooterBlock from '@/layout/FooterBlock.vue';

const lazyLoadBigPost = ref<HTMLElement | null>(null);
const lazyLoadDestinations = ref<HTMLElement | null>(null);
const lazyLoadCategories = ref<HTMLElement | null>(null);

const isBigPostVisible = ref(false);
const isDestinationsVisible = ref(false);
const isCategoriesVisible = ref(false);

let observer: IntersectionObserver;
onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.target === lazyLoadBigPost.value) {
          isBigPostVisible.value = entry.isIntersecting;
        } else if (entry.target === lazyLoadDestinations.value) {
          isDestinationsVisible.value = entry.isIntersecting;
        } else if (entry.target === lazyLoadCategories.value) {
          isCategoriesVisible.value = entry.isIntersecting;
        }

        if (entry.isIntersecting) {
          observer.unobserve(entry.target);
        }
      });
    },
    {
      rootMargin: '50px',
      threshold: 0.1,
    },
  );
  if (lazyLoadBigPost.value) observer.observe(lazyLoadBigPost.value);
  if (lazyLoadDestinations.value) observer.observe(lazyLoadDestinations.value);
  if (lazyLoadCategories.value) observer.observe(lazyLoadCategories.value);
});

onUnmounted(() => {
  if (observer) {
    if (lazyLoadBigPost.value) observer.unobserve(lazyLoadBigPost.value);
    if (lazyLoadDestinations.value) observer.unobserve(lazyLoadDestinations.value);
    if (lazyLoadCategories.value) observer.unobserve(lazyLoadCategories.value);
  }
});
</script>

<template>
  <section class="page">
    <HeroBlock class="page__main-img" />
    <main class="page__main">
      <BlogCardsBlock class="page__main-blog" />
      <div ref="lazyLoadBigPost" class="page__main-post">
        <BigPostBlock v-if="isBigPostVisible" />
        <div v-else>Loading BigPost...</div>
      </div>
      <div ref="lazyLoadDestinations" class="page__main-destination">
        <DestinationsBlock v-if="isDestinationsVisible" />
        <div v-else>Loading Destinations...</div>
      </div>
      <div ref="lazyLoadCategories" class="page__main-categories">
        <CategoriesBlock v-if="isCategoriesVisible" />
        <div v-else>Loading Categories...</div>
      </div>
    </main>
    <FooterBlock />
  </section>
</template>

<style scoped>
.page {
  margin-left: auto;
  margin-right: auto;
}

.page__main {
  display: flex;
  flex-direction: column;
  padding-left: 144px;
  padding-right: 93px;

  @media screen and (max-width: 1279px) {
    padding-left: 20px;
    padding-right: 20px;
  }
}

.page__main-img {
  background-image: url('@/assets/images/Rectangle 1312.webp');
  margin-bottom: 41px;
}

.page__main-blog {
  margin-bottom: 90px;
}

.page__main-post {
  margin-bottom: 178px;
}

.page__main-destination {
  margin-bottom: 198px;
}

.page__main-categories {
  margin-bottom: 125px;
}
</style>
