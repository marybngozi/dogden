<template>
  <router-link :to="`/dog/${id}`">
    <img :src="dog.image" :alt="dog.author" class="h-auto w-100 p-2" />
    <span class="sr-only">{{ dog.author }}</span>
  </router-link>
</template>

<script>
export default {
  name: "DogCard",
  props: {
    id: {
      type: Number,
      required: true,
    },
    dog: {
      type: Object,
      default: {
        author: "Leonie Zieme",
        content:
          "Latin Grammar, 'A mouse--of a mouse--to a mouse--a mouse--O mouse!') The Mouse gave a look askance-- Said he thanked the whiting kindly, but he would not join the dance? Will you, won't you, will.",
        genre: "Et",
        image: "https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg",
        title: "Oh, my dear paws!.",
      },
    },
  },
};
</script>

<style scoped></style>
