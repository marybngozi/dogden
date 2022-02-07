<template>
  <figure v-lazyload class="image__wrapper">
    <ImageSpinner class="image__spinner" />
    <img class="image__item" :data-url="src" :alt="name" />
  </figure>
</template>
<script>
import ImageSpinner from "./ImageSpinner";
export default {
  name: "ImageItem",
  components: {
    ImageSpinner,
  },
  props: {
    src: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
};
</script>
<style scoped>
.image__wrapper.loaded .image__spinner {
  display: none;
  width: 100%;
}
.image__wrapper.loaded .image__item {
  visibility: visible;
  opacity: 1;
}
.image__wrapper {
  display: block;
}
.image__item {
  transition: all 0.4s ease-in-out;
  opacity: 0;
  visibility: hidden;
}
</style>
