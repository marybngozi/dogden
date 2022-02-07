<template>
  <div class="relative">
    <Header />

    <!-- clear the fixed effect on header -->
    <div class="h-20"></div>

    <main class="mt-3">
      <p>{{ dog }}</p>
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
