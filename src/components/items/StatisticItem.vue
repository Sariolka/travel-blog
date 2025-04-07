<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  type: 'f' | 'i' | 't' | 'y'
  count: string
}>()

// может, это ссылки?..

const classes = computed(() => {
  const prefix = 'container__img'
  return [
    prefix,
    {
      [`${prefix}_type-f`]: props.type === 'f',
      [`${prefix}_type-i`]: props.type === 'i',
      [`${prefix}_type-t`]: props.type === 't',
      [`${prefix}_type-y`]: props.type === 'y',
    },
  ]
})
</script>

<template>
  <li class="container">
    <div :class="classes"></div>
    <p class="container__count">{{ count }} M</p>
  </li>
</template>

<style scoped>
.container {
  display: inline-flex;
  align-items: center;
  gap: 5px;
}

.container__img {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.container__img_type-i {
  width: 18px;
  height: 18px;
  background-image: url('@/assets/icons/i.svg');
}

.container__img_type-f {
  width: 9px;
  height: 18px;
  background-image: url('@/assets/icons/f.svg');
}

.container__img_type-t {
  width: 19.6px;
  height: 16px;
  background-image: url('@/assets/icons/t.svg');
}

.container__img_type-y {
  width: 22.3px;
  height: 15.8px;
  background-image: url('@/assets/icons/y.svg');
}

.container__count {
  font-family: 'Roboto', 'Arial', sans-serif;
  font-size: 12px;
  font-weight: 300;
  line-height: 100%;
  color: #000;
}
</style>
