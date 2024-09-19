<script>

export default {
  props: {
    alt: String,
    url: String,
    title: String,
    description: String
  }
}
</script>

<template>
  <div class="about-me-container">
    <img class="sticky-image profile-image-normal"
         :alt="alt"
         :src="url"/>
    <div class="info-section">
      <h1><strong>{{ this.title }}</strong></h1>
      <p>{{ this.description }}</p>
    </div>
  </div>
</template>

<style scoped>
.about-me-container {
  display: flex;
}

.sticky-image {
  position: sticky;
  top: 20px;
}

.info-section {
  padding: var(--p-2);
  text-align: var(--text-left);
}

.info-section p {
  font-size: var(--text-base);
}
</style>