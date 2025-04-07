<script setup lang="ts">
import LinkItem from '@/components/items/LinkItem.vue'
import { useLanguageStore } from '@/stores/store.ts'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const props = defineProps<{
  breadcrumbs?: string[]
  articleTitle?: string
}>()

const route = useRoute()
const store = useLanguageStore()
const currentLang = computed(() => store.getLang)
const handleChangeLanguage = () => {
  if (store.language === 'en') {
    store.setLanguage('es')
  } else {
    store.setLanguage('en')
  }
}

console.log(props)
</script>

<template>
  <section class="hero-block" :class="{ 'hero-block_type-other': route.path !== '/' }">
    <header
      class="hero-block__header"
      :class="{ 'hero-block__header_type-other': route.path !== '/' }"
    >
      <img class="hero-block__logo" src="@/assets/images/logo.png" alt="Trazler" />
      <div class="hero-block__nav">
        <nav class="hero-block__links">
          <router-link to="/article" class="hero-block__link">
            {{ currentLang === 'en' ? 'DESTINATIONS' : 'DESTINOS' }}</router-link
          >
          <router-link to="/article" class="hero-block__link">{{
            currentLang === 'en' ? 'FOOD' : 'COMIDA'
          }}</router-link>
          <router-link to="/article" class="hero-block__link">{{
            currentLang === 'en' ? 'WELL BEING' : 'BIENESTAR'
          }}</router-link>
          <router-link to="/article" class="hero-block__link">{{
            currentLang === 'en' ? 'SPORT' : 'DEPORTE'
          }}</router-link>
          <router-link to="/article" class="hero-block__link">{{
            currentLang === 'en' ? 'FAMILY' : 'FAMILIA'
          }}</router-link>
          <router-link to="/article" class="hero-block__link">
            {{ currentLang === 'en' ? 'LIFESTYLE' : 'ESTILO DE VIDA' }}</router-link
          >
        </nav>
        <div class="hero-block__info">
          <button class="hero-block__search-btn" type="button" aria-label="Search"></button>
          <button class="hero-block__call-btn" type="button">
            {{ currentLang === 'en' ? 'CALL TO ACTION' : 'LLAMADA A LA ACCIÓN' }}
          </button>
          <button class="hero-block__lang-btn" type="button" @click="handleChangeLanguage">
            {{ currentLang === 'en' ? 'ES' : 'EN' }}
          </button>
        </div>
      </div>
    </header>
    <div v-if="breadcrumbs && breadcrumbs.length">
      <router-link v-for="(crumb, index) in breadcrumbs" :key="index" :to="crumb.link">
        <!--        {{ crumb.text }}-->
      </router-link>
    </div>
    <h1 class="hero-block__title" v-if="route.path === '/'">
      {{
        currentLang === 'en'
          ? 'Inspiration for travel by real people'
          : 'Inspiración para viajar de personas reales'
      }}
    </h1>
    <p class="hero-block__description" v-if="route.path === '/'">
      {{
        currentLang === 'en'
          ? 'Book smart, travel simple'
          : 'Reserva inteligentemente, viaja sencillo'
      }}
    </p>
    <LinkItem class="hero-block__btn-plans" v-if="route.path === '/'" />
    <slot></slot>
  </section>
</template>

<style scoped>
.hero-block {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  aspect-ratio: 1997/900;
  padding: 43px 188px 0 135px;
  @media screen and (max-width: 1350px) {
    padding-left: 50px;
    padding-right: 50px;
    padding-bottom: 20px;
  }
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
  justify-content: space-between;
  @media screen and (max-width: 1710px) {
    width: 100%;
  }
}

.hero-block__title {
  text-transform: uppercase;
  box-shadow: 4px 10px 48px 0 #0000005e;
  font-family: 'Europa', 'Arial', sans-serif;
  font-size: 64px;
  font-weight: 700;
  line-height: 100%;
  letter-spacing: 0.4px;
  text-align: center;
  color: #fff;
  display: inline-block;
  z-index: 2;
  margin-left: 105px;
  margin-bottom: 11px;

  @media screen and (max-width: 1350px) {
    font-size: clamp(24px, 5vw, 52px);
  }
}

.hero-block__link {
  font-family: 'Europa', 'Arial', sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  color: #fff;
  text-decoration: none;
  white-space: nowrap;
}

.hero-block__header {
  display: flex;
  align-items: center;
  z-index: 2;
  margin-bottom: 305px;
  justify-content: space-between;

  @media screen and (max-width: 1710px) {
    flex-direction: column;
    align-items: start;
  }
}

.hero-block__header_type-other {
  margin-bottom: 0;
}

.hero-block_type-other {
  padding-top: 38px;
  padding-left: 130px;
  aspect-ratio: 2005/800;
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
  padding: 19px 39.5px;
  border-radius: 2px;
  color: #fff;
  box-shadow: 0px 2px 4px 0px #00000040;
  font-family: 'Sansita', 'Arial', sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 100%;
  letter-spacing: 1.28px;
  white-space: nowrap;
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
  margin-right: 10px;
}

.hero-block__search-btn {
  background-color: transparent;
  border: none;
  background-image: url('@/assets/icons/search.svg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  width: 27px;
  height: 27px;
  cursor: pointer;
  margin-right: 28px;
}

.hero-block__links {
  display: flex;
  align-items: center;
  gap: 30px;
  margin-right: 165px;
  @media screen and (max-width: 1849px) {
    margin-right: 30px;
  }
}

.hero-block__info {
  display: flex;
  align-items: center;
}

.hero-block__description {
  margin-left: 105px;
  position: relative;
  z-index: 2;
  text-align: center;
  font-family: 'Europa', 'Arial', sans-serif;
  font-size: 36px;
  font-weight: 400;
  line-height: 100%;
  color: #fff;
  margin-bottom: 42px;

  @media screen and (max-width: 1350px) {
    font-size: clamp(24px, 2vw, 36px);
  }
}

.hero-block__btn-plans {
  position: relative;
  z-index: 2;
  align-self: center;
  margin-left: 102px;
}
</style>
