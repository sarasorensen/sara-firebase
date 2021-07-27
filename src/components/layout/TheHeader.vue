<template>
  <header>
    <nav>
      <h1><router-link to="/" class="logo">Logo</router-link></h1>

      <ul>
        <li>
          <router-link to="/products">Products</router-link>
        </li>
        <li>
          <router-link to="/contact">Contact</router-link>
        </li>
        <li v-if="isLoggedIn">
          <router-link to="/dashboard">Dashboard</router-link>
        </li>
        <li v-else>
          <router-link to="/auth">Login</router-link>
        </li>
        <li v-if="isLoggedIn">
          <base-button @click="logout">Logout</base-button>
        </li>
      </ul>
    </nav>
  </header>
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
header {
  width: 100%;
  min-height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}
header a {
  text-decoration: none;
  text-transform: uppercase;
  color: #6c736b;
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: 1px solid transparent;
}
a:active,
a:hover,
a.router-link-active {
  border-bottom: 1px solid #6c736b;
}
.logo {
  color: #6c736b;
  font-weight: 900;
}
.logo:active,
.logo:hover,
.logo.router-link-active {
  color: #6c736b;
  margin: 0;
  border-bottom: transparent;
}

header nav {
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
header ul {
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
