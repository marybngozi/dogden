<template>
  <div class="relative">
    <Header />

    <!-- clear the fixed effect on header -->
    <div class="h-20"></div>

    <main class="mt-3 w-11/12 mx-auto">
      <div class="flex justify-between items-center mb-4">
        <router-link
          aria-roledescription="back button"
          to="/"
          class="border py-3 px-4 rounded border-brown"
        >
          <img
            src="@/assets/img/arrow_back.svg"
            alt="Back icon"
            class="w-3 mr-2"
          />
          <span>Back</span>
        </router-link>

        <h3 class="uppercase fs-4">{{ dog.author }}</h3>
      </div>

      <section class="w-11/12 md:w-8/12 mx-auto mb-10">
        <figure class="w-full flex flex-col justify-center">
          <img :src="dog.image" alt="dog.author" />
          <figcaption class="sr-only">
            {{ dog.author }}
          </figcaption>
        </figure>
        <h4 class="py-4 text-brown"><b>Genre: </b>{{ dog.genre }}</h4>
        <p class="fs-6 text-justify">{{ dog.content }}</p>
      </section>
    </main>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import Header from "@/components/Header.vue";

export default {
  name: "Dog",
  props: {
    id: {
      type: String,
      default: 12,
    },
  },

  components: {
    Header,
  },

  created() {
    // if the dogs Array is empty, go back to home page
    if (!this.dogsLength) {
      this.$router.push("/");
    }
  },

  computed: {
    ...mapGetters(["dogDetails", "dogsLength"]),

    dog() {
      return this.dogDetails(this.id);
    },
  },
};
</script>
<style scoped>
a {
  text-decoration: none;
  @apply text-brown font-bold;
}
figure {
  height: auto;
}
figure img {
  width: 100%;
  height: auto;
  /* max-height: 100%; */
}
</style>
