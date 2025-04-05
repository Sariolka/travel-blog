<script setup lang="ts">
const props = defineProps<{
  icon: 'img' | 'video'
}>()
</script>

<template>
  <div class="tag-icon">
    <div
      class="tag-icon__image"
      :class="{
        'tag-icon__image_type-pic': icon === 'img',
        'tag-icon__image_type-play': icon === 'video',
      }"
    ></div>
  </div>
</template>

<style scoped>
.tag-icon {
  display: inline-flex;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  position: relative;
  align-items: center;
  justify-content: center;
}

.tag-icon::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  backdrop-filter: blur(12px);
  background-color: rgba(255, 255, 255, 0.2);
  z-index: 0;
  border-radius: 50%;
  width: 42px;
  height: 42px;
}

.tag-icon__image {
  position: absolute;
  z-index: 1;
  width: 18px;
  height: 18px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
}

.tag-icon__image_type-pic {
  background-image: url('@/assets/icons/pic.svg');
}

.tag-icon__image_type-play {
  background-image: url('@/assets/icons/play.svg');
}
</style>
