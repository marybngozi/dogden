<template>
  <div>
    <ul>
      <DogCard />
    </ul>
  </div>
</template>

<script>
import DogCard from "./DogCard.vue";

export default {
  name: "DogList",
  components: {
    DogCard,
  },
};
</script>

<style scoped></style>
