<script setup lang="ts">
import { computed } from 'vue'
import type { IBreadcrumb } from '@/types/types.ts'
import HeroBlock from '@/layout/HeroBlock.vue'
import FooterBlock from '@/layout/FooterBlock.vue'
import TitleCardForHero from '@/components/cards/TitleCardForHero.vue'
import StatisticIcon from '@/assets/icons/StatisticIcon.vue'
import FacebookIcon from '@/assets/icons/FacebookIcon.vue'
import TwitterIcon from '@/assets/icons/TwitterIcon.vue'
import PinterestIcon from '@/assets/icons/PinterestIcon.vue'
import { useLanguageStore } from '@/stores/store.ts'
import ShareIcon from '@/assets/icons/ShareIcon.vue'

const store = useLanguageStore()
const currentLang = computed(() => store.getLang)

const breadcrumbs: IBreadcrumb[] = [
  { name: currentLang.value === 'en' ? 'Home' : 'Inicio', path: '/' },
  { name: currentLang.value === 'en' ? 'Growth' : 'Crecimiento', path: '/' },
  { name: currentLang.value === 'en' ? '5 Efficient Rules How to Organize Your Working Place' : '5 Reglas Eficientes para Organizar Tu Espacio de Trabajo', path: '/article' },
];
</script>

<template>
  <section class="page">
    <HeroBlock class="page__article-img" :breadcrumbs="breadcrumbs">
      <TitleCardForHero
        :title="
          currentLang === 'en'
            ? '5 Efficient Rules How to Organize Your Working Place'
            : '5 Reglas Eficientes para Organizar Tu Espacio de Trabajo'
        "
        shares="1.2K"
        author="Joanna Wellick"
        :description="
          currentLang === 'en'
            ? 'Relationship tips couples therapists are giving all the time'
            : 'Consejos de relación que los terapeutas de pareja dan todo el tiempo'
        "
        :time="currentLang === 'en' ? '2 minute' : '2 minutos'"
        views="1.6K"
      />
    </HeroBlock>
    <main class="page__article">
      <ul class="page__article-socials">
        <li class="page__article-info">
          <StatisticIcon class="page__article-icon" />
          <span class="page__article-span">{{ currentLang === 'en' ? 'views' : 'vistas' }}</span>
          <span class="page__article-span">1.6K</span>
        </li>
        <li class="page__article-info page__article-info_type-medium-margin">
          <ShareIcon class="page__article-icon" />
          <span class="page__article-span">{{ currentLang === 'en' ? 'shares' : 'compartidos' }}</span>
          <span class="page__article-span">996K</span>
        </li>
        <li class="page__article-info page__article-info_type-small-margin">
          <FacebookIcon class="page__article-icon" />
          <span class="page__article-span">125</span>
        </li>
        <li class="page__article-info page__article-info_type-small-margin">
          <TwitterIcon class="page__article-icon" />
        </li>
        <li class="page__article-info page__article-info_type-small-margin">
          <PinterestIcon class="page__article-icon" />
          <span class="page__article-span">425</span>
        </li>
      </ul>
      <article class="page__article-content">
        <p class="page__article-description">
          Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh
          front liner sport detail. Warmth comfort hangs loosely from the body large pocket
          at&nbsp;the front full button detail cotton blend cute functional. Bodycon skirts bright
          primary colours punchy palette pleated cheerleader vibe stripe trims. Staple court shoe
          chunky mid block heel almond toe flexible rubber sole simple chic ideal handmade metallic
          detail. Contemporary pure silk pocket square sophistication luxurious coral print pocket
          pattern&nbsp;On trend inspired shades.
        </p>
        <p class="page__article-description page__article-description_type-margin">
          Striking pewter studded epaulettes silver zips inner drawstring waist channel urban edge
          single-breasted jacket. Engraved attention to detail elegant with neutral colours cheme
          quartz leather strap fastens with a&nbsp;pin a&nbsp;buckle clasp. Workwear bow detailing
          a&nbsp;slingback buckle strap stiletto heel timeless go-to shoe sophistication slipper
          shoe. Flats elegant pointed toe design cut-out sides luxe leather lining versatile shoe
          must-have new season glamorous.
        </p>
        <div class="page__blockquote-container">
          <div class="page__blockquote-img"></div>
          <blockquote class="page__blockquote">
            Knicker lining concealed back zip fasten swing style high waisted double layer full
            pattern floral.
          </blockquote>
        </div>

        <p class="page__article-description">
          Foam padding in&nbsp;the insoles leather finest quality staple flat slip-on design pointed
          toe off-duty shoe. Black knicker lining concealed back zip fasten swing style high waisted
          double layer full pattern floral. Polished finish elegant court shoe work duty stretchy
          slingback strap mid kitten heel this ladylike design
        </p>
        <p class="page__article-description page__article-description_type-margin">
          Eget aenean tellus venenatis. Donec odio tempus. Felis arcu pretium metus nullam quam
          aenean sociis quis sem neque vici libero. Venenatis nullam fringilla pretium magnis
          aliquam nunc vulputate integer augue ultricies cras. Eget viverra feugiat cras&nbsp;ut.
          Sit natoque montes tempus ligula eget vitae pede rhoncus maecenas consectetuer commodo
          condimentum aenean.
        </p>
        <h4 class="page__article-strong">Eu ridiculus fringilla aenean</h4>
        <p class="page__article-description">
          Sociis consequat adipiscing sit curabitur donec sem luctus cras natoque vulputate dolor
          eget dapibus. Nec vitae eros ullamcorper laoreet dapibus mus ac&nbsp;ante viverra.
          A&nbsp;aenean sit augue curabitur et&nbsp;parturient nisi sed enim. Nulla nec quis sit
          quisque sem commodo ultricies neque. Lorem eget venenatis dui ante luctus ultricies tellus
          montes. Quis in&nbsp;sapien tempus.
        </p>
        <ul class="page__article-list">
          <li class="page__article-list-item">Crisp fresh iconic elegant timeless clean perfume</li>
          <li class="page__article-list-item">Neck straight sharp silhouette and dart detail</li>
          <li class="page__article-list-item">
            Machine wash cold slim fit premium stretch selvedge denim comfortable low waist
          </li>
        </ul>
        <p class="page__article-description">
          See-through delicate embroidered organza blue lining luxury acetate-mix stretch pleat
          detailing. Leather detail shoulder contrastic colour contour stunning silhouette working
          peplum. Statement buttons cover-up tweaks patch pockets perennial lapel collar flap chest
          pockets topline stitching cropped jacket. Effortless comfortable full leather lining
          eye-catching unique detail to&nbsp;the toe low &lsquo;cut-away&rsquo; sides clean and
          sleek. Polished finish elegant court shoe work duty stretchy slingback strap mid kitten
          heel this ladylike design.
        </p>
      </article>
    </main>
