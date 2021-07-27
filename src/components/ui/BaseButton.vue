<template>
  <button v-if="!link" :class="mode">
    <slot></slot>
  </button>
  <router-link v-else :to="to" :class="mode">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: null,
    },
    link: {
      type: Boolean,
      required: false,
      default: false,
    },
    to: {
      type: String,
      required: false,
      default: "/",
    },
  },
};
</script>

<style scoped>
button,
a {
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  font: inherit;
  background-color: transparent;
  border: 1px solid #6c736b;
  color: #6c736b;
  cursor: pointer;
  margin-right: 0.5rem;
  display: inline-block;
  transition: all 0.5s ease;
}

a:hover,
a:active,
button:hover,
button:active {
  background-color: #6c736b;
  color: #fbfbfb;
  -webkit-transition: 0.5s linear;
  -ms-transition: 0.5s linear;
  transition: 0.5s linear;
}

.flat {
  background-color: #6c736b;
  color: #fbfbfb;
}

.outline {
  background-color: #6c736b;
  color: #fbfbfb;
}

.flat:hover,
.flat:active,
.outline:hover,
.outline:active {
  background-color: #6c736b;
  color: #fbfbfb;
}
</style>
