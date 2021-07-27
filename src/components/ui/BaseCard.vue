<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<style scoped>
.card {
  width: 20%;
  background-color: #fbfbfb;
  margin: 2em;
  padding: 1em;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.07),
    0 4px 8px rgba(0, 0, 0, 0.07), 0 8px 16px rgba(0, 0, 0, 0.07),
    0 16px 32px rgba(0, 0, 0, 0.07), 0 32px 64px rgba(0, 0, 0, 0.07);
}

@media only screen and (min-width: 951px) and (max-width: 1200px) {
  .card {
    width: 25%;
  }
}

@media only screen and (min-width: 700px) and (max-width: 950px) {
  .card {
    width: 25%;
  }
}
@media only screen and (min-width: 300px) and (max-width: 700px) {
  .card {
    width: 55%;
    margin: 0 auto;
    margin-bottom: 1em;
  }
}
</style>
