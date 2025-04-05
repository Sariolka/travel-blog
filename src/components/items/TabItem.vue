<script setup lang="ts">
const props = defineProps<{
  status: 'default' | 'active'
  text: string
}>()

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
  padding-bottom: 27px;
}

.tab-item:hover {
  color: red;
}

.tab-item_active {
  border-bottom: 3px solid red;
}

.tab-item__text {
  transition: color 0.3s ease-in-out;
  color: #000;
  cursor: pointer;
  white-space: nowrap;
}
</style>
