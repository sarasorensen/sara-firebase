<template>
  <div class="wrapper">
    <slot></slot>
    <hr />
  </div>
</template>

<style scoped>
.wrapper {
  font-size: 0.7rem;
  width: 15%;
  margin: 0 auto;
}
@media only screen and (min-width: 950px) and (max-width: 1200px) {
  .wrapper {
    width: 35%;
  }
}
@media only screen and (min-width: 600px) and (max-width: 950px) {
  .wrapper {
    width: 40%;
  }
}
@media only screen and (min-width: 300px) and (max-width: 600px) {
  .wrapper {
    width: 100%;
    margin-bottom: 2.5em;
  }
}
</style>
