<script setup lang="ts">
import type { ITabItem } from '@/types/types.ts'

const props = defineProps<ITabItem>()

const emit = defineEmits<{
  (e: 'update:status', status: string): void
}>()

const handleSetActive = () => {
  emit('update:status', 'active')
}
</script>

<template>
  <li class="tab-item" :class="{ 'tab-item_active': status === 'active' }">
    <h2
      class="tab-item__text"
      @click="handleSetActive"
      :class="{ 'tab-item__text_active': status === 'active' }"
    >
      {{ text }}
    </h2>
  </li>
</template>

<style scoped>
.tab-item {
  display: flex;
  padding-bottom: 7px;
}

.tab-item_active {
  border-bottom: 2px solid #121416;
}

.tab-item__text {
  transition: color 0.3s ease-in-out;
  color: #121416;
  cursor: pointer;
  white-space: nowrap;
  font-family: 'Europa', 'Arial', sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 0.5px;

  @media screen and (max-width: 1279px) {
    font-size: clamp(14px, 1.8vw, 20px);
  }
}

.tab-item__text:hover {
  color: darkslategray;
}
</style>
