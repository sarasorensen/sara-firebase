<template>
  <footer>
    <nav>
      <h1>
        <router-link to="/">Footer</router-link>
      </h1>
      <ul>
        <li>
          <router-link to="/plants">All Plants</router-link>
        </li>
        <li v-if="isLoggedIn">
          <router-link to="/requests">Requests</router-link>
        </li>
        <li v-else>
          <router-link to="/auth">Login</router-link>
        </li>
        <li v-if="isLoggedIn">
          <base-button @click="logout">Logout</base-button>
        </li>
      </ul>
    </nav>
  </footer>
</template>

<script>
export default {
  computed: {
    isLoggedIn() {
      return this.$store.getters.isAuthenticated;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$router.replace("/");
    },
  },
};
</script>

<style scoped>
footer {
  width: 100%;
  height: 5rem;
  background-color: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
}
footer a {
  text-decoration: none;
  color: #ffffff;
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: 1px solid transparent;
}
a:active,
a:hover,
a.router-link-active {
  border: 1px solid #f391e3;
}
h1 {
  color: white;
  margin: 0;
}
h1 a {
  color: white;
  margin: 0;
}
h1 a:hover,
h1 a:active,
h1 a.router-link-active {
  border-color: transparent;
}
footer nav {
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
footer ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
li {
  margin: 0 0.5rem;
}
</style>
