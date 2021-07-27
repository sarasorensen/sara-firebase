<template>
  <div>
    <latest-articles></latest-articles>
    <about-us></about-us>
  </div>
</template>

<script>
import LatestArticles from "./home/LatestArticles.vue";
import AboutUs from "./home/AboutUs.vue";
export default {
  components: {
    LatestArticles,
    AboutUs,
  },
};
</script>
