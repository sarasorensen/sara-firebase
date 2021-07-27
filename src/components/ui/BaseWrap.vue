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
  margin-top: 5%;
}

@media only screen and (max-width: 600px) {
  .wrap {
    width: 90%;
    flex-direction: column;
    justify-content: center;
  }
}
</style>
