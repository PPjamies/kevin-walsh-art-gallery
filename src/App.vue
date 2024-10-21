<script>

import Home from "@/components/home/Home.vue";
import NavigationBar from "@/components/reusable/NavigationBar.vue";
import Carousel from "@/components/reusable/Carousel.vue";
import CarouselSlide from "@/components/home/CarouselSlide.vue";

export default {
  components: {
    Carousel,
    CarouselSlide,
    NavigationBar,
    Home
  },
  methods: {
    getSlides() {
      return [
        {
          component: 'CarouselSlide',
          props: {name: 'Todo Jerome', src: 'src\\assets\\dragonfruit.png'}
        },
        {
          component: 'CarouselSlide',
          props: {name: 'Farmer Walsh', src: 'src\\assets\\kiwi.png'}
        },
        {
          component: 'CarouselSlide',
          props: {name: 'Mr. Fuji', src: 'src\\assets\\mango.png'}
        }
      ]
    }
  }
}
</script>

<template>

  <div id="app">
    <Carousel :slides="this.getSlides()"/>
    <!--    <CarouselSlide name='Kevin Walsh' src='src\\assets\\kiwi.png' />-->
  </div>
</template>
