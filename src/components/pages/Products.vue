<template>
  <div>
    <h1>Products</h1>
    <plant-list></plant-list>
  </div>
</template>

<script>
import PlantList from "./requests/PlantList.vue";
export default {
  components: {
    PlantList,
  },
};
</script>
