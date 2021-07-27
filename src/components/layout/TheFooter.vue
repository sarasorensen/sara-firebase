<template>
  <footer>
    <div class="column">
      <h1>
        <router-link to="/" class="logo-footer">Logo</router-link>
      </h1>
    </div>
    <div class="column">
      <h3>About Us</h3>
      <p>We are <span class="logo">Logo</span>, and our passion is plants.</p>
      <p>
        We are a women based company, working to give you the absolute best.
      </p>
      <p>
        We strive to give you the most sustainable product possible, and this is
        ever eveolving.
      </p>
    </div>
    <div class="column">
      <h3>Contact Us</h3>
      <p>Company Name</p>
      <a class="column__a" href="sarasorensen97@hotmail.com"
        >companyEmail@gmail.com</a
      >
      <p>Adress 123 Norway</p>
    </div>

    <div class="column">
      <nav>
        <ul>
          <h3>Links</h3>
          <li>
            <router-link to="/plants">Plants</router-link>
          </li>
          <li>
            <router-link to="/contact">Contact</router-link>
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
    </div>
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
  background-color: #dfe4de;
  color: #4a4c49;
  position: absolute;
  bottom: 0;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  margin: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
.logo-footer {
  text-decoration: none;
  text-transform: uppercase;
  display: inline-block;
  border: 1px solid transparent;
}
.column {
  min-width: 20%;
  margin-right: 1.5em;
  margin-left: 1.5em;
  text-align: left;
  padding: 0;
}
.column__a {
  text-align: left;
  padding: 0;
  margin: 0;
}
a:active,
a:hover,
a.router-link-active {
  border-bottom: 1px solid #6c736b;
  text-decoration: none;
}
h1 {
  color: #4a4c49;
  margin: 0;
}
h1 a {
  color: #4a4c49;
  margin: 0;
}
h1 a:hover,
h1 a:active,
h1 a.router-link-active {
  border-bottom: transparent;
}
footer ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
footer li {
  padding: 0.5em;
  padding-left: 0;
}
@media only screen and (max-width: 950px) {
  footer {
    flex-direction: column;
    justify-content: center;
  }
  .column {
    width: 100%;
  }
}
</style>
