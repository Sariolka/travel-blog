<script setup lang="ts">
const props = defineProps<{
  big?: boolean
}>()
</script>

<template>
  <router-link to="/" class="link" :class="{'link_type-big': big}">Start planning your trip</router-link>
</template>

<style scoped>
.link {
  box-shadow: 0px 10px 10px 0px #0000000F;
  border-radius: 2px;
  border: 2px solid #fff;
  width: 320px;
  height: 54px;
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
}

.link_type-big {
  color: #7A65E1;
  height: 64px;
  font-weight: 400;
  font-family: 'EuropaNuova', 'Arial', sans-serif;
  letter-spacing: 0.1px;
}
</style>
