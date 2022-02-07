<template>
  <div>
    <span class="sr-only">List of Dogs</span>
    <DogCard v-for="(dog, i) in dogs" :key="i" :id="i" :dog="dog" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import DogCard from "./DogCard.vue";

export default {
  name: "DogList",
  components: {
    DogCard,
  },
  computed: {
    ...mapState(["dogs"]),
  },
};
</script>

<style scoped>
div {
  line-height: 0;
  -webkit-column-gap: 0px;
  -moz-column-gap: 0px;
  column-gap: 0px;
  -webkit-column-count: 2;
  -moz-column-count: 2;
  column-count: 2;
}
/* Small devices (landscape phones, 426px and up) */
@media (min-width: 426px) {
  div {
    -webkit-column-count: 3;
    -moz-column-count: 3;
    column-count: 3;
  }
}
/* Medium devices (tablets, 611px and up) */
@media (min-width: 611px) {
  div {
    -webkit-column-count: 4;
    -moz-column-count: 4;
    column-count: 4;
  }
}
/* Large devices (desktops, 960px and up) */
@media (min-width: 960px) {
  div {
    -webkit-column-count: 5;
    -moz-column-count: 5;
    column-count: 5;
  }
}
/* Large devices (large desktops, 1300px and up) */
@media (min-width: 1300px) {
  div {
    -webkit-column-count: 6;
    -moz-column-count: 6;
    column-count: 6;
  }
}
/* Large devices (large desktops, 1400px and up) */
@media (min-width: 1400px) {
  div {
    -webkit-column-count: 7;
    -moz-column-count: 7;
    column-count: 7;
  }
}
</style>
