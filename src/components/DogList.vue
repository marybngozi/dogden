<template>
  <div>
    <section class="dog-list">
      <span class="sr-only">List of Dogs</span>
      <DogCard v-for="(dog, i) in dogs" :key="i" :id="i" :dog="dog" />
    </section>

    <section
      v-if="loading"
      class="flex flex-col h-none justify-center items-center mt-7"
    >
      <Spinner />
      <h3 class="text-brown-light">Fetching dogs...</h3>
    </section>

    <section
      v-if="!dogs.length && !loading"
      class="flex flex-col h-none justify-center items-center mt-7"
    >
      <img src="@/assets/img/logo.png" class="w-16" alt="Dogden Logo" />
      <h3 class="text-brown-light">No dog found !</h3>
    </section>
  </div>
</template>

<script>
import { mapState } from "vuex";
import DogCard from "./DogCard.vue";
import Spinner from "./Spinner.vue";

export default {
  name: "DogList",
  components: {
    DogCard,
    Spinner,
  },
  computed: {
    ...mapState(["dogs", "loading"]),
  },
};
</script>

<style scoped>
.h-none {
  height: 80vh;
}
.dog-list {
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
  .dog-list {
    -webkit-column-count: 3;
    -moz-column-count: 3;
    column-count: 3;
  }
}
/* Medium devices (tablets, 611px and up) */
@media (min-width: 611px) {
  .dog-list {
    -webkit-column-count: 4;
    -moz-column-count: 4;
    column-count: 4;
  }
}
/* Large devices (desktops, 960px and up) */
@media (min-width: 960px) {
  .dog-list {
    -webkit-column-count: 5;
    -moz-column-count: 5;
    column-count: 5;
  }
}
/* Large devices (large desktops, 1300px and up) */
@media (min-width: 1300px) {
  .dog-list {
    -webkit-column-count: 6;
    -moz-column-count: 6;
    column-count: 6;
  }
}
/* Large devices (large desktops, 1400px and up) */
@media (min-width: 1400px) {
  .dog-list {
    -webkit-column-count: 7;
    -moz-column-count: 7;
    column-count: 7;
  }
}
</style>
