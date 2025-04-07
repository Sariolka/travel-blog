<script setup lang="ts">
import { useLanguageStore } from '@/stores/store.ts'
import { computed } from 'vue'

const props = defineProps<{
  big?: boolean
}>()

const store = useLanguageStore()
const currentLang = computed(() => store.getLang)
</script>

<template>
  <router-link to="/" class="link" :class="{ 'link_type-big': big }">{{
    currentLang === 'en' ? 'Start planning your trip' : 'Empieza a planear tu viaje'
  }}</router-link>
</template>

<style scoped>
.link {
  box-shadow: 0px 10px 10px 0px #0000000f;
  border-radius: 4px;
  border: 2px solid #fff;
  width: 325px;
  height: 58px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Europa', 'Arial', sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  color: #121416;
  text-decoration: none;
  @media screen and (max-width: 1279px) {
    font-size: 1.6vw;
    width: 250px;
    height: 45px;
  }
  @media screen and (max-width: 799px) {
    font-size: 2vw;
    width: 200px;
    height: 35px;
  }
}

.link_type-big {
  color: #7a65e1;
  height: 64px;
  font-weight: 400;
  font-family: 'EuropaNuova', 'Arial', sans-serif;
  letter-spacing: 0.1px;
  @media screen and (max-width: 1279px) {
    font-size: 1.6vw;
    width: 250px;
    height: 45px;
  }
  @media screen and (max-width: 799px) {
    font-size: clamp(14px, 2vw, 48px);
    width: 200px;
    height: 45px;
  }
}
</style>
