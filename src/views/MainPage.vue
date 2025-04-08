<script setup lang="ts">
import HeroBlock from '@/layout/HeroBlock.vue'
import BlogCardsBlock from '@/layout/BlogCardsBlock.vue'
import BigPostBlock from '@/layout/BigPostBlock.vue'
import DestinationsBlock from '@/layout/DestinationsBlock.vue'
import FooterBlock from '@/layout/FooterBlock.vue'
import CategoriesBlock from '@/layout/CategoriesBlock.vue'
</script>

<template>
  <section class="page">
    <HeroBlock class="page__main-img" />
    <main class="page__main">
      <BlogCardsBlock class="page__main-blog" />
      <BigPostBlock class="page__main-post"/>
      <DestinationsBlock class="page__main-destination" />
      <CategoriesBlock class="page__main-categories" />
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
