<script>

import BlurredBanner from "@/components/reusable/BlurredBanner.vue";
import Carousel from "primevue/carousel";

export default {
  components: {BlurredBanner, Carousel},
  data() {
    return {
      items: [
        {
          url: "src\\assets\\dragonfruit.png",
          alt: "dragonfruit"
        },
        {
          url: "src\\assets\\kiwi.png",
          alt: "kiwi"
        },
        {
          url: "src\\assets\\mango.png",
          alt: "mango"
        },
        {
          url: "src\\assets\\pineapple.png",
          alt: "pineapple"
        }
      ]
    };
  }
};
</script>

<template>
  <Carousel
      :value="this.items"
      :numScroll="1"
      :num-visible="1"
      circular
      :autoplayInterval="7000"
      :show-navigators="false"
      class="custom-carousel"
  >
    <template #item="slotProps">
      <BlurredBanner :url="slotProps.data.url" :alt="slotProps.data.alt"/>
    </template>
  </Carousel>
</template>

<style scoped>
.custom-carousel {
  transition: opacity 1s ease-in-out;
}
</style>