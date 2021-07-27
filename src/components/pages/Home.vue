<template>
  <div>
    <latest-articles></latest-articles>
    <about-us></about-us>
    <subscribe></subscribe>
  </div>
</template>

<script>
import LatestArticles from "./home/LatestArticles.vue";
import AboutUs from "./home/AboutUs.vue";
import Subscribe from "./home/Subscribe.vue";
export default {
  components: {
    LatestArticles,
    AboutUs,
    Subscribe,
  },
};
</script>
