<script setup lang="ts">
import HeroBlock from '@/layout/HeroBlock.vue'
import BlogCardsBlock from '@/layout/BlogCardsBlock.vue'
import BigPostBlock from '@/layout/BigPostBlock.vue'
import DestinationsBlock from '@/layout/DestinationsBlock.vue'
import FooterBlock from '@/layout/FooterBlock.vue'
</script>

<template>
  <!--<HeroBlock />-->
  <main class="page__main">
    <BlogCardsBlock />
    <BigPostBlock />
    <DestinationsBlock />
  </main>

  <!--  <FooterBlock />-->
</template>

<style scoped>
.page__main {
  display: flex;
  flex-direction: column;
  padding-left: 144px;
  padding-right: 93px;
}
</style>
