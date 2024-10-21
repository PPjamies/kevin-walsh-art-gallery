<script>

import CarouselSlide from "@/components/home/CarouselSlide.vue";

export default {
  components: {CarouselSlide},
  props: {
    slides: {
      type: Array,
      default: null
    }
  },
  data() {
    return {
      index: 0
    }
  },
  methods: {
    prevSlide() {
      this.index = (this.index + 1) % this.slides.length
    },
    nextSlide() {
      this.index = (this.index - 1 + this.slides.length) % this.slides.length
    },
    selectSlide(index) {
      this.index = index
    }
  }
}
</script>

<template>
  <div class="carousel">
    <div class="carousel-track">
      <div class="carousel-slide" v-for="(slide, index) in slides" :key="index">
        <component :is="slide.component" v-bind="slide.props"/>
      </div>

      <div class="carousel-nav">
        <button @click="prevSlide">&larr;</button>
        <button @click="nextSlide">&rarr;</button>
      </div>
    </div>
  </div>
</template>

<style scoped>

.carousel-track {
  display: flex;
  scroll-snap-type: x mandatory;
}

.carousel-nav {
  position: absolute;
  display: flex;
  justify-content: space-between;
}

.carousel-slide {
  padding: 0 var(--p-1) 0 var(--p-1);
}

.carousel-nav button {
  padding: var(--p-2);
  font-size: var(--text-base);
  color: var(--gray-100);
  border: none;
  background: none;
  cursor: var(--cursor-pointer);
}
</style>