<template>
  <div class="app-wrapper">
    <the-header></the-header>
    <router-view v-slot="slotProps">
      <transition name="route" mode="out-in">
        <component :is="slotProps.Component"></component>
      </transition>
    </router-view>
    <the-footer></the-footer>
  </div>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
import TheFooter from "./components/layout/TheFooter.vue";
export default {
  name: "App",
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>

<style>
#app {
  margin: 0 0;
  padding-bottom: 12em;
  font-family: Verdana, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
html {
  height: 100%;
  box-sizing: border-box;
}
*,
*:before,
*:after {
  box-sizing: inherit;
}
body {
  background-color: #f2f4f1;
  position: relative;
  min-height: 100%;
}
.logo {
  color: #6c736b;
  font-weight: 900;
}
h1 {
  color: #6c736b;
}
h2 {
  text-transform: uppercase;
  color: #6c736b;
  font-weight: 100;
}
h3 {
  color: #6c736b;
}
.big {
  text-transform: uppercase;
}
.light {
  opacity: 0.7;
}
hr {
  width: 30%;
  color: #6c736b;
}
a {
  color: #6c736b;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
body {
  width: 100%;
  margin: 0;
}
.app-wrapper {
  width: 100%;
  margin: 0;
}
.route-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}
.route-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.route-enter-active {
  transition: all 0.3s ease-out;
}
.route-leave-active {
  transition: all 0.3s ease-in;
}
.route-enter-to,
.route-leave-from {
  opacity: 1;
  transform: translateY(0);
}
@media only screen and (max-width: 950px) {
  #app {
    padding-bottom: 55em;
  }
}
</style>
