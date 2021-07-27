<template>
  <div>
    <h1>Plants</h1>
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
