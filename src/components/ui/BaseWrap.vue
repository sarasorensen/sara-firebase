<template>
  <div class="wrap">
    <slot></slot>
  </div>
</template>

<style scoped>
.wrap {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 0 auto;
  padding-bottom: 2.5em;
  margin-bottom: 2.5em;
}

@media only screen and (min-width: 700px) and (max-width: 950px) {
  .wrap {
    width: 100%;
  }
}

@media only screen and (min-width: 300px) and (max-width: 700px) {
  .wrap {
    flex-direction: column;
    justify-content: center;
  }
}
</style>
