<script>
export default {
  props: {
    alt: String,
    url: String,
  }
}
</script>

<template>
  <div class="blurred-banner-container">
      <img class="blurred-background"
           :alt=$props.alt
           :src=$props.url>
      <img class="image-overlay"
           :alt=$props.alt
           :src=$props.url>
  </div>
</template>

<style scoped>

.blurred-banner-container {
  position: relative;
  min-width: 600px;
  min-height: 600px;
  overflow: hidden;
}

.blurred-background {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: blur(15px);
}

.image-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 2;
  transform: translate(-50%, -50%);
  max-width: 70%;
  max-height: 70%;
  box-shadow: 0 0 40px 5px rgba(0, 0, 0, 0.5);
}
</style>