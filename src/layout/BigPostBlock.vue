<script setup lang="ts">
import TagItem from '@/components/items/TagItem.vue'
import LinkItem from '@/components/items/LinkItem.vue'
</script>

<template>
  <section class="blog-post">
    <div class="blog-post__content">
      <TagItem text="Travel" small class="blog-post__tag" />
      <h2 class="blog-post__title">Richird Norton photorealistic rendering as&nbsp;real photos</h2>
      <p class="blog-post__description">
        Progressively incentivize cooperative systems through technically sound functionalities. The
        credibly productivate seamless data.
      </p>
      <LinkItem class="blog-post__link" big/>
    </div>
  </section>
</template>

<style scoped>
.blog-post {
  background-image: url('@/assets/images/Big Post.webp');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  aspect-ratio: 1760/600;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 30px;
  padding-bottom: 30px;
}

.blog-post::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #343a40;
  opacity: 50%;
  z-index: 2;
  transition: transform 0.3s ease-in-out;
}

.blog-post__title {
  position: relative;
  z-index: 2;
  font-family: 'Europa', 'Arial', sans-serif;
  font-size: 48px;
  font-weight: 700;
  line-height: 95%;
  letter-spacing: -1.71px;
  text-align: center;
  color: #fff;
  margin-bottom: 20px;

  @media screen and (max-width: 1279px) {
    font-size: clamp(20px,4vw,48px);
  }
}

.blog-post__description {
  position: relative;
  z-index: 2;
  font-family: 'EuropaNuova', 'Arial', sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 22.5px;
  text-align: center;
  max-width: 750px;
  color: #e5e5e5;
  letter-spacing: 0.2px;
  margin-bottom: 30px;
  @media screen and (max-width: 1279px) {
    font-size: 1.7vw;
  }
  @media screen and (max-width: 799px) {
    font-size: clamp(14px,2vw,48px);
    max-width: 70%;
  }
}

.blog-post__tag {
  width: min-content;
  position: relative;
  z-index: 2;
  margin-bottom: 10px;
}

.blog-post__content {
  display: flex;
  flex-direction: column;
  max-width: 987px;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 1279px) {
   max-width: 80%;
  }
}

.blog-post__link {
  position: relative;
  z-index: 2;
}
</style>
