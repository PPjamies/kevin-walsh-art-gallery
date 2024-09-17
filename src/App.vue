<script>
import Carousel from "@/components/reusable/Carousel.vue";

import BannerBlurredBackground from "@/components/reusable/BlurredBanner.vue";

export default {
  components: {
    BannerBlurredBackground,
    Carousel
  }
}
</script>

<template>
  <div id="app">
<!--    <BannerBlurredBackground url="src/assets/dragonfruit.png" alt="dragonfruit"/>-->
<!--    <BannerBlurredBackground url="src/assets/kiwi.png" alt="kiwi"/>-->
    <Carousel/>
  </div>
</template>