<!--    <FooterBlock />-->
  </section>
</template>

<style scoped>
.page {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
}

.page__article-img {
  background-image: url('@/assets/images/Rectangle 1312(1).webp');
  margin-bottom: 69px;
}

.page__article-socials {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
  padding-left: 3px;
  width: 100%;
}

.page__article {
  display: grid;
  grid-template-columns: 45px minmax(auto, 1080px);
  gap: 72px;
  font-family: 'Europa', 'Arial', sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 33px;
  color: #121416;
  margin-bottom: 208px;
}

.page__blockquote {
  font-size: 48px;
  font-weight: 700;
  line-height: 130%;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: #121416;
}

.page__blockquote-container {
  display: flex;
  align-items: start;
  margin-bottom: 40px;
}

.page__blockquote-img {
  background-image: url('@/assets/icons/quote.svg');
  background-repeat: no-repeat;
  background-size: contain;
  min-width: 41px;
  height: 38px;
  margin-right: 35px;
  margin-top: 12px;
}

.page__article-description {
  margin-bottom: 34px;
}

.page__article-description_type-margin {
  margin-bottom: 91px;
}

.page__article-strong {
  font-size: 40px;
  font-weight: 700;
  line-height: 100%;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  margin-bottom: 27px;
}

.page__article-list {
  padding-left: 92px;
  padding-top: 25px;
  margin-bottom: 55px;
}

.page__article-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  margin-bottom: 58px;
}

.page__article-icon {
  margin-bottom: 8px;
}

.page__article-info_type-medium-margin {
  margin-bottom: 40px;
}

.page__article-info_type-small-margin {
  margin-bottom: 10px;
}
</style>
