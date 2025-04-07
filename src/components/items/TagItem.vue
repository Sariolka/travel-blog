<script setup lang="ts">
const props = defineProps<{
  text: string
  small?: boolean
}>()
</script>

<template>
  <div class="tag" :class="{ 'tag_type-small': small }">
    <p class="tag__text" :class="{ 'tag__text_type-small': small }">{{ text }}</p>
  </div>
</template>

<style scoped>
.tag {
  position: relative;
  display: inline-block;
  padding: 10px;
  border-radius: 4px;
  flex-grow: 0;
}

.tag_type-small {
  padding: 5px 10px;
}

.tag::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(12px);
  background-color: rgba(255, 255, 255, 0.2);
  z-index: 1;
  border-radius: 4px;
}

.tag__text {
  position: relative;
  z-index: 1;
  font-family: 'Europa', 'Arial', sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 100%;
  color: #fff;
  white-space: nowrap;
}

.tag__text_type-small {
  font-size: 24px;
  @media screen and (max-width: 799px) {
    font-size: clamp(16px, 2vw, 48px);
  }
}
</style>
