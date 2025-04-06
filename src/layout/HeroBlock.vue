<script setup lang="ts">
import LinkItem from '@/components/items/LinkItem.vue'
import { useLanguageStore } from '@/stores/store.ts'
import { computed } from 'vue'

const store = useLanguageStore()
const currentLang = computed(() => store.getLang)
const handleChangeLanguage = () => {
  if (store.language === 'en') {
    store.setLanguage('es');
  } else {
    store.setLanguage('en');
  }
}
</script>

<template>
  <section class="hero-block">
    <header class="hero-block__header">
      <img class="hero-block__logo" src="@/assets/images/logo.png" alt="Trazler"/>
      <div class="hero-block__nav">
        <nav class="hero-block__links">
          <router-link to="/article" class="hero-block__link">DESTINATIONS</router-link>
          <router-link to="/article" class="hero-block__link">FOOD</router-link>
          <router-link to="/article" class="hero-block__link">WELL BEING</router-link>
          <router-link to="/article" class="hero-block__link">SPORT</router-link>
          <router-link to="/article" class="hero-block__link">FAMILY</router-link>
          <router-link to="/article" class="hero-block__link">LIFESTYLE</router-link>
        </nav>
        <div class="hero-block__info">
          <button class="hero-block__search-btn" type="button" aria-label="Search">
        </button>
          <button class="hero-block__call-btn" type="button">CALL TO ACTION</button>
          <button class="hero-block__lang-btn" type="button" @click="handleChangeLanguage">{{currentLang === 'EN' ? 'ES' : 'ES'}}</button>
        </div></div>
    </header>
    <h1 class="hero-block__title">Inspiration for travel by real people</h1>
    <LinkItem />
  </section>
</template>

<style scoped>
.hero-block {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  background-image: url("@/assets/images/Rectangle 1312.webp");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  aspect-ratio: 1997/900;
  padding: 20px 100px;
}

.hero-block::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.39);
  z-index: 1;
  transition: transform 0.3s ease-in-out;
}

.hero-block__nav {
  position: relative;
  display: flex;
  align-items: center;
}

.hero-block__title {
  text-transform: uppercase;
  box-shadow: 4px 10px 48px 0px #0000005E;
  font-family: 'Europa', 'Arial', sans-serif;
  font-size: 64px;
  font-weight: 700;
  line-height: 100%;
  letter-spacing: 0.5px;
  text-align: center;
  color: #fff;
  display: inline-block;
  z-index: 2;
}

.hero-block__link {
  font-family: 'Europa', 'Arial', sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  color: #fff;
  text-decoration: none;
}

.hero-block__header {
  display: flex;
  align-items: center;
  z-index: 2;
  margin-bottom: 250px;
}

.hero-block__logo {
  width: 360px;
  height: 49px;
  object-fit: contain;
  object-position: center;
}

.hero-block__call-btn {
  background-color: #000;
  border: none;
  padding: 10px 40px;
  border-radius: 2px;
  color: #fff;
  box-shadow: 0px 2px 4px 0px #00000040;
  font-family: 'Sansita', 'Arial', sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 100%;
  letter-spacing: 1.28px;
}

.hero-block__lang-btn {
  background-color: transparent;
  border: none;
  font-family: 'Europa', 'Arial', sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  color: #fff;
  cursor: pointer;
}

.hero-block__search-btn {
  background-color: transparent;
  border: none;
  background-image: url("@/assets/icons/search.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  width: 27px;
  height: 27px;
  cursor: pointer;
}
</style>
