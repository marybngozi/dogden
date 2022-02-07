<template>
  <div class="relative">
    <Header />

    <!-- clear the fixed effect on header -->
    <div class="h-20"></div>

    <DogList />
  </div>
</template>

<script>
import { mapActions } from "vuex";

// @ is an alias to /src
import Header from "@/components/Header.vue";
import DogList from "@/components/DogList.vue";

export default {
  name: "Home",
  components: {
    Header,
    DogList,
  },
  created() {
    this.getDogs();
  },
  methods: {
    ...mapActions(["getDogs"]),
  },
};
</script>
