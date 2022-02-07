<template>
  <header
    class="bg-white w-full shadow h-20 flex justify-between items-center px-3 fixed top-0 left-0 right-0"
  >
    <div>
      <router-link to="/" title="Dogden">
        <img src="@/assets/img/logo.png" class="w-16" alt="Dogden Logo" />
        <span class="sr-only">Dogden</span>
      </router-link>
    </div>

    <form
      v-if="$route.path === '/'"
      @click.prevent="searchDogs"
      action=""
      class="from-cyan via-pink to-yellow bg-gradient-to-br"
    >
      <div
        class="flex items-center max-w-md mx-auto bg-white border rounded-lg"
      >
        <div class="w-full">
          <input
            autofocus
            type="search"
            class="w-full px-4 py-1 text-gray-800 rounded-full focus:outline-none"
            placeholder="search by breed"
            v-model="searchText"
          />
        </div>

        <div>
          <button
            title="search dogs"
            type="submit"
            class="flex items-center bg-blue-500 justify-center w-12 h-12 text-white rounded-r-lg"
            :class="
              searchText.length > 0
                ? 'bg-brown'
                : 'bg-brown-light cursor-not-allowed'
            "
            :disabled="searchText.length == 0"
          >
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
            <span class="sr-only">Search Dogs</span>
          </button>
        </div>
      </div>
    </form>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      searchText: "",
    };
  },
  methods: {
    searchDogs() {
      // TOoDO  call the search in the store
      return true;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
