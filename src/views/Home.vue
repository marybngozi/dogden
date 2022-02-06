<template>
  <div class="home">
    <Header @searchDogs="searchDogs" />

    <DogList />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import DogList from "@/components/DogList.vue";

export default {
  name: "Home",
  components: {
    Header,
    DogList,
  },
  methods: {
    searchDogs(val) {
      console.log(val);
    },
  },
};
</script>
