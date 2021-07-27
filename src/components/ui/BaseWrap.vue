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
  padding-top: 2.5em;
  padding-bottom: 2.5em;
  margin-top: 2.5em;
  margin-bottom: 2.5em;
}

@media only screen and (max-width: 950px) {
  .wrap {
    width: 90%;
    flex-direction: column;
    justify-content: center;
  }
}
</style>
