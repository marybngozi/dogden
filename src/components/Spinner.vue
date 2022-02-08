<template>
  <div
    class="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-24 w-24"
  ></div>
</template>

<script>
export default {};
</script>

<style scoped>
.loader {
  border-top-color: #624040;
  -webkit-animation: spinner 1.5s linear infinite;
  animation: spinner 1.5s linear infinite;
}

@-webkit-keyframes spinner {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spinner {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
