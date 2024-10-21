<script>
export default {
  props: {
    name: {
      type: String,
      default: null
    },
    src: {
      type: String,
      default: null //todo: default avatar image
    }
  }
}
</script>

<template>
  <div class="carousel-slide">
    <div class="featured-artist">
      <img :src=$props.src :alt=$props.name />
      <p>{{ $props.name }}</p>
    </div>
  </div>
</template>

<style scoped>
.featured-artist {
  display: inline-flex;
  flex-direction: column;
  text-align: center;
  height: auto;
  width: auto;
  background-color: black;
}

img {
  width: 10rem;
  height: 4.375rem;
  object-fit: cover;
  border-radius: var(--border-round-1);
}

p {
  font-size: var(--text-base);
  color: var(--gray-100);
  margin: var(--p-1) 0 0 0;
}
</style>