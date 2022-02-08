<template>
  <div class="ripple"></div>
</template>

<style scoped>
.ripple {
  display: inline-block;
  position: absolute;
  width: 80%;
  margin: auto;
  height: 80%;
  background: rgb(155, 152, 152);
  animation: ripple 1s infinite;
}

@keyframes ripple {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 0;
  }
}
</style>
